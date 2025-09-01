'use client'

import { motion } from 'framer-motion'
import { Award, Users, Clock, Star, CheckCircle, TrendingUp } from 'lucide-react'

const reasons = [
  {
    icon: Award,
    title: 'Premium Quality',
    description: 'Only the finest vehicles in our fleet, meticulously maintained and serviced regularly.',
    stat: '500+',
    statLabel: 'Luxury Vehicles'
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Professional chauffeurs and customer service specialists with years of experience.',
    stat: '50+',
    statLabel: 'Expert Staff'
  },
  {
    icon: Clock,
    title: '24/7 Availability',
    description: 'Round-the-clock service ensuring you get the support you need, whenever you need it.',
    stat: '24/7',
    statLabel: 'Customer Support'
  },
  {
    icon: Star,
    title: '5-Star Rating',
    description: 'Consistently rated excellent by our customers for service quality and reliability.',
    stat: '4.9/5',
    statLabel: 'Average Rating'
  },
  {
    icon: CheckCircle,
    title: 'Verified Safety',
    description: 'All vehicles undergo rigorous safety checks and meet the highest industry standards.',
    stat: '100%',
    statLabel: 'Safety Compliant'
  },
  {
    icon: TrendingUp,
    title: 'Growing Network',
    description: 'Expanding our presence across major cities with premium service locations.',
    stat: '15+',
    statLabel: 'Cities Covered'
  }
]

export function WhyChooseUs() {
  return (
    <section id="about" className="py-20 bg-white">
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
            Why Choose <span className="text-primary-600">EliteDrive</span>
          </h2>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            Discover what sets us apart in the luxury car rental industry.
            We're committed to providing exceptional service and unforgettable experiences.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-secondary-50 rounded-2xl hover:bg-secondary-100 transition-colors duration-200"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4"
              >
                <reason.icon className="h-6 w-6 text-primary-600" />
              </motion.div>
              <div className="text-2xl font-bold text-primary-600 mb-1">
                {reason.stat}
              </div>
              <div className="text-sm text-secondary-600 font-medium">
                {reason.statLabel}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Detailed Reasons */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card-hover bg-gradient-to-br from-white to-secondary-50 rounded-2xl p-8 shadow-lg border border-secondary-200"
            >
              <div className="flex items-start space-x-4">
                <motion.div
                  whileHover={{ rotate: 10 }}
                  className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center"
                >
                  <reason.icon className="h-6 w-6 text-primary-600" />
                </motion.div>
                <div>
                  <h3 className="text-xl font-bold text-secondary-900 mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-secondary-600 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Our Mission
            </h3>
            <p className="text-lg mb-8 opacity-90 max-w-3xl mx-auto leading-relaxed">
              To redefine luxury transportation by providing unparalleled service,
              premium vehicles, and memorable experiences that exceed our customers'
              expectations. We believe that every journey should be extraordinary.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold mb-2">10+</div>
                <div className="text-sm opacity-80">Years of Excellence</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">50K+</div>
                <div className="text-sm opacity-80">Happy Customers</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">1M+</div>
                <div className="text-sm opacity-80">Miles Driven</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
