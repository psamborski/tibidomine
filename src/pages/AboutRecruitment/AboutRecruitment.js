import React, { useContext, useEffect, useState } from 'react'
import './AboutRecruitment.scss'

import { documentToHtmlString } from '@contentful/rich-text-html-renderer'

import BgImage from '../../assets/images/bg.jpg'
import ArticlePage from '../../components/templates/ArticlePage'
import TranslationContext from '../../features/TranslationContext'
import { getAboutRecruitment } from '../../functions/requests'
import Loading from '../Loading'

export const AboutRecruitment = ({ ...restProps }) => {
  const translationContext = useContext(TranslationContext)
  const {
    t, language,
  } = translationContext

  const [aboutRecruitmentData, setAboutRecruitmentData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getAboutRecruitment()
      .then(resp => {
        setAboutRecruitmentData(
          {
            en: resp?.data?.data?.en?.aboutRecruitment?.[0],
            pl: resp?.data?.data?.pl?.aboutRecruitment?.[0],
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
              __html: documentToHtmlString(aboutRecruitmentData?.[language]?.content?.json || {}),
            }}
          />
        )}
        imageSrc={aboutRecruitmentData?.[language]?.pagePhoto?.url || BgImage}
        subtitle={t('MENU__ABOUT')}
        title={aboutRecruitmentData?.[language]?.pageTitle || 'Recruitment'}
      />
    )
  )
}
