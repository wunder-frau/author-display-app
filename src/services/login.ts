/**
 * @see ./src/hooks/index.ts
 * @type {import("./src/hooks").useResource}
 */

import { UserAuth, UserAuthResponse, UserNew } from '../types'
import apiClient from './apiClient'

const signUp = async (user: UserNew): Promise<UserAuthResponse> => {
  const { data } = await apiClient.post<UserAuthResponse>('/auth/signup', user)
  return data
}

const login = async (user: UserAuth): Promise<UserAuthResponse> => {
  const { data } = await apiClient.post<UserAuthResponse>('/auth/login', user)
  return data
}

export default { signUp, login }
