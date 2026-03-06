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

// LPIC-1 101 game data
import * as itLpic1_101Data from '../locales/it/lpic1_101_gamesData.js'
import * as enLpic1_101Data from '../locales/en/lpic1_101_gamesData.js'
import { terminalChallengeData as tC_es, memoryGameData as mG_es } from '../locales/es/lpic1_101_gamesData.js'
import { terminalChallengeData as tC_fr, memoryGameData as mG_fr } from '../locales/fr/lpic1_101_gamesData.js'
import { terminalChallengeData as tC_de, memoryGameData as mG_de } from '../locales/de/lpic1_101_gamesData.js'
import { terminalChallengeData as tC_pt, memoryGameData as mG_pt } from '../locales/pt/lpic1_101_gamesData.js'
import { terminalChallengeData as tC_ru, memoryGameData as mG_ru } from '../locales/ru/lpic1_101_gamesData.js'
import { terminalChallengeData as tC_zh, memoryGameData as mG_zh } from '../locales/zh/lpic1_101_gamesData.js'

// LPIC-1 102 game data
import * as itLpic1_102Data from '../locales/it/lpic1_102_gamesData.js'
import * as enLpic1_102Data from '../locales/en/lpic1_102_gamesData.js'
import * as esLpic1_102Data from '../locales/es/lpic1_102_gamesData.js'
import * as frLpic1_102Data from '../locales/fr/lpic1_102_gamesData.js'
import * as deLpic1_102Data from '../locales/de/lpic1_102_gamesData.js'
import * as ptLpic1_102Data from '../locales/pt/lpic1_102_gamesData.js'
import * as ruLpic1_102Data from '../locales/ru/lpic1_102_gamesData.js'
import * as zhLpic1_102Data from '../locales/zh/lpic1_102_gamesData.js'

// LPIC-2 game data
import * as itLpic2Data from '../locales/it/lpic2_gamesData.js'
import * as enLpic2Data from '../locales/en/lpic2_gamesData.js'
import * as esLpic2Data from '../locales/es/lpic2_gamesData.js'
import * as frLpic2Data from '../locales/fr/lpic2_gamesData.js'
import * as deLpic2Data from '../locales/de/lpic2_gamesData.js'
import * as ptLpic2Data from '../locales/pt/lpic2_gamesData.js'
import * as ruLpic2Data from '../locales/ru/lpic2_gamesData.js'
import * as zhLpic2Data from '../locales/zh/lpic2_gamesData.js'








const lpiDataMap = {
  it: itData, en: enData, es: esData, de: deData,
  fr: frData, pt: ptData, ru: ruData, zh: zhData,
}

const rhcsaDataMap = {
  it: itRhcsaData, en: enRhcsaData, es: esRhcsaData, de: deRhcsaData,
  fr: frRhcsaData, pt: ptRhcsaData, ru: ruRhcsaData, zh: zhRhcsaData,
}

// LPIC-1 101: IT & EN base, altre lingue usano EN come fallback
const lpic1_101DataMap = {
  it: itLpic1_101Data, en: enLpic1_101Data, es: enLpic1_101Data, 
  fr: enLpic1_101Data, de: { memoryGameData: mG_de, terminalChallengeData: tC_de },
  pt: { memoryGameData: mG_pt, terminalChallengeData: tC_pt },
  ru: { memoryGameData: mG_ru, terminalChallengeData: tC_ru },
  zh: { memoryGameData: mG_zh, terminalChallengeData: tC_zh },
}

const lpic1_102DataMap = {
  it: itLpic1_102Data,
  en: enLpic1_102Data,
  es: esLpic1_102Data,
  fr: frLpic1_102Data,
  de: deLpic1_102Data,

  pt: ptLpic1_102Data,
  ru: ruLpic1_102Data,
  zh: zhLpic1_102Data,
}

const lpic2DataMap = {
  it: itLpic2Data, en: enLpic2Data, es: esLpic2Data, fr: frLpic2Data,
  de: deLpic2Data, pt: ptLpic2Data, ru: ruLpic2Data, zh: zhLpic2Data,
}


export function useGameData() {
  const { currentLang } = useLanguage()
  const params = useParams()
  const courseId = params?.courseId || 'linux-essentials'

  let map
  if (courseId === 'lpic1-101') {
    map = lpic1_101DataMap
  } else if (courseId === 'lpic1-102') {
    map = lpic1_102DataMap
  } else if (courseId === 'lpic-2') {
    map = lpic2DataMap
  } else if (courseId === 'rhcsa') {
    map = rhcsaDataMap
  } else {
    map = lpiDataMap
  }
  const currentData = map[currentLang] || map.it

  return {
    memoryGameData: currentData.memoryGameData,
    trueFalseData: currentData.trueFalseData,
    terminalChallengeData: currentData.terminalChallengeData,
    dragDropData: currentData.dragDropData,
    fillGapData: currentData.fillGapData,
  }
}
