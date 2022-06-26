import React from 'react'
import './FullPageOverlay.scss'

export const FullPageOverlay = ({
 children, ...restProps
}) => (
  <div className='Full-Page-Overlay'>
    {children}
  </div>
)
