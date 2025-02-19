import axios from 'axios'

import { apiBaseUrl } from '../constants'
import { UserAuth, UserAuthResponse, UserNew } from '../types'
import apiClient, { setAuthToken } from './apiClient'

const setToken = (newToken: string | null) => {
  setAuthToken(newToken)
}

const signUp = async (user: UserNew): Promise<UserAuthResponse> => {
  const { data } = await axios.post<UserAuthResponse>(
    `${apiBaseUrl}/auth/signup`,
    user,
  )
  return data
}

const login = async (user: UserAuth): Promise<UserAuthResponse> => {
  const { data } = await apiClient.post<UserAuthResponse>('/auth/login', user)
  return data
}

export default { setToken, signUp, login }
