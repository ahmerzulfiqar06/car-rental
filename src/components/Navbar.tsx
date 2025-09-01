'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Car, Phone, Mail, MapPin, Clock } from 'lucide-react'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)


  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Cars', href: '/cars' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <>
      {/* Top Bar */}
      <div className="fixed top-0 left-0 right-0 z-40 bg-secondary-900 text-white text-xs sm:text-sm">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
          {/* Desktop Layout */}
          <div className="hidden md:flex justify-between items-center h-10">
            <div className="flex items-center space-x-4 lg:space-x-6">
              <div className="flex items-center space-x-1 lg:space-x-2">
                <Phone className="h-3 w-3 flex-shrink-0" />
                <span className="truncate">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-1 lg:space-x-2">
                <Mail className="h-3 w-3 flex-shrink-0" />
                <span className="truncate hidden lg:inline">info@elitedrive.com</span>
                <span className="truncate lg:hidden">Contact</span>
              </div>
            </div>
            <div className="flex items-center space-x-4 lg:space-x-6">
              <div className="flex items-center space-x-1 lg:space-x-2">
                <MapPin className="h-3 w-3 flex-shrink-0" />
                <span className="truncate">Downtown</span>
              </div>
              <div className="flex items-center space-x-1 lg:space-x-2">
                <Clock className="h-3 w-3 flex-shrink-0" />
                <span className="truncate hidden lg:inline">Mon-Fri: 8AM-8PM</span>
                <span className="truncate lg:hidden">8AM-8PM</span>
              </div>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden flex justify-between items-center h-8">
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-1">
                <Phone className="h-3 w-3 flex-shrink-0" />
                <span className="truncate text-xs">+1 (555) 123-4567</span>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-1">
                <Clock className="h-3 w-3 flex-shrink-0" />
                <span className="truncate text-xs">8AM-8PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-8 md:top-10 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-lg border-b border-secondary-200"
      >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2"
            >
              <motion.div
                animate={{
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Car className="h-8 w-8 text-primary-600" />
              </motion.div>
              <span className="text-xl font-bold text-secondary-900">
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  Elite
                </motion.span>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="text-primary-600"
                >
                  Drive
                </motion.span>
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-secondary-700 hover:text-primary-600 font-medium transition-colors duration-200 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 group-hover:w-full transition-all duration-200" />
              </Link>
            ))}
          </div>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-secondary-600">
              <Phone className="h-4 w-4" />
              <span className="text-sm">+1 (555) 123-4567</span>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              Book Now
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-secondary-700 hover:text-primary-600 hover:bg-secondary-100 transition-colors"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-secondary-200"
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-secondary-700 hover:text-primary-600 font-medium py-2 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-secondary-200">
                <div className="flex items-center space-x-2 text-secondary-600 mb-4">
                  <Phone className="h-4 w-4" />
                  <span className="text-sm">+1 (555) 123-4567</span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full btn-primary"
                  onClick={() => setIsOpen(false)}
                >
                  Book Now
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
    </>
  )
}
