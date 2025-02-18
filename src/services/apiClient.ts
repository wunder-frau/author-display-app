import axios from 'axios'
import { apiBaseUrl } from '../constants'

const apiClient = axios.create({
  baseURL: apiBaseUrl,
})

export const setAuthToken = (newToken: string | null) => {
  if (newToken) {
    apiClient.defaults.headers.common['Authorization'] = `Bearer ${newToken}`
  } else {
    delete apiClient.defaults.headers.common['Authorization']
  }
}

export default apiClient
