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
    en: articlePageCollection(where: {
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
        }
      }
    },
    pl: articlePageCollection(locale: "pl-PL", where: {
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
    en: articlePageCollection(where: {
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
        }
      }
    },
    pl: articlePageCollection(locale: "pl-PL", where: {
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
    en: articlePageCollection(where: {
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
        }
      }
    },
    pl: articlePageCollection(locale: "pl-PL", where: {
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
    en: articlePageCollection(where: {
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
        }
      }
    },
    pl: articlePageCollection(locale: "pl-PL", where: {
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
    en: articlePageCollection(where: {
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
        }
      }
    },
    pl: articlePageCollection(locale: "pl-PL", where: {
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
    en: articlePageCollection(where: {
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
        }
      }
    },
    pl: articlePageCollection(locale: "pl-PL", where: {
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
