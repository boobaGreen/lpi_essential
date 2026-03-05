import { useLanguage } from '../context/LanguageContext.jsx'

import * as itData from '../locales/it/gamesData.js'
import * as enData from '../locales/en/gamesData.js'
import * as esData from '../locales/es/gamesData.js'

const dataMap = {
  it: itData,
  en: enData,
  es: esData,
  // Fallbacks per le altre lingue per ora
  de: enData,
  fr: enData,
  pt: enData,
  ru: enData,
  zh: enData,
}

export function useGameData() {
  const { language } = useLanguage()
  const currentData = dataMap[language] || dataMap.en
  
  return {
    memoryGameData: currentData.memoryGameData,
    trueFalseData: currentData.trueFalseData,
    terminalChallengeData: currentData.terminalChallengeData,
    dragDropData: currentData.dragDropData,
    fillGapData: currentData.fillGapData,
  }
}
