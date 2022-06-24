import React from 'react'
import './FullPageHero.scss'

export const FullPageHero = ({
 imageSrc, cta, title, paragraph, ...restProps
}) => (
  <div className='Full-Page-Hero'>
    <section
      className='Hero-Section'
      style={{
        backgroundImage: `url('${imageSrc}')`,
      }}
    >
      <div className='Hero-Section__text'>
        {title || null}
        {paragraph || null}
        {cta || null}
      </div>
    </section>
  </div>
)

FullPageHero.defaultProps = {
  imageSrc: '',
  cta: null,
  title: '',
  paragraph: '',
}
