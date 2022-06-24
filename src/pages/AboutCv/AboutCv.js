import React, { useContext, useEffect, useState } from 'react'
import './AboutCv.scss'

import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import BgImage from '../../assets/images/bg.jpg'
import ArticlePage from '../../components/templates/ArticlePage'

import TranslationContext from '../../features/TranslationContext'

import { getAboutCv } from '../../functions/requests'
import Loading from '../Loading'

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
            en: resp?.data?.data?.en?.aboutCv?.[0],
            pl: resp?.data?.data?.pl?.aboutCv?.[0],
          },
        )
        setLoading(false)
      })
      .catch(e => {
        setLoading(false)
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
                __html: documentToHtmlString(aboutCvData?.[language]?.content?.json || {}),
              }}
            />
          )}
          imageSrc={aboutCvData?.[language]?.pagePhoto?.url || BgImage}
          subtitle={t('MENU__ABOUT')}
          title={aboutCvData?.[language]?.pageTitle || 'CV'}
        />
      )
  )
}
