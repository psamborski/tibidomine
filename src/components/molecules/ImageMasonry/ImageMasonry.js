import React from 'react'
import './ImageMasonry.scss'

import Masonry from 'react-masonry-css'
import { trackWindowScroll } from 'react-lazy-load-image-component'

import GalleryImage from '../../atoms/GalleryImage'

const ImageMasonryComponent = ({
  images, scrollPosition, catchImageClick, ...restProps
}) => {
  const breakpointColumnsObj = {
    default: 3,
    900: 2,
    500: 1,
  }

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className='Image-Masonry'
      columnClassName='Image-Masonry__column'
    >
      {
        images.map((image, i) => (
          <GalleryImage
            key={`Gallery-Image-${image?.sys?.id}`}
            alt={`Tibi Domine gallery - photo ${i}`}
            handleClick={catchImageClick}
            id={`Gallery-Image-${image?.sys?.id}`}
            index={i}
            scrollPostion={null}
            src={image.url} // todo lib to camel case
          />
        ))
      }
    </Masonry>
  )
}

ImageMasonryComponent.defaultProps = {
  images: [],
  scrollPosition: null,
  catchImageClick: null,
}

export default trackWindowScroll(ImageMasonryComponent)
