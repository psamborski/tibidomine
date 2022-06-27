import React, { useContext, useEffect, useState } from 'react'
import './Achievements.scss'

import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import BgImage from '../../assets/images/bg.jpg'
import ArticlePage from '../../components/templates/ArticlePage'
import Loading from '../Loading'

import TranslationContext from '../../features/TranslationContext'

import { getAchievements } from '../../functions/requests'
import { renderOptions } from '../../functions/handies'

export const Achievements = ({ ...restProps }) => {
  const translationContext = useContext(TranslationContext)
  const { language } = translationContext

  const [achievementsData, setAchievementsData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getAchievements()
      .then(resp => {
        setAchievementsData(
          {
            en: resp?.data?.data?.en?.achievements?.[0] || {},
            pl: resp?.data?.data?.pl?.achievements?.[0] || {},
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
              achievementsData?.[language]?.content?.json || {},
              renderOptions(achievementsData?.[language]?.content?.links || {}),
            )
          }
          imageSrc={achievementsData?.[language]?.pagePhoto?.url || BgImage}
          title={achievementsData?.[language]?.pageTitle || 'Achievements'}
        />
      )
  )
}
