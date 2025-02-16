/**
 * @see ./src/hooks/index.ts
 * @type {import("./src/hooks").useResource}
 */

import axios from 'axios'
import { apiBaseUrl } from '../constants'

import { AuthResponse, AuthUser, NewUser } from '../types'

const signUp = async (user: NewUser): Promise<AuthResponse> => {
  const response = await axios.post<AuthResponse>(`${apiBaseUrl}/signup`, user)
  return response.data
}

const login = async (user: AuthUser) => {
  const response = await axios.post<AuthResponse>(`${apiBaseUrl}/login`, user)
  return response.data
}

export default { signUp, login }
