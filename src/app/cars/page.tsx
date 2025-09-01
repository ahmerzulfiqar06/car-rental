'use client'

import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Search, Filter, SlidersHorizontal, X, Star, Fuel, Users, Settings } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Navbar } from '@/components/Navbar'

interface Car {
  id: number
  name: string
  category: string
  price: number
  image: string
  rating: number
  reviews: number
  features: string[]
  description: string
  specs: {
    engine: string
    transmission: string
    fuelType: string
    seats: number
    doors: number
    luggage: string
  }
  availability: boolean
  location: string
}

// Extended car data with more vehicles and detailed specs
const carsData: Car[] = [
  {
    id: 1,
    name: 'Lamborghini Huracan',
    category: 'Sports Car',
    price: 299,
    image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&h=600&fit=crop',
    rating: 5.0,
    reviews: 128,
    features: ['450 HP', '2 Seats', 'Automatic'],
    description: 'Experience the thrill of Italian engineering with this stunning supercar.',
    specs: {
      engine: '5.2L V10',
      transmission: '7-Speed DCT',
      fuelType: 'Petrol',
      seats: 2,
      doors: 2,
      luggage: 'Limited'
    },
    availability: true,
    location: 'Downtown'
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
    description: 'The epitome of luxury and comfort for the discerning executive.',
    specs: {
      engine: '3.0L V6 Turbo',
      transmission: '9-Speed Automatic',
      fuelType: 'Petrol',
      seats: 5,
      doors: 4,
      luggage: 'Large'
    },
    availability: true,
    location: 'Airport'
  },
  {
    id: 3,
    name: 'BMW X5',
    category: 'SUV',
    price: 149,
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&h=600&fit=crop',
    rating: 4.8,
    reviews: 189,
    features: ['375 HP', '7 Seats', 'All-Wheel Drive'],
    description: 'Powerful performance meets versatile capability in this premium SUV.',
    specs: {
      engine: '3.0L I6 Turbo',
      transmission: '8-Speed Automatic',
      fuelType: 'Petrol',
      seats: 7,
      doors: 5,
      luggage: 'Extra Large'
    },
    availability: true,
    location: 'Downtown'
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
    description: 'Iconic design meets cutting-edge performance in this legendary sports car.',
    specs: {
      engine: '3.0L Flat-6 Turbo',
      transmission: '8-Speed PDK',
      fuelType: 'Petrol',
      seats: 4,
      doors: 2,
      luggage: 'Limited'
    },
    availability: false,
    location: 'Downtown'
  },
  {
    id: 5,
    name: 'Audi A8',
    category: 'Luxury Sedan',
    price: 199,
    image: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=800&h=600&fit=crop',
    rating: 4.7,
    reviews: 145,
    features: ['340 HP', '5 Seats', 'Quattro AWD'],
    description: 'German engineering excellence with cutting-edge technology and comfort.',
    specs: {
      engine: '3.0L V6 Turbo',
      transmission: '8-Speed Automatic',
      fuelType: 'Petrol',
      seats: 5,
      doors: 4,
      luggage: 'Large'
    },
    availability: true,
    location: 'Airport'
  },
  {
    id: 6,
    name: 'Range Rover Sport',
    category: 'SUV',
    price: 229,
    image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&h=600&fit=crop',
    rating: 4.8,
    reviews: 203,
    features: ['355 HP', '5 Seats', 'Terrain Response'],
    description: 'Luxury meets capability in this iconic British SUV.',
    specs: {
      engine: '3.0L V6 Turbo',
      transmission: '8-Speed Automatic',
      fuelType: 'Diesel',
      seats: 5,
      doors: 5,
      luggage: 'Extra Large'
    },
    availability: true,
    location: 'Downtown'
  },
  {
    id: 7,
    name: 'Ferrari 488',
    category: 'Sports Car',
    price: 399,
    image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&h=600&fit=crop',
    rating: 5.0,
    reviews: 76,
    features: ['661 HP', '2 Seats', 'F1 Transmission'],
    description: 'The pinnacle of Italian automotive excellence and performance.',
    specs: {
      engine: '3.9L V8 Turbo',
      transmission: '7-Speed F1 DCT',
      fuelType: 'Petrol',
      seats: 2,
      doors: 2,
      luggage: 'Limited'
    },
    availability: true,
    location: 'Downtown'
  },
  {
    id: 8,
    name: 'Bentley Continental GT',
    category: 'Luxury Coupe',
    price: 459,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
    rating: 4.9,
    reviews: 89,
    features: ['626 HP', '4 Seats', 'Handcrafted Interior'],
    description: 'British luxury at its finest with unparalleled craftsmanship.',
    specs: {
      engine: '6.0L W12',
      transmission: '8-Speed Automatic',
      fuelType: 'Petrol',
      seats: 4,
      doors: 2,
      luggage: 'Medium'
    },
    availability: false,
    location: 'Airport'
  },
  {
    id: 9,
    name: 'Tesla Model S',
    category: 'Electric Sedan',
    price: 179,
    image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&h=600&fit=crop',
    rating: 4.6,
    reviews: 312,
    features: ['Electric', '5 Seats', 'Autopilot'],
    description: 'Revolutionary electric performance with cutting-edge technology.',
    specs: {
      engine: 'Electric Motor',
      transmission: 'Single-Speed',
      fuelType: 'Electric',
      seats: 5,
      doors: 4,
      luggage: 'Large'
    },
    availability: true,
    location: 'Downtown'
  }
]

