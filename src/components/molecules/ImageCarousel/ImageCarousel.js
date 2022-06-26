import React, { useCallback, useEffect, useState } from 'react'
import './ImageCarousel.scss'

import Carousel from 'nuka-carousel'

export const ImageCarousel = ({
  images, openedImageIndex, setOpenedImageIndex, ...restProps
}) => {
  const [carouselImageIndex, setCarouselImageIndex] = useState(openedImageIndex)

  const handleUserKeyPress = useCallback(event => {
    const { key } = event
    if (key === 'Escape') {
      hideCarousel()
    }
  }, [])

  useEffect(() => {
    window.addEventListener('keydown', handleUserKeyPress)
    return () => {
      window.removeEventListener('keydown', handleUserKeyPress)
    }
  }, [handleUserKeyPress])

  const hideCarousel = () => {
      if (setOpenedImageIndex) {
        setOpenedImageIndex(null)
      } else {
        setCarouselImageIndex(null)
      }
  }

  return (
    <div className={`Image-Carousel${openedImageIndex === null ? '--hidden' : ''}`}>
      <div
        className='Image-Carousel__exit-button'
        onClick={() => hideCarousel()}
        onKeyDown={(ev) => {
            if (ev.key === 'Enter') {
              hideCarousel()
            }
        }}
        role='button'
        tabIndex={0}
      >
        <span className='fa-solid fa-xmark' />
      </div>
      <Carousel
        // defaultControlsConfig={{
        //   // containerClassName: 'Image-Carousel__slide',
        //   // nextButtonClassName: string,
        //   // nextButtonStyle: CSSProperties,
        //   // nextButtonText: string,
        //   // pagingDotsClassName: string,
        //   // pagingDotsContainerClassName: string,
        //   // pagingDotsStyle: CSSProperties,
        //   // prevButtonClassName: string,
        //   // prevButtonStyle: CSSProperties,
        //   // prevButtonText: string,
        // }}
        dragThreshold={0.15}
        enableKeyboardControls
        renderCenterLeftControls={({ previousSlide }) => (
          <div
            className='Image-Carousel__nav-button'
            onClick={previousSlide}
            onKeyDown={(ev) => {
              if (ev.key === 'Enter') {
                previousSlide()
              }
            }}
            role='button'
            tabIndex={0}
          >
            <span className='fa-solid fa-chevron-left' />
          </div>
        )}
        renderCenterRightControls={({ nextSlide }) => (
          <div
            className='Image-Carousel__nav-button'
            onClick={nextSlide}
            onKeyDown={(ev) => {
              if (ev.key === 'Enter') {
                nextSlide()
              }
            }}
            role='button'
            tabIndex={0}
          >
            <span className='fa-solid fa-chevron-right' />
          </div>
        )}
        slideIndex={openedImageIndex || carouselImageIndex || 0}
        style={{
          height: '100%',
        }}
      >
        {
          images.map((image, i) => (
            <img
              key={`Gallery-Image-${image?.sys?.id || i}`}
              alt={`Tibi Domine gallery - ${i}`}
              src={image.url}
            />
          ))
        }
      </Carousel>
    </div>
  )
}

ImageCarousel.defaultProps = {
  images: [],
  openedImageIndex: null,
  setOpenedImageIndex: null,
}
