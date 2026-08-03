import { Header } from "../components/Header"
import { Hero } from "../components/Hero"
import { Philosophy } from "../components/Philosophy"
import { BeforeAfter } from "../components/BeforeAfter"
import { RealizedProjects } from "../components/RealizedProjects"
import { Expertise } from "../components/Expertise"
import { Pricing } from "../components/Pricing"
import { FAQ } from "../components/FAQ"
import { CallToAction } from "../components/CallToAction"
import { Footer } from "../components/Footer"

export default function Index() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Philosophy />
      <BeforeAfter />
      <RealizedProjects />
      <Expertise />
      <Pricing />
      <FAQ />
      <CallToAction />
      <Footer />
    </main>
  )
}