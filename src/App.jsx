import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/layout/Navbar.jsx'
import CoursePicker from './pages/CoursePicker.jsx'
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
            {/* Home — Course picker */}
            <Route path="/" element={<div className="page-enter"><CoursePicker /></div>} />

            {/* All course routes under /course/:courseId */}
            <Route path="/course/:courseId" element={<div className="page-enter"><Dashboard /></div>} />
            <Route path="/course/:courseId/topic/:topicId" element={<div className="page-enter"><TopicPage /></div>} />
            <Route path="/course/:courseId/topic/:topicId/lesson/:lessonId" element={<div className="page-enter"><LessonPage /></div>} />
            <Route path="/course/:courseId/games" element={<div className="page-enter"><GamesHub /></div>} />
            <Route path="/course/:courseId/exam" element={<div className="page-enter"><ExamPage /></div>} />
          </Routes>
        </AnimatePresence>
      </main>
    </div>
  )
}
