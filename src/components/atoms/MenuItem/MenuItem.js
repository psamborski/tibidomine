import React, { useEffect, useState } from 'react'
import './MenuItem.scss'
import { NavLink, useLocation } from 'react-router-dom'

export const MenuItem = ({
  children, chevron, to, toggable, ...restProps
}) => {
  const [isExpanded, setExpand] = useState(false)

  const location = useLocation()

  useEffect(() => {
    setExpand(false)
  }, [location.pathname])

  const onToggleClick = (event) => {
    event?.preventDefault()
    setExpand(!isExpanded)
  }

  return (
    <NavLink
      className={
      ({ isActive }) =>
        `Menu-Item${isActive ? '--active' : ''} ${isExpanded ? 'Menu-Item--expanded' : ''}`
      }
      onClick={toggable ? (event) => onToggleClick(event) : null}
      to={to}
    >
      <span>
        {children}
      </span>
      {chevron && <span className='Menu-Item__chevron fa-solid fa-chevron-down' />}
    </NavLink>
) }

MenuItem.defaultProps = {
  chevron: false,
  to: '#',
  toggable: false,
}
