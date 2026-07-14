export function Footer() {
  return (
    <footer className="py-16 md:py-24 border-t border-border">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="/" className="inline-block mb-6">
              <span className="font-medium tracking-widest text-sm uppercase">ДОМ ПРОЕКТОВ</span>
            </a>
            <p className="text-muted-foreground leading-relaxed max-w-sm">
              Архитектурное бюро под ключ. Частные дома, дизайн интерьеров и ландшафтный дизайн — в едином проекте.
            </p>
          </div>

          {/* Directions */}
          <div>
            <h4 className="text-sm font-medium mb-4">Направления</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="/architecture" className="hover:text-foreground transition-colors">
                  Архитектура домов
                </a>
              </li>
              <li>
                <a href="/interior" className="hover:text-foreground transition-colors">
                  Дизайн интерьеров
                </a>
              </li>
              <li>
                <a href="/landscape" className="hover:text-foreground transition-colors">
                  Ландшафтный дизайн
                </a>
              </li>
              <li>
                <a href="/portfolio" className="hover:text-foreground transition-colors">
                  Реализованные проекты
                </a>
              </li>
              <li>
                <a href="/#pricing" className="hover:text-foreground transition-colors">
                  Цены
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-medium mb-4">Связь</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="mailto:d@p-shalamova.ru" className="hover:text-foreground transition-colors">
                  d@p-shalamova.ru
                </a>
              </li>
              <li>
                <a href="tel:+79220299901" className="hover:text-foreground transition-colors">
                  +7 922 029-99-01
                </a>
              </li>
              <li>
                <a href="https://t.me/+79220299901" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                  Telegram
                </a>
              </li>
              <li>
                <a href="https://max.ru/u/79220299901" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                  MAX
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/dom_proektov?igsh=MXI2OWR3bjh0c25lOA==" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row md:items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© 2025 ДОМ ПРОЕКТОВ. Все права защищены.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Условия использования
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}