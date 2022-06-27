import React, { useContext, useEffect, useState } from 'react'
import './Repertoire.scss'

import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import BgImage from '../../assets/images/bg.jpg'
import ArticlePage from '../../components/templates/ArticlePage'
import Loading from '../Loading'

import TranslationContext from '../../features/TranslationContext'

import { renderOptions } from '../../functions/handies'
import { getRepertoire } from '../../functions/requests'

export const Repertoire = ({ ...restProps }) => {
  const translationContext = useContext(TranslationContext)
  const { language } = translationContext

  const [repertoireData, setRepertoireData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getRepertoire()
      .then(resp => {
        setRepertoireData(
          {
            en: resp?.data?.data?.en?.repertoire?.[0] || {},
            pl: resp?.data?.data?.pl?.repertoire?.[0] || {},
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
              repertoireData?.[language]?.content?.json || {},
              renderOptions(repertoireData?.[language]?.content?.links || {}),
            )
        }
          imageSrc={repertoireData?.[language]?.pagePhoto?.url || BgImage}
          title={repertoireData?.[language]?.pageTitle || 'Repertoire'}
        />
      )
  )
}
