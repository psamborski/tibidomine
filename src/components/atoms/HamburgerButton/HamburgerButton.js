import React, { useEffect, useState } from 'react'
import './HamburgerButton.scss'
import { useLocation } from 'react-router-dom'

export const HamburgerButton = () => {
  const [isOpen, setOpen] = useState(false)

  const location = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  return (
    <button
      className={`Hamburger-Button${isOpen ? '--active' : ''}`}
      onClick={() => setOpen(!isOpen)}
      type='button'
    >
      <span className='Hamburger-Button__line' />
      <span className='Hamburger-Button__line' />
      <span className='Hamburger-Button__line' />
    </button>
)
}
