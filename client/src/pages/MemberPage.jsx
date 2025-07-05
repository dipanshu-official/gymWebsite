import { useState } from 'react'
import Sidebar from '../components/member/Sidebar'
import TopNavbar from '../components/member/TopNavbar'
import CurrentPlanCard from '../components/member/dashboard/CurrentPlanCard'
import WorkoutStreakTracker from '../components/member/dashboard/WorkoutStreakTracker'
import NextSessionCard from '../components/member/dashboard/NextSessionCard'
import BodyProgressChart from '../components/member/dashboard/BodyProgressChart'
import QuickActions from '../components/member/dashboard/QuickActions'
import RecentActivity from '../components/member/dashboard/RecentActivity'
import WorkoutPlan from '../components/member/workouts/WorkoutPlan'
import WorkoutHistory from '../components/member/workouts/WorkoutHistory'
import ClassBookings from '../components/member/bookings/ClassBookings'
import PersonalTraining from '../components/member/bookings/PersonalTraining'
import MembershipDetails from '../components/member/membership/MembershipDetails'
import ProfileSettings from '../components/member/profile/ProfileSettings'

const MemberPage = () => {
  const [activeSection, setActiveSection] = useState('dashboard')
  const [workoutTab, setWorkoutTab] = useState('plan')
  const [bookingTab, setBookingTab] = useState('classes')

  const renderDashboard = () => (
    <div className="space-y-6">
      {/* Top Row - Key Metrics */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <CurrentPlanCard />
        <WorkoutStreakTracker />
        <NextSessionCard />
      </div>

      {/* Middle Row - Progress and Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <BodyProgressChart />
        <div className="space-y-6">
          <QuickActions />
          <RecentActivity />
        </div>
      </div>

      {/* Motivational Banner */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-bold mb-2">You're doing amazing! 🎉</h3>
            <p className="text-blue-100 mb-4">
              You've completed 80% of your monthly goal. Keep pushing forward!
            </p>
            <button className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-2 rounded-lg font-semibold transition-colors">
              View Full Progress
            </button>
          </div>
          <div className="hidden md:block text-6xl opacity-20">🏆</div>
        </div>
      </div>
    </div>
  )

  const renderWorkouts = () => (
    <div className="space-y-6">
      {/* Workout Navigation */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <div className="flex space-x-4">
          <button
            onClick={() => setWorkoutTab('plan')}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              workoutTab === 'plan'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            📋 Current Plan
          </button>
          <button
            onClick={() => setWorkoutTab('history')}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              workoutTab === 'history'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            📊 Workout History
          </button>
        </div>
      </div>

      {/* Workout Content */}
      {workoutTab === 'plan' && <WorkoutPlan />}
      {workoutTab === 'history' && <WorkoutHistory />}
    </div>
  )

  const renderBookings = () => (
    <div className="space-y-6">
      {/* Booking Navigation */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <div className="flex space-x-4">
          <button
            onClick={() => setBookingTab('classes')}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              bookingTab === 'classes'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            🏃 Group Classes
          </button>
          <button
            onClick={() => setBookingTab('personal')}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              bookingTab === 'personal'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            💪 Personal Training
          </button>
        </div>
      </div>

      {/* Booking Content */}
      {bookingTab === 'classes' && <ClassBookings />}
      {bookingTab === 'personal' && <PersonalTraining />}
    </div>
  )

  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return renderDashboard()
      case 'workouts':
        return renderWorkouts()
      case 'bookings':
        return renderBookings()
      case 'membership':
        return <MembershipDetails />
      case 'profile':
        return <ProfileSettings />
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
          {renderContent()}
        </div>
      </div>
    </div>
  )
}

export default MemberPage