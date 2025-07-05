import { useState } from 'react'

const ClassBookings = () => {
  const [selectedDate, setSelectedDate] = useState('2024-01-15')
  const [selectedClass, setSelectedClass] = useState(null)

  const upcomingBookings = [
    {
      id: 1,
      name: 'HIIT Training',
      instructor: 'Sarah Johnson',
      date: '2024-01-15',
      time: '6:00 PM',
      duration: '45 min',
      spots: 2,
      maxSpots: 15,
      status: 'confirmed'
    },
    {
      id: 2,
      name: 'Yoga Flow',
      instructor: 'Emily Chen',
      date: '2024-01-17',
      time: '7:00 AM',
      duration: '60 min',
      spots: 8,
      maxSpots: 12,
      status: 'confirmed'
    },
    {
      id: 3,
      name: 'Strength Circuit',
      instructor: 'Mike Rodriguez',
      date: '2024-01-18',
      time: '5:30 PM',
      duration: '50 min',
      spots: 5,
      maxSpots: 10,
      status: 'waitlist'
    }
  ]

  const availableClasses = [
    {
      id: 4,
      name: 'Morning Yoga',
      instructor: 'Emily Chen',
      time: '7:00 AM',
      duration: '60 min',
      spots: 3,
      maxSpots: 12,
      level: 'Beginner'
    },
    {
      id: 5,
      name: 'HIIT Cardio',
      instructor: 'Sarah Johnson',
      time: '12:00 PM',
      duration: '30 min',
      spots: 8,
      maxSpots: 15,
      level: 'Intermediate'
    },
    {
      id: 6,
      name: 'Strength Training',
      instructor: 'Mike Rodriguez',
      time: '6:00 PM',
      duration: '45 min',
      spots: 2,
      maxSpots: 10,
      level: 'Advanced'
    },
    {
      id: 7,
      name: 'Pilates Core',
      instructor: 'Lisa Park',
      time: '7:30 PM',
      duration: '50 min',
      spots: 6,
      maxSpots: 8,
      level: 'All Levels'
    }
  ]

  const handleBookClass = (classItem) => {
    setSelectedClass(classItem)
  }

  const confirmBooking = () => {
    alert(`Booked: ${selectedClass.name} at ${selectedClass.time}`)
    setSelectedClass(null)
  }

  const cancelBooking = (bookingId) => {
    if (window.confirm('Are you sure you want to cancel this booking?')) {
      alert('Booking cancelled successfully')
    }
  }

  return (
    <div className="space-y-6">
      {/* My Bookings */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">My Upcoming Classes</h3>
        <div className="space-y-4">
          {upcomingBookings.map((booking) => (
            <div key={booking.id} className="p-4 border border-gray-200 rounded-xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <span className="text-blue-600 text-xl">🏃</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{booking.name}</h4>
                    <p className="text-sm text-gray-600">with {booking.instructor}</p>
                    <p className="text-sm text-gray-600">
                      {new Date(booking.date).toLocaleDateString()} at {booking.time}
                    </p>
                  </div>
                </div>
                
                <div className="text-right">
                  <div className={`inline-flex px-3 py-1 rounded-full text-xs font-medium mb-2 ${
                    booking.status === 'confirmed' 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {booking.status === 'confirmed' ? 'Confirmed' : 'Waitlist'}
                  </div>
                  <div className="text-sm text-gray-600 mb-2">
                    {booking.spots} spots left
                  </div>
                  <div className="flex space-x-2">
                    <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                      Reschedule
                    </button>
                    <button 
                      onClick={() => cancelBooking(booking.id)}
                      className="text-red-600 hover:text-red-700 text-sm font-medium"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Available Classes */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Available Classes Today</h3>
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
          />
        </div>
        
        <div className="grid md:grid-cols-2 gap-4">
          {availableClasses.map((classItem) => (
            <div key={classItem.id} className="p-4 border border-gray-200 rounded-xl hover:border-blue-300 transition-colors">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h4 className="font-semibold text-gray-900">{classItem.name}</h4>
                  <p className="text-sm text-gray-600">with {classItem.instructor}</p>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  classItem.level === 'Beginner' ? 'bg-green-100 text-green-700' :
                  classItem.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
                  classItem.level === 'Advanced' ? 'bg-red-100 text-red-700' :
                  'bg-blue-100 text-blue-700'
                }`}>
                  {classItem.level}
                </span>
              </div>
              
              <div className="flex justify-between items-center mb-3">
                <span className="text-lg font-bold text-blue-600">{classItem.time}</span>
                <span className="text-sm text-gray-600">{classItem.duration}</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">
                  {classItem.spots} of {classItem.maxSpots} spots left
                </span>
                <button
                  onClick={() => handleBookClass(classItem)}
                  disabled={classItem.spots === 0}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    classItem.spots === 0
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : 'bg-blue-600 hover:bg-blue-700 text-white'
                  }`}
                >
                  {classItem.spots === 0 ? 'Full' : 'Book Now'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Booking Confirmation Modal */}
      {selectedClass && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Confirm Booking</h3>
            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-600">Class:</span>
                <span className="font-medium">{selectedClass.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Instructor:</span>
                <span className="font-medium">{selectedClass.instructor}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Time:</span>
                <span className="font-medium">{selectedClass.time}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Duration:</span>
                <span className="font-medium">{selectedClass.duration}</span>
              </div>
            </div>
            
            <div className="flex space-x-3">
              <button
                onClick={() => setSelectedClass(null)}
                className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 px-6 rounded-lg font-semibold transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={confirmBooking}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors"
              >
                Confirm Booking
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ClassBookings