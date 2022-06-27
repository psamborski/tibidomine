import React, { useContext, useEffect, useState } from 'react'
import './AboutStaff.scss'

import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import BgImage from '../../assets/images/bg.jpg'
import ArticlePage from '../../components/templates/ArticlePage'
import Loading from '../Loading'

import TranslationContext from '../../features/TranslationContext'

import { getAboutStaff } from '../../functions/requests'
import { renderOptions } from '../../functions/handies'

export const AboutStaff = ({ ...restProps }) => {
  const translationContext = useContext(TranslationContext)
  const {
    t, language,
  } = translationContext

  const [aboutStaffData, setAboutStaffData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getAboutStaff()
      .then(resp => {
        setAboutStaffData(
          {
            en: resp?.data?.data?.en?.aboutStaff?.[0] || {},
            pl: resp?.data?.data?.pl?.aboutStaff?.[0] || {},
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
              aboutStaffData?.[language]?.content?.json || {},
              renderOptions(aboutStaffData?.[language]?.content?.links || {}),
            )
          }
          imageSrc={aboutStaffData?.[language]?.pagePhoto?.url || BgImage}
          subtitle={t('MENU__ABOUT')}
          title={aboutStaffData?.[language]?.pageTitle || 'Staff'}
        />
      )
  )
}
