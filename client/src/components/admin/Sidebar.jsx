import { useState } from 'react'
import { useTheme } from '../../contexts/ThemeContext'

const Sidebar = ({ activeSection, onSectionChange }) => {
  const [isHovered, setIsHovered] = useState(false)
  const { isDark } = useTheme()

  const sidebarItems = [
    {
      id: 'overview',
      name: 'Overview',
      icon: '📊',
      count: 'Dashboard',
      color: 'bg-purple-500 dark:bg-purple-600'
    },
    {
      id: 'students',
      name: 'Students',
      icon: '👨‍🎓',
      count: '1,247',
      color: 'bg-blue-500 dark:bg-blue-600'
    },
    {
      id: 'trainers',
      name: 'Trainers',
      icon: '💪',
      count: '24',
      color: 'bg-green-500 dark:bg-green-600'
    },
    {
      id: 'finance',
      name: 'Finance Reports',
      icon: '📊',
      count: '$89.4K',
      color: 'bg-purple-500 dark:bg-purple-600'
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
          <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-sm">GF</span>
          </div>
          {isHovered && (
            <div className="transition-opacity duration-300">
              <h2 className="text-lg font-bold text-gray-900 dark:text-white">Admin Panel</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">Management</p>
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
                ? 'bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 shadow-md' 
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

      {/* Quick Actions (only show when hovered) */}
      {isHovered && (
        <div className="absolute bottom-4 left-4 right-4 transition-opacity duration-300">
          <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl p-4 text-white shadow-lg">
            <h3 className="font-semibold mb-2">Quick Access</h3>
            <div className="space-y-2">
              <button className="w-full text-left text-sm hover:bg-white/20 p-2 rounded-lg transition-colors">
                🚀 System Status
              </button>
              <button className="w-full text-left text-sm hover:bg-white/20 p-2 rounded-lg transition-colors">
                ⚙️ Settings
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Sidebar