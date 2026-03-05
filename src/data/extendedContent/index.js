import { topic1Extended as itTopic1 } from './topic1Extended.js'
import { topic2Extended as itTopic2 } from './topic2Extended.js'
import { topic3Extended as itTopic3 } from './topic3Extended.js'
import { topic4Extended as itTopic4 } from './topic4Extended.js'
import { topic5Extended as itTopic5 } from './topic5Extended.js'

import { topic1Extended as enTopic1 } from '../../locales/en/extendedContent_topic1.js'
import { topic1Extended as esTopic1 } from '../../locales/es/extendedContent_topic1.js'

export const itExtendedContent = {
  ...itTopic1, ...itTopic2, ...itTopic3, ...itTopic4, ...itTopic5
}

export const enExtendedContent = {
  ...enTopic1, ...itTopic2, ...itTopic3, ...itTopic4, ...itTopic5
}

export const esExtendedContent = {
  ...esTopic1, ...itTopic2, ...itTopic3, ...itTopic4, ...itTopic5
}

const fallbackExtendedContent = itExtendedContent;

export const extendedContentDict = {
  it: itExtendedContent,
  en: enExtendedContent,
  es: esExtendedContent,
  de: fallbackExtendedContent,
  ru: fallbackExtendedContent,
  pt: fallbackExtendedContent,
  fr: fallbackExtendedContent,
  zh: fallbackExtendedContent,
}
