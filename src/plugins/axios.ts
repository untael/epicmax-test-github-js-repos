import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
// import qs from 'qs'

const axiosInstance: AxiosInstance = axios.create({
  baseURL: 'http://localhost:3000/',
})

export const executeApiRequest = async (requestConfig: AxiosRequestConfig) => {
  try {
    return (await axiosInstance({ ...requestConfig })).data
  } catch (e) {
    throw e.response && e.response.data ? e.response.data : e
  }
}

export default {
  axiosInstance,
}
