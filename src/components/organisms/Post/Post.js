import React from 'react'
import './Post.scss'

// import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import PostDate from '../../atoms/PostDate'

import { renderOptions } from '../../../functions/handies'

export const Post = ({
 title, isoDate, content,
}) => (
  <article className='Post'>
    <h3
      className='Post__title'
    >
      {title}
    </h3>
    <PostDate isoDate={isoDate} />
    <div
      className='Post__content'
      // dangerouslySetInnerHTML={{
      //     __html: documentToHtmlString(content?.json || {}, renderOptions(content?.links)),
      //   }}
    >
      {documentToReactComponents(content?.json || {}, renderOptions(content?.links))}
    </div>
    <hr />
  </article>
  )

Post.defaultProps = {
  title: '',
  isoDate: null,
  content: {},
}
