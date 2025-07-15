import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './index.css'
import Login from './pages/Login/Login'
import Feed from './pages/Feed/Feed'
import Announcements from './pages/Feed/Announcements'
import Events from './pages/Feed/Events'
import General from './pages/Feed/General'
import Welcome from './pages/Feed/Welcome'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Feed />}>
          <Route path="welcome" element={<Welcome />} />
          <Route path="announcements" element={<Announcements />} />
          <Route path="events" element={<Events />} />
          <Route path="general" element={<General />} />
          <Route index element={<Navigate to="/general" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
