import { useState } from 'react'

const ScheduleManagement = () => {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0])
  const [showAddModal, setShowAddModal] = useState(false)

  const todaySchedule = [
    {
      id: 1,
      time: '9:00 AM',
      client: 'John Smith',
      type: 'Personal Training',
      duration: '60 min',
      status: 'confirmed',
      location: 'Studio A'
    },
    {
      id: 2,
      time: '11:00 AM',
      client: 'Sarah Johnson',
      type: 'Strength Training',
      duration: '45 min',
      status: 'confirmed',
      location: 'Weight Room'
    },
    {
      id: 3,
      time: '2:00 PM',
      client: 'Mike Wilson',
      type: 'Cardio Session',
      duration: '30 min',
      status: 'pending',
      location: 'Cardio Zone'
    },
    {
      id: 4,
      time: '4:00 PM',
      client: 'Lisa Chen',
      type: 'Functional Training',
      duration: '60 min',
      status: 'confirmed',
      location: 'Studio B'
    },
    {
      id: 5,
      time: '6:00 PM',
      client: 'Group Class',
      type: 'HIIT Training',
      duration: '45 min',
      status: 'confirmed',
      location: 'Main Studio'
    }
  ]

  const weeklyStats = {
    totalSessions: 24,
    completedSessions: 18,
    cancelledSessions: 2,
    pendingSessions: 4
  }

  const availableSlots = [
    '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM'
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case 'confirmed':
        return 'bg-green-100 text-green-700'
      case 'pending':
        return 'bg-yellow-100 text-yellow-700'
      case 'cancelled':
        return 'bg-red-100 text-red-700'
      default:
        return 'bg-gray-100 text-gray-700'
    }
  }

  return (
    <div className="space-y-6">
      {/* Weekly Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 text-center">
          <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
            <span className="text-blue-600 text-xl">📅</span>
          </div>
          <div className="text-2xl font-bold text-gray-900">{weeklyStats.totalSessions}</div>
          <div className="text-gray-600">Total Sessions</div>
        </div>
        
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 text-center">
          <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
            <span className="text-green-600 text-xl">✅</span>
          </div>
          <div className="text-2xl font-bold text-gray-900">{weeklyStats.completedSessions}</div>
          <div className="text-gray-600">Completed</div>
        </div>
        
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 text-center">
          <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mx-auto mb-4">
            <span className="text-yellow-600 text-xl">⏳</span>
          </div>
          <div className="text-2xl font-bold text-gray-900">{weeklyStats.pendingSessions}</div>
          <div className="text-gray-600">Pending</div>
        </div>
        
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 text-center">
          <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mx-auto mb-4">
            <span className="text-red-600 text-xl">❌</span>
          </div>
          <div className="text-2xl font-bold text-gray-900">{weeklyStats.cancelledSessions}</div>
          <div className="text-gray-600">Cancelled</div>
        </div>
      </div>

      {/* Schedule for Selected Date */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-4">
            <h3 className="text-lg font-semibold text-gray-900">Daily Schedule</h3>
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
            />
          </div>
          <button 
            onClick={() => setShowAddModal(true)}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors font-medium"
          >
            Add Session
          </button>
        </div>

        <div className="space-y-3">
          {todaySchedule.map((session) => (
            <div key={session.id} className="p-4 border border-gray-200 rounded-xl hover:border-green-300 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="text-center">
                    <div className="text-lg font-bold text-green-600">{session.time}</div>
                    <div className="text-xs text-gray-500">{session.duration}</div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{session.client}</h4>
                    <p className="text-sm text-gray-600">{session.type}</p>
                    <p className="text-xs text-gray-500">📍 {session.location}</p>
                  </div>
                </div>
                
                <div className="text-right">
                  <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium mb-2 ${getStatusColor(session.status)}`}>
                    {session.status.charAt(0).toUpperCase() + session.status.slice(1)}
                  </span>
                  <div className="flex space-x-2">
                    <button className="text-green-600 hover:text-green-700 text-sm font-medium">
                      Start
                    </button>
                    <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                      Reschedule
                    </button>
                    <button className="text-red-600 hover:text-red-700 text-sm font-medium">
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Available Time Slots */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Available Time Slots</h3>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
          {availableSlots.map((slot) => {
            const isBooked = todaySchedule.some(session => session.time === slot)
            return (
              <button
                key={slot}
                disabled={isBooked}
                className={`p-3 rounded-lg border transition-colors ${
                  isBooked
                    ? 'border-gray-200 bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'border-green-200 bg-green-50 text-green-700 hover:bg-green-100'
                }`}
              >
                <div className="text-sm font-medium">{slot}</div>
                <div className="text-xs">{isBooked ? 'Booked' : 'Available'}</div>
              </button>
            )
          })}
        </div>
      </div>

      {/* Add Session Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Schedule New Session</h3>
            
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Client</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent">
                  <option>Select a client</option>
                  <option>John Smith</option>
                  <option>Sarah Johnson</option>
                  <option>Mike Wilson</option>
                  <option>Lisa Chen</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Session Type</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent">
                  <option>Personal Training</option>
                  <option>Strength Training</option>
                  <option>Cardio Session</option>
                  <option>Functional Training</option>
                  <option>Consultation</option>
                </select>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
                  <input
                    type="date"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Time</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent">
                    {availableSlots.map(slot => (
                      <option key={slot} value={slot}>{slot}</option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Duration</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent">
                  <option>30 minutes</option>
                  <option>45 minutes</option>
                  <option>60 minutes</option>
                  <option>90 minutes</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent">
                  <option>Studio A</option>
                  <option>Studio B</option>
                  <option>Weight Room</option>
                  <option>Cardio Zone</option>
                  <option>Main Studio</option>
                </select>
              </div>
            </form>
            
            <div className="flex space-x-3 mt-6">
              <button
                onClick={() => setShowAddModal(false)}
                className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 px-6 rounded-lg font-semibold transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  alert('Session scheduled successfully!')
                  setShowAddModal(false)
                }}
                className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors"
              >
                Schedule Session
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ScheduleManagement