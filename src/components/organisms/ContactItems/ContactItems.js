import React from 'react'
import './ContactItems.scss'

import { documentToHtmlString } from '@contentful/rich-text-html-renderer'

import IconTile from '../../molecules/IconTile'

export const ContactItems = ({ contactItems }) => (
  <section className='Contact-Items'>
    <IconTile
      disabled
      iconClassname='fa-solid fa-location-dot'
    >
      <span
        dangerouslySetInnerHTML={{
            __html: documentToHtmlString(contactItems?.address?.json || {}),
          }}
      />
    </IconTile>
    <IconTile
      disabled
      iconClassname='fa-solid fa-phone'
    >
      <span
        dangerouslySetInnerHTML={{
            __html: documentToHtmlString(contactItems?.phone?.json || {}),
          }}
      />
    </IconTile>
    <IconTile
      disabled
      iconClassname='fa-solid fa-calendar-day'
    >
      <span
        dangerouslySetInnerHTML={{
            __html: documentToHtmlString(contactItems?.rehearsal?.json || {}),
          }}
      />
    </IconTile>

    <IconTile
      disabled
      iconClassname='fa-brands fa-youtube'
    >
      <span
        dangerouslySetInnerHTML={{
            __html: documentToHtmlString(contactItems?.youtube?.json || {}),
          }}
      />
    </IconTile>
    <IconTile
      disabled
      iconClassname='fa-brands fa-facebook-f'
    >
      <span
        dangerouslySetInnerHTML={{
            __html: documentToHtmlString(contactItems?.facebook?.json || {}),
          }}
      />
    </IconTile>
  </section>
  )

ContactItems.defaultProps = {
  contactItems: {},
}
