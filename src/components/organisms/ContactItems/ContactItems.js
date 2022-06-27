import React from 'react'
import './ContactItems.scss'

import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import IconTile from '../../molecules/IconTile'
import { renderOptions } from '../../../functions/handies'

export const ContactItems = ({ contactItems }) => (
  <section className='Contact-Items'>
    <IconTile
      disabled
      iconClassname='fa-solid fa-location-dot'
    >
      {
        documentToReactComponents(
          contactItems?.address?.json || {},
          renderOptions(contactItems?.address?.links || {}),
        )
      }
    </IconTile>
    <IconTile
      disabled
      iconClassname='fa-solid fa-phone'
    >
      {
        documentToReactComponents(
          contactItems?.phone?.json || {},
          renderOptions(contactItems?.phone?.links || {}),
        )
      }
    </IconTile>
    <IconTile
      disabled
      iconClassname='fa-solid fa-calendar-day'
    >
      {
        documentToReactComponents(
          contactItems?.rehearsal?.json || {},
          renderOptions(contactItems?.rehearsal?.links || {}),
        )
      }
    </IconTile>

    <IconTile
      disabled
      iconClassname='fa-brands fa-youtube'
    >
      {
        documentToReactComponents(
          contactItems?.youtube?.json || {},
          renderOptions(contactItems?.youtube?.links || {}),
        )
      }
    </IconTile>
    <IconTile
      disabled
      iconClassname='fa-brands fa-facebook-f'
    >
      {
        documentToReactComponents(
          contactItems?.facebook?.json || {},
          renderOptions(contactItems?.facebook?.links || {}),
        )
      }
    </IconTile>
  </section>
)

ContactItems.defaultProps = {
  contactItems: {},
}
