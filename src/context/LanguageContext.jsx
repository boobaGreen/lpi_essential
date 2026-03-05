import { createContext, useContext, useState, useEffect } from 'react'

// Import all UI dictionaries
import { ui as uiIt } from '../locales/it/ui'
import { ui as uiEn } from '../locales/en/ui'
import { ui as uiEs } from '../locales/es/ui'
import { ui as uiDe } from '../locales/de/ui'
import { ui as uiRu } from '../locales/ru/ui'
import { ui as uiPt } from '../locales/pt/ui'
import { ui as uiFr } from '../locales/fr/ui'
import { ui as uiZh } from '../locales/zh/ui'

const dictionaries = {
  it: uiIt,
  en: uiEn,
  es: uiEs,
  de: uiDe,
  ru: uiRu,
  pt: uiPt,
  fr: uiFr,
  zh: uiZh,
}

export const languages = [
  { code: 'it', name: 'Italiano', flag: '🇮🇹' },
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺' },
  { code: 'pt', name: 'Português', flag: '🇵🇹' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'zh', name: '中文', flag: '🇨🇳' },
]

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [currentLang, setCurrentLang] = useState('it')

  useEffect(() => {
    const saved = localStorage.getItem('linuxquest-lang')
    if (saved && dictionaries[saved]) {
      setCurrentLang(saved)
    } else {
      // Auto-detect browser language if possible
      const browserLang = navigator.language.split('-')[0]
      if (dictionaries[browserLang]) {
        setCurrentLang(browserLang)
      }
    }
  }, [])

  const changeLanguage = (langCode) => {
    if (dictionaries[langCode]) {
      setCurrentLang(langCode)
      localStorage.setItem('linuxquest-lang', langCode)
    }
  }

  // Helper function to get translation
  // Fallback to Italian (the base language) if a key is missing in the current language
  const t = (key) => {
    return dictionaries[currentLang][key] || dictionaries['it'][key] || key
  }

  return (
    <LanguageContext.Provider value={{ currentLang, changeLanguage, t, languages }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
