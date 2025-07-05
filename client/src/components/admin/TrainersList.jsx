import { useState } from 'react'
import SearchBar from './SearchBar'
import AddTrainerModal from './modals/AddTrainerModal'
import EditTrainerModal from './modals/EditTrainerModal'

const TrainersList = ({ trainers, onAddTrainer, onEditTrainer, onDeleteTrainer }) => {
  const [filteredTrainers, setFilteredTrainers] = useState(trainers)
  const [showAddModal, setShowAddModal] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)
  const [selectedTrainer, setSelectedTrainer] = useState(null)
  const [showPasswordModal, setShowPasswordModal] = useState(false)
  const [selectedTrainerPassword, setSelectedTrainerPassword] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 8

  const searchFilters = [
    { value: 'active', label: 'Active' },
    { value: 'inactive', label: 'Inactive' },
    { value: 'strength', label: 'Strength Training' },
    { value: 'cardio', label: 'Cardio & HIIT' },
    { value: 'yoga', label: 'Yoga & Pilates' },
    { value: 'functional', label: 'Functional Training' }
  ]

  // Calculate pagination
  const totalPages = Math.ceil(filteredTrainers.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentTrainers = filteredTrainers.slice(startIndex, endIndex)

  const handleSearch = (searchTerm, filter) => {
    let filtered = trainers

    // Apply text search
    if (searchTerm) {
      filtered = filtered.filter(trainer =>
        trainer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        trainer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        trainer.specialization.toLowerCase().includes(searchTerm.toLowerCase()) ||
        trainer.certification.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    // Apply filter
    if (filter !== 'all') {
      filtered = filtered.filter(trainer => {
        switch (filter) {
          case 'active':
          case 'inactive':
            return trainer.status.toLowerCase() === filter
          case 'strength':
            return trainer.specialization.toLowerCase().includes('strength')
          case 'cardio':
            return trainer.specialization.toLowerCase().includes('cardio') || 
                   trainer.specialization.toLowerCase().includes('hiit')
          case 'yoga':
            return trainer.specialization.toLowerCase().includes('yoga') || 
                   trainer.specialization.toLowerCase().includes('pilates')
          case 'functional':
            return trainer.specialization.toLowerCase().includes('functional')
          default:
            return true
        }
      })
    }

    setFilteredTrainers(filtered)
    setCurrentPage(1) // Reset to first page when filtering
  }

  const handleEditClick = (trainer) => {
    setSelectedTrainer(trainer)
    setShowEditModal(true)
  }

  const handleViewPassword = (trainer) => {
    setSelectedTrainerPassword(trainer)
    setShowPasswordModal(true)
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active':
        return 'bg-green-100 text-green-800'
      case 'Inactive':
        return 'bg-red-100 text-red-800'
      case 'On Leave':
        return 'bg-yellow-100 text-yellow-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  const renderPagination = () => {
    if (totalPages <= 1) return null

    const pages = []
    const maxVisiblePages = 5
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2))
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1)

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1)
    }

    // Previous button
    pages.push(
      <button
        key="prev"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
          currentPage === 1
            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
            : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-300'
        }`}
      >
        Previous
      </button>
    )

    // Page numbers
    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
            currentPage === i
              ? 'bg-green-600 text-white'
              : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-300'
          }`}
        >
          {i}
        </button>
      )
    }

    // Next button
    pages.push(
      <button
        key="next"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
          currentPage === totalPages
            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
            : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-300'
        }`}
      >
        Next
      </button>
    )

    return (
      <div className="flex items-center justify-between mt-6">
        <div className="text-sm text-gray-700">
          Showing {startIndex + 1} to {Math.min(endIndex, filteredTrainers.length)} of {filteredTrainers.length} trainers
        </div>
        <div className="flex space-x-1">
          {pages}
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-xl shadow-sm">
      <div className="p-6 border-b border-gray-200">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Trainers Management</h2>
            <p className="text-gray-600">Manage trainer profiles and assignments</p>
          </div>
          <button 
            onClick={() => setShowAddModal(true)}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-colors font-semibold flex items-center space-x-2"
          >
            <span>➕</span>
            <span>Add New Trainer</span>
          </button>
        </div>

        <SearchBar
          onSearch={handleSearch}
          placeholder="Search trainers by name, specialization, or certification..."
          filters={searchFilters}
        />
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Trainer</th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Login Info</th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Specialization</th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Salary</th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {currentTrainers.map((trainer) => (
              <tr key={trainer.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 font-semibold text-sm">
                        {trainer.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">{trainer.name}</div>
                      <div className="text-sm text-gray-500">Age: {trainer.age}</div>
                      <div className="text-sm text-gray-500">Since: {trainer.startDate}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{trainer.email}</div>
                  <div className="text-sm text-gray-500">{trainer.phone}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{trainer.email}</div>
                  <button
                    onClick={() => handleViewPassword(trainer)}
                    className="text-sm text-green-600 hover:text-green-800 transition-colors"
                  >
                    View Password
                  </button>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{trainer.specialization}</div>
                  <div className="text-sm text-gray-500">{trainer.certification}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">${trainer.salary}/month</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full ${getStatusColor(trainer.status)}`}>
                    {trainer.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <div className="flex space-x-3">
                    <button 
                      onClick={() => handleEditClick(trainer)}
                      className="text-blue-600 hover:text-blue-900 transition-colors"
                    >
                      Edit
                    </button>
                    <button className="text-green-600 hover:text-green-900 transition-colors">
                      Schedule
                    </button>
                    <button 
                      onClick={() => onDeleteTrainer(trainer.id)}
                      className="text-red-600 hover:text-red-900 transition-colors"
                    >
                      Remove
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {filteredTrainers.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">💪</div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No trainers found</h3>
            <p className="text-gray-500">Try adjusting your search criteria or add a new trainer.</p>
          </div>
        )}
      </div>

      {/* Pagination */}
      {renderPagination()}

      {/* Password View Modal */}
      {showPasswordModal && selectedTrainerPassword && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-gray-900">Trainer Login Details</h3>
              <button
                onClick={() => setShowPasswordModal(false)}
                className="w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
              >
                ✕
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Trainer Name</label>
                <div className="text-lg font-semibold text-gray-900">{selectedTrainerPassword.name}</div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email/Username</label>
                <div className="bg-gray-50 p-3 rounded-lg text-gray-900">{selectedTrainerPassword.email}</div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <div className="bg-gray-50 p-3 rounded-lg text-gray-900 font-mono">
                  {selectedTrainerPassword.password || '••••••••'}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
                <div className="bg-green-50 p-3 rounded-lg text-green-800 font-medium">Trainer</div>
              </div>
            </div>
            
            <div className="mt-6">
              <button
                onClick={() => setShowPasswordModal(false)}
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modals */}
      <AddTrainerModal
        isOpen={showAddModal}
        onClose={() => setShowAddModal(false)}
        onSubmit={onAddTrainer}
      />

      <EditTrainerModal
        isOpen={showEditModal}
        onClose={() => setShowEditModal(false)}
        onSubmit={onEditTrainer}
        trainer={selectedTrainer}
      />
    </div>
  )
}

export default TrainersList