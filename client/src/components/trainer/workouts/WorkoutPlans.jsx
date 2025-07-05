import { useState } from 'react'

const WorkoutPlans = () => {
  const [selectedPlan, setSelectedPlan] = useState(null)
  const [showCreateModal, setShowCreateModal] = useState(false)

  const workoutPlans = [
    {
      id: 1,
      name: 'Beginner Strength Building',
      description: 'Perfect for clients new to weight training',
      duration: '4 weeks',
      sessions: 12,
      difficulty: 'Beginner',
      exercises: [
        { name: 'Bodyweight Squats', sets: 3, reps: '10-12' },
        { name: 'Push-ups', sets: 3, reps: '8-10' },
        { name: 'Plank', sets: 3, reps: '30-45 sec' },
        { name: 'Glute Bridges', sets: 3, reps: '12-15' }
      ],
      assignedTo: ['John Smith', 'Lisa Chen']
    },
    {
      id: 2,
      name: 'Advanced HIIT Circuit',
      description: 'High-intensity interval training for experienced clients',
      duration: '6 weeks',
      sessions: 18,
      difficulty: 'Advanced',
      exercises: [
        { name: 'Burpees', sets: 4, reps: '30 sec' },
        { name: 'Mountain Climbers', sets: 4, reps: '30 sec' },
        { name: 'Jump Squats', sets: 4, reps: '30 sec' },
        { name: 'High Knees', sets: 4, reps: '30 sec' }
      ],
      assignedTo: ['Mike Wilson']
    },
    {
      id: 3,
      name: 'Functional Movement',
      description: 'Improve daily movement patterns and mobility',
      duration: '8 weeks',
      sessions: 24,
      difficulty: 'Intermediate',
      exercises: [
        { name: 'Deadlifts', sets: 3, reps: '8-10' },
        { name: 'Overhead Press', sets: 3, reps: '8-10' },
        { name: 'Single-leg RDL', sets: 3, reps: '6-8 each' },
        { name: 'Turkish Get-ups', sets: 2, reps: '3-5 each' }
      ],
      assignedTo: ['Sarah Johnson']
    }
  ]

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner':
        return 'bg-green-100 text-green-700'
      case 'Intermediate':
        return 'bg-yellow-100 text-yellow-700'
      case 'Advanced':
        return 'bg-red-100 text-red-700'
      default:
        return 'bg-gray-100 text-gray-700'
    }
  }

  return (
    <div className="space-y-6">
      {/* Workout Plans Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 text-center">
          <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
            <span className="text-purple-600 text-xl">📋</span>
          </div>
          <div className="text-2xl font-bold text-gray-900">{workoutPlans.length}</div>
          <div className="text-gray-600">Total Plans</div>
        </div>
        
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 text-center">
          <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
            <span className="text-blue-600 text-xl">👥</span>
          </div>
          <div className="text-2xl font-bold text-gray-900">
            {workoutPlans.reduce((total, plan) => total + plan.assignedTo.length, 0)}
          </div>
          <div className="text-gray-600">Active Assignments</div>
        </div>
        
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 text-center">
          <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
            <span className="text-green-600 text-xl">💪</span>
          </div>
          <div className="text-2xl font-bold text-gray-900">
            {workoutPlans.reduce((total, plan) => total + plan.sessions, 0)}
          </div>
          <div className="text-gray-600">Total Sessions</div>
        </div>
      </div>

      {/* Workout Plans List */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold text-gray-900">My Workout Plans</h3>
          <button 
            onClick={() => setShowCreateModal(true)}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors font-medium"
          >
            Create New Plan
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {workoutPlans.map((plan) => (
            <div key={plan.id} className="border border-gray-200 rounded-xl p-6 hover:border-green-300 transition-colors">
              <div className="flex justify-between items-start mb-4">
                <h4 className="font-semibold text-gray-900">{plan.name}</h4>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(plan.difficulty)}`}>
                  {plan.difficulty}
                </span>
              </div>
              
              <p className="text-sm text-gray-600 mb-4">{plan.description}</p>
              
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Duration:</span>
                  <span className="font-medium">{plan.duration}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Sessions:</span>
                  <span className="font-medium">{plan.sessions}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Assigned to:</span>
                  <span className="font-medium">{plan.assignedTo.length} clients</span>
                </div>
              </div>
              
              <div className="flex space-x-2">
                <button 
                  onClick={() => setSelectedPlan(plan)}
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg font-medium transition-colors text-sm"
                >
                  View Details
                </button>
                <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 rounded-lg font-medium transition-colors text-sm">
                  Assign
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Plan Detail Modal */}
      {selectedPlan && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-gray-900">{selectedPlan.name}</h3>
              <button
                onClick={() => setSelectedPlan(null)}
                className="w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
              >
                ✕
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Plan Details</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Difficulty:</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(selectedPlan.difficulty)}`}>
                      {selectedPlan.difficulty}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-medium">{selectedPlan.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total Sessions:</span>
                    <span className="font-medium">{selectedPlan.sessions}</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Assigned Clients</h4>
                <div className="space-y-2">
                  {selectedPlan.assignedTo.map((client, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                        <span className="text-green-600 text-xs font-semibold">
                          {client.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <span className="text-sm text-gray-900">{client}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="font-semibold text-gray-900 mb-3">Exercises</h4>
              <div className="space-y-3">
                {selectedPlan.exercises.map((exercise, index) => (
                  <div key={index} className="p-3 bg-gray-50 rounded-lg">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-900">{exercise.name}</span>
                      <span className="text-sm text-gray-600">
                        {exercise.sets} sets × {exercise.reps}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex space-x-3">
              <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors">
                Edit Plan
              </button>
              <button className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors">
                Assign to Client
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Create Plan Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Create New Workout Plan</h3>
            
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Plan Name</label>
                <input
                  type="text"
                  placeholder="Enter plan name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea
                  rows={3}
                  placeholder="Describe the workout plan"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent resize-none"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Difficulty</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent">
                    <option>Beginner</option>
                    <option>Intermediate</option>
                    <option>Advanced</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Duration</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent">
                    <option>2 weeks</option>
                    <option>4 weeks</option>
                    <option>6 weeks</option>
                    <option>8 weeks</option>
                    <option>12 weeks</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Total Sessions</label>
                <input
                  type="number"
                  placeholder="Number of sessions"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                />
              </div>
            </form>
            
            <div className="flex space-x-3 mt-6">
              <button
                onClick={() => setShowCreateModal(false)}
                className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 px-6 rounded-lg font-semibold transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  alert('Workout plan created successfully!')
                  setShowCreateModal(false)
                }}
                className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors"
              >
                Create Plan
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default WorkoutPlans