const categories = ['All', 'Sports Car', 'Luxury Sedan', 'SUV', 'Luxury Coupe', 'Electric Sedan']
const priceRanges = ['All', 'Under $200', '$200-$300', '$300-$400', 'Over $400']
const locations = ['All', 'Downtown', 'Airport']

export default function CarsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedPriceRange, setSelectedPriceRange] = useState('All')
  const [selectedLocation, setSelectedLocation] = useState('All')
  const [sortBy, setSortBy] = useState('name')
  const [showFilters, setShowFilters] = useState(false)

  const filteredAndSortedCars = useMemo(() => {
    let filtered = carsData.filter((car) => {
      const matchesSearch = car.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          car.category.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = selectedCategory === 'All' || car.category === selectedCategory
      const matchesLocation = selectedLocation === 'All' || car.location === selectedLocation

      let matchesPrice = true
      if (selectedPriceRange === 'Under $200') matchesPrice = car.price < 200
      else if (selectedPriceRange === '$200-$300') matchesPrice = car.price >= 200 && car.price < 300
      else if (selectedPriceRange === '$300-$400') matchesPrice = car.price >= 300 && car.price < 400
      else if (selectedPriceRange === 'Over $400') matchesPrice = car.price >= 400

      return matchesSearch && matchesCategory && matchesPrice && matchesLocation
    })

    // Sort cars
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price
        case 'price-high':
          return b.price - a.price
        case 'rating':
          return b.rating - a.rating
        case 'name':
        default:
          return a.name.localeCompare(b.name)
      }
    })

    return filtered
  }, [searchTerm, selectedCategory, selectedPriceRange, selectedLocation, sortBy])

  return (
    <div className="min-h-screen bg-secondary-50 pt-26">
      <Navbar />
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-secondary-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold text-secondary-900 mb-4">
              Our <span className="text-primary-600">Luxury Fleet</span>
            </h1>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              Discover our premium collection of high-end vehicles. From sleek sports cars to elegant sedans,
              find the perfect ride for your special occasion.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filters */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-secondary-400" />
              <input
                type="text"
                placeholder="Search cars..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              <option value="name">Sort by Name</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>

            {/* Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden flex items-center space-x-2 px-4 py-3 bg-secondary-100 text-secondary-700 rounded-lg hover:bg-secondary-200 transition-colors"
            >
              <SlidersHorizontal className="h-5 w-5" />
              <span>Filters</span>
            </button>
          </div>

          {/* Filters */}
          <motion.div
            initial={false}
            animate={{ height: showFilters ? 'auto' : 0, opacity: showFilters ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-secondary-200 mt-6">
              {/* Category Filter */}
              <div>
                <label className="block text-sm font-medium text-secondary-700 mb-2">
                  Category
                </label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-3 py-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              {/* Price Range Filter */}
              <div>
                <label className="block text-sm font-medium text-secondary-700 mb-2">
                  Price Range
                </label>
                <select
                  value={selectedPriceRange}
                  onChange={(e) => setSelectedPriceRange(e.target.value)}
                  className="w-full px-3 py-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  {priceRanges.map((range) => (
                    <option key={range} value={range}>{range}</option>
                  ))}
                </select>
              </div>

              {/* Location Filter */}
              <div>
                <label className="block text-sm font-medium text-secondary-700 mb-2">
                  Location
                </label>
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full px-3 py-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  {locations.map((location) => (
                    <option key={location} value={location}>{location}</option>
                  ))}
                </select>
              </div>
            </div>
          </motion.div>

          {/* Desktop Filters */}
          <div className="hidden lg:grid grid-cols-3 gap-6 pt-6 border-t border-secondary-200 mt-6">
            {/* Category Filter */}
            <div>
              <label className="block text-sm font-medium text-secondary-700 mb-2">
                Category
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-3 py-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            {/* Price Range Filter */}
            <div>
              <label className="block text-sm font-medium text-secondary-700 mb-2">
                Price Range
              </label>
              <select
                value={selectedPriceRange}
                onChange={(e) => setSelectedPriceRange(e.target.value)}
                className="w-full px-3 py-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                {priceRanges.map((range) => (
                  <option key={range} value={range}>{range}</option>
                ))}
              </select>
            </div>

            {/* Location Filter */}
            <div>
              <label className="block text-sm font-medium text-secondary-700 mb-2">
                Location
              </label>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full px-3 py-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                {locations.map((location) => (
                  <option key={location} value={location}>{location}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-secondary-600">
            Showing {filteredAndSortedCars.length} of {carsData.length} vehicles
          </p>
        </div>

        {/* Cars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAndSortedCars.map((car, index) => (
            <motion.div
              key={car.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card-hover bg-white rounded-2xl shadow-lg overflow-hidden border border-secondary-200"
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
                {!car.availability && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <span className="bg-red-600 text-white px-4 py-2 rounded-lg font-medium">
                      Currently Unavailable
                    </span>
                  </div>
                )}
              </div>

              {/* Car Details */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-secondary-900">{car.name}</h3>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-secondary-600">{car.rating}</span>
                  </div>
                </div>

                <p className="text-secondary-600 text-sm mb-4">{car.description}</p>

                {/* Specs */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center space-x-2 text-sm text-secondary-600">
                    <Fuel className="h-4 w-4" />
                    <span>{car.specs.fuelType}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-secondary-600">
                    <Users className="h-4 w-4" />
                    <span>{car.specs.seats} Seats</span>
                  </div>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {car.features.slice(0, 3).map((feature, featureIndex) => (
                    <span
                      key={featureIndex}
                      className="bg-secondary-100 text-secondary-700 px-2 py-1 rounded text-xs font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex space-x-2">
                  <Link
                    href={`/cars/1#${car.id}`}
                    className="flex-1 bg-secondary-900 hover:bg-secondary-800 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 text-center text-sm"
                  >
                    View Details
                  </Link>
                  <button
                    disabled={!car.availability}
                    className={`flex-1 font-semibold py-2 px-4 rounded-lg transition-colors duration-200 text-sm ${
                      car.availability
                        ? 'bg-primary-600 hover:bg-primary-700 text-white'
                        : 'bg-secondary-300 text-secondary-500 cursor-not-allowed'
                    }`}
                  >
                    {car.availability ? 'Book Now' : 'Unavailable'}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {filteredAndSortedCars.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="text-6xl mb-4">🚗</div>
            <h3 className="text-2xl font-bold text-secondary-900 mb-2">No cars found</h3>
            <p className="text-secondary-600 mb-6">
              Try adjusting your search criteria or filters to find more vehicles.
            </p>
            <button
              onClick={() => {
                setSearchTerm('')
                setSelectedCategory('All')
                setSelectedPriceRange('All')
                setSelectedLocation('All')
                setSortBy('name')
              }}
              className="btn-primary"
            >
              Clear All Filters
            </button>
          </motion.div>
        )}
      </div>
    </div>
  )
}
