const RecentActivity = () => {
  const activities = [
    {
      type: 'workout',
      title: 'Completed Upper Body Strength',
      time: '2 hours ago',
      icon: '💪',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      type: 'class',
      title: 'Attended HIIT Class',
      time: 'Yesterday',
      icon: '🔥',
      color: 'bg-red-100 text-red-600'
    },
    {
      type: 'achievement',
      title: 'Reached 10-day streak!',
      time: '2 days ago',
      icon: '🏆',
      color: 'bg-yellow-100 text-yellow-600'
    },
    {
      type: 'booking',
      title: 'Booked Personal Training',
      time: '3 days ago',
      icon: '📅',
      color: 'bg-green-100 text-green-600'
    }
  ]

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">Recent Activity</h3>
      
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div key={index} className="flex items-center space-x-3">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${activity.color}`}>
              <span className="text-lg">{activity.icon}</span>
            </div>
            <div className="flex-1">
              <p className="font-medium text-gray-900">{activity.title}</p>
              <p className="text-sm text-gray-500">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
      
      <button className="w-full mt-4 text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors">
        View All Activity
      </button>
    </div>
  )
}

export default RecentActivity