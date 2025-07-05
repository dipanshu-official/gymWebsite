import { useState } from 'react'
import SearchBar from './SearchBar'
import AddStudentModal from './modals/AddStudentModal'
import EditStudentModal from './modals/EditStudentModal'

const StudentsList = ({ students, onAddStudent, onEditStudent, onDeleteStudent }) => {
  const [filteredStudents, setFilteredStudents] = useState(students)
  const [showAddModal, setShowAddModal] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)
  const [selectedStudent, setSelectedStudent] = useState(null)
  const [showPasswordModal, setShowPasswordModal] = useState(false)
  const [selectedStudentPassword, setSelectedStudentPassword] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 8

  const searchFilters = [
    { value: 'active', label: 'Active' },
    { value: 'pending', label: 'Pending' },
    { value: 'overdue', label: 'Overdue' },
    { value: 'basic', label: 'Basic Plan' },
    { value: 'premium', label: 'Premium Plan' },
    { value: 'elite', label: 'Elite Plan' }
  ]

  // Calculate pagination
  const totalPages = Math.ceil(filteredStudents.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentStudents = filteredStudents.slice(startIndex, endIndex)

  const handleSearch = (searchTerm, filter) => {
    let filtered = students

    // Apply text search
    if (searchTerm) {
      filtered = filtered.filter(student =>
        student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.phone.includes(searchTerm)
      )
    }

    // Apply filter
    if (filter !== 'all') {
      filtered = filtered.filter(student => {
        switch (filter) {
          case 'active':
          case 'pending':
          case 'overdue':
            return student.status.toLowerCase() === filter
          case 'basic':
          case 'premium':
          case 'elite':
            return student.membershipType.toLowerCase() === filter
          default:
            return true
        }
      })
    }

    setFilteredStudents(filtered)
    setCurrentPage(1) // Reset to first page when filtering
  }

  const handleEditClick = (student) => {
    setSelectedStudent(student)
    setShowEditModal(true)
  }

  const handleViewPassword = (student) => {
    setSelectedStudentPassword(student)
    setShowPasswordModal(true)
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active':
        return 'bg-green-100 text-green-800'
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800'
      case 'Overdue':
        return 'bg-red-100 text-red-800'
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
              ? 'bg-blue-600 text-white'
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
          Showing {startIndex + 1} to {Math.min(endIndex, filteredStudents.length)} of {filteredStudents.length} students
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
            <h2 className="text-2xl font-bold text-gray-900">Students Management</h2>
            <p className="text-gray-600">Manage all student information and memberships</p>
          </div>
          <button 
            onClick={() => setShowAddModal(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors font-semibold flex items-center space-x-2"
          >
            <span>➕</span>
            <span>Add New Student</span>
          </button>
        </div>

        <SearchBar
          onSearch={handleSearch}
          placeholder="Search students by name, email, or phone..."
          filters={searchFilters}
        />
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student</th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Login Info</th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Membership</th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Financial Status</th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {currentStudents.map((student) => (
              <tr key={student.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-semibold text-sm">
                        {student.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">{student.name}</div>
                      <div className="text-sm text-gray-500">Age: {student.age}</div>
                      <div className="text-sm text-gray-500">Since: {student.startDate}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{student.email}</div>
                  <div className="text-sm text-gray-500">{student.phone}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{student.email}</div>
                  <button
                    onClick={() => handleViewPassword(student)}
                    className="text-sm text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    View Password
                  </button>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{student.membershipType}</div>
                  <div className="text-sm text-gray-500">Start: {student.startDate}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <span className="text-green-600 text-sm">✓ Paid: ${student.feesPaid}</span>
                    </div>
                    {student.feesUnpaid > 0 && (
                      <div className="flex items-center space-x-2">
                        <span className="text-red-600 text-sm">✗ Unpaid: ${student.feesUnpaid}</span>
                      </div>
                    )}
                    {student.dues > 0 && (
                      <div className="flex items-center space-x-2">
                        <span className="text-orange-600 text-sm">⚠ Dues: ${student.dues}</span>
                      </div>
                    )}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full ${getStatusColor(student.status)}`}>
                    {student.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <div className="flex space-x-3">
                    <button 
                      onClick={() => handleEditClick(student)}
                      className="text-blue-600 hover:text-blue-900 transition-colors"
                    >
                      Edit
                    </button>
                    <button className="text-green-600 hover:text-green-900 transition-colors">
                      Payment
                    </button>
                    <button 
                      onClick={() => onDeleteStudent(student.id)}
                      className="text-red-600 hover:text-red-900 transition-colors"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {filteredStudents.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">👥</div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No students found</h3>
            <p className="text-gray-500">Try adjusting your search criteria or add a new student.</p>
          </div>
        )}
      </div>

      {/* Pagination */}
      {renderPagination()}

      {/* Password View Modal */}
      {showPasswordModal && selectedStudentPassword && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-gray-900">Student Login Details</h3>
              <button
                onClick={() => setShowPasswordModal(false)}
                className="w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
              >
                ✕
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Student Name</label>
                <div className="text-lg font-semibold text-gray-900">{selectedStudentPassword.name}</div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email/Username</label>
                <div className="bg-gray-50 p-3 rounded-lg text-gray-900">{selectedStudentPassword.email}</div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <div className="bg-gray-50 p-3 rounded-lg text-gray-900 font-mono">
                  {selectedStudentPassword.password || '••••••••'}
                </div>
              </div>
            </div>
            
            <div className="mt-6">
              <button
                onClick={() => setShowPasswordModal(false)}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modals */}
      <AddStudentModal
        isOpen={showAddModal}
        onClose={() => setShowAddModal(false)}
        onSubmit={onAddStudent}
      />

      <EditStudentModal
        isOpen={showEditModal}
        onClose={() => setShowEditModal(false)}
        onSubmit={onEditStudent}
        student={selectedStudent}
      />
    </div>
  )
}

export default StudentsList