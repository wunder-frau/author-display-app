import { UserAuth, UserAuthResponse, UserNew } from '../types'
import apiClient, { setAuthToken } from './apiClient'

const setToken = (newToken: string | null) => {
  setAuthToken(newToken)
}

const signUp = async (user: UserNew): Promise<UserAuthResponse> => {
  const { data } = await apiClient.post<UserAuthResponse>('/auth/signup', user)
  return data
}

const login = async (user: UserAuth): Promise<UserAuthResponse> => {
  const { data } = await apiClient.post<UserAuthResponse>('/auth/login', user)
  return data
}

export default { setToken, signUp, login }
