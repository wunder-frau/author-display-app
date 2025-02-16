/**
 * @see ./src/hooks/index.ts
 * @type {import("./src/hooks").useResource}
 */

import axios from 'axios'
import { apiBaseUrl } from '../constants'

import { NewUser, UserSignupResponse } from '../types'

const signUp = async (user: NewUser): Promise<UserSignupResponse> => {
  const response = await axios.post<UserSignupResponse>(
    `${apiBaseUrl}/signup`,
    user,
  )
  console.log(response.data)
  return response.data
}

export default { signUp }
