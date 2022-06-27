import React from 'react'
import './PostMedia.scss'

export const PostMedia = ({
  contentType, description, url, ...restProps
}) => (
  <div className='Post-Media'>
    {contentType.startsWith('video')
      && (
        // eslint-disable-next-line jsx-a11y/media-has-caption
        <video
          controls
          height='100%'
          width='100%'
        >
          <source
            src={url}
            type={contentType}
          />
        </video>
      )
    }
    {contentType.startsWith('image')
      && (
        <img
          alt={description || 'Post photo'}
          src={url}
        />
      )
    }
  </div>
  )

PostMedia.defaultProps = {
  contentType: null,
  description: '',
  url: '',
}
