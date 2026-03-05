import { useLanguage } from '../context/LanguageContext.jsx'
import { useParams } from 'react-router-dom'

// LPI Linux Essentials game data
import * as itData from '../locales/it/gamesData.js'
import * as enData from '../locales/en/gamesData.js'
import * as esData from '../locales/es/gamesData.js'
import * as deData from '../locales/de/gamesData.js'
import * as frData from '../locales/fr/gamesData.js'
import * as ptData from '../locales/pt/gamesData.js'
import * as ruData from '../locales/ru/gamesData.js'
import * as zhData from '../locales/zh/gamesData.js'

// RHCSA game data
import * as itRhcsaData from '../locales/it/rhcsa_gamesData.js'
import * as enRhcsaData from '../locales/en/rhcsa_gamesData.js'
import * as esRhcsaData from '../locales/es/rhcsa_gamesData.js'
import * as deRhcsaData from '../locales/de/rhcsa_gamesData.js'
import * as frRhcsaData from '../locales/fr/rhcsa_gamesData.js'
import * as ptRhcsaData from '../locales/pt/rhcsa_gamesData.js'
import * as ruRhcsaData from '../locales/ru/rhcsa_gamesData.js'
import * as zhRhcsaData from '../locales/zh/rhcsa_gamesData.js'

const lpiDataMap = {
  it: itData, en: enData, es: esData, de: deData,
  fr: frData, pt: ptData, ru: ruData, zh: zhData,
}

const rhcsaDataMap = {
  it: itRhcsaData, en: enRhcsaData, es: esRhcsaData, de: deRhcsaData,
  fr: frRhcsaData, pt: ptRhcsaData, ru: ruRhcsaData, zh: zhRhcsaData,
}

export function useGameData() {
  const { currentLang } = useLanguage()
  const params = useParams()
  const courseId = params?.courseId || 'linux-essentials'

  const isRhcsa = courseId === 'rhcsa'
  const map = isRhcsa ? rhcsaDataMap : lpiDataMap
  const currentData = map[currentLang] || map.it

  return {
    memoryGameData: currentData.memoryGameData,
    trueFalseData: currentData.trueFalseData,
    terminalChallengeData: currentData.terminalChallengeData,
    dragDropData: currentData.dragDropData,
    fillGapData: currentData.fillGapData,
  }
}
