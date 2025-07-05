import { useState } from 'react'

const TrainerProfile = () => {
  const [activeTab, setActiveTab] = useState('personal')
  const [profileData, setProfileData] = useState({
    firstName: 'Sarah',
    lastName: 'Johnson',
    email: 'sarah.johnson@globalfitness.com',
    phone: '+1 (555) 123-4567',
    specialization: 'Strength Training & Nutrition',
    certification: 'NASM-CPT',
    experience: '8 years',
    bio: 'Passionate about helping clients build strength and confidence through personalized training programs.',
    hourlyRate: '75',
    availability: {
      monday: { start: '08:00', end: '18:00', available: true },
      tuesday: { start: '08:00', end: '18:00', available: true },
      wednesday: { start: '08:00', end: '18:00', available: true },
      thursday: { start: '08:00', end: '18:00', available: true },
      friday: { start: '08:00', end: '18:00', available: true },
      saturday: { start: '09:00', end: '15:00', available: true },
      sunday: { start: '09:00', end: '15:00', available: false }
    }
  })

  const [stats] = useState({
    totalClients: 18,
    sessionsThisMonth: 124,
    clientRating: 4.9,
    yearsExperience: 8,
    certifications: ['NASM-CPT', 'Precision Nutrition', 'FMS Level 2'],
    specialties: ['Strength Training', 'Weight Loss', 'Nutrition Coaching', 'Injury Prevention']
  })

  const tabs = [
    { id: 'personal', name: 'Personal Info', icon: '👤' },
    { id: 'professional', name: 'Professional', icon: '💼' },
    { id: 'availability', name: 'Availability', icon: '📅' },
    { id: 'stats', name: 'Statistics', icon: '📊' }
  ]

  const handleProfileUpdate = (e) => {
    e.preventDefault()
    alert('Profile updated successfully!')
  }

  const handleAvailabilityUpdate = (day, field, value) => {
    setProfileData({
      ...profileData,
      availability: {
        ...profileData.availability,
        [day]: {
          ...profileData.availability[day],
          [field]: value
        }
      }
    })
  }

  return (
    <div className="space-y-6">
      {/* Profile Header */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center space-x-6">
          <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-2xl">
              {profileData.firstName[0]}{profileData.lastName[0]}
            </span>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              {profileData.firstName} {profileData.lastName}
            </h2>
            <p className="text-gray-600">{profileData.specialization}</p>
            <p className="text-sm text-gray-500">{profileData.certification} • {profileData.experience} experience</p>
            <div className="flex items-center mt-2">
              <span className="text-yellow-400">⭐</span>
              <span className="text-sm font-medium text-gray-900 ml-1">{stats.clientRating}</span>
              <span className="text-sm text-gray-500 ml-1">({stats.totalClients} clients)</span>
            </div>
          </div>
          <div className="ml-auto">
            <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
              Upload Photo
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? 'border-green-500 text-green-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.name}
              </button>
            ))}
          </nav>
        </div>

        <div className="p-6">
          {/* Personal Information Tab */}
          {activeTab === 'personal' && (
            <form onSubmit={handleProfileUpdate} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    value={profileData.firstName}
                    onChange={(e) => setProfileData({...profileData, firstName: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    value={profileData.lastName}
                    onChange={(e) => setProfileData({...profileData, lastName: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={profileData.email}
                    onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={profileData.phone}
                    onChange={(e) => setProfileData({...profileData, phone: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Bio
                </label>
                <textarea
                  rows={4}
                  value={profileData.bio}
                  onChange={(e) => setProfileData({...profileData, bio: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent resize-none"
                />
              </div>

              <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Update Profile
              </button>
            </form>
          )}

          {/* Professional Tab */}
          {activeTab === 'professional' && (
            <form onSubmit={handleProfileUpdate} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Primary Specialization
                  </label>
                  <select
                    value={profileData.specialization}
                    onChange={(e) => setProfileData({...profileData, specialization: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                  >
                    <option>Strength Training & Nutrition</option>
                    <option>Cardio & HIIT</option>
                    <option>Yoga & Pilates</option>
                    <option>Functional Training</option>
                    <option>Sports Performance</option>
                    <option>Rehabilitation</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Primary Certification
                  </label>
                  <select
                    value={profileData.certification}
                    onChange={(e) => setProfileData({...profileData, certification: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                  >
                    <option>NASM-CPT</option>
                    <option>ACSM-CPT</option>
                    <option>ACE-CPT</option>
                    <option>NSCA-CSCS</option>
                    <option>RYT-200</option>
                    <option>RYT-500</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Years of Experience
                  </label>
                  <input
                    type="text"
                    value={profileData.experience}
                    onChange={(e) => setProfileData({...profileData, experience: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Hourly Rate ($)
                  </label>
                  <input
                    type="number"
                    value={profileData.hourlyRate}
                    onChange={(e) => setProfileData({...profileData, hourlyRate: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Certifications</h4>
                <div className="grid md:grid-cols-2 gap-3">
                  {stats.certifications.map((cert, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="font-medium text-gray-900">{cert}</span>
                      <button className="text-red-600 hover:text-red-700 text-sm">Remove</button>
                    </div>
                  ))}
                </div>
                <button className="mt-3 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg font-medium transition-colors">
                  Add Certification
                </button>
              </div>

              <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Update Professional Info
              </button>
            </form>
          )}

          {/* Availability Tab */}
          {activeTab === 'availability' && (
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-gray-900">Weekly Availability</h4>
              <div className="space-y-4">
                {Object.entries(profileData.availability).map(([day, schedule]) => (
                  <div key={day} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          checked={schedule.available}
                          onChange={(e) => handleAvailabilityUpdate(day, 'available', e.target.checked)}
                          className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-600"
                        />
                        <span className="ml-2 font-medium text-gray-900 capitalize">{day}</span>
                      </label>
                    </div>
                    
                    {schedule.available && (
                      <div className="flex items-center space-x-3">
                        <input
                          type="time"
                          value={schedule.start}
                          onChange={(e) => handleAvailabilityUpdate(day, 'start', e.target.value)}
                          className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                        />
                        <span className="text-gray-500">to</span>
                        <input
                          type="time"
                          value={schedule.end}
                          onChange={(e) => handleAvailabilityUpdate(day, 'end', e.target.value)}
                          className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
              
              <button
                onClick={() => alert('Availability updated successfully!')}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Update Availability
              </button>
            </div>
          )}

          {/* Statistics Tab */}
          {activeTab === 'stats' && (
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 rounded-xl text-white text-center">
                  <div className="text-3xl font-bold">{stats.totalClients}</div>
                  <div className="text-blue-100">Total Clients</div>
                </div>
                
                <div className="bg-gradient-to-r from-green-500 to-green-600 p-6 rounded-xl text-white text-center">
                  <div className="text-3xl font-bold">{stats.sessionsThisMonth}</div>
                  <div className="text-green-100">Sessions This Month</div>
                </div>
                
                <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 p-6 rounded-xl text-white text-center">
                  <div className="text-3xl font-bold">{stats.clientRating}</div>
                  <div className="text-yellow-100">Client Rating</div>
                </div>
                
                <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-6 rounded-xl text-white text-center">
                  <div className="text-3xl font-bold">{stats.yearsExperience}</div>
                  <div className="text-purple-100">Years Experience</div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-900 mb-4">Specialties</h4>
                  <div className="space-y-2">
                    {stats.specialties.map((specialty, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span className="text-gray-700">{specialty}</span>
                        <span className="text-green-600 font-medium">✓</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-900 mb-4">Recent Achievements</h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">🏆</span>
                      <span className="text-gray-700">Trainer of the Month</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">⭐</span>
                      <span className="text-gray-700">5-Star Client Review</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">📈</span>
                      <span className="text-gray-700">100% Goal Achievement Rate</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default TrainerProfile