'use client'

import { motion } from 'framer-motion'
import {
  Award,
  Users,
  Shield,
  Star,
  CheckCircle,
  Target,
  Heart,
  Globe,
  Clock,
  Car,
  Trophy,
  MapPin
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Navbar } from '@/components/Navbar'

const stats = [
  { number: '10+', label: 'Years of Excellence', icon: Trophy },
  { number: '50K+', label: 'Happy Customers', icon: Users },
  { number: '500+', label: 'Luxury Vehicles', icon: Car },
  { number: '15+', label: 'Cities Covered', icon: MapPin }
]

const values = [
  {
    icon: Shield,
    title: 'Trust & Safety',
    description: 'Your safety is our top priority. All our vehicles undergo rigorous maintenance and safety checks.'
  },
  {
    icon: Star,
    title: 'Premium Quality',
    description: 'We only offer the finest luxury vehicles, ensuring an exceptional driving experience every time.'
  },
  {
    icon: Heart,
    title: 'Customer First',
    description: 'Our dedicated team provides personalized service to make your journey unforgettable.'
  },
  {
    icon: Globe,
    title: 'Global Standards',
    description: 'We maintain international standards in service quality, vehicle maintenance, and customer care.'
  }
]

const team = [
  {
    name: 'Alexander Chen',
    role: 'CEO & Founder',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
    bio: 'With over 15 years in luxury automotive industry, Alexander founded EliteDrive with a vision to redefine premium car rental services.'
  },
  {
    name: 'Sarah Johnson',
    role: 'Operations Director',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face',
    bio: 'Sarah ensures every vehicle meets our exacting standards and every customer receives world-class service.'
  },
  {
    name: 'Marcus Rodriguez',
    role: 'Fleet Manager',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
    bio: 'Marcus oversees our premium fleet, ensuring each vehicle is maintained to perfection and ready for your journey.'
  }
]

const milestones = [
  {
    year: '2014',
    title: 'Company Founded',
    description: 'EliteDrive was established with a vision to provide premium car rental services.'
  },
  {
    year: '2016',
    title: 'First Location',
    description: 'Opened our flagship showroom in downtown Manhattan with 50 luxury vehicles.'
  },
  {
    year: '2018',
    title: 'Expansion Begins',
    description: 'Expanded to 5 major cities with over 200 vehicles in our premium fleet.'
  },
  {
    year: '2020',
    title: 'Digital Transformation',
    description: 'Launched our online booking platform and mobile app for seamless reservations.'
  },
  {
    year: '2022',
    title: 'International Recognition',
    description: 'Awarded "Best Luxury Car Rental Service" by Luxury Travel Magazine.'
  },
  {
    year: '2024',
    title: '15 Cities Network',
    description: 'Now serving customers across 15 major cities with 500+ luxury vehicles.'
  }
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-secondary-50 pt-26">
      <Navbar />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-900 via-secondary-900 to-accent-900 text-white py-20">
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
              About <span className="text-primary-400">EliteDrive</span>
            </h1>
            <p className="text-xl text-secondary-200 max-w-3xl mx-auto leading-relaxed">
              Redefining luxury car rental with exceptional service, premium vehicles,
              and unforgettable experiences since 2014.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-primary-600" />
                </div>
                <div className="text-3xl font-bold text-secondary-900 mb-2">{stat.number}</div>
                <div className="text-secondary-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-secondary-700 leading-relaxed">
                <p>
                  Founded in 2014, EliteDrive began with a simple yet powerful vision:
                  to make luxury car rental accessible to everyone who deserves an extraordinary
                  driving experience. What started as a small fleet of premium vehicles has
                  grown into a trusted name in luxury transportation.
                </p>
                <p>
                  We believe that every journey should be memorable. Whether you're celebrating
                  a special occasion, conducting business, or simply want to experience the thrill
                  of driving a luxury vehicle, we provide the perfect vehicle and impeccable service
                  to make it happen.
                </p>
                <p>
                  Our commitment to excellence extends beyond our vehicles. We carefully select
                  and maintain each car in our fleet, train our staff to provide exceptional service,
                  and continuously innovate to improve your experience.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-video bg-gradient-to-br from-primary-200 to-accent-200 rounded-2xl flex items-center justify-center">
                <Car className="h-32 w-32 text-primary-600" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
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
              Our Values
            </h2>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              The principles that guide everything we do and shape the experiences we create.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card-hover bg-secondary-50 rounded-2xl p-6 text-center"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-secondary-900 mb-3">{value.title}</h3>
                <p className="text-secondary-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team Section */}
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
              Meet Our Team
            </h2>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              The passionate professionals dedicated to making your luxury car rental experience exceptional.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card-hover bg-white rounded-2xl p-8 text-center shadow-lg"
              >
                <div className="relative w-24 h-24 rounded-full overflow-hidden mx-auto mb-6">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-secondary-900 mb-2">{member.name}</h3>
                <p className="text-primary-600 font-medium mb-4">{member.role}</p>
                <p className="text-secondary-600 leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
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
              Our Journey
            </h2>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              Key milestones that have shaped EliteDrive into the premier luxury car rental service.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-primary-200 hidden md:block" />

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-col md:gap-8`}
                >
                  <div className="flex-1 md:max-w-md">
                    <div className={`card-hover bg-secondary-50 rounded-2xl p-6 ${
                      index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                    }`}>
                      <div className="text-2xl font-bold text-primary-600 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-secondary-900 mb-3">{milestone.title}</h3>
                      <p className="text-secondary-600">{milestone.description}</p>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="relative">
                    <div className="w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-lg" />
                  </div>

                  <div className="flex-1 md:max-w-md" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-accent-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Experience Luxury?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Join thousands of satisfied customers who trust EliteDrive for their premium transportation needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/cars" className="btn-secondary text-lg px-8 py-4">
                Explore Our Fleet
              </Link>
              <Link href="/booking" className="bg-white text-primary-600 hover:bg-secondary-50 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 text-lg">
                Book Now
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
