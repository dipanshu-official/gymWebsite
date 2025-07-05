import { useState } from 'react'

const WorkoutPlan = () => {
  const [activeDay, setActiveDay] = useState('monday')

  const workoutPlan = {
    monday: {
      name: 'Upper Body Strength',
      duration: '60 min',
      exercises: [
        { name: 'Bench Press', sets: 4, reps: '8-10', weight: '185 lbs', completed: true },
        { name: 'Pull-ups', sets: 3, reps: '10-12', weight: 'Body weight', completed: true },
        { name: 'Shoulder Press', sets: 3, reps: '10-12', weight: '135 lbs', completed: false },
        { name: 'Barbell Rows', sets: 4, reps: '8-10', weight: '155 lbs', completed: false },
        { name: 'Tricep Dips', sets: 3, reps: '12-15', weight: 'Body weight', completed: false }
      ]
    },
    tuesday: {
      name: 'Cardio & Core',
      duration: '45 min',
      exercises: [
        { name: 'Treadmill Run', sets: 1, reps: '30 min', weight: 'Level 7', completed: false },
        { name: 'Plank', sets: 3, reps: '60 sec', weight: 'Body weight', completed: false },
        { name: 'Russian Twists', sets: 3, reps: '20', weight: '25 lbs', completed: false },
        { name: 'Mountain Climbers', sets: 3, reps: '30 sec', weight: 'Body weight', completed: false }
      ]
    },
    wednesday: {
      name: 'Lower Body Power',
      duration: '55 min',
      exercises: [
        { name: 'Squats', sets: 4, reps: '8-10', weight: '225 lbs', completed: false },
        { name: 'Deadlifts', sets: 4, reps: '6-8', weight: '275 lbs', completed: false },
        { name: 'Leg Press', sets: 3, reps: '12-15', weight: '315 lbs', completed: false },
        { name: 'Calf Raises', sets: 4, reps: '15-20', weight: '185 lbs', completed: false }
      ]
    },
    thursday: {
      name: 'Active Recovery',
      duration: '30 min',
      exercises: [
        { name: 'Light Yoga', sets: 1, reps: '20 min', weight: 'Body weight', completed: false },
        { name: 'Foam Rolling', sets: 1, reps: '10 min', weight: 'Body weight', completed: false }
      ]
    },
    friday: {
      name: 'Full Body Circuit',
      duration: '50 min',
      exercises: [
        { name: 'Burpees', sets: 3, reps: '10', weight: 'Body weight', completed: false },
        { name: 'Kettlebell Swings', sets: 3, reps: '15', weight: '35 lbs', completed: false },
        { name: 'Push-ups', sets: 3, reps: '15', weight: 'Body weight', completed: false },
        { name: 'Jump Squats', sets: 3, reps: '12', weight: 'Body weight', completed: false }
      ]
    }
  }

  const days = [
    { key: 'monday', name: 'Mon', date: '15' },
    { key: 'tuesday', name: 'Tue', date: '16' },
    { key: 'wednesday', name: 'Wed', date: '17' },
    { key: 'thursday', name: 'Thu', date: '18' },
    { key: 'friday', name: 'Fri', date: '19' }
  ]

  const currentWorkout = workoutPlan[activeDay]
  const completedExercises = currentWorkout.exercises.filter(ex => ex.completed).length

  return (
    <div className="space-y-6">
      {/* Week Navigation */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">This Week's Plan</h3>
        <div className="flex space-x-2 overflow-x-auto">
          {days.map((day) => (
            <button
              key={day.key}
              onClick={() => setActiveDay(day.key)}
              className={`flex-shrink-0 p-4 rounded-xl transition-all ${
                activeDay === day.key
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
              }`}
            >
              <div className="text-center">
                <div className="text-sm font-medium">{day.name}</div>
                <div className="text-lg font-bold">{day.date}</div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Current Workout */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h3 className="text-2xl font-bold text-gray-900">{currentWorkout.name}</h3>
            <p className="text-gray-600">Duration: {currentWorkout.duration}</p>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-600">Progress</div>
            <div className="text-2xl font-bold text-blue-600">
              {completedExercises}/{currentWorkout.exercises.length}
            </div>
          </div>
        </div>

        {/* Exercise List */}
        <div className="space-y-4">
          {currentWorkout.exercises.map((exercise, index) => (
            <div
              key={index}
              className={`p-4 rounded-xl border-2 transition-all ${
                exercise.completed
                  ? 'border-green-200 bg-green-50'
                  : 'border-gray-200 bg-gray-50'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <button
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      exercise.completed
                        ? 'border-green-500 bg-green-500 text-white'
                        : 'border-gray-300 hover:border-blue-500'
                    }`}
                  >
                    {exercise.completed && '✓'}
                  </button>
                  <div>
                    <h4 className="font-semibold text-gray-900">{exercise.name}</h4>
                    <p className="text-sm text-gray-600">
                      {exercise.sets} sets × {exercise.reps} reps
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-medium text-gray-900">{exercise.weight}</div>
                  <button className="text-sm text-blue-600 hover:text-blue-700">
                    Log Set
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors">
          Start Workout
        </button>
      </div>
    </div>
  )
}

export default WorkoutPlan