import React, { useContext, useEffect, useState } from 'react'
import './AboutDescription.scss'

import { documentToHtmlString } from '@contentful/rich-text-html-renderer'

import BgImage from '../../assets/images/bg.jpg'
import ArticlePage from '../../components/templates/ArticlePage'
import Loading from '../Loading'

import TranslationContext from '../../features/TranslationContext'

import { getAboutDescription } from '../../functions/requests'

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
            en: resp?.data?.data?.en?.aboutDescription?.[0],
            pl: resp?.data?.data?.pl?.aboutDescription?.[0],
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
          content={(
        // eslint-disable-next-line react/jsx-no-useless-fragment
            <div
              dangerouslySetInnerHTML={{
            __html: documentToHtmlString(aboutDescriptionData?.[language]?.content?.json || {}),
          }}
            />
      )}
          imageSrc={aboutDescriptionData?.[language]?.pagePhoto?.url || BgImage}
          subtitle={t('MENU__ABOUT')}
          title={aboutDescriptionData?.[language]?.pageTitle || 'Description'}
        />
      )
  )
}
