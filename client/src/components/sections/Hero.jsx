import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useTheme } from '../../contexts/ThemeContext'

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const { isDark } = useTheme()
  
  const slides = [
    {
      image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      title: 'Transform Your Body & Mind',
      subtitle: 'Join Global Fitness and discover the strongest version of yourself',
      cta: 'Start Your Journey'
    },
    {
      image: 'https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      title: 'State-of-the-Art Equipment',
      subtitle: 'Train with the latest fitness technology and premium equipment',
      cta: 'Explore Facilities'
    },
    {
      image: 'https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      title: 'Expert Personal Trainers',
      subtitle: 'Get personalized guidance from certified fitness professionals',
      cta: 'Meet Our Trainers'
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [slides.length])

  const stats = [
    { number: '2,500+', label: 'Happy Members', icon: '👥' },
    { number: '50+', label: 'Expert Trainers', icon: '💪' },
    { number: '24/7', label: 'Access', icon: '🕐' },
    { number: '5', label: 'Locations', icon: '📍' }
  ]

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Slider */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className={`absolute inset-0 ${
                isDark 
                  ? 'bg-gradient-to-r from-black/80 via-black/60 to-black/80' 
                  : 'bg-gradient-to-r from-black/70 via-black/50 to-black/70'
              }`}></div>
            </div>
          </div>
        ))}
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-accent-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white section-padding w-full">
        <div className="container-max">
          {/* Main Content */}
          <div className="max-w-4xl mx-auto mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in text-shadow-lg">
              {slides[currentSlide].title.split(' ').map((word, index) => (
                <span key={index} className={index >= 2 ? 'gradient-text' : ''}>
                  {word}{' '}
                </span>
              ))}
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90 animate-slide-up text-shadow">
              {slides[currentSlide].subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up mb-12">
              <Link to="/login" className="btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 shadow-glow hover:scale-105 transition-all duration-300">
                {slides[currentSlide].cta}
              </Link>
              <button className="btn-secondary text-base sm:text-lg border-white text-white hover:bg-white hover:text-gray-900 px-6 sm:px-8 py-3 sm:py-4 hover:scale-105 transition-all duration-300">
                Watch Demo
              </button>
            </div>

            {/* Slide Indicators */}
            <div className="flex justify-center space-x-3 mb-16">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
                    index === currentSlide 
                      ? 'bg-white scale-125' 
                      : 'bg-white/50 hover:bg-white/75'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 animate-fade-in">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="text-center group cursor-pointer"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300 border border-white/20 group-hover:bg-white/20">
                  <span className="text-xl sm:text-2xl md:text-3xl">{stat.icon}</span>
                </div>
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary-400 mb-2 group-hover:text-primary-300 transition-colors">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-xs sm:text-sm md:text-base font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
        <p className="text-white/70 text-xs mt-2 font-medium">Scroll Down</p>
      </div>

      {/* Floating Action Button */}
      <Link 
        to="/login"
        className="fixed bottom-6 right-6 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full flex items-center justify-center shadow-glow-lg hover:shadow-glow text-white font-bold text-lg sm:text-xl z-40 hover:scale-110 transition-all duration-300 lg:hidden"
        aria-label="Join Now"
      >
        +
      </Link>
    </section>
  )
}

export default Hero