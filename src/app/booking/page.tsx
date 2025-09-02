'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Car,
  User,
  CreditCard,
  CheckCircle,
  ArrowRight,
  ArrowLeft,
  Calendar,
  Shield,
  Star,
  MapPin,
  Clock,
  Filter
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Navbar } from '@/components/Navbar'
import { PageTransition } from '@/components/PageTransition'

// Car data - in a real app, this would come from an API
interface Car {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
}

const carsData: Car[] = [
  {
    id: 1,
    name: 'Lamborghini Huracan',
    price: 299,
    image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&h=600&fit=crop',
    category: 'Sports Car',
    rating: 5.0,
    reviews: 128
  },
  {
    id: 2,
    name: 'Mercedes-Benz S-Class',
    price: 189,
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&h=600&fit=crop',
    category: 'Luxury Sedan',
    rating: 4.9,
    reviews: 256
  },
  {
    id: 3,
    name: 'BMW X5',
    price: 149,
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&h=600&fit=crop',
    category: 'SUV',
    rating: 4.8,
    reviews: 189
  },
  {
    id: 4,
    name: 'Porsche 911',
    price: 349,
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=600&fit=crop',
    category: 'Sports Car',
    rating: 5.0,
    reviews: 97
  },
  {
    id: 5,
    name: 'Audi A8',
    price: 199,
    image: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=800&h=600&fit=crop',
    category: 'Luxury Sedan',
    rating: 4.7,
    reviews: 145
  },
  {
    id: 6,
    name: 'Range Rover Sport',
    price: 229,
    image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&h=600&fit=crop',
    category: 'SUV',
    rating: 4.8,
    reviews: 203
  }
]

const steps = [
  { id: 1, name: 'Car Selection', icon: Car },
  { id: 2, name: 'Booking Details', icon: Calendar },
  { id: 3, name: 'Personal Info', icon: User },
  { id: 4, name: 'Payment', icon: CreditCard },
  { id: 5, name: 'Confirmation', icon: CheckCircle }
]

