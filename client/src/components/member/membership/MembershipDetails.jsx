import { useState } from 'react'

const MembershipDetails = () => {
  const [showUpgradeModal, setShowUpgradeModal] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState(null)

  const currentMembership = {
    plan: 'Premium',
    price: 59,
    startDate: '2024-01-15',
    nextBilling: '2024-02-15',
    status: 'Active',
    features: [
      'Unlimited gym access',
      'Group classes included',
      'Personal trainer consultation',
      'Nutrition guidance',
      '2 guest passes per month',
      'Sauna & steam room access'
    ]
  }

  const availablePlans = [
    {
      name: 'Basic',
      price: 29,
      features: [
        'Access to gym equipment',
        'Locker room access',
        'Basic fitness assessment',
        'Mobile app access',
        'Community support'
      ]
    },
    {
      name: 'Premium',
      price: 59,
      features: [
        'Everything in Basic',
        'Unlimited group classes',
        'Personal trainer consultation',
        'Nutrition guidance',
        'Guest passes (2 per month)',
        'Sauna & steam room access'
      ],
      current: true
    },
    {
      name: 'Elite',
      price: 99,
      features: [
        'Everything in Premium',
        'Unlimited personal training',
        'Meal planning service',
        'Recovery massage (1 per month)',
        'VIP parking',
        'Exclusive member events',
        'Priority class booking'
      ]
    }
  ]

  const paymentHistory = [
    { date: '2024-01-15', amount: 59, status: 'Paid', method: 'Credit Card' },
    { date: '2023-12-15', amount: 59, status: 'Paid', method: 'Credit Card' },
    { date: '2023-11-15', amount: 59, status: 'Paid', method: 'Credit Card' },
    { date: '2023-10-15', amount: 59, status: 'Paid', method: 'Credit Card' }
  ]

  const handleUpgrade = (plan) => {
    setSelectedPlan(plan)
    setShowUpgradeModal(true)
  }

  const confirmUpgrade = () => {
    alert(`Upgraded to ${selectedPlan.name} plan!`)
    setShowUpgradeModal(false)
    setSelectedPlan(null)
  }

  return (
    <div className="space-y-6">
      {/* Current Membership */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h3 className="text-2xl font-bold text-gray-900">{currentMembership.plan} Membership</h3>
            <p className="text-gray-600">Active since {new Date(currentMembership.startDate).toLocaleDateString()}</p>
          </div>
          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
            {currentMembership.status}
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-gray-600">Monthly Fee:</span>
              <span className="font-semibold">${currentMembership.price}/month</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Next Billing:</span>
              <span className="font-semibold">{new Date(currentMembership.nextBilling).toLocaleDateString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Payment Method:</span>
              <span className="font-semibold">•••• 4242</span>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Included Features:</h4>
            <ul className="space-y-2">
              {currentMembership.features.map((feature, index) => (
                <li key={index} className="flex items-center text-sm text-gray-600">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex space-x-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
            Update Payment Method
          </button>
          <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-2 rounded-lg font-medium transition-colors">
            Pause Membership
          </button>
        </div>
      </div>

      {/* Available Plans */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Upgrade Your Plan</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {availablePlans.map((plan, index) => (
            <div 
              key={index}
              className={`border-2 rounded-xl p-6 transition-all ${
                plan.current 
                  ? 'border-blue-500 bg-blue-50' 
                  : 'border-gray-200 hover:border-blue-300'
              }`}
            >
              <div className="text-center mb-4">
                <h4 className="text-xl font-bold text-gray-900">{plan.name}</h4>
                <div className="text-3xl font-bold text-blue-600 mt-2">
                  ${plan.price}
                  <span className="text-sm text-gray-600">/month</span>
                </div>
              </div>

              <ul className="space-y-2 mb-6">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handleUpgrade(plan)}
                disabled={plan.current}
                className={`w-full py-2 px-4 rounded-lg font-medium transition-colors ${
                  plan.current
                    ? 'bg-gray-100 text-gray-500 cursor-not-allowed'
                    : plan.price > currentMembership.price
                    ? 'bg-blue-600 hover:bg-blue-700 text-white'
                    : 'bg-gray-600 hover:bg-gray-700 text-white'
                }`}
              >
                {plan.current ? 'Current Plan' : plan.price > currentMembership.price ? 'Upgrade' : 'Downgrade'}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Payment History */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Payment History</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Method</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {paymentHistory.map((payment, index) => (
                <tr key={index}>
                  <td className="px-4 py-4 text-sm text-gray-900">
                    {new Date(payment.date).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-900">${payment.amount}</td>
                  <td className="px-4 py-4 text-sm text-gray-600">{payment.method}</td>
                  <td className="px-4 py-4">
                    <span className="inline-flex px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-700">
                      {payment.status}
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                      Download Receipt
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Upgrade Modal */}
      {showUpgradeModal && selectedPlan && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              {selectedPlan.price > currentMembership.price ? 'Upgrade' : 'Downgrade'} to {selectedPlan.name}
            </h3>
            
            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-600">Current Plan:</span>
                <span className="font-medium">{currentMembership.plan} (${currentMembership.price}/month)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">New Plan:</span>
                <span className="font-medium">{selectedPlan.name} (${selectedPlan.price}/month)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Price Difference:</span>
                <span className={`font-medium ${
                  selectedPlan.price > currentMembership.price ? 'text-red-600' : 'text-green-600'
                }`}>
                  {selectedPlan.price > currentMembership.price ? '+' : ''}
                  ${selectedPlan.price - currentMembership.price}/month
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Effective Date:</span>
                <span className="font-medium">Next billing cycle</span>
              </div>
            </div>
            
            <div className="flex space-x-3">
              <button
                onClick={() => setShowUpgradeModal(false)}
                className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 px-6 rounded-lg font-semibold transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={confirmUpgrade}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors"
              >
                Confirm {selectedPlan.price > currentMembership.price ? 'Upgrade' : 'Downgrade'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default MembershipDetails