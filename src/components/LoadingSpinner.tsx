'use client'

import { motion } from 'framer-motion/client'

export function LoadingSpinner() {
  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
      <div className="text-center">
        {/* Logo Animation */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            duration: 0.8,
            type: "spring",
            stiffness: 100,
            damping: 20
          }}
          className="mb-8"
        >
          <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="text-white text-2xl font-bold"
            >
              E
            </motion.div>
          </div>
        </motion.div>

        {/* Loading Text */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-2xl font-bold text-secondary-900 mb-4"
        >
          EliteDrive
        </motion.h2>

        {/* Loading Bar */}
        <div className="w-64 h-1 bg-secondary-200 rounded-full overflow-hidden">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
              repeatDelay: 0.5
            }}
            className="h-full bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"
          />
        </div>

        {/* Loading Dots */}
        <div className="flex justify-center space-x-2 mt-6">
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: index * 0.2,
                ease: "easeInOut",
              }}
              className="w-3 h-3 bg-primary-500 rounded-full"
            />
          ))}
        </div>
      </div>
    </div>
  )
}
