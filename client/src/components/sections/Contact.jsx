import { useState } from 'react'
import { useTheme } from '../../contexts/ThemeContext'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const { isDark } = useTheme()

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We\'ll get back to you soon.')
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  const locations = [
    {
      name: 'Downtown Location',
      address: '123 Fitness Street, Downtown City, DC 12345',
      phone: '(555) 123-4567',
      hours: 'Mon-Sun: 5:00 AM - 11:00 PM'
    },
    {
      name: 'Westside Location',
      address: '456 Wellness Ave, Westside City, WC 67890',
      phone: '(555) 987-6543',
      hours: 'Mon-Sun: 24/7 Access'
    }
  ]

  return (
    <section id="contact" className="section-padding bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container-max">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300 rounded-full text-sm font-semibold mb-6 animate-fade-in transition-colors duration-300">
            <span className="mr-2">📞</span>
            Contact Us
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
            Get In 
            <span className="text-primary-600 dark:text-primary-400"> Touch</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
            Ready to start your fitness journey? Contact us today for a free consultation and tour of our facilities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl transition-colors duration-300 border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-600 dark:focus:ring-primary-400 focus:border-transparent transition-all duration-300 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-600 dark:focus:ring-primary-400 focus:border-transparent transition-all duration-300 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-600 dark:focus:ring-primary-400 focus:border-transparent transition-all duration-300 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-600 dark:focus:ring-primary-400 focus:border-transparent transition-all duration-300 resize-none bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                  placeholder="Tell us about your fitness goals..."
                />
              </div>
              
              <button type="submit" className="w-full btn-primary hover:scale-105 transition-transform duration-300">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">Our Locations</h3>
              <div className="space-y-6">
                {locations.map((location, index) => (
                  <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:scale-105 interactive-card">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3 transition-colors duration-300">{location.name}</h4>
                    <div className="space-y-2 text-gray-600 dark:text-gray-300 transition-colors duration-300">
                      <p className="flex items-start">
                        <svg className="w-5 h-5 mr-3 mt-0.5 text-primary-600 dark:text-primary-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        {location.address}
                      </p>
                      <p className="flex items-center">
                        <svg className="w-5 h-5 mr-3 text-primary-600 dark:text-primary-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                        {location.phone}
                      </p>
                      <p className="flex items-center">
                        <svg className="w-5 h-5 mr-3 text-primary-600 dark:text-primary-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                        </svg>
                        {location.hours}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-primary-600 dark:bg-primary-500 text-white p-8 rounded-2xl transition-colors duration-300 shadow-xl">
              <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="mb-6">
                Join our community today and take the first step towards a healthier, stronger you.
              </p>
              <div className="space-y-3">
                <button className="w-full bg-white text-primary-600 hover:bg-gray-100 py-3 px-6 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
                  Schedule Free Tour
                </button>
                <button className="w-full border-2 border-white text-white hover:bg-white hover:text-primary-600 py-3 px-6 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
                  Start Free Trial
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact