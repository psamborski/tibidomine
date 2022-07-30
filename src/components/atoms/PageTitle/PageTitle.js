import React, { useContext } from 'react'
import './PageTitle.scss'
import { isInt } from '../../../functions/handies'
import TranslationContext from '../../../features/TranslationContext'

export const PageTitle = ({
  title, subtitle, level, ...restProps
}) => {
  const translationContext = useContext(TranslationContext)
  const { language } = translationContext

  level = parseInt(level, 10) || 1

  let Heading
  if (isInt(level) && level > 0 && level < 7) {
    Heading = `h${level}`
  } else {
    Heading = 'h1'
  }

  return (
    <Heading className='Page-Title'>
      {subtitle && language === 'pl' && <span className='Page-Title__subtitle'>{subtitle}</span>}
      {title}
      {subtitle && language === 'en' && <span className='Page-Title__subtitle'>{subtitle}</span>}
    </Heading>
  )
}

PageTitle.defaultProps = {
  title: '',
  subtitle: '',
  level: 1,
}
