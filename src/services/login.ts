/**
 * @see ./src/hooks/index.ts
 * @type {import("./src/hooks").useResource}
 */

import axios from 'axios'
import { apiBaseUrl } from '../constants'

import { UserAuth, UserAuthResponse, UserNew } from '../types'

const signUp = async (user: UserNew): Promise<UserAuthResponse> => {
  const { data } = await axios.post<UserAuthResponse>(
    `${apiBaseUrl}/auth/signup`,
    user,
  )
  return data
}

const login = async (user: UserAuth) => {
  const { data } = await axios.post<UserAuthResponse>(
    `${apiBaseUrl}/login`,
    user,
  )
  return data
}

export default { signUp, login }
