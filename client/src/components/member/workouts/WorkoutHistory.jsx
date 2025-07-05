const WorkoutHistory = () => {
  const workoutHistory = [
    {
      date: '2024-01-14',
      name: 'Upper Body Strength',
      duration: '58 min',
      exercises: 5,
      calories: 420,
      completed: true
    },
    {
      date: '2024-01-12',
      name: 'Cardio & Core',
      duration: '42 min',
      exercises: 4,
      calories: 380,
      completed: true
    },
    {
      date: '2024-01-10',
      name: 'Lower Body Power',
      duration: '52 min',
      exercises: 4,
      calories: 450,
      completed: true
    },
    {
      date: '2024-01-08',
      name: 'Full Body Circuit',
      duration: '48 min',
      exercises: 4,
      calories: 395,
      completed: true
    },
    {
      date: '2024-01-06',
      name: 'Upper Body Strength',
      duration: '35 min',
      exercises: 3,
      calories: 280,
      completed: false
    }
  ]

  const totalWorkouts = workoutHistory.filter(w => w.completed).length
  const totalMinutes = workoutHistory.filter(w => w.completed).reduce((sum, w) => sum + parseInt(w.duration), 0)
  const totalCalories = workoutHistory.filter(w => w.completed).reduce((sum, w) => sum + w.calories, 0)

  return (
    <div className="space-y-6">
      {/* Stats Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 text-center">
          <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
            <span className="text-blue-600 text-xl">🏋️</span>
          </div>
          <div className="text-2xl font-bold text-gray-900">{totalWorkouts}</div>
          <div className="text-gray-600">Workouts Completed</div>
        </div>
        
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 text-center">
          <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
            <span className="text-green-600 text-xl">⏱️</span>
          </div>
          <div className="text-2xl font-bold text-gray-900">{totalMinutes}</div>
          <div className="text-gray-600">Minutes Trained</div>
        </div>
        
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 text-center">
          <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
            <span className="text-orange-600 text-xl">🔥</span>
          </div>
          <div className="text-2xl font-bold text-gray-900">{totalCalories}</div>
          <div className="text-gray-600">Calories Burned</div>
        </div>
      </div>

      {/* Workout History List */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Recent Workouts</h3>
        <div className="space-y-4">
          {workoutHistory.map((workout, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
            >
              <div className="flex items-center space-x-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                  workout.completed ? 'bg-green-100 text-green-600' : 'bg-gray-200 text-gray-500'
                }`}>
                  {workout.completed ? '✓' : '⏸️'}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{workout.name}</h4>
                  <p className="text-sm text-gray-600">
                    {new Date(workout.date).toLocaleDateString('en-US', { 
                      weekday: 'short', 
                      month: 'short', 
                      day: 'numeric' 
                    })}
                  </p>
                </div>
              </div>
              
              <div className="text-right">
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <span>{workout.duration}</span>
                  <span>{workout.exercises} exercises</span>
                  <span>{workout.calories} cal</span>
                </div>
                <button className="text-blue-600 hover:text-blue-700 text-sm font-medium mt-1">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default WorkoutHistory