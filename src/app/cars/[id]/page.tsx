import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { Navbar } from '@/components/Navbar'
import { CarDetailClient } from '@/components/CarDetailClient'

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

// Generate static params for all cars
export async function generateStaticParams() {
  return carsData.map((car) => ({
    id: car.id.toString(),
  }))
}

interface PageProps {
  params: Promise<{
    id: string
  }>
}

export default async function CarDetailPage({ params }: PageProps) {
  const resolvedParams = await params
  const carId = parseInt(resolvedParams.id)
  const car = carsData.find(c => c.id === carId)

  if (!car) {
    return (
      <div className="min-h-screen bg-secondary-50 pt-26">
        <Navbar />
        <div className="flex items-center justify-center min-h-[50vh]">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-secondary-900 mb-4">Car Not Found</h1>
            <p className="text-secondary-600 mb-6">The vehicle you&apos;re looking for doesn&apos;t exist.</p>
            <Link href="/cars" className="btn-primary">
              Back to Cars
            </Link>
          </div>
        </div>
      </div>
    )
  }



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

      <CarDetailClient car={car} />
    </div>
  )
}
