import Header from "@/components/sections/Header"
import HeroSection from "@/components/sections/HeroSection"
import ServicesSection from "@/components/sections/ServicesSection"
import GallerySection from "@/components/sections/GallerySection"
import TestimonialsSection from "@/components/sections/TestimonialsSection"
import GuaranteeBanner from "@/components/sections/GuaranteeBanner"
import FAQSection from "@/components/sections/FAQSection"
import Footer from "@/components/sections/Footer"
import MobileFAB from "@/components/sections/MobileFAB"

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <ServicesSection />
      <GallerySection />
      <TestimonialsSection />
      <GuaranteeBanner />
      <FAQSection />
      <Footer />
      <MobileFAB />
    </main>
  )
}
