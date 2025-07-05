import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const ProfitChart = ({ data }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <h3 className="text-lg font-semibent text-gray-900 mb-6">Profit Analysis</h3>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis 
            dataKey="month" 
            stroke="#6b7280"
            fontSize={12}
          />
          <YAxis 
            stroke="#6b7280"
            fontSize={12}
            tickFormatter={(value) => `$${value}k`}
          />
          <Tooltip 
            contentStyle={{
              backgroundColor: '#fff',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
            }}
            formatter={(value, name) => [`$${value}k`, name === 'revenue' ? 'Revenue' : name === 'expenses' ? 'Expenses' : 'Profit']}
          />
          <Area 
            type="monotone" 
            dataKey="revenue" 
            stackId="1"
            stroke="#3b82f6" 
            fill="#3b82f6"
            fillOpacity={0.6}
          />
          <Area 
            type="monotone" 
            dataKey="expenses" 
            stackId="2"
            stroke="#ef4444" 
            fill="#ef4444"
            fillOpacity={0.6}
          />
          <Area 
            type="monotone" 
            dataKey="profit" 
            stackId="3"
            stroke="#10b981" 
            fill="#10b981"
            fillOpacity={0.8}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default ProfitChart