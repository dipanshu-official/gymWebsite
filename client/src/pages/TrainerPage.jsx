import { useState } from 'react'
import Sidebar from '../components/trainer/Sidebar'
import TopNavbar from '../components/trainer/TopNavbar'
import ClientManagement from '../components/trainer/clients/ClientManagement'
import ScheduleManagement from '../components/trainer/schedule/ScheduleManagement'
import WorkoutPlans from '../components/trainer/workouts/WorkoutPlans'
import ProgressReports from '../components/trainer/progress/ProgressReports'
import TrainerProfile from '../components/trainer/profile/TrainerProfile'

const TrainerPage = () => {
  const [activeSection, setActiveSection] = useState('dashboard')

  const stats = [
    { label: 'Active Clients', value: '18', change: '+3 this week', icon: '👥', color: 'bg-blue-100 text-blue-600' },
    { label: 'Sessions Today', value: '6', change: '2 remaining', icon: '⏰', color: 'bg-green-100 text-green-600' },
    { label: 'This Month', value: '124', change: 'sessions completed', icon: '💪', color: 'bg-purple-100 text-purple-600' },
    { label: 'Client Rating', value: '4.9', change: '⭐ excellent', icon: '🏆', color: 'bg-orange-100 text-orange-600' }
  ]

  const todaySchedule = [
    { time: '9:00 AM', client: 'John Smith', type: 'Personal Training', duration: '60 min', status: 'confirmed' },
    { time: '11:00 AM', client: 'Sarah Johnson', type: 'Strength Training', duration: '45 min', status: 'confirmed' },
    { time: '2:00 PM', client: 'Mike Wilson', type: 'Cardio Session', duration: '30 min', status: 'pending' },
    { time: '4:00 PM', client: 'Lisa Chen', type: 'Functional Training', duration: '60 min', status: 'confirmed' },
    { time: '6:00 PM', client: 'Group Class', type: 'HIIT Training', duration: '45 min', status: 'confirmed' }
  ]

  const recentClients = [
    { name: 'John Smith', goal: 'Weight Loss', progress: 75, lastSession: 'Yesterday', status: 'active' },
    { name: 'Sarah Johnson', goal: 'Muscle Gain', progress: 60, lastSession: '2 days ago', status: 'active' },
    { name: 'Mike Wilson', goal: 'Endurance', progress: 85, lastSession: 'Today', status: 'active' },
    { name: 'Lisa Chen', goal: 'Strength', progress: 45, lastSession: '3 days ago', status: 'active' }
  ]

  const renderDashboard = () => (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-sm text-green-600">{stat.change}</p>
              </div>
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${stat.color}`}>
                <span className="text-xl">{stat.icon}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Today's Schedule */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Today's Schedule</h3>
            <button 
              onClick={() => setActiveSection('schedule')}
              className="text-green-600 hover:text-green-700 font-medium text-sm"
            >
              View Full Schedule
            </button>
          </div>
          <div className="space-y-3">
            {todaySchedule.map((session, index) => (
              <div key={index} className="p-3 border border-gray-200 rounded-lg hover:border-green-300 transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center space-x-3">
                    <span className="text-sm font-medium text-green-600">{session.time}</span>
                    <span className="text-xs text-gray-500">{session.duration}</span>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    session.status === 'confirmed' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {session.status}
                  </span>
                </div>
                <p className="text-sm font-medium text-gray-900">{session.client}</p>
                <p className="text-xs text-gray-600">{session.type}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Clients */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Recent Clients</h3>
            <button 
              onClick={() => setActiveSection('clients')}
              className="text-green-600 hover:text-green-700 font-medium text-sm"
            >
              View All
            </button>
          </div>
          <div className="space-y-4">
            {recentClients.map((client, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-semibold text-sm">
                    {client.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-medium text-gray-900">{client.name}</h4>
                  <p className="text-xs text-gray-500">{client.goal}</p>
                  <div className="w-full bg-gray-200 rounded-full h-1.5 mt-1">
                    <div 
                      className="bg-green-600 h-1.5 rounded-full" 
                      style={{ width: `${client.progress}%` }}
                    ></div>
                  </div>
                </div>
                <span className="text-xs text-gray-500">{client.progress}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Quick Actions</h3>
        <div className="grid md:grid-cols-4 gap-4">
          <button 
            onClick={() => setActiveSection('schedule')}
            className="bg-green-600 hover:bg-green-700 text-white p-4 rounded-lg transition-colors text-center"
          >
            <div className="text-2xl mb-2">📅</div>
            <div className="font-medium">Schedule Session</div>
          </button>
          <button 
            onClick={() => setActiveSection('workouts')}
            className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-lg transition-colors text-center"
          >
            <div className="text-2xl mb-2">💪</div>
            <div className="font-medium">Create Workout</div>
          </button>
          <button 
            onClick={() => setActiveSection('clients')}
            className="bg-purple-600 hover:bg-purple-700 text-white p-4 rounded-lg transition-colors text-center"
          >
            <div className="text-2xl mb-2">👥</div>
            <div className="font-medium">Add Client</div>
          </button>
          <button 
            onClick={() => setActiveSection('progress')}
            className="bg-orange-600 hover:bg-orange-700 text-white p-4 rounded-lg transition-colors text-center"
          >
            <div className="text-2xl mb-2">📊</div>
            <div className="font-medium">View Reports</div>
          </button>
        </div>
      </div>
    </div>
  )

  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return renderDashboard()
      case 'clients':
        return <ClientManagement />
      case 'schedule':
        return <ScheduleManagement />
      case 'workouts':
        return <WorkoutPlans />
      case 'progress':
        return <ProgressReports />
      case 'profile':
        return <TrainerProfile />
      default:
        return renderDashboard()
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <Sidebar 
        activeSection={activeSection} 
        onSectionChange={setActiveSection} 
      />

      {/* Main Content */}
      <div className="flex-1 ml-16 lg:ml-64">
        <TopNavbar />
        
        <div className="p-6">
          {/* Welcome Banner */}
          {activeSection === 'dashboard' && (
            <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-8 text-white mb-8">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-3xl font-bold mb-2">Trainer Hub</h1>
                  <p className="text-green-100">Empower your clients to achieve their fitness goals</p>
                </div>
                <div className="text-6xl opacity-20">💪</div>
              </div>
            </div>
          )}

          {renderContent()}
        </div>
      </div>
    </div>
  )
}

export default TrainerPage