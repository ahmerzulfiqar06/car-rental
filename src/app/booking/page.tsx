'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Car,
  User,
  CreditCard,
  CheckCircle,
  ArrowRight,
  ArrowLeft,
  Calendar,
  MapPin,
  Clock,
  Shield,
  Star
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Navbar } from '@/components/Navbar'

// Car data - in a real app, this would come from an API
const carsData = [
  {
    id: 1,
    name: 'Lamborghini Huracan',
    price: 299,
    image: 'https://images.unsplash.com/photo-1544829099-b9a0e3421cbd?w=800&h=600&fit=crop',
    category: 'Sports Car'
  },
  {
    id: 2,
    name: 'Mercedes-Benz S-Class',
    price: 189,
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&h=600&fit=crop',
    category: 'Luxury Sedan'
  }
]

const steps = [
  { id: 1, name: 'Car Selection', icon: Car },
  { id: 2, name: 'Booking Details', icon: Calendar },
  { id: 3, name: 'Personal Info', icon: User },
  { id: 4, name: 'Payment', icon: CreditCard },
  { id: 5, name: 'Confirmation', icon: CheckCircle }
]

export default function BookingPage() {
  const searchParams = useSearchParams()
  const carId = searchParams.get('car')
  const [currentStep, setCurrentStep] = useState(1)
  const [selectedCar, setSelectedCar] = useState<any>(null)

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

  useEffect(() => {
    if (carId) {
      const car = carsData.find(c => c.id.toString() === carId)
      if (car) {
        setSelectedCar(car)
        setBookingData(prev => ({ ...prev, carId }))
        setCurrentStep(2) // Skip to booking details if car is pre-selected
      }
    }
  }, [carId])

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

  const handleInputChange = (field: string, value: any) => {
    setBookingData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = () => {
    // In a real app, this would submit to an API
    alert('Booking submitted successfully! (This is a demo)')
    setCurrentStep(5)
  }

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
    <div className="min-h-screen bg-secondary-50 pt-26">
      <Navbar />
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/" className="text-2xl font-bold text-primary-600">
                EliteDrive
              </Link>
              <span className="text-secondary-400">|</span>
              <span className="text-secondary-600">Car Booking</span>
            </div>
            <Link
              href="/cars"
              className="text-secondary-600 hover:text-primary-600 transition-colors"
            >
              ← Back to Cars
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={{
                    scale: currentStep >= step.id ? 1 : 0.8,
                    backgroundColor: currentStep >= step.id ? '#3b82f6' : '#e5e7eb'
                  }}
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold"
                >
                  {currentStep > step.id ? (
                    <CheckCircle className="h-6 w-6" />
                  ) : (
                    <step.icon className="h-5 w-5" />
                  )}
                </motion.div>
                <span className={`ml-3 font-medium ${
                  currentStep >= step.id ? 'text-primary-600' : 'text-secondary-400'
                }`}>
                  {step.name}
                </span>
                {index < steps.length - 1 && (
                  <div className={`w-16 h-1 mx-4 rounded ${
                    currentStep > step.id ? 'bg-primary-600' : 'bg-secondary-200'
                  }`} />
                )}
              </div>
            ))}
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
                  className="bg-white rounded-2xl p-8 shadow-lg"
                >
                  <h2 className="text-2xl font-bold text-secondary-900 mb-6">Select Your Car</h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {carsData.map((car) => (
                      <motion.div
                        key={car.id}
                        whileHover={{ scale: 1.02 }}
                        className={`border-2 rounded-xl p-6 cursor-pointer transition-all ${
                          selectedCar?.id === car.id
                            ? 'border-primary-500 bg-primary-50'
                            : 'border-secondary-200 hover:border-primary-300'
                        }`}
                        onClick={() => {
                          setSelectedCar(car)
                          handleInputChange('carId', car.id.toString())
                        }}
                      >
                        <div className="relative h-32 mb-4 rounded-lg overflow-hidden">
                          <Image
                            src={car.image}
                            alt={car.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <h3 className="font-bold text-secondary-900 mb-2">{car.name}</h3>
                        <p className="text-secondary-600 text-sm mb-2">{car.category}</p>
                        <p className="text-primary-600 font-semibold">${car.price}/day</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Step 2: Booking Details */}
              {currentStep === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="bg-white rounded-2xl p-8 shadow-lg"
                >
                  <h2 className="text-2xl font-bold text-secondary-900 mb-6">Booking Details</h2>

                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-secondary-700 mb-2">
                          Pick-up Date *
                        </label>
                        <input
                          type="date"
                          value={bookingData.pickupDate}
                          onChange={(e) => handleInputChange('pickupDate', e.target.value)}
                          min={new Date().toISOString().split('T')[0]}
                          className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-secondary-700 mb-2">
                          Return Date *
                        </label>
                        <input
                          type="date"
                          value={bookingData.returnDate}
                          onChange={(e) => handleInputChange('returnDate', e.target.value)}
                          min={bookingData.pickupDate || new Date().toISOString().split('T')[0]}
                          className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-secondary-700 mb-2">
                          Pick-up Location
                        </label>
                        <select
                          value={bookingData.pickupLocation}
                          onChange={(e) => handleInputChange('pickupLocation', e.target.value)}
                          className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        >
                          <option value="downtown">Downtown Location</option>
                          <option value="airport">Airport Terminal</option>
                          <option value="uptown">Uptown Office</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-secondary-700 mb-2">
                          Return Location
                        </label>
                        <select
                          value={bookingData.returnLocation}
                          onChange={(e) => handleInputChange('returnLocation', e.target.value)}
                          className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        >
                          <option value="downtown">Downtown Location</option>
                          <option value="airport">Airport Terminal</option>
                          <option value="uptown">Uptown Office</option>
                        </select>
                      </div>
                    </div>

                    <div className="bg-secondary-50 rounded-lg p-4">
                      <h4 className="font-medium text-secondary-900 mb-2">Additional Services</h4>
                      <div className="space-y-2">
                        <label className="flex items-center space-x-2">
                          <input type="checkbox" className="rounded" />
                          <span className="text-sm text-secondary-700">GPS Navigation ($15/day)</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input type="checkbox" className="rounded" />
                          <span className="text-sm text-secondary-700">Child Seat ($10/day)</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input type="checkbox" className="rounded" />
                          <span className="text-sm text-secondary-700">Additional Driver ($20/day)</span>
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
                          Driver's License Number *
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
                  className="bg-white rounded-2xl p-8 shadow-lg text-center"
                >
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="h-12 w-12 text-green-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-secondary-900 mb-4">Booking Confirmed!</h2>
                  <p className="text-secondary-600 mb-8">
                    Your reservation has been successfully processed. You will receive a confirmation email shortly.
                  </p>
                  <div className="bg-secondary-50 rounded-lg p-6 mb-6">
                    <h3 className="font-semibold text-secondary-900 mb-4">Booking Details</h3>
                    <div className="text-left space-y-2">
                      <div className="flex justify-between">
                        <span className="text-secondary-600">Car:</span>
                        <span className="font-medium">{selectedCar?.name}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-secondary-600">Pick-up:</span>
                        <span className="font-medium">{bookingData.pickupDate}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-secondary-600">Return:</span>
                        <span className="font-medium">{bookingData.returnDate}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-secondary-600">Total:</span>
                        <span className="font-medium">${calculateTotal()}</span>
                      </div>
                    </div>
                  </div>
                  <Link href="/" className="btn-primary">
                    Back to Home
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 shadow-lg sticky top-8">
              <h3 className="text-lg font-bold text-secondary-900 mb-6">Booking Summary</h3>

              {selectedCar && (
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="relative w-16 h-16 rounded-lg overflow-hidden">
                      <Image
                        src={selectedCar.image}
                        alt={selectedCar.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-secondary-900">{selectedCar.name}</h4>
                      <p className="text-sm text-secondary-600">{selectedCar.category}</p>
                    </div>
                  </div>

                  <div className="border-t border-secondary-200 pt-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-secondary-600">Daily Rate:</span>
                        <span>${selectedCar.price}</span>
                      </div>
                      {bookingData.pickupDate && bookingData.returnDate && (
                        <>
                          <div className="flex justify-between text-sm">
                            <span className="text-secondary-600">Duration:</span>
                            <span>
                              {Math.ceil(
                                (new Date(bookingData.returnDate).getTime() - new Date(bookingData.pickupDate).getTime())
                                / (1000 * 60 * 60 * 24)
                              )} days
                            </span>
                          </div>
                          <div className="flex justify-between font-semibold text-lg border-t border-secondary-200 pt-2">
                            <span>Total:</span>
                            <span className="text-primary-600">${calculateTotal()}</span>
                          </div>
                        </>
                      )}
                    </div>
                  </div>

                  <div className="bg-secondary-50 rounded-lg p-4">
                    <div className="flex items-center space-x-2 text-sm text-secondary-600">
                      <Shield className="h-4 w-4" />
                      <span>Full insurance included</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        {currentStep < 5 && (
          <div className="flex justify-between mt-8">
            <button
              onClick={prevStep}
              disabled={currentStep === 1}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-colors ${
                currentStep === 1
                  ? 'bg-secondary-200 text-secondary-400 cursor-not-allowed'
                  : 'bg-secondary-200 text-secondary-700 hover:bg-secondary-300'
              }`}
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Previous</span>
            </button>

            <button
              onClick={currentStep === 4 ? handleSubmit : nextStep}
              disabled={!isStepValid()}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-colors ${
                !isStepValid()
                  ? 'bg-secondary-300 text-secondary-500 cursor-not-allowed'
                  : 'bg-primary-600 hover:bg-primary-700 text-white'
              }`}
            >
              <span>{currentStep === 4 ? 'Complete Booking' : 'Next'}</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
