'use client'

import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import Link from 'next/link'

export function WhatsAppChat() {
  const phoneNumber = '+15551234567' // Replace with actual WhatsApp number
  const message = encodeURIComponent('Hi! I\'m interested in renting a luxury car from EliteDrive.')

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 2, type: "spring", stiffness: 260, damping: 20 }}
      className="fixed bottom-6 left-6 z-50"
    >
      <Link
        href={`https://wa.me/${phoneNumber}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        className="group"
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="relative bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300"
        >
          {/* Pulse animation */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute inset-0 bg-green-500 rounded-full"
          />

          <MessageCircle className="h-6 w-6 relative z-10" />

          {/* Tooltip */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileHover={{ opacity: 1, x: 0 }}
            className="absolute left-full ml-3 top-1/2 transform -translate-y-1/2 bg-secondary-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            Chat with us on WhatsApp
            <div className="absolute right-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-r-secondary-900"></div>
          </motion.div>
        </motion.div>
      </Link>
    </motion.div>
  )
}
