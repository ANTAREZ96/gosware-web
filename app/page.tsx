import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { PcsSection } from "@/components/pcs-section"
import { Catalog } from "@/components/catalog"
import { Support } from "@/components/support"
import { Testimonials } from "@/components/testimonials"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Header />
      <Hero />
      <Services />
      <PcsSection />
      <Catalog />
      <Support />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
