import json
import os
import re
import smtplib
from email.message import EmailMessage

import psycopg2


def send_email(name: str, phone: str, email: str, message: str) -> None:
    host = os.environ.get('SMTP_HOST')
    user = os.environ.get('SMTP_USER')
    password = os.environ.get('SMTP_PASSWORD')
    to_addr = os.environ.get('LEADS_EMAIL')
    if not (host and user and password and to_addr):
        return

    port = int(os.environ.get('SMTP_PORT') or 465)

    msg = EmailMessage()
    msg['Subject'] = f'Новая заявка с сайта — {name}'
    msg['From'] = user
    msg['To'] = to_addr
    if email:
        msg['Reply-To'] = email
    msg.set_content(
        f'Имя: {name}\n'
        f'Телефон: {phone}\n'
        f'Email: {email or "—"}\n\n'
        f'Сообщение:\n{message or "—"}'
    )

    if port == 465:
        with smtplib.SMTP_SSL(host, port, timeout=10) as server:
            server.login(user, password)
            server.send_message(msg)
    else:
        with smtplib.SMTP(host, port, timeout=10) as server:
            server.starttls()
            server.login(user, password)
            server.send_message(msg)


def handler(event: dict, context) -> dict:
    '''
    Business: Приём заявок с сайта (форма «Оставить заявку») и сохранение их в базе.
    Args: event с httpMethod, body (name, phone, email, message); context с request_id.
    Returns: HTTP-ответ с результатом сохранения заявки.
    '''
    method = event.get('httpMethod', 'GET')

    cors_headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Max-Age': '86400',
    }

    if method == 'OPTIONS':
        return {'statusCode': 200, 'headers': cors_headers, 'body': ''}

    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': {**cors_headers, 'Content-Type': 'application/json'},
            'body': json.dumps({'error': 'Method not allowed'}),
        }

    try:
        body = json.loads(event.get('body') or '{}')
    except json.JSONDecodeError:
        return {
            'statusCode': 400,
            'headers': {**cors_headers, 'Content-Type': 'application/json'},
            'body': json.dumps({'error': 'Invalid JSON'}),
        }

    name = (body.get('name') or '').strip()
    phone = (body.get('phone') or '').strip()
    email = (body.get('email') or '').strip()
    message = (body.get('message') or '').strip()

    if not name or not phone:
        return {
            'statusCode': 400,
            'headers': {**cors_headers, 'Content-Type': 'application/json'},
            'body': json.dumps({'error': 'Укажите имя и телефон'}),
        }

    if email and not re.match(r'^[^@\s]+@[^@\s]+\.[^@\s]+$', email):
        return {
            'statusCode': 400,
            'headers': {**cors_headers, 'Content-Type': 'application/json'},
            'body': json.dumps({'error': 'Некорректный email'}),
        }

    conn = psycopg2.connect(os.environ['DATABASE_URL'])
    try:
        cur = conn.cursor()
        name_e = name.replace("'", "''")[:200]
        phone_e = phone.replace("'", "''")[:50]
        email_e = email.replace("'", "''")[:200]
        message_e = message.replace("'", "''")
        cur.execute(
            "INSERT INTO leads (name, phone, email, message) "
            f"VALUES ('{name_e}', '{phone_e}', '{email_e}', '{message_e}') RETURNING id"
        )
        lead_id = cur.fetchone()[0]
        conn.commit()
        cur.close()
    finally:
        conn.close()

    try:
        send_email(name, phone, email, message)
    except Exception as e:
        print(f'Email send failed: {e}')

    return {
        'statusCode': 200,
        'headers': {**cors_headers, 'Content-Type': 'application/json'},
        'body': json.dumps({'success': True, 'id': lead_id}),
    }