import { Link } from 'react-router-dom'
import { useTheme } from '../../contexts/ThemeContext'
import ThemeToggle from './ThemeToggle'

const DashboardHeader = ({ title, role, icon, color }) => {
  const { isDark } = useTheme()

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-700 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="w-10 h-10 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <span className="text-white font-bold text-xl">GF</span>
              </div>
              <span className="text-2xl font-bold text-gray-900 dark:text-white transition-colors duration-300">Global Fitness</span>
            </Link>
            <div className="hidden md:block">
              <span className="text-gray-400 dark:text-gray-500">|</span>
              <span className="ml-4 text-lg font-semibold text-gray-700 dark:text-gray-300 transition-colors duration-300">{title}</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            {/* Notifications */}
            <button className="relative p-2 text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 transition-colors duration-300 hover:scale-110">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM10.5 3.5a6 6 0 0 1 6 6v2l1.5 3h-15l1.5-3v-2a6 6 0 0 1 6-6z" />
              </svg>
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
            </button>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* User Info */}
            <div className="flex items-center space-x-3">
              <div className={`w-10 h-10 bg-gradient-to-r ${color} rounded-lg flex items-center justify-center text-xl shadow-lg hover:scale-105 transition-transform duration-300`}>
                {icon}
              </div>
              <div className="hidden md:block">
                <p className="text-sm font-medium text-gray-900 dark:text-white transition-colors duration-300">Welcome back!</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 capitalize transition-colors duration-300">{role} Account</p>
              </div>
            </div>

            {/* Logout */}
            <Link
              to="/login"
              className="bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105"
            >
              Logout
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default DashboardHeader