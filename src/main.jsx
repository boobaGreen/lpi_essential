import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { GameProvider } from './context/GameContext.jsx'
import { LanguageProvider } from './context/LanguageContext.jsx'
import { CourseProvider } from './context/CourseContext.jsx'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <LanguageProvider>
        <CourseProvider>
          <GameProvider>
            <App />
          </GameProvider>
        </CourseProvider>
      </LanguageProvider>
    </BrowserRouter>
  </StrictMode>,
)
