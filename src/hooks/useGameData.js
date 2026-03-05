import { useLanguage } from '../context/LanguageContext.jsx'

import * as itData from '../locales/it/gamesData.js'
import * as enData from '../locales/en/gamesData.js'
import * as esData from '../locales/es/gamesData.js'
import * as deData from '../locales/de/gamesData.js'
import * as frData from '../locales/fr/gamesData.js'
import * as ptData from '../locales/pt/gamesData.js'
import * as ruData from '../locales/ru/gamesData.js'
import * as zhData from '../locales/zh/gamesData.js'

const dataMap = {
  it: itData,
  en: enData,
  es: esData,
  de: deData,
  fr: frData,
  pt: ptData,
  ru: ruData,
  zh: zhData,
}

export function useGameData() {
  const { currentLang } = useLanguage()
  const currentData = dataMap[currentLang] || dataMap.it

  return {
    memoryGameData: currentData.memoryGameData,
    trueFalseData: currentData.trueFalseData,
    terminalChallengeData: currentData.terminalChallengeData,
    dragDropData: currentData.dragDropData,
    fillGapData: currentData.fillGapData,
  }
}
