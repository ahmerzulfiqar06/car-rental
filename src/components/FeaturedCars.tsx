'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import Image from 'next/image'

const featuredCars = [
  {
    id: 1,
    name: 'Lamborghini Huracan',
    category: 'Sports Car',
    price: 299,
    image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&h=600&fit=crop',
    rating: 5.0,
    reviews: 128,
    features: ['450 HP', '2 Seats', 'Automatic'],
    description: 'Experience the thrill of Italian engineering with this stunning supercar.'
  },
  {
    id: 2,
    name: 'Mercedes-Benz S-Class',
    category: 'Luxury Sedan',
    price: 189,
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&h=600&fit=crop',
    rating: 4.9,
    reviews: 256,
    features: ['362 HP', '5 Seats', 'Premium Audio'],
    description: 'The epitome of luxury and comfort for the discerning executive.'
  },
  {
    id: 3,
    name: 'BMW X5',
    category: 'SUV',
    price: 149,
    image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&h=600&fit=crop',
    rating: 4.8,
    reviews: 189,
    features: ['375 HP', '7 Seats', 'All-Wheel Drive'],
    description: 'Powerful performance meets versatile capability in this premium SUV.'
  },
  {
    id: 4,
    name: 'Porsche 911',
    category: 'Sports Car',
    price: 349,
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=600&fit=crop',
    rating: 5.0,
    reviews: 97,
    features: ['379 HP', '4 Seats', 'PDK Transmission'],
    description: 'Iconic design meets cutting-edge performance in this legendary sports car.'
  }
]

export function FeaturedCars() {
  return (
    <section id="cars" className="pt-0 pb-20 bg-white">
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
            Featured <span className="text-primary-600">Vehicles</span>
          </h2>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            Discover our handpicked selection of premium vehicles, each maintained to perfection
            and ready for your next adventure.
          </p>
        </motion.div>

        {/* Cars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredCars.map((car, index) => (
            <motion.div
              key={car.id}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
                type: "spring",
                stiffness: 100,
                damping: 15
              }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{
                y: -10,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="card-hover bg-white rounded-2xl shadow-lg overflow-hidden border border-secondary-200 group"
            >
              {/* Car Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={car.image}
                  alt={car.name}
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    ${car.price}/day
                  </span>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-secondary-900 px-3 py-1 rounded-full text-sm font-medium">
                    {car.category}
                  </span>
                </div>
              </div>

              {/* Car Details */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-secondary-900 mb-2">{car.name}</h3>
                <p className="text-secondary-600 text-sm mb-4">{car.description}</p>

                {/* Rating */}
                <div className="flex items-center space-x-2 mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(car.rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-secondary-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-secondary-600">
                    {car.rating} ({car.reviews} reviews)
                  </span>
                </div>

                {/* Features */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {car.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="text-center">
                      <div className="text-xs text-secondary-500 uppercase tracking-wide">
                        {feature}
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-secondary-900 hover:bg-secondary-800 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200"
                >
                  Book Now
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary text-lg px-8 py-4"
          >
            View All Vehicles
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
