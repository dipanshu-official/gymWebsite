import { useState } from 'react'
import { useTheme } from '../contexts/ThemeContext'
import DashboardHeader from '../components/shared/DashboardHeader'
import Sidebar from '../components/admin/Sidebar'
import StudentsList from '../components/admin/StudentsList'
import TrainersList from '../components/admin/TrainersList'
import RevenueChart from '../components/admin/charts/RevenueChart'
import ExpenseChart from '../components/admin/charts/ExpenseChart'
import MembershipChart from '../components/admin/charts/MembershipChart'
import ProfitChart from '../components/admin/charts/ProfitChart'

const AdminPage = () => {
  const [activeSection, setActiveSection] = useState('overview')
  const { isDark } = useTheme()

  // Sample student data with passwords
  const [students, setStudents] = useState([
    {
      id: 1,
      name: 'John Smith',
      age: 28,
      email: 'john.smith@email.com',
      phone: '+1 (555) 123-4567',
      password: 'student123',
      startDate: '2024-01-15',
      membershipType: 'Premium',
      feesPaid: 1200,
      feesUnpaid: 0,
      dues: 0,
      status: 'Active'
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      age: 32,
      email: 'sarah.j@email.com',
      phone: '+1 (555) 234-5678',
      password: 'sarah2024',
      startDate: '2023-11-20',
      membershipType: 'Basic',
      feesPaid: 800,
      feesUnpaid: 200,
      dues: 200,
      status: 'Pending'
    },
    {
      id: 3,
      name: 'Mike Wilson',
      age: 25,
      email: 'mike.wilson@email.com',
      phone: '+1 (555) 345-6789',
      password: 'mike@fit',
      startDate: '2024-02-01',
      membershipType: 'Elite',
      feesPaid: 1800,
      feesUnpaid: 0,
      dues: 0,
      status: 'Active'
    },
    {
      id: 4,
      name: 'Lisa Chen',
      age: 29,
      email: 'lisa.chen@email.com',
      phone: '+1 (555) 456-7890',
      password: 'lisa789',
      startDate: '2023-12-10',
      membershipType: 'Premium',
      feesPaid: 900,
      feesUnpaid: 300,
      dues: 300,
      status: 'Overdue'
    },
    {
      id: 5,
      name: 'David Park',
      age: 35,
      email: 'david.park@email.com',
      phone: '+1 (555) 567-8901',
      password: 'david@gym',
      startDate: '2024-01-05',
      membershipType: 'Basic',
      feesPaid: 600,
      feesUnpaid: 0,
      dues: 0,
      status: 'Active'
    }
  ])

  // Sample trainer data with passwords
  const [trainers, setTrainers] = useState([
    {
      id: 1,
      name: 'Alex Rodriguez',
      age: 30,
      email: 'alex.r@globalfitness.com',
      phone: '+1 (555) 111-2222',
      password: 'trainer123',
      startDate: '2023-06-15',
      specialization: 'Strength Training',
      certification: 'NASM-CPT',
      salary: 4500,
      experience: 8,
      status: 'Active'
    },
    {
      id: 2,
      name: 'Emily Davis',
      age: 27,
      email: 'emily.d@globalfitness.com',
      phone: '+1 (555) 222-3333',
      password: 'emily@yoga',
      startDate: '2023-08-20',
      specialization: 'Yoga & Pilates',
      certification: 'RYT-500',
      salary: 4200,
      experience: 5,
      status: 'Active'
    },
    {
      id: 3,
      name: 'Marcus Thompson',
      age: 33,
      email: 'marcus.t@globalfitness.com',
      phone: '+1 (555) 333-4444',
      password: 'marcus@fit',
      startDate: '2023-05-10',
      specialization: 'Cardio & HIIT',
      certification: 'ACSM-CPT',
      salary: 4800,
      experience: 10,
      status: 'Active'
    }
  ])

  // Chart data
  const revenueData = [
    { month: 'Jan', revenue: 85 },
    { month: 'Feb', revenue: 78 },
    { month: 'Mar', revenue: 92 },
    { month: 'Apr', revenue: 88 },
    { month: 'May', revenue: 95 },
    { month: 'Jun', revenue: 89 },
    { month: 'Jul', revenue: 102 },
    { month: 'Aug', revenue: 98 },
    { month: 'Sep', revenue: 105 },
    { month: 'Oct', revenue: 112 },
    { month: 'Nov', revenue: 108 },
    { month: 'Dec', revenue: 115 }
  ]

  const expenseData = [
    { category: 'Salaries', amount: 45 },
    { category: 'Equipment', amount: 12 },
    { category: 'Utilities', amount: 8.5 },
    { category: 'Marketing', amount: 6 },
    { category: 'Maintenance', amount: 4.5 },
    { category: 'Insurance', amount: 3 }
  ]

  const membershipData = [
    { name: 'Basic', value: 45 },
    { name: 'Premium', value: 35 },
    { name: 'Elite', value: 20 }
  ]

  const profitData = [
    { month: 'Jan', revenue: 85, expenses: 65, profit: 20 },
    { month: 'Feb', revenue: 78, expenses: 62, profit: 16 },
    { month: 'Mar', revenue: 92, expenses: 68, profit: 24 },
    { month: 'Apr', revenue: 88, expenses: 66, profit: 22 },
    { month: 'May', revenue: 95, expenses: 70, profit: 25 },
    { month: 'Jun', revenue: 89, expenses: 67, profit: 22 }
  ]

  const stats = [
    { label: 'Total Members', value: students.length.toString(), change: '+12%', icon: '👥', color: 'bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400' },
    { label: 'Active Trainers', value: trainers.filter(t => t.status === 'Active').length.toString(), change: '+2', icon: '💪', color: 'bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-400' },
    { label: 'Monthly Revenue', value: '$89,420', change: '+18%', icon: '💰', color: 'bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-400' },
    { label: 'Equipment Status', value: '98%', change: '+1%', icon: '🏋️', color: 'bg-orange-100 dark:bg-orange-900/50 text-orange-600 dark:text-orange-400' }
  ]

  // Student management functions
  const handleAddStudent = (studentData) => {
    const newStudent = {
      ...studentData,
      id: students.length + 1,
      feesPaid: studentData.initialPayment || 0,
      feesUnpaid: 0,
      dues: 0,
      status: 'Active'
    }
    setStudents([...students, newStudent])
  }

  const handleEditStudent = (updatedStudent) => {
    setStudents(students.map(student => 
      student.id === updatedStudent.id ? updatedStudent : student
    ))
  }

  const handleDeleteStudent = (studentId) => {
    if (window.confirm('Are you sure you want to delete this student?')) {
      setStudents(students.filter(student => student.id !== studentId))
    }
  }

  // Trainer management functions
  const handleAddTrainer = (trainerData) => {
    const newTrainer = {
      ...trainerData,
      id: trainers.length + 1,
      status: 'Active'
    }
    setTrainers([...trainers, newTrainer])
  }

  const handleEditTrainer = (updatedTrainer) => {
    setTrainers(trainers.map(trainer => 
      trainer.id === updatedTrainer.id ? updatedTrainer : trainer
    ))
  }

  const handleDeleteTrainer = (trainerId) => {
    if (window.confirm('Are you sure you want to remove this trainer?')) {
      setTrainers(trainers.filter(trainer => trainer.id !== trainerId))
    }
  }

  const renderFinanceReports = () => (
    <div className="space-y-8">
      {/* Financial Summary Cards */}
      <div className="grid md:grid-cols-4 gap-6">
        <div className="bg-gradient-to-r from-purple-500 to-purple-600 dark:from-purple-600 dark:to-purple-700 p-6 rounded-xl text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-100 text-sm">Monthly Revenue</p>
              <p className="text-3xl font-bold">$89,420</p>
              <p className="text-purple-100 text-sm">+18% from last month</p>
            </div>
            <div className="text-4xl opacity-80">💰</div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-green-500 to-green-600 dark:from-green-600 dark:to-green-700 p-6 rounded-xl text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-100 text-sm">Total Expenses</p>
              <p className="text-3xl font-bold">$65,500</p>
              <p className="text-green-100 text-sm">+5% from last month</p>
            </div>
            <div className="text-4xl opacity-80">📊</div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700 p-6 rounded-xl text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100 text-sm">Net Profit</p>
              <p className="text-3xl font-bold">$23,920</p>
              <p className="text-blue-100 text-sm">+26% from last month</p>
            </div>
            <div className="text-4xl opacity-80">📈</div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 dark:from-orange-600 dark:to-orange-700 p-6 rounded-xl text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-orange-100 text-sm">Profit Margin</p>
              <p className="text-3xl font-bold">26.7%</p>
              <p className="text-orange-100 text-sm">+2.1% from last month</p>
            </div>
            <div className="text-4xl opacity-80">🎯</div>
          </div>
        </div>
      </div>

      {/* Charts Grid */}
      <div className="grid lg:grid-cols-2 gap-8">
        <RevenueChart data={revenueData} />
        <ExpenseChart data={expenseData} />
      </div>
      
      <div className="grid lg:grid-cols-2 gap-8">
        <MembershipChart data={membershipData} />
        <ProfitChart data={profitData} />
      </div>

      {/* Detailed Financial Table */}
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm p-6 border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Detailed Financial Breakdown</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Category</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">This Month</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Last Month</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Change</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">YTD Total</th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">Membership Revenue</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300">$75,200</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300">$68,500</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600 dark:text-green-400">+9.8%</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300">$820,400</td>
              </tr>
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">Personal Training</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300">$12,800</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300">$11,200</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600 dark:text-green-400">+14.3%</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300">$142,600</td>
              </tr>
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">Merchandise</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300">$1,420</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300">$1,180</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600 dark:text-green-400">+20.3%</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300">$15,840</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900 dark:text-white">Total Revenue</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900 dark:text-white">$89,420</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900 dark:text-white">$80,880</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-green-600 dark:text-green-400">+10.6%</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900 dark:text-white">$978,840</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )

  const renderOverview = () => (
    <div className="space-y-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{stat.label}</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
                <p className="text-sm text-green-600 dark:text-green-400">{stat.change} from last month</p>
              </div>
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${stat.color}`}>
                <span className="text-xl">{stat.icon}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm p-6 border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Quick Actions</h3>
        <div className="grid md:grid-cols-4 gap-4">
          <button 
            onClick={() => setActiveSection('students')}
            className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white p-4 rounded-lg transition-all duration-300 text-center hover:scale-105 shadow-lg"
          >
            <div className="text-2xl mb-2">👤</div>
            <div className="font-medium">Manage Students</div>
          </button>
          <button 
            onClick={() => setActiveSection('trainers')}
            className="bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 text-white p-4 rounded-lg transition-all duration-300 text-center hover:scale-105 shadow-lg"
          >
            <div className="text-2xl mb-2">💪</div>
            <div className="font-medium">Manage Trainers</div>
          </button>
          <button 
            onClick={() => setActiveSection('finance')}
            className="bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 text-white p-4 rounded-lg transition-all duration-300 text-center hover:scale-105 shadow-lg"
          >
            <div className="text-2xl mb-2">📊</div>
            <div className="font-medium">View Reports</div>
          </button>
          <button className="bg-orange-600 hover:bg-orange-700 dark:bg-orange-500 dark:hover:bg-orange-600 text-white p-4 rounded-lg transition-all duration-300 text-center hover:scale-105 shadow-lg">
            <div className="text-2xl mb-2">🔧</div>
            <div className="font-medium">System Settings</div>
          </button>
        </div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex transition-colors duration-300">
      {/* Sidebar */}
      <Sidebar 
        activeSection={activeSection} 
        onSectionChange={setActiveSection} 
      />

      {/* Main Content */}
      <div className="flex-1 ml-16">
        <DashboardHeader 
          title="Admin Dashboard" 
          role="admin" 
          icon="⚙️" 
          color="from-purple-500 to-purple-600" 
        />

        <div className="p-8">
          {/* Welcome Banner */}
          <div className="bg-gradient-to-r from-purple-500 to-purple-600 dark:from-purple-600 dark:to-purple-700 rounded-2xl p-8 text-white mb-8 shadow-xl">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold mb-2">Admin Control Center</h1>
                <p className="text-purple-100">Manage your gym operations with complete oversight</p>
              </div>
              <div className="text-6xl opacity-20">⚙️</div>
            </div>
          </div>

          {/* Dynamic Content */}
          {activeSection === 'overview' && renderOverview()}
          {activeSection === 'students' && (
            <StudentsList
              students={students}
              onAddStudent={handleAddStudent}
              onEditStudent={handleEditStudent}
              onDeleteStudent={handleDeleteStudent}
            />
          )}
          {activeSection === 'trainers' && (
            <TrainersList
              trainers={trainers}
              onAddTrainer={handleAddTrainer}
              onEditTrainer={handleEditTrainer}
              onDeleteTrainer={handleDeleteTrainer}
            />
          )}
          {activeSection === 'finance' && renderFinanceReports()}
        </div>
      </div>
    </div>
  )
}

export default AdminPage