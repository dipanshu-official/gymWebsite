const QuickActions = () => {
  const actions = [
    {
      title: 'Start Workout',
      description: 'Begin your training session',
      icon: '💪',
      color: 'bg-blue-600 hover:bg-blue-700',
      action: () => console.log('Start workout')
    },
    {
      title: 'Book Class',
      description: 'Reserve your spot',
      icon: '📅',
      color: 'bg-green-600 hover:bg-green-700',
      action: () => console.log('Book class')
    },
    {
      title: 'View Nutrition',
      description: 'Check meal plans',
      icon: '🥗',
      color: 'bg-orange-600 hover:bg-orange-700',
      action: () => console.log('View nutrition')
    },
    {
      title: 'Track Progress',
      description: 'Log your metrics',
      icon: '📊',
      color: 'bg-purple-600 hover:bg-purple-700',
      action: () => console.log('Track progress')
    }
  ]

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">Quick Actions</h3>
      
      <div className="grid grid-cols-2 gap-4">
        {actions.map((action, index) => (
          <button
            key={index}
            onClick={action.action}
            className={`${action.color} text-white p-4 rounded-xl transition-all duration-200 hover:scale-105 hover:shadow-lg`}
          >
            <div className="text-2xl mb-2">{action.icon}</div>
            <div className="text-sm font-semibold">{action.title}</div>
            <div className="text-xs opacity-90">{action.description}</div>
          </button>
        ))}
      </div>
    </div>
  )
}

export default QuickActions