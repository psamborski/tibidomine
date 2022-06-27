/* eslint-disable max-lines */
import AxiosInstance from '../features/Axios'

export const getFooter = async () => {
  const body = `{
    pl: basicInfoCollection(limit: 1, locale: "pl-PL") {
      footer: items {
        mainPhoneNumber,
          mainEMailAddress,
          facebookTitle,
          facebookLink,
          youtubeTitle,
          youtubeLink
      }
    },
    en: basicInfoCollection(limit: 1) {
      footer: items {
        mainPhoneNumber,
          mainEMailAddress,
          facebookTitle,
          facebookLink,
          youtubeTitle,
          youtubeLink
      }
    }
  }`

  return AxiosInstance().post(
    '',
    {
      query: body,
    },
  )
}

export const getHeader = async () => {
  const body = `{
    pl: basicInfoCollection(limit: 1) {
      header: items {
        logo {
          url,
          title
        }
      }
    },
    en: basicInfoCollection(limit: 1) {
      header: items {
        logo {
          url,
          title
        }
      }
    }
  }`

  return AxiosInstance().post(
    '',
    {
      query: body,
    },
  )
}

export const getHomepage = async () => {
  const body = `{
    pl: basicInfoCollection(limit: 1, locale: "pl-PL") {
      homepage: items {
        pageTitle,
        pageSubtitle,
        shortChoirDescription {
          json
          links {
            assets {
              block {
                url
                contentType
                description
                sys {
                  id
                }
              }
            }
          }
        },
        mainPhoto {
          url,
          title
        }
      }
    },
    en: basicInfoCollection(limit: 1) {
      homepage: items {
        pageTitle,
        pageSubtitle,
        shortChoirDescription {
          json
          links {
            assets {
              block {
                url
                contentType
                description
                sys {
                  id
                }
              }
            }
          }
        },
        mainPhoto {
          url,
          title
        }
      }
    }
  }`

  return AxiosInstance().post(
    '',
    {
      query: body,
    },
  )
}

export const getAboutCv = async () => {
  const body = `{
    en: articlePageCollection(limit: 1, where: {
      pageId: "aboutCv"
    }) {
      aboutCv: items {
        pageTitle,
        pagePhoto {
          url,
          title
        },
        content {
          json
          links {
            assets {
              block {
                url
                contentType
                description
                sys {
                  id
                }
              }
            }
          }
        }
      }
    },
    pl: articlePageCollection(limit: 1, locale: "pl-PL", where: {
      pageId: "aboutCv"
    }) {
      aboutCv: items {
        pageTitle,
        pagePhoto {
          url,
          title
        },
        content {
          json
          links {
            assets {
              block {
                url
                contentType
                description
                sys {
                  id
                }
              }
            }
          }
        }
      }
    }
  }`

  return AxiosInstance().post(
    '',
    {
      query: body,
    },
  )
}

export const getAboutDescription = async () => {
  const body = `{
    en: articlePageCollection(limit: 1, where: {
      pageId: "aboutDescription"
    }) {
      aboutDescription: items {
        pageTitle,
        pagePhoto {
          url,
          title
        },
        content {
          json
          links {
            assets {
              block {
                url
                contentType
                description
                sys {
                  id
                }
              }
            }
          }
        }
      }
    },
    pl: articlePageCollection(limit: 1, locale: "pl-PL", where: {
      pageId: "aboutDescription"
    }) {
      aboutDescription: items {
        pageTitle,
        pagePhoto {
          url,
          title
        },
        content {
          json
          links {
            assets {
              block {
                url
                contentType
                description
                sys {
                  id
                }
              }
            }
          }
        }
      }
    }
  }`

  return AxiosInstance().post(
    '',
    {
      query: body,
    },
  )
}

export const getAboutRecruitment = async () => {
  const body = `{
    en: articlePageCollection(limit: 1, where: {
      pageId: "aboutRecruitment"
    }) {
      aboutRecruitment: items {
        pageTitle,
        pagePhoto {
          url,
          title
        },
        content {
          json
          links {
            assets {
              block {
                url
                contentType
                description
                sys {
                  id
                }
              }
            }
          }
        }
      }
    },
    pl: articlePageCollection(limit: 1, locale: "pl-PL", where: {
      pageId: "aboutRecruitment"
    }) {
      aboutRecruitment: items {
        pageTitle,
        pagePhoto {
          url,
          title
        },
        content {
          json
          links {
            assets {
              block {
                url
                contentType
                description
                sys {
                  id
                }
              }
            }
          }
        }
      }
    }
  }`

  return AxiosInstance().post(
    '',
    {
      query: body,
    },
  )
}

export const getAboutStaff = async () => {
  const body = `{
    en: articlePageCollection(limit: 1, where: {
      pageId: "aboutStaff"
    }) {
      aboutStaff: items {
        pageTitle,
        pagePhoto {
          url,
          title
        },
        content {
          json
          links {
            assets {
              block {
                url
                contentType
                description
                sys {
                  id
                }
              }
            }
          }
        }
      }
    },
    pl: articlePageCollection(limit: 1, locale: "pl-PL", where: {
      pageId: "aboutStaff"
    }) {
      aboutStaff: items {
        pageTitle,
        pagePhoto {
          url,
          title
        },
        content {
          json
          links {
            assets {
              block {
                url
                contentType
                description
                sys {
                  id
                }
              }
            }
          }
        }
      }
    }
  }`

  return AxiosInstance().post(
    '',
    {
      query: body,
    },
  )
}

