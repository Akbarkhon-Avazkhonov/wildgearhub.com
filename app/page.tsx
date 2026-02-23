import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { FeaturesBanner } from "@/components/features-banner"
import { Products } from "@/components/products"
import { Categories } from "@/components/categories"
import { Testimonials } from "@/components/testimonials"
import { Newsletter } from "@/components/newsletter"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <FeaturesBanner />
      <Products />
      <Categories />
      <Testimonials />
      <Newsletter />
      <Footer />
    </main>
  )
}
