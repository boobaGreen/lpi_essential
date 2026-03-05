import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/layout/Navbar.jsx'
import Dashboard from './pages/Dashboard.jsx'
import TopicPage from './pages/TopicPage.jsx'
import LessonPage from './pages/LessonPage.jsx'
import GamesHub from './pages/GamesHub.jsx'
import ExamPage from './pages/ExamPage.jsx'

export default function App() {
  const location = useLocation()

  return (
    <div style={{ minHeight: '100vh', background: 'var(--color-bg-primary)' }}>
      <Navbar />
      <main
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '32px 24px',
        }}
      >
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<div className="page-enter"><Dashboard /></div>} />
            <Route path="/topic/:topicId" element={<div className="page-enter"><TopicPage /></div>} />
            <Route path="/topic/:topicId/lesson/:lessonId" element={<div className="page-enter"><LessonPage /></div>} />
            <Route path="/games" element={<div className="page-enter"><GamesHub /></div>} />
            <Route path="/exam" element={<div className="page-enter"><ExamPage /></div>} />
          </Routes>
        </AnimatePresence>
      </main>
    </div>
  )
}
