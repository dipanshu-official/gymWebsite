import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../../contexts/ThemeContext'
import ThemeToggle from '../shared/ThemeToggle'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { isDark } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Programs', href: '#programs' },
    { name: 'Membership', href: '#membership' },
    { name: 'Trainers', href: '#trainers' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-gray-100 dark:border-gray-800' 
        : 'bg-transparent'
    }`}>
      <nav className="container-max">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
              <span className="text-white font-bold text-xl">GF</span>
            </div>
            <div className="hidden sm:block">
              <span className={`text-2xl font-bold transition-colors duration-300 ${
                isScrolled ? 'text-gray-900 dark:text-white' : 'text-white'
              }`}>
                Global Fitness
              </span>
              <div className={`text-sm transition-colors duration-300 ${
                isScrolled ? 'text-gray-600 dark:text-gray-300' : 'text-white/80'
              }`}>
                Transform Your Life
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`font-medium transition-all duration-300 relative group ${
                  isScrolled 
                    ? 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400' 
                    : 'text-white hover:text-primary-300'
                }`}
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            
            {/* Theme Toggle */}
            <ThemeToggle />
            
            <Link 
              to="/login" 
              className="btn-primary text-sm px-6 py-2.5 hover:scale-105 transition-transform"
            >
              Join Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-4">
            <ThemeToggle className="scale-75" />
            <button
              className="flex flex-col space-y-1.5 p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className={`w-6 h-0.5 transition-all duration-300 ${
                isMenuOpen ? 'rotate-45 translate-y-2' : ''
              } ${isScrolled ? 'bg-gray-900 dark:bg-white' : 'bg-white'}`}></span>
              <span className={`w-6 h-0.5 transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : ''
              } ${isScrolled ? 'bg-gray-900 dark:bg-white' : 'bg-white'}`}></span>
              <span className={`w-6 h-0.5 transition-all duration-300 ${
                isMenuOpen ? '-rotate-45 -translate-y-2' : ''
              } ${isScrolled ? 'bg-gray-900 dark:bg-white' : 'bg-white'}`}></span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-96 pb-6' : 'max-h-0'
        }`}>
          <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-md rounded-2xl p-6 mx-4 shadow-xl border border-gray-100 dark:border-gray-800">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors duration-300 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Link 
                to="/login" 
                className="btn-primary w-full text-center mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Join Now
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header