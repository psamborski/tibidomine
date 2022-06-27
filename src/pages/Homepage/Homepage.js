import React, { useContext, useEffect, useState } from 'react'
import './Homepage.scss'

import { documentToHtmlString } from '@contentful/rich-text-html-renderer'

import FullPageHero from '../../components/templates/FullPageHero'
import BgImage from '../../assets/images/bg.jpg'
import Button from '../../components/atoms/Button'
import PageTitle from '../../components/atoms/PageTitle'
import Loading from '../Loading'

import TranslationContext from '../../features/TranslationContext'

import { getHomepage } from '../../functions/requests'

export const Homepage = ({ ...restProps }) => {
  const translationContext = useContext(TranslationContext)
  const {
   t, language,
  } = translationContext

  const [homepageData, setHomepageData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getHomepage()
      .then(resp => {
        setHomepageData(
          {
            en: resp?.data?.data?.en?.homepage?.[0] || {},
            pl: resp?.data?.data?.pl?.homepage?.[0] || {},
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
        <FullPageHero
          cta={(
            <Button
              title={`${t('MENU__ABOUT')} - Tibi Domine`}
              to='/about/choir'
            >
              {t('HERO__ABOUT_US')}
            </Button>
          )}
          imageSrc={BgImage}
          paragraph={(
            <div
              dangerouslySetInnerHTML={{
                __html: documentToHtmlString(homepageData?.[language]?.shortChoirDescription?.json || {}),
              }}
            />
          )}
          title={(
            <PageTitle
              level={1}
              subtitle={homepageData?.[language]?.pageSubtitle}
              title={homepageData?.[language]?.pageTitle}
            />
          )}
        />
      )
  )
}
