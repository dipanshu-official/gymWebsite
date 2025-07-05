import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts'

const ProgressReports = () => {
  const clientProgressData = [
    { month: 'Sep', johnWeight: 185, sarahWeight: 128, mikeWeight: 175 },
    { month: 'Oct', johnWeight: 182, sarahWeight: 130, mikeWeight: 172 },
    { month: 'Nov', johnWeight: 178, sarahWeight: 132, mikeWeight: 170 },
    { month: 'Dec', johnWeight: 175, sarahWeight: 134, mikeWeight: 168 },
    { month: 'Jan', johnWeight: 172, sarahWeight: 136, mikeWeight: 165 }
  ]

  const sessionCompletionData = [
    { week: 'Week 1', completed: 18, scheduled: 20 },
    { week: 'Week 2', completed: 22, scheduled: 24 },
    { week: 'Week 3', completed: 19, scheduled: 22 },
    { week: 'Week 4', completed: 25, scheduled: 26 }
  ]

  const clientGoals = [
    {
      name: 'John Smith',
      goal: 'Weight Loss',
      target: '165 lbs',
      current: '172 lbs',
      progress: 81,
      trend: 'improving'
    },
    {
      name: 'Sarah Johnson',
      goal: 'Muscle Gain',
      target: '140 lbs',
      current: '136 lbs',
      progress: 67,
      trend: 'improving'
    },
    {
      name: 'Mike Wilson',
      goal: 'Endurance',
      target: '5K in 20 min',
      current: '5K in 22 min',
      progress: 75,
      trend: 'stable'
    },
    {
      name: 'Lisa Chen',
      goal: 'Strength',
      target: 'Bench 100 lbs',
      current: 'Bench 85 lbs',
      progress: 85,
      trend: 'improving'
    }
  ]

  const getTrendIcon = (trend) => {
    switch (trend) {
      case 'improving':
        return '📈'
      case 'stable':
        return '➡️'
      case 'declining':
        return '📉'
      default:
        return '➡️'
    }
  }

  const getTrendColor = (trend) => {
    switch (trend) {
      case 'improving':
        return 'text-green-600'
      case 'stable':
        return 'text-yellow-600'
      case 'declining':
        return 'text-red-600'
      default:
        return 'text-gray-600'
    }
  }

  return (
    <div className="space-y-6">
      {/* Progress Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 text-center">
          <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
            <span className="text-green-600 text-xl">🎯</span>
          </div>
          <div className="text-2xl font-bold text-gray-900">76%</div>
          <div className="text-gray-600">Avg Goal Progress</div>
        </div>
        
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 text-center">
          <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
            <span className="text-blue-600 text-xl">📊</span>
          </div>
          <div className="text-2xl font-bold text-gray-900">92%</div>
          <div className="text-gray-600">Session Completion</div>
        </div>
        
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 text-center">
          <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
            <span className="text-purple-600 text-xl">⭐</span>
          </div>
          <div className="text-2xl font-bold text-gray-900">4.8</div>
          <div className="text-gray-600">Client Satisfaction</div>
        </div>
        
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 text-center">
          <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
            <span className="text-orange-600 text-xl">🏆</span>
          </div>
          <div className="text-2xl font-bold text-gray-900">12</div>
          <div className="text-gray-600">Goals Achieved</div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Client Weight Progress */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Client Weight Progress</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={clientProgressData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis 
                dataKey="month" 
                stroke="#6b7280"
                fontSize={12}
              />
              <YAxis 
                stroke="#6b7280"
                fontSize={12}
                domain={['dataMin - 5', 'dataMax + 5']}
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: '#fff',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}
                formatter={(value, name) => [
                  `${value} lbs`, 
                  name === 'johnWeight' ? 'John Smith' : 
                  name === 'sarahWeight' ? 'Sarah Johnson' : 'Mike Wilson'
                ]}
              />
              <Line 
                type="monotone" 
                dataKey="johnWeight" 
                stroke="#3b82f6" 
                strokeWidth={3}
                dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }}
              />
              <Line 
                type="monotone" 
                dataKey="sarahWeight" 
                stroke="#10b981" 
                strokeWidth={3}
                dot={{ fill: '#10b981', strokeWidth: 2, r: 4 }}
              />
              <Line 
                type="monotone" 
                dataKey="mikeWeight" 
                stroke="#f59e0b" 
                strokeWidth={3}
                dot={{ fill: '#f59e0b', strokeWidth: 2, r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Session Completion */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Session Completion Rate</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={sessionCompletionData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis 
                dataKey="week" 
                stroke="#6b7280"
                fontSize={12}
              />
              <YAxis 
                stroke="#6b7280"
                fontSize={12}
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: '#fff',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}
                formatter={(value, name) => [value, name === 'completed' ? 'Completed' : 'Scheduled']}
              />
              <Bar 
                dataKey="scheduled" 
                fill="#e5e7eb"
                radius={[4, 4, 0, 0]}
              />
              <Bar 
                dataKey="completed" 
                fill="#10b981"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Client Goals Progress */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Client Goals Progress</h3>
        <div className="space-y-4">
          {clientGoals.map((client, index) => (
            <div key={index} className="p-4 bg-gray-50 rounded-xl">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 font-semibold text-sm">
                      {client.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{client.name}</h4>
                    <p className="text-sm text-gray-600">{client.goal}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className={`flex items-center space-x-1 ${getTrendColor(client.trend)}`}>
                    <span>{getTrendIcon(client.trend)}</span>
                    <span className="text-sm font-medium">{client.trend}</span>
                  </div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-4 mb-3">
                <div>
                  <span className="text-sm text-gray-600">Target:</span>
                  <p className="font-medium text-gray-900">{client.target}</p>
                </div>
                <div>
                  <span className="text-sm text-gray-600">Current:</span>
                  <p className="font-medium text-gray-900">{client.current}</p>
                </div>
                <div>
                  <span className="text-sm text-gray-600">Progress:</span>
                  <p className="font-medium text-gray-900">{client.progress}%</p>
                </div>
              </div>
              
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div 
                  className="bg-green-600 h-3 rounded-full transition-all duration-300" 
                  style={{ width: `${client.progress}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Generate Report Button */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 text-center">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Generate Detailed Report</h3>
        <p className="text-gray-600 mb-6">Create comprehensive progress reports for your clients or management</p>
        <div className="flex justify-center space-x-4">
          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
            Generate Monthly Report
          </button>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
            Export Client Data
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProgressReports