import React, { useEffect, useMemo, useState } from 'react'
import './Footer.scss'

import RoundButton from '../../atoms/RoundButton'
import IconHyperlink from '../../molecules/IconHyperlink'
import ChurchLogo from '../../atoms/ChurchLogo'

import { getFooter } from '../../../functions/requests'

export const Footer = () => {
  const [footerData, setFooterData] = useState(null)

  useEffect(() => {
    getFooter()
      .then(resp => {
        setFooterData(resp?.data)
      })
  }, [])

  return useMemo(() => (
    <footer className='Footer'>
      <section className='Footer-contact-section'>
        <div className='Footer-contact-section__container'>
          <IconHyperlink
            href='tel:+48123123123'
            iconClassname='fa-solid fa-phone'
            title='+48123123123'
          >
            123123123
          </IconHyperlink>
          <IconHyperlink
            href='mailto:adres@mailowy.com'
            iconClassname='fa-solid fa-envelope'
            title='adres@mailowy.com'
          >
            adres@mailowy.com
          </IconHyperlink>
        </div>
      </section>
      <section className='Footer-logo-section'>
        <ChurchLogo />
      </section>
      <section className='Footer-social-section'>
        <RoundButton>
          <span className='fa-brands fa-youtube' />
        </RoundButton>
        <RoundButton>
          <span className='fa-brands fa-facebook-f' />
        </RoundButton>
      </section>
    </footer>
), [footerData]) }
