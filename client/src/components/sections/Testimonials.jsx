import { useState } from 'react'
import { useTheme } from '../../contexts/ThemeContext'

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const { isDark } = useTheme()
  
  const testimonials = [
    {
      name: 'Jennifer Martinez',
      role: 'Marketing Manager',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      quote: 'Global Fitness transformed my life completely. The trainers are incredibly supportive and the facilities are world-class. I\'ve never felt stronger or more confident!',
      rating: 5,
      achievement: 'Lost 30 lbs in 6 months'
    },
    {
      name: 'Robert Thompson',
      role: 'Software Engineer',
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      quote: 'The variety of programs and flexible hours make it perfect for my busy schedule. The community here is amazing - everyone supports each other\'s goals.',
      rating: 5,
      achievement: 'Gained 15 lbs muscle'
    },
    {
      name: 'Lisa Chen',
      role: 'Teacher',
      image: 'https://images.pexels.com/photos/3823063/pexels-photo-3823063.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      quote: 'I was intimidated to start my fitness journey, but the staff made me feel welcome from day one. The results speak for themselves!',
      rating: 5,
      achievement: 'Completed first marathon'
    }
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="section-padding bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container-max">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300 rounded-full text-sm font-semibold mb-6 animate-fade-in transition-colors duration-300">
            <span className="mr-2">⭐</span>
            Success Stories
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
            Success 
            <span className="text-primary-600 dark:text-primary-400"> Stories</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
            Hear from our amazing members who have transformed their lives at Global Fitness.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden transition-colors duration-300 border border-gray-200 dark:border-gray-700">
            <div className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <img 
                    src={testimonials[currentIndex].image} 
                    alt={testimonials[currentIndex].name}
                    className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover shadow-lg hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="flex-1 text-center md:text-left">
                  <div className="flex justify-center md:justify-start mb-4">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <svg key={i} className="w-6 h-6 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                      </svg>
                    ))}
                  </div>
                  
                  <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-6 italic transition-colors duration-300">
                    "{testimonials[currentIndex].quote}"
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 transition-colors duration-300">{testimonials[currentIndex].role}</p>
                  </div>
                  
                  <div className="inline-block bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300 px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-300">
                    🎉 {testimonials[currentIndex].achievement}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center space-x-4 mt-8">
            <button 
              onClick={prevTestimonial}
              className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-primary-600 dark:hover:bg-primary-500 hover:text-white hover:scale-110 border border-gray-200 dark:border-gray-700"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
                    index === currentIndex ? 'bg-primary-600 dark:bg-primary-400 w-8' : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextTestimonial}
              className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-primary-600 dark:hover:bg-primary-500 hover:text-white hover:scale-110 border border-gray-200 dark:border-gray-700"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials