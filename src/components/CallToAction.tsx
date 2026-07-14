import { useState } from "react"
import { ArrowRight } from "lucide-react"
import { HighlightedText } from "./HighlightedText"
import { toast } from "sonner"
import func2url from "../../backend/func2url.json"

export function CallToAction() {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim() || !phone.trim()) {
      toast.error("Пожалуйста, укажите имя и телефон")
      return
    }
    setLoading(true)
    try {
      const res = await fetch(func2url.leads, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, email, message }),
      })
      const data = await res.json()
      if (res.ok && data.success) {
        toast.success("Заявка отправлена! Мы свяжемся с вами в ближайшее время.")
        setName("")
        setPhone("")
        setEmail("")
        setMessage("")
      } else {
        toast.error(data.error || "Не удалось отправить заявку")
      }
    } catch {
      toast.error("Ошибка соединения. Попробуйте ещё раз.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-32 md:py-29 bg-foreground text-primary-foreground">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-primary-foreground/60 text-sm tracking-[0.3em] uppercase mb-8">Начать проект</p>

          <h2 className="text-3xl md:text-4xl lg:text-6xl font-medium leading-[1.1] tracking-tight mb-8 text-balance">
            Создадим ваш дом
            <br />
            мечты <HighlightedText>под ключ</HighlightedText>
          </h2>

          <p className="text-primary-foreground/70 text-lg md:text-xl leading-relaxed mb-12 max-w-2xl mx-auto">
            Расскажите нам о вашей идее — архитектура, интерьер или ландшафт. Мы проведём бесплатную консультацию и предложим решение.
          </p>

          <form onSubmit={handleSubmit} className="max-w-xl mx-auto text-left space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ваше имя *"
                className="w-full bg-transparent border border-primary-foreground/25 px-4 py-3.5 text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:border-primary-foreground/60 focus:outline-none transition-colors"
              />
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Телефон *"
                className="w-full bg-transparent border border-primary-foreground/25 px-4 py-3.5 text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:border-primary-foreground/60 focus:outline-none transition-colors"
              />
            </div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full bg-transparent border border-primary-foreground/25 px-4 py-3.5 text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:border-primary-foreground/60 focus:outline-none transition-colors"
            />
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Расскажите о вашем проекте"
              rows={4}
              className="w-full bg-transparent border border-primary-foreground/25 px-4 py-3.5 text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:border-primary-foreground/60 focus:outline-none transition-colors resize-none"
            />
            <button
              type="submit"
              disabled={loading}
              className="inline-flex w-full items-center justify-center gap-3 bg-primary-foreground text-foreground px-8 py-4 text-sm tracking-wide hover:bg-primary-foreground/90 transition-colors duration-300 group disabled:opacity-60"
            >
              {loading ? "Отправляем..." : "Оставить заявку"}
              {!loading && <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />}
            </button>
          </form>

          <p className="text-primary-foreground/50 text-sm mt-10">
            Или напишите нам:{" "}
            <a href="mailto:d@p-shalamova.ru" className="text-primary-foreground hover:text-orange-200 transition-colors">
              d@p-shalamova.ru
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
