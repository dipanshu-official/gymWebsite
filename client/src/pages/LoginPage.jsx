import { useState } from 'react'
import { Link } from 'react-router-dom'
import RoleSelector from '../components/auth/RoleSelector'
import LoginForm from '../components/auth/LoginForm'

const LoginPage = () => {
  const [selectedRole, setSelectedRole] = useState(null)

  const handleRoleSelect = (role) => {
    setSelectedRole(role)
  }

  const handleBackToRoles = () => {
    setSelectedRole(null)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Desktop Layout */}
      <div className="hidden md:flex">
        {/* Left Side - Role Selection */}
        <div className="flex-1 bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-600 flex items-center justify-center p-8">
          <div className="max-w-md w-full">
            {/* Logo and Brand */}
            <div className="text-center mb-8">
              <Link to="/" className="inline-flex items-center space-x-3 mb-6">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">GF</span>
                </div>
                <span className="text-3xl font-bold text-white">Global Fitness</span>
              </Link>
              <h1 className="text-4xl font-bold text-white mb-4">
                Welcome Back!
              </h1>
              <p className="text-white/90 text-lg">
                Choose your role to access your personalized dashboard
              </p> 
            </div>

            {/* Role Selection */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <RoleSelector 
                onRoleSelect={handleRoleSelect} 
                selectedRole={selectedRole}
                variant="sidebar"
              />
            </div>

            {/* Features */}
            <div className="mt-8 space-y-4">
              {[
                'Secure and encrypted login',
                '24/7 access to your account',
                'Personalized fitness experience',
              ].map((text, index) => (
                <div className="flex items-center text-white/90" key={index}>
                  <svg className="w-5 h-5 mr-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {text}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="flex-1 bg-white flex items-center justify-center p-8">
          <div className="max-w-md w-full">
            {selectedRole ? (
              <LoginForm 
                role={selectedRole} 
                onBack={handleBackToRoles}
                variant="page"
              />
            ) : (
              <div className="text-center">
                <div className="w-24 h-24 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Select Your Role
                </h2>
                <p className="text-gray-600 text-lg mb-8">
                  Please choose your role from the left panel to continue with the login process.
                </p>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="font-semibold text-gray-900 mb-3">Available Roles:</h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      Member - Access workouts and track progress
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      Trainer - Manage clients and programs
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                      Admin - System administration
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="flex flex-col md:hidden p-4 space-y-6">
        {/* Logo */}
        <div className="text-center">
          <Link to="/" className="inline-flex items-center space-x-3">
            <div className="w-12 h-12 bg-primary-600 text-white rounded-xl flex items-center justify-center">
              <span className="text-xl font-bold">GF</span>
            </div>
            <span className="text-2xl font-bold text-primary-700">Global Fitness</span>
          </Link>
        </div>

        {/* Role Selector (Always visible on top in mobile) */}
        <div className="bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-600   rounded-xl p-4 shadow">
          <h2 className="text-center text-lg font-semibold mb-2">Select Your Role</h2>
          <RoleSelector onRoleSelect={handleRoleSelect} selectedRole={selectedRole} variant="sidebar" />
        </div>

        {/* Login Form (Only if role selected) */}
        {selectedRole && (
          <div className="bg-white rounded-xl p-4 shadow">
            <LoginForm role={selectedRole} onBack={handleBackToRoles} variant="page" />
          </div>
        )}
      </div>
    </div>
  )
}

export default LoginPage
