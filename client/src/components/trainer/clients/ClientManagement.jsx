import { useState } from 'react'

const ClientManagement = () => {
  const [selectedClient, setSelectedClient] = useState(null)
  const [showAddModal, setShowAddModal] = useState(false)

  const clients = [
    {
      id: 1,
      name: 'John Smith',
      email: 'john.smith@email.com',
      phone: '+1 (555) 123-4567',
      goal: 'Weight Loss',
      startDate: '2024-01-15',
      progress: 75,
      nextSession: 'Today 2:00 PM',
      status: 'active',
      currentWeight: 180,
      targetWeight: 165,
      sessionsCompleted: 12,
      totalSessions: 16
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      email: 'sarah.j@email.com',
      phone: '+1 (555) 234-5678',
      goal: 'Muscle Gain',
      startDate: '2023-11-20',
      progress: 60,
      nextSession: 'Tomorrow 9:00 AM',
      status: 'active',
      currentWeight: 125,
      targetWeight: 135,
      sessionsCompleted: 18,
      totalSessions: 24
    },
    {
      id: 3,
      name: 'Mike Wilson',
      email: 'mike.wilson@email.com',
      phone: '+1 (555) 345-6789',
      goal: 'Endurance',
      startDate: '2024-02-01',
      progress: 85,
      nextSession: 'Today 4:00 PM',
      status: 'active',
      currentWeight: 170,
      targetWeight: 165,
      sessionsCompleted: 8,
      totalSessions: 12
    }
  ]

  const handleViewClient = (client) => {
    setSelectedClient(client)
  }

  return (
    <div className="space-y-6">
      {/* Client Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 text-center">
          <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
            <span className="text-blue-600 text-xl">👥</span>
          </div>
          <div className="text-2xl font-bold text-gray-900">{clients.length}</div>
          <div className="text-gray-600">Active Clients</div>
        </div>
        
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 text-center">
          <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
            <span className="text-green-600 text-xl">📈</span>
          </div>
          <div className="text-2xl font-bold text-gray-900">73%</div>
          <div className="text-gray-600">Avg Progress</div>
        </div>
        
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 text-center">
          <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
            <span className="text-orange-600 text-xl">⭐</span>
          </div>
          <div className="text-2xl font-bold text-gray-900">4.9</div>
          <div className="text-gray-600">Client Rating</div>
        </div>
      </div>

      {/* Client List */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold text-gray-900">My Clients</h3>
          <button 
            onClick={() => setShowAddModal(true)}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors font-medium"
          >
            Add New Client
          </button>
        </div>

        <div className="space-y-4">
          {clients.map((client) => (
            <div key={client.id} className="p-4 border border-gray-200 rounded-xl hover:border-green-300 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 font-semibold text-sm">
                      {client.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{client.name}</h4>
                    <p className="text-sm text-gray-600">Goal: {client.goal}</p>
                    <p className="text-sm text-blue-600">Next: {client.nextSession}</p>
                  </div>
                </div>
                
                <div className="text-right">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-20 bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-green-600 h-2 rounded-full" 
                        style={{ width: `${client.progress}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-600">{client.progress}%</span>
                  </div>
                  <div className="flex space-x-2">
                    <button 
                      onClick={() => handleViewClient(client)}
                      className="text-green-600 hover:text-green-700 text-sm font-medium"
                    >
                      View Details
                    </button>
                    <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                      Message
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Client Detail Modal */}
      {selectedClient && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-gray-900">{selectedClient.name}</h3>
              <button
                onClick={() => setSelectedClient(null)}
                className="w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
              >
                ✕
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-600">Contact Info</label>
                  <div className="mt-1">
                    <p className="text-gray-900">{selectedClient.email}</p>
                    <p className="text-gray-900">{selectedClient.phone}</p>
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-gray-600">Fitness Goal</label>
                  <p className="text-gray-900 mt-1">{selectedClient.goal}</p>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-gray-600">Start Date</label>
                  <p className="text-gray-900 mt-1">{new Date(selectedClient.startDate).toLocaleDateString()}</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-600">Weight Progress</label>
                  <div className="mt-1">
                    <p className="text-gray-900">Current: {selectedClient.currentWeight} lbs</p>
                    <p className="text-gray-900">Target: {selectedClient.targetWeight} lbs</p>
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-gray-600">Sessions</label>
                  <div className="mt-1">
                    <p className="text-gray-900">{selectedClient.sessionsCompleted} of {selectedClient.totalSessions} completed</p>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                      <div 
                        className="bg-green-600 h-2 rounded-full" 
                        style={{ width: `${(selectedClient.sessionsCompleted / selectedClient.totalSessions) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-gray-600">Overall Progress</label>
                  <div className="mt-1">
                    <div className="flex items-center space-x-2">
                      <div className="flex-1 bg-gray-200 rounded-full h-3">
                        <div 
                          className="bg-green-600 h-3 rounded-full" 
                          style={{ width: `${selectedClient.progress}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-medium text-gray-900">{selectedClient.progress}%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex space-x-3">
              <button className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors">
                Create Workout Plan
              </button>
              <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors">
                Schedule Session
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ClientManagement