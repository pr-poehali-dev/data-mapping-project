import { useEffect } from "react"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { Pricing } from "../components/Pricing"
import { CallToAction } from "../components/CallToAction"

export default function PricingPage() {
  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])

  return (
    <main className="min-h-screen">
      <Header />

      <div className="pt-24 md:pt-28">
        <Pricing />
      </div>
      <CallToAction />
      <Footer />
    </main>
  )
}