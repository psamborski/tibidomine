import React, { Suspense, useEffect, useState } from 'react'
import {
  BrowserRouter, Route, Routes, Navigate,
} from 'react-router-dom'

import ScrollToTop from '../ScrollToTop'
import ErrorBoundary from '../ErrorBoundary'

import Error404 from '../../pages/Error404'
import Header from '../../components/organisms/Header'
import Footer from '../../components/organisms/Footer'

/* ---------- */

const LoadingPage = () => <div>Loading</div>

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
  const [loaderTimeout, setLoaderTimeout] = useState(false)

  useEffect(() => {
    setTimeout(() => setLoaderTimeout(false), 5000)
  }, [])

  return (
    <>
      {loaderTimeout && <LoadingPage />}
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<LoadingPage />}>

          {/*
              header and footer are outside the atomic templates to prevent many API calls on mount
              TODO / consider using redux to maintain state, structurize data and to avoid subsequent useless api call
              TODO / and then putting footer and header back to template
          */}
          <Header />

          <Routes>
            {renderRoutes(routes)}
            <Route
              element={<Error404 />}
              path='*'
            />
          </Routes>

          <Footer />

        </Suspense>
      </BrowserRouter>
    </>
  )
}
