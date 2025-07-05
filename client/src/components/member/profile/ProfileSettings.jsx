import { useState } from 'react'

const ProfileSettings = () => {
  const [activeTab, setActiveTab] = useState('personal')
  const [profileData, setProfileData] = useState({
    firstName: 'Alex',
    lastName: 'Johnson',
    email: 'alex.johnson@email.com',
    phone: '+1 (555) 123-4567',
    dateOfBirth: '1990-05-15',
    gender: 'male',
    height: '5\'10"',
    weight: '170',
    fitnessGoal: 'weight-loss',
    activityLevel: 'moderate',
    emergencyContact: 'Jane Johnson',
    emergencyPhone: '+1 (555) 987-6543'
  })

  const [preferences, setPreferences] = useState({
    emailNotifications: true,
    smsNotifications: false,
    classReminders: true,
    promotionalEmails: false,
    weeklyReports: true
  })

  const [goals, setGoals] = useState({
    targetWeight: '165',
    weeklyWorkouts: '4',
    dailyCalories: '2200',
    waterIntake: '8',
    sleepHours: '8'
  })

  const handleProfileUpdate = (e) => {
    e.preventDefault()
    alert('Profile updated successfully!')
  }

  const handlePreferencesUpdate = (e) => {
    e.preventDefault()
    alert('Preferences updated successfully!')
  }

  const handleGoalsUpdate = (e) => {
    e.preventDefault()
    alert('Goals updated successfully!')
  }

  const tabs = [
    { id: 'personal', name: 'Personal Info', icon: '👤' },
    { id: 'preferences', name: 'Preferences', icon: '⚙️' },
    { id: 'goals', name: 'Fitness Goals', icon: '🎯' },
    { id: 'privacy', name: 'Privacy & Security', icon: '🔒' }
  ]

  return (
    <div className="space-y-6">
      {/* Profile Header */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center space-x-6">
          <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-2xl">
              {profileData.firstName[0]}{profileData.lastName[0]}
            </span>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              {profileData.firstName} {profileData.lastName}
            </h2>
            <p className="text-gray-600">{profileData.email}</p>
            <p className="text-sm text-gray-500">Member since January 2024</p>
          </div>
          <div className="ml-auto">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
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
                    ? 'border-blue-500 text-blue-600'
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    value={profileData.dateOfBirth}
                    onChange={(e) => setProfileData({...profileData, dateOfBirth: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Gender
                  </label>
                  <select
                    value={profileData.gender}
                    onChange={(e) => setProfileData({...profileData, gender: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                    <option value="prefer-not-to-say">Prefer not to say</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Height
                  </label>
                  <input
                    type="text"
                    value={profileData.height}
                    onChange={(e) => setProfileData({...profileData, height: e.target.value})}
                    placeholder="5'10&quot;"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Emergency Contact
                  </label>
                  <input
                    type="text"
                    value={profileData.emergencyContact}
                    onChange={(e) => setProfileData({...profileData, emergencyContact: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Emergency Phone
                  </label>
                  <input
                    type="tel"
                    value={profileData.emergencyPhone}
                    onChange={(e) => setProfileData({...profileData, emergencyPhone: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Update Profile
              </button>
            </form>
          )}

          {/* Preferences Tab */}
          {activeTab === 'preferences' && (
            <form onSubmit={handlePreferencesUpdate} className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Notification Preferences</h4>
                <div className="space-y-4">
                  {Object.entries(preferences).map(([key, value]) => (
                    <div key={key} className="flex items-center justify-between">
                      <div>
                        <label className="text-sm font-medium text-gray-900">
                          {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                        </label>
                        <p className="text-sm text-gray-600">
                          {key === 'emailNotifications' && 'Receive important updates via email'}
                          {key === 'smsNotifications' && 'Get text messages for urgent notifications'}
                          {key === 'classReminders' && 'Reminders before your scheduled classes'}
                          {key === 'promotionalEmails' && 'Special offers and gym promotions'}
                          {key === 'weeklyReports' && 'Weekly progress and activity summaries'}
                        </p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={value}
                          onChange={(e) => setPreferences({...preferences, [key]: e.target.checked})}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Update Preferences
              </button>
            </form>
          )}

          {/* Goals Tab */}
          {activeTab === 'goals' && (
            <form onSubmit={handleGoalsUpdate} className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Fitness Goals</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Target Weight (lbs)
                    </label>
                    <input
                      type="number"
                      value={goals.targetWeight}
                      onChange={(e) => setGoals({...goals, targetWeight: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Weekly Workouts
                    </label>
                    <input
                      type="number"
                      value={goals.weeklyWorkouts}
                      onChange={(e) => setGoals({...goals, weeklyWorkouts: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Daily Calories
                    </label>
                    <input
                      type="number"
                      value={goals.dailyCalories}
                      onChange={(e) => setGoals({...goals, dailyCalories: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Water Intake (glasses)
                    </label>
                    <input
                      type="number"
                      value={goals.waterIntake}
                      onChange={(e) => setGoals({...goals, waterIntake: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Update Goals
              </button>
            </form>
          )}

          {/* Privacy & Security Tab */}
          {activeTab === 'privacy' && (
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Account Security</h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <h5 className="font-medium text-gray-900">Change Password</h5>
                      <p className="text-sm text-gray-600">Update your account password</p>
                    </div>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                      Change
                    </button>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <h5 className="font-medium text-gray-900">Two-Factor Authentication</h5>
                      <p className="text-sm text-gray-600">Add an extra layer of security</p>
                    </div>
                    <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                      Enable
                    </button>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <h5 className="font-medium text-gray-900">Download My Data</h5>
                      <p className="text-sm text-gray-600">Get a copy of your personal data</p>
                    </div>
                    <button className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                      Download
                    </button>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-red-50 rounded-lg">
                    <div>
                      <h5 className="font-medium text-red-900">Delete Account</h5>
                      <p className="text-sm text-red-600">Permanently delete your account and data</p>
                    </div>
                    <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                      Delete
                    </button>
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

export default ProfileSettings