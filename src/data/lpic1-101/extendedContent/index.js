// LPIC-1 101 Extended Content — Index
// Hub per tutte le lingue

import { lpic1_101_extendedContent_it } from './lpic1_101_extendedContent_it.js'
import { lpic1_101_extendedContent_en } from './lpic1_101_extendedContent_en.js'
import { lpic1_101_extendedContent_es } from './lpic1_101_extendedContent_es.js'

// IT, EN ed ES completi, usiamo EN come fallback per le altre lingue
export const lpic1_101_extendedContentDict = {
  it: lpic1_101_extendedContent_it,
  en: lpic1_101_extendedContent_en,
  es: lpic1_101_extendedContent_es,
  fr: lpic1_101_extendedContent_en,
  de: lpic1_101_extendedContent_en,
  pt: lpic1_101_extendedContent_en,
  ru: lpic1_101_extendedContent_en,
  zh: lpic1_101_extendedContent_en,
}
