import { Contact } from '@/components/Contact'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-secondary-50 pt-32">
      <Navbar />
      <main className="pt-16">
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
