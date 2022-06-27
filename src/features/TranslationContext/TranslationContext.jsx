import React, { useMemo, useState } from 'react'
import { TRANSLATIONS } from '../../utils/translations'

export const TranslationContext = React.createContext({
  language: 'pl',
  t: () => '',
  toggleLanguage: () => {},
})

export const TranslationProvider = ({ children }) => {
  const [language, setLanguage] = useState('pl')

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'pl' : 'en')
  }

  // function that translates given key
  const t = (key, translationLanguage = null) => {
    const validatedLanguage = (translationLanguage === 'en' || translationLanguage === 'pl')
      ? translationLanguage
      : language

    if (!TRANSLATIONS?.[key]?.[validatedLanguage]) {
      // eslint-disable-next-line no-console
      console.warn('MISSING TRANS KEY: ', key)
    }
    return TRANSLATIONS?.[key]?.[validatedLanguage] || 'text'
  }

  const value = useMemo(() => Object({
    language,
    t,
    toggleLanguage,
  }), [language])

  return (
    <TranslationContext.Provider
      value={value}
    >
      {children}
    </TranslationContext.Provider>
  )
}
