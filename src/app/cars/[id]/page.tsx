'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  Star,
  Fuel,
  Users,
  Settings,
  Calendar,
  MapPin,
  Shield,
  Clock,
  CheckCircle,
  ArrowLeft,
  Heart,
  Share2,
  ChevronLeft,
  ChevronRight
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Navbar } from '@/components/Navbar'

// Car data - in a real app, this would come from an API
const carsData = [
  {
    id: 1,
    name: 'Lamborghini Huracan',
    category: 'Sports Car',
    price: 299,
    images: [
      'https://images.unsplash.com/photo-1544829099-b9a0e3421cbd?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop'
    ],
    rating: 5.0,
    reviews: 128,
    features: ['450 HP', '2 Seats', 'Automatic', 'Carbon Fiber', 'LED Lights'],
    description: 'Experience the thrill of Italian engineering with this stunning supercar. The Lamborghini Huracan delivers breathtaking performance with its 5.2L V10 engine producing 602 horsepower.',
    specs: {
      engine: '5.2L V10',
      transmission: '7-Speed DCT',
      fuelType: 'Petrol',
      seats: 2,
      doors: 2,
      luggage: 'Limited',
      acceleration: '0-60 mph in 2.9s',
      topSpeed: '202 mph',
      fuelEconomy: '13 mpg city / 18 mpg highway',
      drivetrain: 'Rear-Wheel Drive'
    },
    availability: true,
    location: 'Downtown',
    included: [
      'Unlimited mileage',
      '24/7 roadside assistance',
      'Collision damage waiver',
      'Theft protection',
      'GPS navigation',
      'Premium audio system'
    ],
    policies: [
      'Minimum age: 25 years',
      'Valid driver\'s license required',
      'International license accepted',
      'Security deposit: $2,500',
      'Fuel policy: Return with same level'
    ]
  },
  {
    id: 2,
    name: 'Mercedes-Benz S-Class',
    category: 'Luxury Sedan',
    price: 189,
    images: [
      'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1549399735-cef2e2c3f638?w=800&h=600&fit=crop'
    ],
    rating: 4.9,
    reviews: 256,
    features: ['362 HP', '5 Seats', 'Premium Audio', 'Massage Seats', 'Air Suspension'],
    description: 'The epitome of luxury and comfort for the discerning executive. The S-Class offers unparalleled comfort with its advanced suspension system and premium interior materials.',
    specs: {
      engine: '3.0L V6 Turbo',
      transmission: '9-Speed Automatic',
      fuelType: 'Petrol',
      seats: 5,
      doors: 4,
      luggage: 'Large',
      acceleration: '0-60 mph in 5.6s',
      topSpeed: '155 mph (limited)',
      fuelEconomy: '19 mpg city / 28 mpg highway',
      drivetrain: 'Rear-Wheel Drive'
    },
    availability: true,
    location: 'Airport',
    included: [
      'Unlimited mileage',
      '24/7 roadside assistance',
      'Collision damage waiver',
      'Theft protection',
      'Premium audio system',
      'Leather upholstery'
    ],
    policies: [
      'Minimum age: 21 years',
      'Valid driver\'s license required',
      'International license accepted',
      'Security deposit: $1,500',
      'Fuel policy: Return with same level'
    ]
  },
  // Add more cars as needed...
]

export async function generateStaticParams() {
  return carsData.map((car) => ({
    id: car.id.toString(),
  }))
}

