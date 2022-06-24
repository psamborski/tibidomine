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
