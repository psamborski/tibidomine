import React, { useContext, useEffect, useState } from 'react'
import './News.scss'

import BgImage from '../../assets/images/bg.jpg'
import ArticlePage from '../../components/templates/ArticlePage'
import Loading from '../Loading'

import TranslationContext from '../../features/TranslationContext'

import { getNews } from '../../functions/requests'
import Post from '../../components/organisms/Post'

export const News = ({ ...restProps }) => {
  const translationContext = useContext(TranslationContext)
  const {
    language, t,
  } = translationContext

  const [newsData, setNewsData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getNews()
      .then(resp => {
        setNewsData(
          {
            en: resp?.data?.data?.en?.posts || [],
            pl: resp?.data?.data?.pl?.posts || [],
            basicInfo: resp?.data?.data?.basicInfo,
          },
        )
        setTimeout(() => setLoading(false), 200)
      })
      .catch(e => {
        setTimeout(() => setLoading(false), 200)
        throw new Error('Invalid call')
      })
  }, [])

  return (
    loading
      ? <Loading />
      : (
        <ArticlePage
          content={(
            (newsData?.[language] || []).map((post, i) => (
              <Post
                key={`post=${post?.sys?.id}` || i}
                content={post?.content || {}}
                isoDate={post?.date || null}
                title={post?.title || ''}
              />
            )))}
          id='News'
          imageSrc={newsData?.basicInfo?.data?.[0]?.mainPhoto?.url || BgImage}
          title={t('MENU__NEWS')}
        />
      )
  )
}
