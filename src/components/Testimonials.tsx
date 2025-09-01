'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Business Executive',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
    rating: 5,
    text: 'EliteDrive exceeded all my expectations. The Mercedes S-Class was immaculate, and the service was impeccable. Will definitely use them again for my business travels.',
    vehicle: 'Mercedes-Benz S-Class'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Event Planner',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    rating: 5,
    text: 'For our wedding, we needed something special. The Lamborghini Huracan made our special day even more memorable. The team was professional and accommodating.',
    vehicle: 'Lamborghini Huracan'
  },
  {
    id: 3,
    name: 'Emma Rodriguez',
    role: 'Tech Entrepreneur',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    rating: 5,
    text: 'The Porsche 911 was perfect for my product launch event. The vehicle was stunning, and the 24/7 support gave me complete peace of mind.',
    vehicle: 'Porsche 911'
  },
  {
    id: 4,
    name: 'David Thompson',
    role: 'Film Producer',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    rating: 5,
    text: 'Working on location shoots requires reliable transportation. EliteDrive provided exactly what we needed - luxury vehicles that performed flawlessly.',
    vehicle: 'BMW X5'
  },
  {
    id: 5,
    name: 'Lisa Park',
    role: 'Marketing Director',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
    rating: 5,
    text: 'The airport pickup service was seamless. My chauffeur was waiting with a sign, and the vehicle was exactly as described. Highly recommend!',
    vehicle: 'Audi A8'
  },
  {
    id: 6,
    name: 'Robert Kim',
    role: 'Real Estate Investor',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
    rating: 5,
    text: 'I\'ve rented from many companies, but EliteDrive stands out. Their attention to detail and customer service is unmatched.',
    vehicle: 'Range Rover Sport'
  }
]

export function Testimonials() {
  return (
    <section className="py-20 bg-secondary-50">
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
            What Our <span className="text-primary-600">Customers Say</span>
          </h2>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers
            have to say about their experience with EliteDrive.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card-hover bg-white rounded-2xl p-6 shadow-lg border border-secondary-200"
            >
              {/* Quote Icon */}
              <Quote className="h-8 w-8 text-primary-200 mb-4" />

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-secondary-700 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Vehicle */}
              <div className="text-sm text-primary-600 font-medium mb-4">
                Rented: {testimonial.vehicle}
              </div>

              {/* Customer Info */}
              <div className="flex items-center space-x-3">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-secondary-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-secondary-600">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 bg-white rounded-2xl p-8 md:p-12 shadow-lg"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">4.9/5</div>
              <div className="text-sm text-secondary-600">Average Rating</div>
              <div className="flex justify-center mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">10K+</div>
              <div className="text-sm text-secondary-600">Happy Customers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">98%</div>
              <div className="text-sm text-secondary-600">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">24/7</div>
              <div className="text-sm text-secondary-600">Customer Support</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
