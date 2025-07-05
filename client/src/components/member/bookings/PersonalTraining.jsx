import { useState } from 'react'

const PersonalTraining = () => {
  const [selectedTrainer, setSelectedTrainer] = useState(null)
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('')

  const trainers = [
    {
      id: 1,
      name: 'Sarah Johnson',
      specialty: 'Strength Training & Nutrition',
      experience: '8 years',
      rating: 4.9,
      price: 75,
      image: 'SJ',
      availability: ['9:00 AM', '11:00 AM', '2:00 PM', '4:00 PM']
    },
    {
      id: 2,
      name: 'Mike Rodriguez',
      specialty: 'HIIT & Functional Training',
      experience: '6 years',
      rating: 4.8,
      price: 70,
      image: 'MR',
      availability: ['8:00 AM', '10:00 AM', '1:00 PM', '5:00 PM']
    },
    {
      id: 3,
      name: 'Emily Chen',
      specialty: 'Yoga & Mindfulness',
      experience: '10 years',
      rating: 5.0,
      price: 65,
      image: 'EC',
      availability: ['7:00 AM', '12:00 PM', '3:00 PM', '6:00 PM']
    }
  ]

  const upcomingSessions = [
    {
      id: 1,
      trainer: 'Sarah Johnson',
      date: '2024-01-16',
      time: '2:00 PM',
      type: 'Strength Training',
      status: 'confirmed'
    },
    {
      id: 2,
      trainer: 'Mike Rodriguez',
      date: '2024-01-18',
      time: '10:00 AM',
      type: 'HIIT Training',
      status: 'confirmed'
    }
  ]

  const handleBookSession = () => {
    if (selectedTrainer && selectedDate && selectedTime) {
      alert(`Session booked with ${selectedTrainer.name} on ${selectedDate} at ${selectedTime}`)
      setSelectedTrainer(null)
      setSelectedDate('')
      setSelectedTime('')
    }
  }

  return (
    <div className="space-y-6">
      {/* Upcoming Sessions */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Upcoming Sessions</h3>
        {upcomingSessions.length > 0 ? (
          <div className="space-y-4">
            {upcomingSessions.map((session) => (
              <div key={session.id} className="p-4 border border-gray-200 rounded-xl">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                      <span className="text-green-600 font-semibold text-sm">
                        {session.trainer.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{session.type}</h4>
                      <p className="text-sm text-gray-600">with {session.trainer}</p>
                      <p className="text-sm text-gray-600">
                        {new Date(session.date).toLocaleDateString()} at {session.time}
                      </p>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <span className="inline-flex px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700 mb-2">
                      Confirmed
                    </span>
                    <div className="flex space-x-2">
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
        ) : (
          <div className="text-center py-8">
            <div className="text-gray-400 text-4xl mb-4">📅</div>
            <p className="text-gray-600">No upcoming sessions scheduled</p>
          </div>
        )}
      </div>

      {/* Available Trainers */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Book Personal Training</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trainers.map((trainer) => (
            <div key={trainer.id} className="border border-gray-200 rounded-xl p-6 hover:border-blue-300 transition-colors">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-green-600 font-bold text-lg">{trainer.image}</span>
                </div>
                <h4 className="font-semibold text-gray-900">{trainer.name}</h4>
                <p className="text-sm text-gray-600">{trainer.specialty}</p>
              </div>
              
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Experience:</span>
                  <span className="font-medium">{trainer.experience}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Rating:</span>
                  <span className="font-medium">⭐ {trainer.rating}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Price:</span>
                  <span className="font-medium">${trainer.price}/session</span>
                </div>
              </div>
              
              <button
                onClick={() => setSelectedTrainer(trainer)}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition-colors"
              >
                Book Session
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Booking Modal */}
      {selectedTrainer && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Book Session with {selectedTrainer.name}
            </h3>
            
            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select Date
                </label>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Available Times
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {selectedTrainer.availability.map((time) => (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`p-2 rounded-lg border transition-colors ${
                        selectedTime === time
                          ? 'border-blue-500 bg-blue-50 text-blue-700'
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex justify-between text-sm">
                  <span>Session Price:</span>
                  <span className="font-medium">${selectedTrainer.price}</span>
                </div>
              </div>
            </div>
            
            <div className="flex space-x-3">
              <button
                onClick={() => setSelectedTrainer(null)}
                className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 px-6 rounded-lg font-semibold transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleBookSession}
                disabled={!selectedDate || !selectedTime}
                className="flex-1 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 text-white py-3 px-6 rounded-lg font-semibold transition-colors"
              >
                Book Session
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default PersonalTraining