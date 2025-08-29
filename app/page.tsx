import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ShippingForm } from "@/components/shipping-form"
import { ServicesSection } from "@/components/services-section"
import { TrackingSection } from "@/components/tracking-section"
import { AboutSection } from "@/components/about-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <ShippingForm />
        <TrackingSection />
        <ServicesSection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  )
}
