import { useState } from 'react'

import Navbar from './Components/layout/Navbar'
import Sidebar from './Components/layout/Sidebar'
import User from './pages/User'
import Dashboard from './pages/Dashboard'
import Inventory from './pages/Inventory'
import Reports from './pages/Reports'
import Settings from './pages/Settings'
import Login from './pages/Login'
import ForgotPass from './pages/ForgotPass'
import Chatbot from './pages/Chatbot'

import './App.css'
import { Route, Routes, Navigate } from 'react-router-dom'

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <>
      <Sidebar isOpen={sidebarOpen} />

      <Navbar
        pageTitle="Users"
        sidebarOpen={sidebarOpen}
        onSidebarToggle={() => setSidebarOpen((open) => !open)}
      />

      <main className={sidebarOpen ? 'main-content' : 'main-content-full'}>
        <Routes>

          {/* Default page */}
          <Route path="/" element={<Navigate to="/dashboard" replace />} />

          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/users" element={<User />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/settings" element={<Settings />} />

          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPass />} />
          <Route path="/chatbot" element={<Chatbot />} />

          {/* Invalid URL */}
          <Route path="*" element={<Navigate to="/dashboard" replace />} />

        </Routes>
      </main>
    </>
  )
}

export default App