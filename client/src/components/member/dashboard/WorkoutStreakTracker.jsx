const WorkoutStreakTracker = () => {
  const currentStreak = 12
  const weeklyGoal = 5
  const thisWeekWorkouts = 4

  // Generate calendar for current month
  const generateCalendar = () => {
    const today = new Date()
    const currentMonth = today.getMonth()
    const currentYear = today.getFullYear()
    const firstDay = new Date(currentYear, currentMonth, 1)
    const lastDay = new Date(currentYear, currentMonth + 1, 0)
    const daysInMonth = lastDay.getDate()
    const startingDayOfWeek = firstDay.getDay()

    const calendar = []
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      calendar.push(null)
    }
    
    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(currentYear, currentMonth, day)
      const isToday = day === today.getDate()
      const isPast = date < today
      const hasWorkout = isPast && Math.random() > 0.4 // Simulate workout data
      
      calendar.push({
        day,
        isToday,
        isPast,
        hasWorkout
      })
    }
    
    return calendar
  }

  const calendar = generateCalendar()
  const progressPercentage = (thisWeekWorkouts / weeklyGoal) * 100

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Workout Streak</h3>
        <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center">
          <span className="text-orange-600 text-xl">🔥</span>
        </div>
      </div>

      {/* Streak Counter */}
      <div className="text-center mb-6">
        <div className="text-4xl font-bold text-orange-600 mb-2">{currentStreak}</div>
        <p className="text-gray-600">Day Streak</p>
      </div>

      {/* Weekly Progress Ring */}
      <div className="flex items-center justify-center mb-6">
        <div className="relative w-24 h-24">
          <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="40"
              stroke="#e5e7eb"
              strokeWidth="8"
              fill="none"
            />
            <circle
              cx="50"
              cy="50"
              r="40"
              stroke="#f97316"
              strokeWidth="8"
              fill="none"
              strokeDasharray={`${progressPercentage * 2.51} 251`}
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-lg font-bold text-gray-900">{thisWeekWorkouts}/{weeklyGoal}</span>
          </div>
        </div>
      </div>

      {/* Mini Calendar */}
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <h4 className="font-medium text-gray-900">January 2024</h4>
          <div className="flex space-x-2">
            <div className="flex items-center space-x-1">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-xs text-gray-600">Workout</span>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-7 gap-1">
          {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, index) => (
            <div key={index} className="text-center text-xs font-medium text-gray-500 py-1">
              {day}
            </div>
          ))}
          
          {calendar.map((date, index) => (
            <div key={index} className="aspect-square flex items-center justify-center">
              {date && (
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-medium ${
                  date.isToday 
                    ? 'bg-blue-600 text-white' 
                    : date.hasWorkout 
                    ? 'bg-green-500 text-white' 
                    : 'text-gray-600 hover:bg-gray-100'
                }`}>
                  {date.day}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default WorkoutStreakTracker