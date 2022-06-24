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
