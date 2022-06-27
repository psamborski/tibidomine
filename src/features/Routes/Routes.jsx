import React, { Suspense, useContext, useEffect, useState } from 'react'
import {
  BrowserRouter, Route, Routes, Navigate,
} from 'react-router-dom'

import ScrollToTop from '../ScrollToTop'
import ErrorBoundary from '../ErrorBoundary'

import Error404 from '../../pages/Error404'
import Loading from '../../pages/Loading'
import Header from '../../components/organisms/Header'
import Footer from '../../components/organisms/Footer'

import TranslationContext from '../TranslationContext'

import { getWorkInProgress } from '../../functions/requests'
import WorkInProgress from '../../pages/WorkInProgress'

/* ---------- */

const renderRoutes = (routes) => routes.map((
  {
    component: Component,
    guard,
    children,
    rootPath,
    id,
    redirect,
  },
) => {
  const ParentGuard = guard || React.Fragment

  const parentRoute = redirect || Component
    ? (
      <Route
        key={`route-${id}`}
        element={(
          <ParentGuard>
            {Component && <ErrorBoundary><Component /></ErrorBoundary>}
            {redirect && <Navigate to={redirect} />}
          </ParentGuard>
        )}
        path={rootPath}
      />
    )
    : null

  const childrenRoutes = children
    ? children.map((element) => {
      const Guard = element?.guard || ParentGuard || React.Fragment

      return (
        <Route
          key={`route-${id}-${element.name}`}
          element={(
            <Guard>
              {element.component && <element.component />}
              {element.redirect && <Navigate to={element.redirect} />}
            </Guard>
        )}
          path={`/${(rootPath + element.childPath).replace(/^\/+/, '')}`}
        />
      )
    })
    : []

  return [parentRoute, ...childrenRoutes]
})

export const RoutesComponent = (props) => {
  const { routes } = props

  const translationContext = useContext(TranslationContext)
  const { language } = translationContext

  // get 'work in progress' bool from Contentful
  const [loading, setLoading] = useState(true)
  const [basicInfo, setBasicInfo] = useState(true)

  useEffect(() => {
    getWorkInProgress()
      .then(resp => {
        setBasicInfo(
          {
            en: resp?.data?.data?.en?.basicInfo?.[0] || {},
            pl: resp?.data?.data?.pl?.basicInfo?.[0] || {},
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
    <>
      {loading && <Loading />}

      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<Loading />}>

          {/*
              header and footer are outside the atomic templates to prevent many API calls on mount
              TODO / consider using redux to maintain state, structurize data and to avoid subsequent useless api call
              TODO / and then putting footer and header back to template
          */}
          {!basicInfo?.[language]?.workInProgress && <Header />}

          <Routes>
            {!basicInfo?.[language]?.workInProgress && renderRoutes(routes)}
            <Route
              element={basicInfo?.[language]?.workInProgress
                ? <WorkInProgress pagePhoto={basicInfo?.[language]?.pagePhoto} />
                : <Error404 />
              }
              path='*'
            />
          </Routes>

          {!basicInfo?.[language]?.workInProgress && <Footer />}

        </Suspense>
      </BrowserRouter>
    </>
  )
}
