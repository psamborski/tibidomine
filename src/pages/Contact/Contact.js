import React, { useContext, useEffect, useState } from 'react'
import './Contact.scss'

import BgImage from '../../assets/images/bg.jpg'
import ArticlePage from '../../components/templates/ArticlePage'
import Loading from '../Loading'
import ContactItems from '../../components/organisms/ContactItems'
import Map from '../../components/atoms/Map'

import TranslationContext from '../../features/TranslationContext'

import { getContact } from '../../functions/requests'

export const Contact = ({ ...restProps }) => {
  const translationContext = useContext(TranslationContext)
  const { language } = translationContext

  const [contactData, setContactData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getContact()
      .then(resp => {
        setContactData(
          {
            en: resp?.data?.data?.en?.contact?.[0] || {},
            pl: resp?.data?.data?.pl?.contact?.[0] || {},
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
          content={<ContactItems contactItems={contactData?.[language] || {}} />}
          fullWidthSection={(
            <Map
              coordinates={{
                lat: contactData?.[language]?.pinLocation?.lat,
                lon: contactData?.[language]?.pinLocation?.lon,
              }}
              id='Contact-Map'
            />
          )}
          imageSrc={contactData?.[language]?.pagePhoto?.url || BgImage}
          title={contactData?.[language]?.pageTitle || 'Contact'}
        />
      )
  )
}
