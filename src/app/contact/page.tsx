import { Contact } from '@/components/Contact'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { PageTransition } from '@/components/PageTransition'

export default function ContactPage() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-secondary-50 pt-24">
        <Navbar />
      <main className="pt-16">
        <Contact />
      </main>
      <Footer />
      </div>
    </PageTransition>
  )
}
