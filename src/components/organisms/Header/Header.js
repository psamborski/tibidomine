import React, { useContext, useEffect, useState } from 'react'
import './Header.scss'

import Menu from '../../molecules/Menu'
import Logo from '../../atoms/Logo'
import HamburgerButton from '../../atoms/HamburgerButton'

import TranslationContext from '../../../features/TranslationContext'

import { getHeader } from '../../../functions/requests'

export const Header = () => {
  const translationContext = useContext(TranslationContext)
  const { language } = translationContext

  const [headerData, setHeaderData] = useState(null)

  useEffect(() => {
    getHeader()
      .then(resp => {
        setHeaderData(
          {
            en: resp?.data?.data?.en?.header?.[0] || {},
            pl: resp?.data?.data?.pl?.header?.[0] || {},
          },
        )
      })
      .catch(e => {
        throw new Error('Invalid call')
      })
  }, [])

  return (
    <header className='Header'>
      <Logo
        src={headerData?.[language]?.logo?.url}
      />
      <hr />
      <HamburgerButton />
      <Menu />
    </header>
)
}
