import { Hero } from '@/components/Hero'
import { FeaturedCars } from '@/components/FeaturedCars'
import { Services } from '@/components/Services'
import { WhyChooseUs } from '@/components/WhyChooseUs'
import { Testimonials } from '@/components/Testimonials'
import { Footer } from '@/components/Footer'
import { Navbar } from '@/components/Navbar'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary-50 to-secondary-100">
      <Navbar />
      <main className="pt-36">
        <Hero />
        <FeaturedCars />
        <Services />
        <WhyChooseUs />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}
