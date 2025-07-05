import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const LoginForm = ({ role, onBack, variant = 'default' }) => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate login process
    setTimeout(() => {
      setIsLoading(false)
      navigate(`/${role}`)
    }, 2000)
  }

  const getRoleConfig = () => {
    const configs = {
      member: {
        title: 'Member Login',
        subtitle: 'Access your fitness journey',
        icon: '🏃‍♂️',
        color: 'from-blue-500 to-blue-600',
        demoCredentials: { email: 'member@globalfitness.com', password: 'member123' }
      },
      trainer: {
        title: 'Trainer Login',
        subtitle: 'Manage your clients and programs',
        icon: '💪',
        color: 'from-green-500 to-green-600',
        demoCredentials: { email: 'trainer@globalfitness.com', password: 'trainer123' }
      },
      admin: {
        title: 'Admin Login',
        subtitle: 'System administration access',
        icon: '⚙️',
        color: 'from-purple-500 to-purple-600',
        demoCredentials: { email: 'admin@globalfitness.com', password: 'admin123' }
      }
    }
    return configs[role] || configs.member
  }

  const config = getRoleConfig()

  const fillDemoCredentials = () => {
    setFormData(prev => ({
      ...prev,
      email: config.demoCredentials.email,
      password: config.demoCredentials.password
    }))
  }

  return (
    <div className="space-y-6">
      {/* Back Button - only show in page variant */}
      {variant === 'page' && onBack && (
        <button
          onClick={onBack}
          className="flex items-center text-gray-600 hover:text-primary-600 transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Role Selection
        </button>
      )}

      {/* Role Header */}
      <div className="text-center">
        <div className={`w-20 h-20 bg-gradient-to-r ${config.color} rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4 shadow-lg`}>
          {config.icon}
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{config.title}</h3>
        <p className="text-gray-600">{config.subtitle}</p>
      </div>

      {/* Demo Credentials */}
      <div className="bg-gray-50 p-4 rounded-lg">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-700">Demo Credentials:</span>
          <button
            onClick={fillDemoCredentials}
            className="text-sm text-primary-600 hover:text-primary-700 font-medium"
          >
            Use Demo
          </button>
        </div>
        <div className="text-sm text-gray-600 space-y-1">
          <div>Email: {config.demoCredentials.email}</div>
          <div>Password: {config.demoCredentials.password}</div>
        </div>
      </div>

      {/* Login Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-all duration-300"
            placeholder="Enter your email"
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-all duration-300"
            placeholder="Enter your password"
          />
        </div>

        <div className="flex items-center justify-between">
          <label className="flex items-center">
            <input
              type="checkbox"
              name="rememberMe"
              checked={formData.rememberMe}
              onChange={handleInputChange}
              className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-600"
            />
            <span className="ml-2 text-sm text-gray-600">Remember me</span>
          </label>
          <a href="#" className="text-sm text-primary-600 hover:text-primary-700">
            Forgot password?
          </a>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className={`w-full bg-gradient-to-r ${config.color} text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-lg transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none`}
        >
          {isLoading ? (
            <div className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Signing In...
            </div>
          ) : (
            `Sign In as ${role.charAt(0).toUpperCase() + role.slice(1)}`
          )}
        </button>
      </form>

      {/* Additional Options */}
      <div className="text-center space-y-3">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">New to Global Fitness?</span>
          </div>
        </div>
        
        <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-900 font-semibold py-3 px-6 rounded-lg transition-all duration-300">
          Create New Account
        </button>
      </div>
    </div>
  )
}

export default LoginForm