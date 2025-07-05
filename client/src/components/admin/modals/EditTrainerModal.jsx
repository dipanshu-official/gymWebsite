import { useState, useEffect } from 'react'

const EditTrainerModal = ({ isOpen, onClose, onSubmit, trainer }) => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    email: '',
    phone: '',
    password: '',
    specialization: '',
    certification: '',
    salary: '',
    startDate: '',
    experience: '',
    status: 'Active'
  })

  const [showPassword, setShowPassword] = useState(false)
  const [changePassword, setChangePassword] = useState(false)

  useEffect(() => {
    if (trainer) {
      setFormData({
        name: trainer.name || '',
        age: trainer.age || '',
        email: trainer.email || '',
        phone: trainer.phone || '',
        password: trainer.password || '',
        specialization: trainer.specialization || '',
        certification: trainer.certification || '',
        salary: trainer.salary || '',
        startDate: trainer.startDate || '',
        experience: trainer.experience || '',
        status: trainer.status || 'Active'
      })
      setChangePassword(false)
    }
  }, [trainer])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // If not changing password, remove it from the update
    const submitData = changePassword ? formData : { ...formData, password: trainer.password }
    
    onSubmit({ ...trainer, ...submitData })
    onClose()
  }

  if (!isOpen || !trainer) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-8 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Edit Trainer</h2>
          <button
            onClick={onClose}
            className="w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Age *
              </label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleInputChange}
                required
                min="18"
                max="70"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent transition-all"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent transition-all"
              />
            </div>
          </div>

          {/* Password Section */}
          <div className="border-t border-gray-200 pt-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-gray-900">Password Settings</h3>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={changePassword}
                  onChange={(e) => setChangePassword(e.target.checked)}
                  className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-600"
                />
                <span className="ml-2 text-sm text-gray-600">Change Password</span>
              </label>
            </div>

            {changePassword && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  New Password *
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required={changePassword}
                    minLength="6"
                    className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent transition-all"
                    placeholder="Enter new password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? '👁️' : '👁️‍🗨️'}
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Specialization *
              </label>
              <select
                name="specialization"
                value={formData.specialization}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent transition-all"
              >
                <option value="Strength Training">Strength Training</option>
                <option value="Cardio & HIIT">Cardio & HIIT</option>
                <option value="Yoga & Pilates">Yoga & Pilates</option>
                <option value="Functional Training">Functional Training</option>
                <option value="Sports Performance">Sports Performance</option>
                <option value="Rehabilitation">Rehabilitation</option>
                <option value="Nutrition Coaching">Nutrition Coaching</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Status *
              </label>
              <select
                name="status"
                value={formData.status}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent transition-all"
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
                <option value="On Leave">On Leave</option>
                <option value="Terminated">Terminated</option>
              </select>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Primary Certification *
              </label>
              <select
                name="certification"
                value={formData.certification}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent transition-all"
              >
                <option value="NASM-CPT">NASM-CPT</option>
                <option value="ACSM-CPT">ACSM-CPT</option>
                <option value="ACE-CPT">ACE-CPT</option>
                <option value="NSCA-CSCS">NSCA-CSCS</option>
                <option value="RYT-200">RYT-200</option>
                <option value="RYT-500">RYT-500</option>
                <option value="CrossFit Level 1">CrossFit Level 1</option>
                <option value="CrossFit Level 2">CrossFit Level 2</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Monthly Salary *
              </label>
              <input
                type="number"
                name="salary"
                value={formData.salary}
                onChange={handleInputChange}
                required
                min="0"
                step="100"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent transition-all"
              />
            </div>
          </div>

          <div className="flex space-x-4 pt-6">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 px-6 rounded-lg font-semibold transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors"
            >
              Update Trainer
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditTrainerModal