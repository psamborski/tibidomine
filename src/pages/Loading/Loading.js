import React from 'react'

import BgImage from '../../assets/images/bg.jpg'

import ArticlePage from '../../components/templates/ArticlePage'
import Hyperlink from '../../components/atoms/Hyperlink'

export const Loading = ({ ...restProps }) => (
  <ArticlePage
    content={(
      <Hyperlink href='/'>Go to homepage</Hyperlink>
    )}
    imageSrc={BgImage}
    title='Loading'
  />
)