export const getAchievements = async () => {
  const body = `{
    en: articlePageCollection(limit: 1, where: {
      pageId: "achievements"
    }) {
      achievements: items {
        pageTitle,
        pagePhoto {
          url,
          title
        },
        content {
          json
          links {
            assets {
              block {
                url
                contentType
                description
                sys {
                  id
                }
              }
            }
          }
        }
      }
    },
    pl: articlePageCollection(limit: 1, locale: "pl-PL", where: {
      pageId: "achievements"
    }) {
      achievements: items {
        pageTitle,
        pagePhoto {
          url,
          title
        },
        content {
          json
          links {
            assets {
              block {
                url
                contentType
                description
                sys {
                  id
                }
              }
            }
          }
        }
      }
    }
  }`

  return AxiosInstance().post(
    '',
    {
      query: body,
    },
  )
}

export const getRepertoire = async () => {
  const body = `{
    en: articlePageCollection(limit: 1, where: {
      pageId: "repertoire"
    }) {
      repertoire: items {
        pageTitle,
        pagePhoto {
          url,
          title
        },
        content {
          json
          links {
            assets {
              block {
                url
                contentType
                description
                sys {
                  id
                }
              }
            }
          }
        }
      }
    },
    pl: articlePageCollection(limit: 1, locale: "pl-PL", where: {
      pageId: "repertoire"
    }) {
      repertoire: items {
        pageTitle,
        pagePhoto {
          url,
          title
        },
        content {
          json
          links {
            assets {
              block {
                url
                contentType
                description
                sys {
                  id
                }
              }
            }
          }
        }
      }
    }
  }`

  return AxiosInstance().post(
    '',
    {
      query: body,
    },
  )
}

export const getGallery = async () => {
  const body = `{
    en: galleryCollection(where: { pageId: "gallery" }, limit: 1) {
      gallery: items {
        pageTitle,
        pagePhoto {
          url,
          title
        },
        photos: photosCollection {
          items {
            url
            title
            sys {
              id
            }
          }
        }
      }
    }
    pl: galleryCollection(locale: "pl-PL", where: { pageId: "gallery" }, limit: 1) {
      gallery: items {
        pageTitle,
        pagePhoto {
          url,
          title
        },
        photos: photosCollection {
          items {
            url
            title
            sys {
              id
            }
          }
        }
      }
    }
  }`

  return AxiosInstance().post(
    '',
    {
      query: body,
    },
  )
}

export const getContact = async () => {
  const body = `{
  en: contactCollection(where: { pageId: "contact" }, limit: 1) {
    contact: items {
      pageTitle
      address {
        json
        links {
          assets {
            block {
              url
              contentType
              description
              sys {
                id
              }
            }
          }
        }
      }
      phone {
        json
        links {
          assets {
            block {
              url
              contentType
              description
              sys {
                id
              }
            }
          }
        }
      }
      rehearsal {
        json
        links {
          assets {
            block {
              url
              contentType
              description
              sys {
                id
              }
            }
          }
        }
      }
      youtube {
        json
        links {
          assets {
            block {
              url
              contentType
              description
              sys {
                id
              }
            }
          }
        }
      }
      facebook {
        json
        links {
          assets {
            block {
              url
              contentType
              description
              sys {
                id
              }
            }
          }
        }
      }
      pinLocation {
        lat
        lon
      }
    }
  }
  pl: contactCollection(locale: "pl-PL", where: { pageId: "contact" }, limit: 1) {
    contact: items {
      pageTitle
      address {
        json
        links {
          assets {
            block {
              url
              contentType
              description
              sys {
                id
              }
            }
          }
        }
      }
      phone {
        json
        links {
          assets {
            block {
              url
              contentType
              description
              sys {
                id
              }
            }
          }
        }
      }
      rehearsal {
        json
        links {
          assets {
            block {
              url
              contentType
              description
              sys {
                id
              }
            }
          }
        }
      }
      youtube {
        json
        links {
          assets {
            block {
              url
              contentType
              description
              sys {
                id
              }
            }
          }
        }
      }
      facebook {
        json
        links {
          assets {
            block {
              url
              contentType
              description
              sys {
                id
              }
            }
          }
        }
      }
      pinLocation {
        lat
        lon
      }
    }
  }
}`

  return AxiosInstance().post(
    '',
    {
      query: body,
    },
  )
}

export const getWorkInProgress = async () => {
  const body = `{
    pl: basicInfoCollection(limit: 1) {
      basicInfo: items {
        workInProgress
        mainPhoto {
          url,
          title
        }
      }
    },
    en: basicInfoCollection(limit: 1) {
      basicInfo: items {
        workInProgress
        mainPhoto {
          url,
          title
        }
      }
    },
  }`

  return AxiosInstance().post(
    '',
    {
      query: body,
    },
  )
}

export const getNews = async () => {
  const body = `{
    basicInfo: basicInfoCollection(limit: 1) {
      data: items {
        mainPhoto {
          url,
          title
        }
      }
    }
    pl: newsPostCollection(limit: 20, order: date_DESC, locale: "pl-PL") {
      posts: items {
        title
        content {
          json
          links {
            assets {
              block {
                url
                contentType
                description
                sys {
                  id
                }
              }
            }
          }
          links {
            assets {
              block {
                url
                contentType
                description
                sys {
                  id
                }
              }
            }
          }
        }
        date
        sys {
          id
        }
      }
    },
    en: newsPostCollection(limit: 20, order: date_DESC) {
      posts: items {
        title
        content {
          json
          links {
            assets {
              block {
                url
                contentType
                description
                sys {
                  id
                }
              }
            }
          }
        }
        date
        sys {
          id
        }
      }
    }
  }`

  return AxiosInstance().post(
    '',
    {
      query: body,
    },
  )
}