export default function CarDetailPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isFavorite, setIsFavorite] = useState(false)
  const [checkInDate, setCheckInDate] = useState('')
  const [checkOutDate, setCheckOutDate] = useState('')
  const [carId, setCarId] = useState<number | null>(null)

  useEffect(() => {
    // Get car ID from URL hash or default to first car
    const hash = window.location.hash.substring(1)
    const id = hash ? parseInt(hash) : 1
    setCarId(id)
  }, [])

  const car = carsData.find(c => c.id === carId)

  if (!car) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-secondary-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-secondary-900 mb-4">Car Not Found</h1>
          <p className="text-secondary-600 mb-6">The vehicle you're looking for doesn't exist.</p>
          <Link href="/cars" className="btn-primary">
            Back to Cars
          </Link>
        </div>
      </div>
    )
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % car.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + car.images.length) % car.images.length)
  }

  const totalPrice = checkInDate && checkOutDate
    ? Math.ceil((new Date(checkOutDate).getTime() - new Date(checkInDate).getTime()) / (1000 * 60 * 60 * 24)) * car.price
    : 0

  return (
    <div className="min-h-screen bg-secondary-50 pt-26">
      <Navbar />
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Link
          href="/cars"
          className="inline-flex items-center space-x-2 text-secondary-600 hover:text-primary-600 transition-colors"
        >
          <ArrowLeft className="h-5 w-5" />
          <span>Back to Cars</span>
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {/* Main Image */}
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={car.images[currentImageIndex]}
                alt={car.name}
                fill
                className="object-cover"
              />
              {!car.availability && (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <span className="bg-red-600 text-white px-6 py-3 rounded-lg font-medium text-lg">
                    Currently Unavailable
                  </span>
                </div>
              )}

              {/* Navigation Arrows */}
              {car.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition-colors"
                  >
                    <ChevronLeft className="h-5 w-5 text-secondary-700" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition-colors"
                  >
                    <ChevronRight className="h-5 w-5 text-secondary-700" />
                  </button>
                </>
              )}

              {/* Action Buttons */}
              <div className="absolute top-4 right-4 flex space-x-2">
                <button
                  onClick={() => setIsFavorite(!isFavorite)}
                  className={`p-2 rounded-full shadow-lg transition-colors ${
                    isFavorite ? 'bg-red-500 text-white' : 'bg-white/90 backdrop-blur-sm text-secondary-700'
                  }`}
                >
                  <Heart className={`h-5 w-5 ${isFavorite ? 'fill-current' : ''}`} />
                </button>
                <button className="p-2 bg-white/90 backdrop-blur-sm text-secondary-700 rounded-full shadow-lg hover:bg-white transition-colors">
                  <Share2 className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Thumbnail Images */}
            {car.images.length > 1 && (
              <div className="flex space-x-2 overflow-x-auto pb-2">
                {car.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                      index === currentImageIndex
                        ? 'border-primary-500'
                        : 'border-transparent hover:border-secondary-300'
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${car.name} ${index + 1}`}
                      width={80}
                      height={80}
                      className="object-cover w-full h-full"
                    />
                  </button>
                ))}
              </div>
            )}
          </motion.div>

          {/* Car Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Header */}
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
                  {car.category}
                </span>
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="text-sm text-secondary-600">{car.rating} ({car.reviews} reviews)</span>
                </div>
              </div>
              <h1 className="text-4xl font-bold text-secondary-900 mb-4">{car.name}</h1>
              <p className="text-secondary-600 leading-relaxed">{car.description}</p>
            </div>

            {/* Price */}
            <div className="bg-primary-50 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl font-bold text-primary-600">${car.price}</span>
                <span className="text-secondary-600">per day</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-secondary-600">
                <Shield className="h-4 w-4" />
                <span>Full insurance included</span>
              </div>
            </div>

            {/* Key Features */}
            <div>
              <h3 className="text-xl font-bold text-secondary-900 mb-4">Key Features</h3>
              <div className="grid grid-cols-2 gap-4">
                {car.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-secondary-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Booking Form */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-secondary-200">
              <h3 className="text-xl font-bold text-secondary-900 mb-6">Book This Car</h3>

              <div className="space-y-4 mb-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-2">
                      Pick-up Date
                    </label>
                    <input
                      type="date"
                      value={checkInDate}
                      onChange={(e) => setCheckInDate(e.target.value)}
                      className="w-full px-3 py-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-2">
                      Return Date
                    </label>
                    <input
                      type="date"
                      value={checkOutDate}
                      onChange={(e) => setCheckOutDate(e.target.value)}
                      className="w-full px-3 py-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              {totalPrice > 0 && (
                <div className="bg-secondary-50 rounded-lg p-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-secondary-700">Total Price:</span>
                    <span className="text-2xl font-bold text-primary-600">${totalPrice}</span>
                  </div>
                </div>
              )}

              <Link
                href={`/booking?car=${car.id}&pickup=${checkInDate}&return=${checkOutDate}`}
                className={`block w-full py-3 px-6 rounded-lg font-semibold text-center transition-colors ${
                  car.availability && checkInDate && checkOutDate
                    ? 'bg-primary-600 hover:bg-primary-700 text-white'
                    : 'bg-secondary-300 text-secondary-500 cursor-not-allowed pointer-events-none'
                }`}
              >
                {car.availability ? 'Reserve Now' : 'Currently Unavailable'}
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Detailed Specifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 bg-white rounded-2xl p-8 shadow-lg"
        >
          <h2 className="text-2xl font-bold text-secondary-900 mb-8">Specifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <Fuel className="h-8 w-8 text-primary-600 mx-auto mb-2" />
              <div className="font-semibold text-secondary-900">Engine</div>
              <div className="text-secondary-600">{car.specs.engine}</div>
            </div>
            <div className="text-center">
              <Settings className="h-8 w-8 text-primary-600 mx-auto mb-2" />
              <div className="font-semibold text-secondary-900">Transmission</div>
              <div className="text-secondary-600">{car.specs.transmission}</div>
            </div>
            <div className="text-center">
              <Users className="h-8 w-8 text-primary-600 mx-auto mb-2" />
              <div className="font-semibold text-secondary-900">Seating</div>
              <div className="text-secondary-600">{car.specs.seats} passengers</div>
            </div>
            <div className="text-center">
              <Shield className="h-8 w-8 text-primary-600 mx-auto mb-2" />
              <div className="font-semibold text-secondary-900">Fuel Type</div>
              <div className="text-secondary-600">{car.specs.fuelType}</div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-secondary-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-secondary-900 mb-4">Performance</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-secondary-600">Acceleration (0-60 mph):</span>
                    <span className="text-secondary-900 font-medium">{car.specs.acceleration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-secondary-600">Top Speed:</span>
                    <span className="text-secondary-900 font-medium">{car.specs.topSpeed}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-secondary-600">Fuel Economy:</span>
                    <span className="text-secondary-900 font-medium">{car.specs.fuelEconomy}</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-secondary-900 mb-4">Technical Details</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-secondary-600">Drivetrain:</span>
                    <span className="text-secondary-900 font-medium">{car.specs.drivetrain}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-secondary-600">Doors:</span>
                    <span className="text-secondary-900 font-medium">{car.specs.doors}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-secondary-600">Luggage Space:</span>
                    <span className="text-secondary-900 font-medium">{car.specs.luggage}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* What's Included & Policies */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <h3 className="text-xl font-bold text-secondary-900 mb-6">What's Included</h3>
            <div className="space-y-3">
              {car.included.map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-secondary-700">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <h3 className="text-xl font-bold text-secondary-900 mb-6">Rental Policies</h3>
            <div className="space-y-3">
              {car.policies.map((policy, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-primary-500 flex-shrink-0 mt-0.5" />
                  <span className="text-secondary-700">{policy}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
