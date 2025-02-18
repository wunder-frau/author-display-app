import axios from 'axios'
import { apiBaseUrl } from '../constants'

const apiClient = axios.create({
  baseURL: apiBaseUrl,
})

export const setAuthToken = (token: string | null) => {
  if (token) {
    apiClient.defaults.headers.common['Authorization'] = `Bearer ${token}`
  } else {
    delete apiClient.defaults.headers.common['Authorization']
  }
}

export default apiClient
