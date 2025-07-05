import { useState } from 'react'
import { useTheme } from '../../contexts/ThemeContext'

const Sidebar = ({ activeSection, onSectionChange }) => {
  const [isHovered, setIsHovered] = useState(false)
  const { isDark } = useTheme()

  const sidebarItems = [
    {
      id: 'dashboard',
      name: 'Dashboard',
      icon: '📊',
      count: 'Overview',
      color: 'bg-green-500 dark:bg-green-600'
    },
    {
      id: 'clients',
      name: 'My Clients',
      icon: '👥',
      count: '18',
      color: 'bg-blue-500 dark:bg-blue-600'
    },
    {
      id: 'schedule',
      name: 'Schedule',
      icon: '📅',
      count: '6 today',
      color: 'bg-purple-500 dark:bg-purple-600'
    },
    {
      id: 'workouts',
      name: 'Workout Plans',
      icon: '💪',
      count: '12 plans',
      color: 'bg-orange-500 dark:bg-orange-600'
    },
    {
      id: 'progress',
      name: 'Progress Reports',
      icon: '📈',
      count: '4.9★',
      color: 'bg-red-500 dark:bg-red-600'
    },
    {
      id: 'profile',
      name: 'Profile',
      icon: '👤',
      count: 'Settings',
      color: 'bg-gray-500 dark:bg-gray-600'
    }
  ]

  return (
    <div 
      className={`fixed left-0 top-0 h-full bg-white dark:bg-gray-900 shadow-xl z-40 transition-all duration-300 border-r border-gray-200 dark:border-gray-700 ${
        isHovered ? 'w-64' : 'w-16'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Sidebar Header */}
      <div className="p-4 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-sm">GF</span>
          </div>
          {isHovered && (
            <div className="transition-opacity duration-300">
              <h2 className="text-lg font-bold text-gray-900 dark:text-white">Global Fitness</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">Trainer Portal</p>
            </div>
          )}
        </div>
      </div>

      {/* Sidebar Items */}
      <div className="p-4 space-y-2">
        {sidebarItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onSectionChange(item.id)}
            className={`w-full flex items-center space-x-3 p-3 rounded-xl transition-all duration-200 group ${
              activeSection === item.id 
                ? 'bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300 shadow-md' 
                : 'hover:bg-gray-50 dark:hover:bg-gray-800 hover:shadow-sm text-gray-700 dark:text-gray-300'
            }`}
          >
            <div className={`w-8 h-8 ${item.color} rounded-lg flex items-center justify-center text-white text-sm shadow-sm group-hover:scale-110 transition-transform duration-300`}>
              {item.icon}
            </div>
            {isHovered && (
              <div className="flex-1 text-left transition-opacity duration-300">
                <div className="font-medium">{item.name}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">{item.count}</div>
              </div>
            )}
          </button>
        ))}
      </div>

      {/* Quick Stats (only show when hovered) */}
      {isHovered && (
        <div className="absolute bottom-4 left-4 right-4 transition-opacity duration-300">
          <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-4 text-white shadow-lg">
            <h3 className="font-semibold mb-2">Quick Stats</h3>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Today's Sessions</span>
                <span>6/8</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Client Rating</span>
                <span>4.9⭐</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>This Month</span>
                <span>124 sessions</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Sidebar