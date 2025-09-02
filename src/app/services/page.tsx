import { motion } from 'framer-motion'
import { Services } from '@/components/Services'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { PageTransition } from '@/components/PageTransition'
import Link from 'next/link'

export default function ServicesPage() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-br from-secondary-50 to-secondary-100 pt-24">
        <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-900 via-secondary-900 to-accent-900 text-white pt-20 pb-32">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our <span className="text-primary-400">Services</span>
            </h1>
            <p className="text-xl text-secondary-200 max-w-3xl mx-auto leading-relaxed mb-8">
              Experience unparalleled luxury car rental services with our comprehensive range of premium offerings.
              From airport transfers to corporate solutions, we cater to all your transportation needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/booking">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-4 px-8 rounded-xl transition-colors duration-200 text-lg"
                >
                  Book Now
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-200 text-lg"
                >
                  Contact Us
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-20 left-10 hidden lg:block"
        >
          <motion.div
            className="glass rounded-2xl p-6 shadow-2xl"
            whileHover={{ boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)" }}
          >
            <div className="text-center">
              <motion.div
                className="text-2xl font-bold text-white mb-1"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                500+
              </motion.div>
              <div className="text-sm text-secondary-300">Luxury Vehicles</div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-20 right-10 hidden lg:block"
        >
          <motion.div
            className="glass rounded-2xl p-6 shadow-2xl"
            whileHover={{ boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)" }}
          >
            <div className="text-center">
              <motion.div
                className="text-2xl font-bold text-white mb-1"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
              >
                24/7
              </motion.div>
              <div className="text-sm text-secondary-300">Customer Support</div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <main className="pt-0">
        <Services />

        {/* Additional Services Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
                Why Choose <span className="text-primary-600">EliteDrive</span>
              </h2>
              <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
                Discover what sets us apart from other luxury car rental services
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: '🚗',
                  title: 'Premium Fleet',
                  description: 'Latest luxury vehicles with cutting-edge technology'
                },
                {
                  icon: '🛡️',
                  title: 'Full Insurance',
                  description: 'Comprehensive coverage for complete peace of mind'
                },
                {
                  icon: '⚡',
                  title: 'Quick Service',
                  description: 'Fast pickup and drop-off at your convenience'
                },
                {
                  icon: '💎',
                  title: 'VIP Treatment',
                  description: 'Personalized service with dedicated concierge'
                },
                {
                  icon: '📱',
                  title: 'Digital Experience',
                  description: 'Seamless booking through our mobile app'
                },
                {
                  icon: '🌍',
                  title: 'Global Network',
                  description: 'Service available across multiple cities'
                },
                {
                  icon: '🎯',
                  title: 'Tailored Solutions',
                  description: 'Custom packages for special occasions'
                },
                {
                  icon: '⭐',
                  title: '5-Star Reviews',
                  description: 'Consistently rated excellent by our customers'
                }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card-hover bg-secondary-50 rounded-2xl p-6 text-center"
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-lg font-bold text-secondary-900 mb-2">{item.title}</h3>
                  <p className="text-secondary-600 text-sm">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-secondary-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
                How It <span className="text-primary-600">Works</span>
              </h2>
              <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
                Getting your luxury vehicle is simple and straightforward
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: '01',
                  title: 'Choose Your Vehicle',
                  description: 'Browse our premium fleet and select the perfect car for your needs'
                },
                {
                  step: '02',
                  title: 'Book Online',
                  description: 'Complete your reservation securely with our easy booking system'
                },
                {
                  step: '03',
                  title: 'Enjoy Your Ride',
                  description: 'Pick up your vehicle and enjoy the ultimate luxury driving experience'
                }
              ].map((process, index) => (
                <motion.div
                  key={process.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-20 h-20 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                    {process.step}
                  </div>
                  <h3 className="text-xl font-bold text-secondary-900 mb-4">{process.title}</h3>
                  <p className="text-secondary-600">{process.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
                What Our <span className="text-primary-600">Customers Say</span>
              </h2>
              <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
                Don&apos;t just take our word for it - hear from our satisfied customers
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: 'Michael Chen',
                  role: 'Business Executive',
                  content: 'Exceptional service and the finest luxury vehicles. EliteDrive made my business trip unforgettable.',
                  rating: 5
                },
                {
                  name: 'Emma Thompson',
                  role: 'Event Planner',
                  content: 'Perfect for special occasions. The attention to detail and premium service exceeded all expectations.',
                  rating: 5
                },
                {
                  name: 'David Rodriguez',
                  role: 'Tourist',
                  content: 'The best car rental experience I\'ve ever had. Professional, reliable, and truly luxurious.',
                  rating: 5
                }
              ].map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card-hover bg-secondary-50 rounded-2xl p-6"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400">⭐</span>
                    ))}
                  </div>
                  <p className="text-secondary-700 mb-6 italic">&ldquo;{testimonial.content}&rdquo;</p>
                  <div>
                    <div className="font-bold text-secondary-900">{testimonial.name}</div>
                    <div className="text-sm text-secondary-600">{testimonial.role}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      </div>
    </PageTransition>
  )
}
