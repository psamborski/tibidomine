import React, { useEffect, useState, useContext } from 'react'
import './Gallery.scss'

import BgImage from '../../assets/images/bg.jpg'
import ArticlePage from '../../components/templates/ArticlePage'
import ImageMasonry from '../../components/molecules/ImageMasonry'
import ImageCarousel from '../../components/molecules/ImageCarousel'
import TranslationContext from '../../features/TranslationContext'
import { getGallery } from '../../functions/requests'
import Loading from '../Loading'

export const Gallery = ({ ...restProps }) => {
  const translationContext = useContext(TranslationContext)
  const { language } = translationContext

  const [galleryData, setGalleryData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [openedImageIndex, setOpenedImageIndex] = useState(null)

  useEffect(() => {
    getGallery()
      .then(resp => {
        setGalleryData(
          {
            en: resp?.data?.data?.en?.gallery?.[0],
            pl: resp?.data?.data?.pl?.gallery?.[0],
          },
        )
        setTimeout(() => setLoading(false), 200)
      })
      .catch(e => {
        setTimeout(() => setLoading(false), 200)
        throw new Error('Invalid call')
      })
  }, [])

  const catchImageClick = (imageData) => {
    setOpenedImageIndex(Number.isInteger(imageData?.imageIndex) ? imageData?.imageIndex : null)
  }

  return (
    loading
      ? <Loading />
      : (
        <ArticlePage
          content={(
            <>
              <ImageCarousel
                images={galleryData?.[language]?.photos?.items}
                openedImageIndex={openedImageIndex}
                setOpenedImageIndex={setOpenedImageIndex}
              />
              <ImageMasonry
                catchImageClick={catchImageClick}
                images={galleryData?.[language]?.photos?.items}
              />
            </>
          )}
          imageSrc={galleryData?.[language]?.pagePhoto?.url || BgImage}
          title='Galeria'
        />
      ))
}
