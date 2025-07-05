const CurrentPlanCard = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Current Plan</h3>
        <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
          <span className="text-blue-600 text-xl">🎯</span>
        </div>
      </div>
      
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-blue-600">Premium</span>
          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
            Active
          </span>
        </div>
        
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Start Date</span>
            <span className="font-medium text-gray-900">Jan 15, 2024</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Next Billing</span>
            <span className="font-medium text-gray-900">Feb 15, 2024</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Monthly Fee</span>
            <span className="font-medium text-gray-900">$59.00</span>
          </div>
        </div>
        
        <div className="pt-4 border-t border-gray-100">
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors font-medium">
            Manage Plan
          </button>
        </div>
      </div>
    </div>
  )
}

export default CurrentPlanCard