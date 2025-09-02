import { Hero } from '@/components/Hero'
import { FeaturedCars } from '@/components/FeaturedCars'
import { Services } from '@/components/Services'
import { WhyChooseUs } from '@/components/WhyChooseUs'
import { Testimonials } from '@/components/Testimonials'
import { FinalCTA } from '@/components/FinalCTA'
import { FAQ } from '@/components/FAQ'
import { Footer } from '@/components/Footer'
import { Navbar } from '@/components/Navbar'
import { PageTransition } from '@/components/PageTransition'

export default function Home() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-br from-secondary-50 to-secondary-100">
        <Navbar />
        <main className="pt-24">
          <Hero />
          <FeaturedCars />
          <Services />
          <WhyChooseUs />
          <Testimonials />
          <FinalCTA />
          <FAQ />
        </main>
        <Footer />
      </div>
    </PageTransition>
  )
}
