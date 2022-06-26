import { lazy } from 'react'
import pMinDelay from 'p-min-delay'

export const ROUTES = {
  HOMEPAGE: '/',
  ABOUT: {
    ROOT: '/about',
    CHILDREN: {
      DESCRIPTION: '/choir',
      CV: '/cv',
      RECRUITMENT: '/recruitment',
      STAFF: '/staff',
    },
  },
  NEWS: '/news',
  ACHIEVEMENTS: '/achievements',
  GALLERY: '/gallery',
  REPERTOIRE: '/repertoire',
  CONTACT: '/contact',
}

// Main components
const Homepage = lazy(() => pMinDelay(import('../pages/Homepage'), 500))
const News = lazy(() => pMinDelay(import('../pages/News'), 500))
const Repertoire = lazy(() => pMinDelay(import('../pages/Repertoire'), 500))
const Achievements = lazy(() => pMinDelay(import('../pages/Achievements'), 500))
const Gallery = lazy(() => pMinDelay(import('../pages/Gallery'), 500))
const Contact = lazy(() => pMinDelay(import('../pages/Contact'), 500))

// Main routes
const mainRoutes = {
  id: 'MainRoot',
  rootPath: ROUTES.HOMEPAGE,
  component: Homepage,
  // guard: HasToBeAuthenticated,
  children: [
    {
      childPath: ROUTES.NEWS,
      name: 'News page',
      component: News,
    },
    {
      childPath: ROUTES.ACHIEVEMENTS,
      name: 'Achievements page',
      component: Achievements,
    },
    {
      childPath: ROUTES.GALLERY,
      name: 'Gallery page',
      component: Gallery,
    },
    {
      childPath: ROUTES.REPERTOIRE,
      name: 'Repertoire page',
      component: Repertoire,
    },
    {
      childPath: ROUTES.CONTACT,
      name: 'Contact page',
      component: Contact,
    },
  ],
}

// About components
const AboutDescription = lazy(() => pMinDelay(import('../pages/AboutDescription'), 500))
const AboutStaff = lazy(() => pMinDelay(import('../pages/AboutStaff'), 500))
const AboutCv = lazy(() => pMinDelay(import('../pages/AboutCv'), 500))
const AboutRecruitment = lazy(() => pMinDelay(import('../pages/AboutRecruitment'), 500))

// About routes
const aboutRoutes = {
  id: 'AboutRoot',
  rootPath: ROUTES.ABOUT.ROOT,
  redirect: ROUTES.ABOUT.ROOT + ROUTES.ABOUT.CHILDREN.DESCRIPTION,
  children: [
    {
      childPath: ROUTES.ABOUT.CHILDREN.DESCRIPTION,
      name: 'About description page',
      component: AboutDescription,
    },
    {
      childPath: ROUTES.ABOUT.CHILDREN.STAFF,
      name: 'About STAFF page',
      component: AboutStaff,
    },
    {
      childPath: ROUTES.ABOUT.CHILDREN.RECRUITMENT,
      name: 'About recruitment page',
      component: AboutRecruitment,
    },
    {
      childPath: ROUTES.ABOUT.CHILDREN.CV,
      name: 'About cv page',
      component: AboutCv,
    },
  ],
}

export const routesList = [mainRoutes, aboutRoutes]
