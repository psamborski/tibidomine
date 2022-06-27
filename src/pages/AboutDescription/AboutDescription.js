import React, { useContext, useEffect, useState } from 'react'
import './AboutDescription.scss'

import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import BgImage from '../../assets/images/bg.jpg'
import ArticlePage from '../../components/templates/ArticlePage'
import Loading from '../Loading'

import TranslationContext from '../../features/TranslationContext'

import { getAboutDescription } from '../../functions/requests'
import { renderOptions } from '../../functions/handies'

export const AboutDescription = ({ ...restProps }) => {
  const translationContext = useContext(TranslationContext)
  const {
    t, language,
  } = translationContext

  const [aboutDescriptionData, setAboutDescriptionData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getAboutDescription()
      .then(resp => {
        setAboutDescriptionData(
          {
            en: resp?.data?.data?.en?.aboutDescription?.[0] || {},
            pl: resp?.data?.data?.pl?.aboutDescription?.[0] || {},
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
              aboutDescriptionData?.[language]?.content?.json || {},
              renderOptions(aboutDescriptionData?.[language]?.content?.links || {}),
            )
          }
          imageSrc={aboutDescriptionData?.[language]?.pagePhoto?.url || BgImage}
          subtitle={t('MENU__ABOUT')}
          title={aboutDescriptionData?.[language]?.pageTitle || 'Description'}
        />
      )
  )
}
