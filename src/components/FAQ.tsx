'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'

const faqs = [
  {
    question: 'What types of luxury vehicles do you offer?',
    answer: 'We offer a comprehensive fleet of premium vehicles including sports cars (Lamborghini, Ferrari, Porsche), luxury sedans (Mercedes-Benz S-Class, Audi A8, BMW 7 Series), SUVs (Range Rover, BMW X5), and electric vehicles (Tesla Model S). All vehicles are meticulously maintained and regularly serviced.'
  },
  {
    question: 'What are the age and licensing requirements?',
    answer: 'Drivers must be at least 21 years old (25+ for certain high-performance vehicles). A valid driver\'s license is required, and international licenses are accepted. Additional fees may apply for drivers under 25.'
  },
  {
    question: 'What insurance coverage do you provide?',
    answer: 'All rentals include comprehensive insurance coverage including liability, collision damage waiver, and theft protection. We also offer optional supplemental insurance for additional peace of mind.'
  },
  {
    question: 'Can I cancel or modify my reservation?',
    answer: 'Yes, you can cancel or modify your reservation up to 24 hours before pickup for a full refund. Changes within 24 hours may incur a fee. We recommend contacting us directly for any changes.'
  },
  {
    question: 'Do you offer airport pickup and delivery?',
    answer: 'Absolutely! We provide complimentary airport pickup and delivery services at all major airports. Our professional chauffeurs will meet you at arrivals with a sign displaying your name.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, debit cards, and digital payment methods including Apple Pay and Google Pay. Corporate accounts and billing arrangements are also available.'
  },
  {
    question: 'Are there any hidden fees?',
    answer: 'We believe in transparent pricing. Our rates include unlimited mileage, comprehensive insurance, 24/7 roadside assistance, and GPS navigation. Additional fees may apply for fuel, tolls, or optional services, but we clearly disclose all costs upfront.'
  },
  {
    question: 'What if I need the vehicle for longer than planned?',
    answer: 'We offer flexible extension options. Simply contact our team and we can extend your rental period. Early returns are also accommodated with prorated refunds.'
  }
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="pt-0 pb-20 bg-secondary-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-2xl mb-6">
            <HelpCircle className="h-8 w-8 text-primary-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
            Frequently Asked <span className="text-primary-600">Questions</span>
          </h2>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            Find answers to the most common questions about our luxury car rental services.
            Can&apos;t find what you&apos;re looking for? Contact our team directly.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg border border-secondary-200 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-secondary-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-inset"
              >
                <h3 className="text-lg font-semibold text-secondary-900 pr-4">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="h-5 w-5 text-secondary-500" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-6">
                      <p className="text-secondary-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Still Have Questions?
            </h3>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Our customer service team is here to help you find the perfect vehicle
              for your needs and answer any questions you may have.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+15551234567"
                className="bg-white text-primary-600 hover:bg-secondary-50 font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
              >
                Call Us Now
              </a>
              <a
                href="mailto:info@elitedrive.com"
                className="bg-transparent border-2 border-white/30 hover:border-white text-white hover:bg-white/10 backdrop-blur-sm font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
              >
                Send Email
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
