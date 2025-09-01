'use client'

import { motion } from 'framer-motion'
import { Car, Shield, Clock, MapPin, CreditCard, Headphones } from 'lucide-react'

const services = [
  {
    icon: Car,
    title: 'Premium Fleet',
    description: 'Access to the finest collection of luxury vehicles, from sports cars to executive sedans.',
    features: ['Latest Models', 'Regular Maintenance', 'GPS Tracking']
  },
  {
    icon: Shield,
    title: 'Full Insurance',
    description: 'Complete coverage with comprehensive insurance for peace of mind on every journey.',
    features: ['Liability Coverage', 'Collision Protection', '24/7 Roadside Assistance']
  },
  {
    icon: Clock,
    title: 'Flexible Booking',
    description: 'Book your vehicle anytime with our easy online system and flexible cancellation policy.',
    features: ['Online Booking', 'Last-Minute Reservations', 'Free Cancellation']
  },
  {
    icon: MapPin,
    title: 'Airport Pickup',
    description: 'Convenient airport transfers with professional chauffeurs at your service.',
    features: ['All Major Airports', 'Flight Tracking', 'Meet & Greet Service']
  },
  {
    icon: CreditCard,
    title: 'Easy Payment',
    description: 'Multiple payment options with secure transactions and transparent pricing.',
    features: ['Credit Card', 'Digital Wallets', 'Corporate Billing']
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Round-the-clock customer support to ensure your journey is seamless and enjoyable.',
    features: ['Phone Support', 'Live Chat', 'Emergency Hotline']
  }
]

export function Services() {
  return (
    <section id="services" className="py-20 bg-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
            Our <span className="text-primary-600">Services</span>
          </h2>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            We provide comprehensive car rental services with a focus on luxury,
            convenience, and exceptional customer experience.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card-hover bg-white rounded-2xl p-8 shadow-lg border border-secondary-200"
            >
              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mb-6"
              >
                <service.icon className="h-8 w-8 text-primary-600" />
              </motion.div>

              {/* Content */}
              <h3 className="text-xl font-bold text-secondary-900 mb-3">
                {service.title}
              </h3>
              <p className="text-secondary-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <motion.li
                    key={featureIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: (index * 0.1) + (featureIndex * 0.1) }}
                    viewport={{ once: true }}
                    className="flex items-center text-sm text-secondary-700"
                  >
                    <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-3 flex-shrink-0" />
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Experience Luxury?
            </h3>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust us with their premium transportation needs.
              Book your luxury vehicle today and elevate your journey.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary-600 hover:bg-secondary-50 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 text-lg"
            >
              Start Your Journey
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
