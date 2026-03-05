import { Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar.jsx'
import Dashboard from './pages/Dashboard.jsx'
import TopicPage from './pages/TopicPage.jsx'
import LessonPage from './pages/LessonPage.jsx'
import GamesHub from './pages/GamesHub.jsx'
import ExamPage from './pages/ExamPage.jsx'

export default function App() {
  return (
    <div className="min-h-screen bg-[var(--color-bg-primary)]">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/topic/:topicId" element={<TopicPage />} />
          <Route path="/topic/:topicId/lesson/:lessonId" element={<LessonPage />} />
          <Route path="/games" element={<GamesHub />} />
          <Route path="/exam" element={<ExamPage />} />
        </Routes>
      </main>
    </div>
  )
}
