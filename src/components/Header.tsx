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
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-5 md:px-10 h-16 md:h-20 flex items-center justify-between">
          <nav className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-4 py-2 text-[13px] tracking-wide text-white/75 rounded-full hover:text-white hover:bg-white/10 transition-all duration-300"
              >
                {item.label}
              </a>
            ))}
            <a
              href="/#contact"
              className="ml-3 px-5 py-2 text-[13px] tracking-wide rounded-full bg-white text-black hover:bg-orange-200 transition-colors duration-300"
            >
              Связаться
            </a>
          </nav>

          <button
            className="md:hidden z-[60] text-white"
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

          <a
            href="/"
            onClick={scrollToTop}
            aria-label="ДОМ ПРОЕКТОВ — на главную"
            className="group shrink-0"
          >
            <img
              src="/logo.png"
              alt="ДОМ ПРОЕКТОВ"
              className="h-9 md:h-12 w-auto transition-opacity duration-300 group-hover:opacity-80"
              draggable={false}
            />
          </a>
        </div>
      </header>

      <div
        className={cn(
          "md:hidden fixed inset-0 z-40 bg-black/95 backdrop-blur-md transition-all duration-300",
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
