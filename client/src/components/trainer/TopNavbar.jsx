import { Link } from 'react-router-dom'

const TopNavbar = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="px-6 py-4">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Good morning, Sarah!</h1>
            <p className="text-gray-600">Ready to help your clients achieve their goals today?</p>
          </div>
          
          <div className="flex items-center space-x-4">
            {/* Notifications */}
            <button className="relative p-2 text-gray-400 hover:text-gray-600 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM10.5 3.5a6 6 0 0 1 6 6v2l1.5 3h-15l1.5-3v-2a6 6 0 0 1 6-6z" />
              </svg>
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

            {/* User Avatar */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center">
                <span className="text-white font-semibold">S</span>
              </div>
              <div className="hidden md:block">
                <p className="text-sm font-medium text-gray-900">Sarah Johnson</p>
                <p className="text-xs text-gray-500">Certified Trainer</p>
              </div>
            </div>

            {/* Logout */}
            <Link
              to="/login"
              className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg transition-colors text-sm font-medium"
            >
              Logout
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default TopNavbar