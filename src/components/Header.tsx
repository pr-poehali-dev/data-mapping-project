import { useState, MouseEvent } from "react"
import { cn } from "../lib/utils"

const NAV_ITEMS = [
  { label: "Главная", href: "/#hero" },
  { label: "Философия", href: "/#about" },
  { label: "Портфолио", href: "/portfolio" },
  { label: "Услуги", href: "/#services" },
  { label: "Цены", href: "/#pricing" },
  { label: "Вопросы", href: "/#faq" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const closeMobileMenu = () => setMobileMenuOpen(false)

  const scrollToTop = (e: MouseEvent<HTMLAnchorElement>) => {
    if (window.location.pathname === "/") {
      e.preventDefault()
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  return (
    <>
      <a
        href="/"
        onClick={scrollToTop}
        aria-label="ДОМ ПРОЕКТОВ — на главную"
        className="fixed top-5 left-5 md:top-8 md:left-10 z-50 group"
      >
        <span className="font-strogo block leading-[0.9] text-white drop-shadow-md">
          <span className="block text-xl md:text-2xl font-semibold tracking-[0.18em] uppercase">
            ДОМ
          </span>
          <span className="block text-xl md:text-2xl font-light tracking-[0.18em] uppercase text-white/85">
            ПРОЕКТОВ
          </span>
        </span>
        <span className="mt-1.5 block h-px w-8 bg-orange-300 transition-all duration-300 group-hover:w-16" />
      </a>

      <button
        className="md:hidden fixed top-5 right-5 z-[60] text-white drop-shadow-md"
        aria-label={mobileMenuOpen ? "Закрыть меню" : "Открыть меню"}
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? (
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <line x1="4" y1="8" x2="20" y2="8" />
            <line x1="4" y1="16" x2="20" y2="16" />
          </svg>
        )}
      </button>

      <nav className="hidden md:flex fixed bottom-7 left-1/2 -translate-x-1/2 z-50 items-center gap-1 rounded-full bg-black/85 backdrop-blur-md px-3 py-2 shadow-2xl ring-1 ring-white/10">
        {NAV_ITEMS.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="px-4 py-2 text-[13px] tracking-wide text-white/80 rounded-full hover:text-white hover:bg-white/10 transition-all duration-300"
          >
            {item.label}
          </a>
        ))}
        <a
          href="/#contact"
          className="ml-2 px-5 py-2 text-[13px] tracking-wide rounded-full bg-white text-black hover:bg-orange-200 transition-colors duration-300"
        >
          Связаться
        </a>
      </nav>

      <div
        className={cn(
          "md:hidden fixed inset-0 z-50 bg-black/95 backdrop-blur-md transition-all duration-300",
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        )}
      >
        <div className="flex flex-col justify-center h-full px-8">
          <ul className="flex flex-col gap-5 mb-10">
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-white text-3xl font-light tracking-wide hover:text-orange-300 transition-colors duration-300 block"
                  onClick={closeMobileMenu}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="/#contact"
            className="self-start px-7 py-3 text-sm rounded-full bg-white text-black hover:bg-orange-200 transition-colors duration-300"
            onClick={closeMobileMenu}
          >
            Связаться
          </a>
        </div>
      </div>
    </>
  )
}
