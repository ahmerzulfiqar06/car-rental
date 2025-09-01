'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react'

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone',
    details: ['+1 (555) 123-4567', '+1 (555) 123-4568'],
    description: 'Call us anytime for immediate assistance'
  },
  {
    icon: Mail,
    title: 'Email',
    details: ['info@elitedrive.com', 'support@elitedrive.com'],
    description: 'Send us an email and we&apos;ll respond within 24 hours'
  },
  {
    icon: MapPin,
    title: 'Location',
    details: ['123 Luxury Avenue', 'Premium District, NY 10001'],
    description: 'Visit our showroom for in-person service'
  },
  {
    icon: Clock,
    title: 'Business Hours',
    details: ['Mon-Fri: 8AM - 8PM', 'Sat-Sun: 9AM - 6PM'],
    description: 'We&apos;re here when you need us'
  }
]

export function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      })
    }, 3000)
  }

  return (
    <section className="py-20 bg-white">
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
            Get in <span className="text-primary-600">Touch</span>
          </h2>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            Ready to experience luxury? Contact us today to book your premium vehicle
            or learn more about our services.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-secondary-50 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-secondary-900 mb-6">
              Send us a Message
            </h3>
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="h-12 w-12 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-secondary-900 mb-4">Message Sent!</h3>
                  <p className="text-secondary-600">
                    Thank you for contacting us. We&apos;ll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-secondary-700 mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        required
                        className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-secondary-700 mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        required
                        className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                      className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-secondary-700 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-secondary-700 mb-2">
                      Service Type
                    </label>
                    <select
                      id="service"
                      value={formData.service}
                      onChange={(e) => handleInputChange('service', e.target.value)}
                      className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    >
                      <option value="">Select a service</option>
                      <option value="luxury-rental">Luxury Car Rental</option>
                      <option value="airport-transfer">Airport Transfer</option>
                      <option value="chauffeur-service">Chauffeur Service</option>
                      <option value="event-transportation">Event Transportation</option>
                      <option value="corporate-fleet">Corporate Fleet</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-secondary-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      required
                      className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none"
                      placeholder="Tell us about your requirements..."
                    />
                  </div>
                  <motion.button
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2 ${
                      isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="h-5 w-5" />
                      </>
                    )}
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-secondary-900 mb-6">
                Contact Information
              </h3>
              <p className="text-secondary-600 mb-8">
                Reach out to us through any of these channels. We&apos;re here to help you
                find the perfect luxury vehicle for your needs.
              </p>
            </div>

            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4 p-6 bg-secondary-50 rounded-xl"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                  <info.icon className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-secondary-900 mb-2">
                    {info.title}
                  </h4>
                  {info.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="text-secondary-700">
                      {detail}
                    </div>
                  ))}
                  <p className="text-sm text-secondary-600 mt-2">
                    {info.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-secondary-100 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-secondary-900 mb-4">
              Visit Our Showroom
            </h3>
            <p className="text-secondary-600 mb-6">
              Experience our luxury vehicles in person at our premium showroom location.
            </p>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="aspect-video bg-secondary-200 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-secondary-400 mx-auto mb-4" />
                  <p className="text-secondary-600">
                    Interactive map would be displayed here
                  </p>
                  <p className="text-sm text-secondary-500 mt-2">
                    123 Luxury Avenue, Premium District, NY 10001
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
