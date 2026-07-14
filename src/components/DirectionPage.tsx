import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Header } from "./Header"
import { Footer } from "./Footer"
import { HighlightedText } from "./HighlightedText"
import { Lightbox } from "./Lightbox"
import Icon from "./ui/icon"

export interface DirectionData {
  eyebrow: string
  title: string
  highlight: string
  titleTail?: string
  intro: string
  heroImage: string
  benefits: { icon: string; title: string; description: string }[]
  services: { name: string; price: string }[]
  process: { step: string; title: string; description: string }[]
  works: { title: string; location: string; year: string; image: string; gallery?: string[] }[]
  portfolioType?: "architecture" | "interior" | "landscape"
}

export function DirectionPage({ data }: { data: DirectionData }) {
  const [lightboxImages, setLightboxImages] = useState<string[]>([])
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const openWork = (w: DirectionData["works"][number]) => {
    const imgs = w.gallery && w.gallery.length > 0 ? w.gallery : [w.image]
    setLightboxImages(imgs)
    setLightboxIndex(0)
  }

  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="relative pt-40 pb-24 md:pt-52 md:pb-32 overflow-hidden">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <Link
                to="/#services"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
              >
                <Icon name="ArrowLeft" size={16} />
                Все направления
              </Link>
              <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">{data.eyebrow}</p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.05] tracking-tight mb-8 text-balance">
                {data.title} <HighlightedText>{data.highlight}</HighlightedText>
                {data.titleTail ? ` ${data.titleTail}` : ""}
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-md mb-10">{data.intro}</p>
              <a
                href="#contact"
                className="inline-flex items-center gap-3 bg-foreground text-primary-foreground px-8 py-4 text-sm tracking-wide hover:bg-foreground/90 transition-colors duration-300 group"
              >
                Обсудить проект
                <Icon name="ArrowRight" size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden">
              <img src={data.heroImage} alt={data.title} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-secondary/50">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-3 gap-x-12 gap-y-12">
            {data.benefits.map((b) => (
              <div key={b.title} className="border-l border-border pl-8">
                <Icon name={b.icon} size={36} className="mb-4 text-foreground" fallback="Check" />
                <h3 className="text-xl font-medium mb-3">{b.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-2xl mb-16">
            <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Как мы работаем</p>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight">Этапы работы</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {data.process.map((p) => (
              <div key={p.step}>
                <span className="text-muted-foreground/40 text-sm font-medium">{p.step}</span>
                <h3 className="text-lg font-medium mt-3 mb-2">{p.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services / price */}
      <section className="py-24 md:py-32 bg-secondary/50">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-2xl mb-12">
            <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Стоимость</p>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight">Что входит и сколько стоит</h2>
          </div>
          <div className="border border-border bg-background max-w-3xl">
            {data.services.map((s) => (
              <div
                key={s.name}
                className="flex items-center justify-between gap-3 sm:gap-6 px-4 sm:px-6 md:px-8 py-5 border-b border-border last:border-0"
              >
                <span className="text-sm md:text-base text-foreground leading-snug">{s.name}</span>
                <span className="text-sm md:text-base font-medium whitespace-nowrap">{s.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Works */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div className="max-w-2xl">
              <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Портфолио</p>
              <h2 className="text-4xl md:text-5xl font-medium tracking-tight">Наши работы</h2>
            </div>
            <Link
              to={data.portfolioType ? `/portfolio?type=${data.portfolioType}` : "/portfolio"}
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
            >
              Все реализованные проекты
              <Icon
                name="ArrowUpRight"
                size={16}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {data.works.map((w) => (
              <article key={w.title} className="group">
                <div
                  className="relative overflow-hidden aspect-[4/3] mb-6 cursor-zoom-in"
                  onClick={() => openWork(w)}
                >
                  <img
                    src={w.image}
                    alt={w.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-foreground/0 group-hover:bg-foreground/20 transition-colors">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-background/90 backdrop-blur rounded-full p-3">
                      <Icon name="Expand" size={20} />
                    </span>
                  </div>
                  {w.gallery && w.gallery.length > 1 && (
                    <span className="absolute bottom-3 right-3 flex items-center gap-1.5 bg-background/90 backdrop-blur px-2.5 py-1 text-xs">
                      <Icon name="Images" size={13} />
                      {w.gallery.length}
                    </span>
                  )}
                </div>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-medium mb-2">{w.title}</h3>
                    <p className="text-muted-foreground text-sm">{w.location}</p>
                  </div>
                  <span className="text-muted-foreground/60 text-sm">{w.year}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-24 md:py-32 bg-foreground text-primary-foreground">
        <div className="container mx-auto px-6 md:px-12 text-center max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-medium leading-[1.1] tracking-tight mb-8 text-balance">
            Готовы начать
            <br />
            свой проект?
          </h2>
          <p className="text-primary-foreground/70 text-lg leading-relaxed mb-12 max-w-xl mx-auto">
            Оставьте заявку — проведём бесплатную консультацию и рассчитаем стоимость под вашу задачу.
          </p>
          <a
            href="mailto:d@p-shalamova.ru"
            className="inline-flex items-center justify-center gap-3 bg-primary-foreground text-foreground px-8 py-4 text-sm tracking-wide hover:bg-primary-foreground/90 transition-colors duration-300 group"
          >
            Получить консультацию
            <Icon name="ArrowRight" size={16} className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </section>

      <Footer />

      <Lightbox
        images={lightboxImages}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onIndexChange={setLightboxIndex}
      />
    </main>
  )
}