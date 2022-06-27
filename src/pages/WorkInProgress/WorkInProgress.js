import React, { useContext } from 'react'
import './WorkInProgress.scss'

import BgImage from '../../assets/images/bg.jpg'
import ArticlePage from '../../components/templates/ArticlePage'

import TranslationContext from '../../features/TranslationContext'

export const WorkInProgress = ({ pagePhoto }) => {
  const translationContext = useContext(TranslationContext)
  const { t } = translationContext

  return (
    <ArticlePage
      content={(
        <h3>
          {`${t('WORK_IN_PROGRESS--MESSAGE', 'pl')} / ${t('WORK_IN_PROGRESS--MESSAGE', 'en')} 🙂`}
        </h3>
      )}
      id='Work-In-Progress'
      imageSrc={pagePhoto?.url || BgImage}
      title={(
        <>
          <span className='fa-solid fa-wrench' />
          {` ${t('WORK_IN_PROGRESS', 'pl')} / ${t('WORK_IN_PROGRESS', 'en')}`}
        </>
      )}
    />
  )
}

WorkInProgress.defaultProps = {
  pagePhoto: null,
}
