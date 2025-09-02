import { Services } from '@/components/Services'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-secondary-50 pt-24">
      <Navbar />
      <main className="pt-16">
        <Services />
      </main>
      <Footer />
    </div>
  )
}
