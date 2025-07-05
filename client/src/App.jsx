import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './contexts/ThemeContext'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import AdminPage from './pages/AdminPage'
import TrainerPage from './pages/TrainerPage'
import MemberPage from './pages/MemberPage'

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/trainer" element={<TrainerPage />} />
          <Route path="/member" element={<MemberPage />} />
        </Routes>
      </div>
    </ThemeProvider>
  )
}

export default App