function BookingPageContent() {
  const [currentStep, setCurrentStep] = useState(1)
  const [selectedCar, setSelectedCar] = useState<Car | null>(null)
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedPriceRange, setSelectedPriceRange] = useState('All')

  // Form data
  const [bookingData, setBookingData] = useState({
    carId: '',
    pickupDate: '',
    returnDate: '',
    pickupLocation: 'downtown',
    returnLocation: 'downtown',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipCode: '',
    licenseNumber: '',
    licenseExpiry: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardName: '',
    billingAddress: '',
    termsAccepted: false
  })



  const calculateTotal = () => {
    if (!selectedCar || !bookingData.pickupDate || !bookingData.returnDate) return 0

    const days = Math.ceil(
      (new Date(bookingData.returnDate).getTime() - new Date(bookingData.pickupDate).getTime())
      / (1000 * 60 * 60 * 24)
    )

    return days * selectedCar.price
  }

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setBookingData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = () => {
    // In a real app, this would submit to an API
    alert('Booking submitted successfully! (This is a demo)')
    setCurrentStep(5)
  }

  // Filter cars based on selected criteria
  const filteredCars = carsData.filter((car) => {
    const matchesCategory = selectedCategory === 'All' || car.category === selectedCategory
    let matchesPrice = true
    if (selectedPriceRange === 'Under $200') matchesPrice = car.price < 200
    else if (selectedPriceRange === '$200-$300') matchesPrice = car.price >= 200 && car.price < 300
    else if (selectedPriceRange === '$300+') matchesPrice = car.price >= 300

    return matchesCategory && matchesPrice
  })

  const categories = ['All', 'Sports Car', 'Luxury Sedan', 'SUV']
  const priceRanges = ['All', 'Under $200', '$200-$300', '$300+']

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return selectedCar !== null
      case 2:
        return bookingData.pickupDate && bookingData.returnDate &&
               new Date(bookingData.pickupDate) < new Date(bookingData.returnDate)
      case 3:
        return bookingData.firstName && bookingData.lastName && bookingData.email &&
               bookingData.phone && bookingData.licenseNumber
      case 4:
        return bookingData.cardNumber && bookingData.expiryDate &&
               bookingData.cvv && bookingData.cardName && bookingData.termsAccepted
      default:
        return true
    }
  }

  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-br from-secondary-50 to-secondary-100 pt-24">
        <Navbar />
      {/* Header */}
      <div className="bg-white/95 backdrop-blur-sm shadow-lg border-b border-secondary-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-2">
                <div className="text-2xl font-bold">
                  <span className="text-primary-600">Elite</span>
                  <span className="text-secondary-900">Drive</span>
                </div>
              </Link>
              <span className="text-secondary-400">|</span>
              <span className="text-secondary-600 font-medium">Secure Booking</span>
            </div>
            <Link
              href="/cars"
              className="inline-flex items-center space-x-2 text-secondary-600 hover:text-primary-600 transition-colors duration-200"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Cars</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Progress Bar */}
        <div className="mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-bold text-secondary-900">Complete Your Booking</h1>
              <div className="text-sm text-secondary-600">
                Step {currentStep} of {steps.length}
              </div>
            </div>

            <div className="relative">
              {/* Progress line */}
              <div className="absolute top-5 left-0 right-0 h-0.5 bg-secondary-200 rounded"></div>
              <div
                className="absolute top-5 left-0 h-0.5 bg-primary-600 rounded transition-all duration-500"
                style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
              ></div>

              <div className="flex items-center justify-between relative">
            {steps.map((step, index) => (
                  <div key={step.id} className="flex flex-col items-center">
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={{
                    scale: currentStep >= step.id ? 1 : 0.8,
                        backgroundColor: currentStep >= step.id ? '#3b82f6' : '#e5e7eb',
                        borderColor: currentStep >= step.id ? '#3b82f6' : '#d1d5db'
                  }}
                      className="w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold border-2 shadow-lg relative z-10"
                >
                  {currentStep > step.id ? (
                    <CheckCircle className="h-6 w-6" />
                  ) : (
                    <step.icon className="h-5 w-5" />
                  )}
                </motion.div>
                    <div className="mt-3 text-center">
                      <span className={`text-sm font-medium block ${
                  currentStep >= step.id ? 'text-primary-600' : 'text-secondary-400'
                }`}>
                  {step.name}
                </span>
                      <span className="text-xs text-secondary-500 mt-1 block">
                        Step {step.id}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              {/* Step 1: Car Selection */}
              {currentStep === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="bg-white rounded-2xl p-8 shadow-xl"
                >
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold text-secondary-900 mb-3">Choose Your Vehicle</h2>
                    <p className="text-secondary-600">Select the perfect car for your journey</p>
                  </div>

                  {/* Filters */}
                  <div className="mb-6 bg-white/70 backdrop-blur-sm rounded-xl p-4">
                    <div className="flex flex-col md:flex-row gap-4 items-center">
                      <div className="flex items-center space-x-2">
                        <Filter className="h-5 w-5 text-secondary-600" />
                        <span className="text-sm font-medium text-secondary-700">Filters:</span>
                      </div>

                      <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="px-3 py-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
                      >
                        {categories.map((category) => (
                          <option key={category} value={category}>{category}</option>
                        ))}
                      </select>

                      <select
                        value={selectedPriceRange}
                        onChange={(e) => setSelectedPriceRange(e.target.value)}
                        className="px-3 py-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
                      >
                        {priceRanges.map((range) => (
                          <option key={range} value={range}>{range}</option>
                        ))}
                      </select>

                      <button
                        onClick={() => {
                          setSelectedCategory('All')
                          setSelectedPriceRange('All')
                        }}
                        className="text-sm text-primary-600 hover:text-primary-800 underline"
                      >
                        Clear filters
                      </button>
                    </div>
                  </div>

                  {/* Results count */}
                  <div className="mb-4 flex items-center justify-between">
                    <p className="text-secondary-600">
                      Showing {filteredCars.length} of {carsData.length} vehicles
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredCars.map((car) => (
                      <motion.div
                        key={car.id}
                        whileHover={{ scale: 1.02, y: -5 }}
                        whileTap={{ scale: 0.98 }}
                        className={`relative border-2 rounded-2xl p-6 cursor-pointer transition-all duration-300 ${
                          selectedCar?.id === car.id
                            ? 'border-primary-500 bg-gradient-to-br from-primary-50 to-primary-100 shadow-lg'
                            : 'border-secondary-200 hover:border-primary-300 hover:shadow-md'
                        }`}
                        onClick={() => {
                          setSelectedCar(car)
                          handleInputChange('carId', car.id.toString())
                        }}
                      >
                        {selectedCar?.id === car.id && (
                          <div className="absolute top-4 right-4 w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center">
                            <CheckCircle className="h-4 w-4 text-white" />
                          </div>
                        )}

                        <div className="relative h-40 mb-4 rounded-xl overflow-hidden">
                          <Image
                            src={car.image}
                            alt={car.name}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                        </div>

                        <div className="space-y-2">
                          <h3 className="text-xl font-bold text-secondary-900">{car.name}</h3>
                          <p className="text-secondary-600 text-sm">{car.category}</p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <Star className="h-4 w-4 text-yellow-400 fill-current" />
                              <span className="text-sm text-secondary-600">{car.rating}</span>
                              <span className="text-xs text-secondary-500">({car.reviews} reviews)</span>
                            </div>
                          </div>
                          <div className="flex items-center justify-between pt-2">
                            <div className="text-2xl font-bold text-primary-600">${car.price}</div>
                            <div className="text-sm text-secondary-600">per day</div>
                          </div>
                        </div>

                        {selectedCar?.id === car.id && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="absolute inset-0 border-2 border-primary-500 rounded-2xl pointer-events-none"
                          />
                        )}
                      </motion.div>
                    ))}
                  </div>

                  {/* No results */}
                  {filteredCars.length === 0 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-center py-12 bg-white/70 backdrop-blur-sm rounded-xl"
                    >
                      <Car className="h-16 w-16 text-secondary-300 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold text-secondary-900 mb-2">No cars found</h3>
                      <p className="text-secondary-600 mb-6">
                        Try adjusting your filters to find more vehicles.
                      </p>
                      <button
                        onClick={() => {
                          setSelectedCategory('All')
                          setSelectedPriceRange('All')
                        }}
                        className="btn-primary"
                      >
                        Clear All Filters
                      </button>
                    </motion.div>
                  )}

                  {selectedCar && (
                    <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2 text-green-800">
                          <CheckCircle className="h-5 w-5" />
                          <span className="font-medium">Selected: {selectedCar.name}</span>
                        </div>
                        <button
                          onClick={() => {
                            setSelectedCar(null)
                            handleInputChange('carId', '')
                          }}
                          className="text-secondary-600 hover:text-secondary-800 underline text-sm"
                        >
                          Clear selection
                        </button>
                      </div>
                    </div>
                  )}

                  {!selectedCar && (
                    <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
                      <div className="flex items-center space-x-2 text-amber-800">
                        <Car className="h-5 w-5" />
                        <span className="font-medium">Please select a vehicle to continue</span>
                      </div>
                    </div>
                  )}
                </motion.div>
              )}

              {/* Step 2: Booking Details */}
              {currentStep === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="bg-white rounded-2xl p-8 shadow-xl"
                >
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold text-secondary-900 mb-3">Booking Details</h2>
                    <p className="text-secondary-600">Choose your rental dates and locations</p>
                  </div>

                  <div className="space-y-8">
                    {/* Date Selection */}
                    <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-xl p-6">
                      <h3 className="text-lg font-semibold text-secondary-900 mb-4 flex items-center">
                        <Calendar className="h-5 w-5 mr-2 text-primary-600" />
                        Rental Period
                      </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="block text-sm font-medium text-secondary-700">
                          Pick-up Date *
                        </label>
                        <input
                          type="date"
                          value={bookingData.pickupDate}
                          onChange={(e) => handleInputChange('pickupDate', e.target.value)}
                          min={new Date().toISOString().split('T')[0]}
                            className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                        />
                      </div>
                        <div className="space-y-2">
                          <label className="block text-sm font-medium text-secondary-700">
                          Return Date *
                        </label>
                        <input
                          type="date"
                          value={bookingData.returnDate}
                          onChange={(e) => handleInputChange('returnDate', e.target.value)}
                          min={bookingData.pickupDate || new Date().toISOString().split('T')[0]}
                            className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                        />
                        </div>
                      </div>

                      {bookingData.pickupDate && bookingData.returnDate && (
                        <div className="mt-4 p-3 bg-white/70 rounded-lg">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-secondary-600">Duration:</span>
                            <span className="font-medium text-primary-600">
                              {Math.ceil(
                                (new Date(bookingData.returnDate).getTime() - new Date(bookingData.pickupDate).getTime())
                                / (1000 * 60 * 60 * 24)
                              )} days
                            </span>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Location Selection */}
                    <div className="bg-gradient-to-r from-secondary-50 to-primary-50 rounded-xl p-6">
                      <h3 className="text-lg font-semibold text-secondary-900 mb-4 flex items-center">
                        <MapPin className="h-5 w-5 mr-2 text-primary-600" />
                        Locations
                      </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="block text-sm font-medium text-secondary-700">
                          Pick-up Location
                        </label>
                        <select
                          value={bookingData.pickupLocation}
                          onChange={(e) => handleInputChange('pickupLocation', e.target.value)}
                            className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                          >
                            <option value="downtown">🏙️ Downtown Location</option>
                            <option value="airport">✈️ Airport Terminal</option>
                            <option value="uptown">🏢 Uptown Office</option>
                        </select>
                      </div>
                        <div className="space-y-2">
                          <label className="block text-sm font-medium text-secondary-700">
                          Return Location
                        </label>
                        <select
                          value={bookingData.returnLocation}
                          onChange={(e) => handleInputChange('returnLocation', e.target.value)}
                            className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                          >
                            <option value="downtown">🏙️ Downtown Location</option>
                            <option value="airport">✈️ Airport Terminal</option>
                            <option value="uptown">🏢 Uptown Office</option>
                        </select>
                        </div>
                      </div>
                    </div>

                    {/* Additional Services */}
                    <div className="bg-gradient-to-r from-accent-50 to-primary-50 rounded-xl p-6">
                      <h3 className="text-lg font-semibold text-secondary-900 mb-4 flex items-center">
                        <Star className="h-5 w-5 mr-2 text-primary-600" />
                        Additional Services
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <label className="flex items-center space-x-3 p-3 bg-white/70 rounded-lg hover:bg-white/90 transition-colors cursor-pointer">
                          <input type="checkbox" className="rounded border-secondary-300 text-primary-600 focus:ring-primary-500" />
                          <div>
                            <div className="font-medium text-secondary-900">GPS Navigation</div>
                            <div className="text-sm text-secondary-600">$15/day</div>
                          </div>
                        </label>
                        <label className="flex items-center space-x-3 p-3 bg-white/70 rounded-lg hover:bg-white/90 transition-colors cursor-pointer">
                          <input type="checkbox" className="rounded border-secondary-300 text-primary-600 focus:ring-primary-500" />
                          <div>
                            <div className="font-medium text-secondary-900">Child Seat</div>
                            <div className="text-sm text-secondary-600">$10/day</div>
                          </div>
                        </label>
                        <label className="flex items-center space-x-3 p-3 bg-white/70 rounded-lg hover:bg-white/90 transition-colors cursor-pointer">
                          <input type="checkbox" className="rounded border-secondary-300 text-primary-600 focus:ring-primary-500" />
                          <div>
                            <div className="font-medium text-secondary-900">Additional Driver</div>
                            <div className="text-sm text-secondary-600">$20/day</div>
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Personal Information */}
              {currentStep === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="bg-white rounded-2xl p-8 shadow-lg"
                >
                  <h2 className="text-2xl font-bold text-secondary-900 mb-6">Personal Information</h2>

                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-secondary-700 mb-2">
                          First Name *
                        </label>
                        <input
                          type="text"
                          value={bookingData.firstName}
                          onChange={(e) => handleInputChange('firstName', e.target.value)}
                          className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-secondary-700 mb-2">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          value={bookingData.lastName}
                          onChange={(e) => handleInputChange('lastName', e.target.value)}
                          className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="Doe"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-secondary-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          value={bookingData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="john@example.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-secondary-700 mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          value={bookingData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-secondary-700 mb-2">
                        Address
                      </label>
                      <input
                        type="text"
                        value={bookingData.address}
                        onChange={(e) => handleInputChange('address', e.target.value)}
                        className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="123 Main Street"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-secondary-700 mb-2">
                          City
                        </label>
                        <input
                          type="text"
                          value={bookingData.city}
                          onChange={(e) => handleInputChange('city', e.target.value)}
                          className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="New York"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-secondary-700 mb-2">
                          ZIP Code
                        </label>
                        <input
                          type="text"
                          value={bookingData.zipCode}
                          onChange={(e) => handleInputChange('zipCode', e.target.value)}
                          className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="10001"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-secondary-700 mb-2">
                          Driver&apos;s License Number *
                        </label>
                        <input
                          type="text"
                          value={bookingData.licenseNumber}
                          onChange={(e) => handleInputChange('licenseNumber', e.target.value)}
                          className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="DL123456789"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-secondary-700 mb-2">
                          License Expiry Date
                        </label>
                        <input
                          type="date"
                          value={bookingData.licenseExpiry}
                          onChange={(e) => handleInputChange('licenseExpiry', e.target.value)}
                          className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 4: Payment */}
              {currentStep === 4 && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="bg-white rounded-2xl p-8 shadow-lg"
                >
                  <h2 className="text-2xl font-bold text-secondary-900 mb-6">Payment Information</h2>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-secondary-700 mb-2">
                        Card Number *
                      </label>
                      <input
                        type="text"
                        value={bookingData.cardNumber}
                        onChange={(e) => handleInputChange('cardNumber', e.target.value.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ').trim())}
                        className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="1234 5678 9012 3456"
                        maxLength={19}
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-secondary-700 mb-2">
                          Expiry Date *
                        </label>
                        <input
                          type="text"
                          value={bookingData.expiryDate}
                          onChange={(e) => handleInputChange('expiryDate', e.target.value)}
                          className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="MM/YY"
                          maxLength={5}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-secondary-700 mb-2">
                          CVV *
                        </label>
                        <input
                          type="text"
                          value={bookingData.cvv}
                          onChange={(e) => handleInputChange('cvv', e.target.value)}
                          className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="123"
                          maxLength={4}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-secondary-700 mb-2">
                        Cardholder Name *
                      </label>
                      <input
                        type="text"
                        value={bookingData.cardName}
                        onChange={(e) => handleInputChange('cardName', e.target.value)}
                        className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-secondary-700 mb-2">
                        Billing Address
                      </label>
                      <input
                        type="text"
                        value={bookingData.billingAddress}
                        onChange={(e) => handleInputChange('billingAddress', e.target.value)}
                        className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Same as personal address"
                      />
                    </div>

                    <div className="bg-secondary-50 rounded-lg p-4">
                      <label className="flex items-start space-x-3">
                        <input
                          type="checkbox"
                          checked={bookingData.termsAccepted}
                          onChange={(e) => handleInputChange('termsAccepted', e.target.checked)}
                          className="mt-1"
                        />
                        <span className="text-sm text-secondary-700">
                          I agree to the{' '}
                          <Link href="#" className="text-primary-600 hover:underline">
                            Terms and Conditions
                          </Link>
                          {' '}and{' '}
                          <Link href="#" className="text-primary-600 hover:underline">
                            Rental Agreement
                          </Link>
                          . I understand the rental policies and insurance coverage.
                        </span>
                      </label>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 5: Confirmation */}
              {currentStep === 5 && (
                <motion.div
                  key="step5"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 shadow-xl text-center border border-green-200"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.5, type: "spring", stiffness: 200 }}
                    className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
                  >
                    <CheckCircle className="h-14 w-14 text-white" />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <h2 className="text-4xl font-bold text-secondary-900 mb-4">🎉 Booking Confirmed!</h2>
                    <p className="text-secondary-600 mb-2 text-lg">
                      Your luxury vehicle reservation has been successfully processed.
                    </p>
                    <p className="text-secondary-500 text-sm">
                      A confirmation email with all details has been sent to your inbox.
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="bg-white rounded-xl p-6 mb-8 mt-8 shadow-md"
                  >
                    <h3 className="font-bold text-secondary-900 mb-6 flex items-center justify-center">
                      <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mr-3">
                        <Car className="h-4 w-4 text-primary-600" />
                      </div>
                      Your Booking Summary
                    </h3>

                    {selectedCar && (
                      <div className="space-y-4">
                        <div className="flex items-center space-x-4 p-4 bg-secondary-50 rounded-lg">
                          <div className="relative w-16 h-16 rounded-lg overflow-hidden">
                            <Image
                              src={selectedCar.image}
                              alt={selectedCar.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="flex-1 text-left">
                            <h4 className="font-bold text-secondary-900">{selectedCar.name}</h4>
                            <p className="text-sm text-secondary-600">{selectedCar.category}</p>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div className="bg-blue-50 p-3 rounded-lg">
                            <div className="text-blue-600 font-medium">Pick-up</div>
                            <div className="text-secondary-900">{bookingData.pickupDate}</div>
                            <div className="text-xs text-secondary-600">{bookingData.pickupLocation}</div>
                          </div>
                          <div className="bg-green-50 p-3 rounded-lg">
                            <div className="text-green-600 font-medium">Return</div>
                            <div className="text-secondary-900">{bookingData.returnDate}</div>
                            <div className="text-xs text-secondary-600">{bookingData.returnLocation}</div>
                      </div>
                      </div>

                        <div className="border-t border-secondary-200 pt-4">
                          <div className="flex justify-between items-center">
                            <span className="text-secondary-600">Total Amount:</span>
                            <span className="text-2xl font-bold text-primary-600">${calculateTotal()}</span>
                      </div>
                    </div>
                  </div>
                    )}
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                  >
                    <Link
                      href="/"
                      className="bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                    >
                    Back to Home
                  </Link>
                    <Link
                      href="/cars"
                      className="bg-white text-primary-600 border-2 border-primary-600 hover:bg-primary-50 font-semibold py-3 px-8 rounded-xl transition-all duration-200"
                    >
                      Book Another Car
                    </Link>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="mt-8 text-xs text-secondary-500"
                  >
                    Need help? Contact our support team at +1 (555) 123-4567
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 shadow-xl sticky top-8">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-secondary-900 mb-2">Booking Summary</h3>
                <p className="text-sm text-secondary-600">Review your reservation details</p>
              </div>

              {selectedCar ? (
                <div className="space-y-6">
                  {/* Selected Car */}
                  <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-xl p-4">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="relative w-16 h-16 rounded-xl overflow-hidden shadow-md">
                      <Image
                        src={selectedCar.image}
                        alt={selectedCar.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-secondary-900 text-sm">{selectedCar.name}</h4>
                        <p className="text-xs text-secondary-600">{selectedCar.category}</p>
                        <div className="flex items-center space-x-1 mt-1">
                          <Star className="h-3 w-3 text-yellow-400 fill-current" />
                          <span className="text-xs text-secondary-600">{selectedCar.rating}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Pricing Breakdown */}
                  <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-secondary-600">Daily Rate:</span>
                      <span className="font-medium">${selectedCar.price}</span>
                      </div>

                      {bookingData.pickupDate && bookingData.returnDate && (
                        <>
                          <div className="flex justify-between text-sm">
                            <span className="text-secondary-600">Duration:</span>
                          <span className="font-medium">
                              {Math.ceil(
                                (new Date(bookingData.returnDate).getTime() - new Date(bookingData.pickupDate).getTime())
                                / (1000 * 60 * 60 * 24)
                              )} days
                            </span>
                          </div>

                        <div className="border-t border-secondary-200 pt-3">
                          <div className="flex justify-between text-lg font-bold">
                            <span>Total Amount:</span>
                            <span className="text-primary-600">${calculateTotal()}</span>
                          </div>
                          </div>
                        </>
                      )}
                  </div>

                  {/* Benefits */}
                  <div className="space-y-3">
                    <div className="bg-green-50 rounded-lg p-3">
                      <div className="flex items-center space-x-2 text-sm text-green-700">
                      <Shield className="h-4 w-4" />
                      <span>Full insurance included</span>
                      </div>
                    </div>

                    <div className="bg-blue-50 rounded-lg p-3">
                      <div className="flex items-center space-x-2 text-sm text-blue-700">
                        <Clock className="h-4 w-4" />
                        <span>24/7 roadside assistance</span>
                      </div>
                    </div>

                    <div className="bg-purple-50 rounded-lg p-3">
                      <div className="flex items-center space-x-2 text-sm text-purple-700">
                        <Car className="h-4 w-4" />
                        <span>Unlimited mileage</span>
                      </div>
                    </div>
                  </div>

                  {/* Trust indicators */}
                  <div className="bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl p-4 text-white text-center">
                    <div className="text-sm font-medium mb-1">Secure Booking</div>
                    <div className="text-xs opacity-90">Protected by SSL encryption</div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-8">
                  <Car className="h-12 w-12 text-secondary-300 mx-auto mb-3" />
                  <p className="text-secondary-500 text-sm">Select a vehicle to see pricing</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        {currentStep < 5 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-between items-center mt-12 p-6 bg-white rounded-2xl shadow-lg"
          >
            <button
              onClick={prevStep}
              disabled={currentStep === 1}
              className={`flex items-center space-x-3 px-8 py-4 rounded-xl font-semibold transition-all duration-200 ${
                currentStep === 1
                  ? 'bg-secondary-100 text-secondary-400 cursor-not-allowed'
                  : 'bg-secondary-100 text-secondary-700 hover:bg-secondary-200 hover:shadow-md'
              }`}
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Previous</span>
            </button>

            <div className="flex items-center space-x-4">
              <div className="text-sm text-secondary-600">
                {isStepValid() ? (
                  <span className="flex items-center space-x-1 text-green-600">
                    <CheckCircle className="h-4 w-4" />
                    <span>Ready to proceed</span>
                  </span>
                ) : (
                  <span className="flex items-center space-x-1 text-amber-600">
                    <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
                    <span>Please complete all required fields</span>
                  </span>
                )}
              </div>

            <button
              onClick={currentStep === 4 ? handleSubmit : nextStep}
              disabled={!isStepValid()}
                className={`flex items-center space-x-3 px-8 py-4 rounded-xl font-semibold transition-all duration-200 ${
                !isStepValid()
                  ? 'bg-secondary-300 text-secondary-500 cursor-not-allowed'
                    : 'bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'
              }`}
            >
                <span>{currentStep === 4 ? 'Complete Booking' : 'Continue'}</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
          </motion.div>
        )}
      </div>
      </div>
    </PageTransition>
  )
}

export default function BookingPage() {
  return <BookingPageContent />
}
