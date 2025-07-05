const NextSessionCard = () => {
  const nextSession = {
    type: 'Personal Training',
    trainer: 'Sarah Johnson',
    date: 'Today',
    time: '2:00 PM',
    duration: '60 min',
    location: 'Studio A'
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Next Session</h3>
        <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
          <span className="text-green-600 text-xl">⏰</span>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
            <span className="text-green-600 font-semibold text-sm">SJ</span>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">{nextSession.type}</h4>
            <p className="text-sm text-gray-600">with {nextSession.trainer}</p>
          </div>
        </div>

        <div className="bg-gray-50 rounded-xl p-4 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Date & Time</span>
            <span className="font-medium text-gray-900">{nextSession.date} at {nextSession.time}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Duration</span>
            <span className="font-medium text-gray-900">{nextSession.duration}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Location</span>
            <span className="font-medium text-gray-900">{nextSession.location}</span>
          </div>
        </div>

        <div className="flex space-x-3">
          <button className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg transition-colors font-medium">
            Check In
          </button>
          <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 rounded-lg transition-colors font-medium">
            Reschedule
          </button>
        </div>
      </div>
    </div>
  )
}

export default NextSessionCard