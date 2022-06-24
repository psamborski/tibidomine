/* eslint-disable no-console */
import axios from 'axios'
// import applyCaseMiddleware from 'axios-case-converter'
import camelcaseKeys from 'camelcase-keys'

import { CONFIG } from '../../utils/config'

export const AxiosInstance = (
  formData = false,
  authorization = `Bearer ${CONFIG.CONTENTFUL_CONSUME_API_KEY}`,
  baseUrl = `https://graphql.contentful.com/content/v1/spaces/${CONFIG.CONTENTFUL_SPACE_ID}/`,
) => {
  const testMode = process.env.NODE_ENV === 'production'
  // const axiosInstance = applyCaseMiddleware(
  //   axios.create({
  //     baseURL: baseUrl,
  //   }),
  // )
  const axiosInstance = axios.create({
    baseURL: baseUrl,
  })

  axiosInstance.defaults.headers.common.Authorization = authorization || ''

  if (formData) {
    axiosInstance.defaults.headers = {
      'Content-Type': 'multipart/form-data',
      Authorization: authorization || '',
    }
  }

  // usable for debugging
  axiosInstance.interceptors.request.use(
    (value) => {
      if (testMode) {
        console.log('\n')
        console.log('getAxios request ↓')
        console.dir(value)
        console.log('getAxios caller ↓ ')
        console.trace()
        console.log('\n')
      }
      return value
    },
  )

  axiosInstance.interceptors.response.use(
    (response) => camelcaseKeys(response, {
      deep: true,
    }),
    (error) => {
      if (testMode) {
        console.log('AxiosInstance error ↓')
        console.dir(error)
      }
      Promise.reject(error?.response?.data || 'Something went wrong')
    },
  )

  return axiosInstance
}

