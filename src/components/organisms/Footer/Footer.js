import React, { useContext, useEffect, useState } from 'react'
import './Footer.scss'

import RoundButton from '../../atoms/RoundButton'
import IconHyperlink from '../../molecules/IconHyperlink'
import ChurchLogo from '../../atoms/ChurchLogo'

import TranslationContext from '../../../features/TranslationContext'

import { getFooter } from '../../../functions/requests'

export const Footer = () => {
  const translationContext = useContext(TranslationContext)
  const { language } = translationContext

  const [footerData, setFooterData] = useState(null)

  useEffect(() => {
    getFooter()
      .then(resp => {
        setFooterData(
          {
          en: resp?.data?.data?.en?.footer?.[0] || {},
          pl: resp?.data?.data?.pl?.footer?.[0] || {},
        },
        )
      })
      .catch(e => {
        throw new Error('Invalid call')
      })
  }, [])

  return (
    <footer className='Footer'>
      <section className='Footer-contact-section'>
        <div className='Footer-contact-section__container'>
          <IconHyperlink
            href={`tel:${footerData?.[language]?.mainPhoneNumber || '-'}`}
            iconClassname='fa-solid fa-phone'
            title={footerData?.[language]?.mainPhoneNumber || 'Phone number'}
          >
            {footerData?.[language]?.mainPhoneNumber || 'Phone number'}
          </IconHyperlink>
          <IconHyperlink
            href={`mailto:${footerData?.[language]?.mainEMailAddress || '-'}`}
            iconClassname='fa-solid fa-envelope'
            title={footerData?.[language]?.mainEMailAddress || 'E-mail address'}
          >
            {footerData?.[language]?.mainEMailAddress || 'E-mail address'}
          </IconHyperlink>
        </div>
      </section>
      <section className='Footer-logo-section'>
        <ChurchLogo />
      </section>
      <section className='Footer-social-section'>
        <RoundButton
          href={footerData?.[language]?.youtubeLink || '#'}
          title={footerData?.[language]?.youtubeTitle || 'Youtube'}
        >
          <span className='fa-brands fa-youtube' />
        </RoundButton>
        <RoundButton
          href={footerData?.[language]?.facebookLink || '#'}
          title={footerData?.[language]?.facebookTitle || 'Facebook'}
        >
          <span className='fa-brands fa-facebook-f' />
        </RoundButton>
      </section>
    </footer>
  )
}
