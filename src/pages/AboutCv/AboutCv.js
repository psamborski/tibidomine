import React, { useContext, useEffect, useState } from 'react'
import './AboutCv.scss'

import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import BgImage from '../../assets/images/bg.jpg'
import ArticlePage from '../../components/templates/ArticlePage'
import Loading from '../Loading'

import TranslationContext from '../../features/TranslationContext'

import { getAboutCv } from '../../functions/requests'
import { renderOptions } from '../../functions/handies'

export const AboutCv = ({ ...restProps }) => {
  const translationContext = useContext(TranslationContext)
  const {
    t, language,
  } = translationContext

  const [aboutCvData, setAboutCvData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getAboutCv()
      .then(resp => {
        setAboutCvData(
          {
            en: resp?.data?.data?.en?.aboutCv?.[0] || {},
            pl: resp?.data?.data?.pl?.aboutCv?.[0] || {},
          },
        )
        setTimeout(() => setLoading(false), 200)
      })
      .catch(e => {
        setTimeout(() => setLoading(false), 200)
        throw new Error('Invalid call')
      })
  }, [])

  return (
    loading
      ? <Loading />
      : (
        <ArticlePage
          content={
            documentToReactComponents(
              aboutCvData?.[language]?.content?.json || {},
              renderOptions(aboutCvData?.[language]?.content?.links || {}),
            )
          }
          imageSrc={aboutCvData?.[language]?.pagePhoto?.url || BgImage}
          subtitle={t('MENU__ABOUT')}
          title={aboutCvData?.[language]?.pageTitle || 'CV'}
        />
      )
  )
}
