import React from 'react'
import './Logo.scss'
import { Link } from 'react-router-dom'

import { ReactComponent as LogoImage } from '../../../assets/images/tibi_domine_white.svg'
import { ROUTES } from '../../../utils/routes'

export const Logo = ({
  src, width, height, ...restProps
}) => (
  <div className='Logo'>
    <Link
      to={ROUTES.HOMEPAGE}
    >
      {src
        ? (
          <img
            alt='Tibi Domine Logo'
            src={src}
          />
        )
        : <LogoImage />
      }
    </Link>
  </div>
)

Logo.defaultProps = {
  src: '',
}
