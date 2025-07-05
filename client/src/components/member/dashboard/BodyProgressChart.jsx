import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const BodyProgressChart = () => {
  const weightData = [
    { month: 'Sep', weight: 180, bmi: 26.5 },
    { month: 'Oct', weight: 178, bmi: 26.2 },
    { month: 'Nov', weight: 175, bmi: 25.8 },
    { month: 'Dec', weight: 172, bmi: 25.3 },
    { month: 'Jan', weight: 170, bmi: 25.0 }
  ]

  const currentWeight = weightData[weightData.length - 1].weight
  const startWeight = weightData[0].weight
  const weightLoss = startWeight - currentWeight

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Body Progress</h3>
        <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
          <span className="text-purple-600 text-xl">📊</span>
        </div>
      </div>

      {/* Progress Summary */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="text-center">
          <div className="text-2xl font-bold text-purple-600">{currentWeight}</div>
          <div className="text-sm text-gray-600">Current Weight</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-green-600">-{weightLoss}</div>
          <div className="text-sm text-gray-600">lbs Lost</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-blue-600">25.0</div>
          <div className="text-sm text-gray-600">Current BMI</div>
        </div>
      </div>

      {/* Chart */}
      <div className="h-48">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={weightData}>
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
                `${value} ${name === 'weight' ? 'lbs' : ''}`, 
                name === 'weight' ? 'Weight' : 'BMI'
              ]}
            />
            <Line 
              type="monotone" 
              dataKey="weight" 
              stroke="#8b5cf6" 
              strokeWidth={3}
              dot={{ fill: '#8b5cf6', strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6, stroke: '#8b5cf6', strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Goal Progress */}
      <div className="mt-6 pt-6 border-t border-gray-100">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-700">Goal Progress</span>
          <span className="text-sm text-purple-600 font-medium">80% Complete</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div className="bg-purple-600 h-2 rounded-full" style={{ width: '80%' }}></div>
        </div>
        <p className="text-xs text-gray-600 mt-2">5 lbs to reach your target weight of 165 lbs</p>
      </div>
    </div>
  )
}

export default BodyProgressChart