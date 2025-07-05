const RoleSelector = ({ onRoleSelect, selectedRole, variant = 'default' }) => {
  const roles = [
    {
      id: 'member',
      title: 'Member',
      description: 'Access your workout plans, track progress, and book classes',
      icon: '🏃‍♂️',
      color: 'from-blue-500 to-blue-600',
      features: ['Personal Dashboard', 'Class Booking', 'Progress Tracking', 'Nutrition Plans']
    },
    {
      id: 'trainer',
      title: 'Trainer',
      description: 'Manage clients, create workout plans, and track member progress',
      icon: '💪',
      color: 'from-green-500 to-green-600',
      features: ['Client Management', 'Workout Creation', 'Schedule Management', 'Progress Reports']
    },
    {
      id: 'admin',
      title: 'Admin',
      description: 'Full system access, manage staff, and oversee operations',
      icon: '⚙️',
      color: 'from-purple-500 to-purple-600',
      features: ['User Management', 'System Analytics', 'Staff Oversight', 'Financial Reports']
    }
  ]

  if (variant === 'sidebar') {
    return (
      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-white mb-4">Select Your Role</h3>
        {roles.map((role) => (
          <button
            key={role.id}
            onClick={() => onRoleSelect(role.id)}
            className={`w-full text-left p-4 rounded-xl transition-all duration-300 ${
              selectedRole === role.id
                ? 'bg-white text-gray-900 shadow-lg'
                : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            <div className="flex items-center space-x-3">
              <div className={`w-12 h-12 bg-gradient-to-r ${role.color} rounded-lg flex items-center justify-center text-xl shadow-lg`}>
                {role.icon}
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-lg">{role.title}</h4>
                <p className={`text-sm ${selectedRole === role.id ? 'text-gray-600' : 'text-white/80'}`}>
                  {role.description}
                </p>
              </div>
              {selectedRole === role.id && (
                <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              )}
            </div>
          </button>
        ))}
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">Select Your Role</h3>
        <p className="text-gray-600">Choose how you want to access Global Fitness</p>
      </div>

      {roles.map((role) => (
        <div
          key={role.id}
          onClick={() => onRoleSelect(role.id)}
          className="group cursor-pointer bg-white border-2 border-gray-200 hover:border-primary-600 rounded-xl p-6 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
        >
          <div className="flex items-start space-x-4">
            <div className={`w-16 h-16 bg-gradient-to-r ${role.color} rounded-xl flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
              {role.icon}
            </div>
            
            <div className="flex-1">
              <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                {role.title}
              </h4>
              <p className="text-gray-600 mb-3">{role.description}</p>
              
              <div className="grid grid-cols-2 gap-2">
                {role.features.map((feature, index) => (
                  <div key={index} className="flex items-center text-sm text-gray-500">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="text-primary-600 group-hover:translate-x-1 transition-transform duration-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default RoleSelector