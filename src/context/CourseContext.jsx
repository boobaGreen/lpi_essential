import { createContext, useContext, useState } from 'react'
import { DEFAULT_COURSE_ID, COURSES } from '../data/courses.js'

const CourseContext = createContext(null)

const STORAGE_KEY = 'lq_course'

export function CourseProvider({ children }) {
  const [currentCourseId, setCurrentCourseId] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved && COURSES[saved]) return saved
    } catch {}
    return DEFAULT_COURSE_ID
  })

  const setCourse = (courseId) => {
    if (!COURSES[courseId]) return
    try {
      localStorage.setItem(STORAGE_KEY, courseId)
    } catch {}
    setCurrentCourseId(courseId)
  }

  const currentCourse = COURSES[currentCourseId]

  return (
    <CourseContext.Provider value={{ currentCourseId, currentCourse, setCourse }}>
      {children}
    </CourseContext.Provider>
  )
}

export function useCourse() {
  const ctx = useContext(CourseContext)
  if (!ctx) throw new Error('useCourse must be used within a CourseProvider')
  return ctx
}

export default CourseContext
