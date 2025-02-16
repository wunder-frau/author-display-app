import axios from 'axios'

import { apiBaseUrl } from '../constants'

import { Book, BookNew, Id } from '../types'

const booksUrl = `${apiBaseUrl}/books`
let token: string | null = null

const setToken = (newToken: string | null) => {
  if (newToken !== null) {
    token = `Bearer ${newToken}`
  }
}

const getAll = async () => {
  const { data } = await axios.get<Book[]>(booksUrl)
  return data
}

const get = async (id: Id) => {
  const { data } = await axios.get<Book>(`${booksUrl}/${id}`)
  return data
}

const create = async (newObj: BookNew) => {
  const config = {
    headers: { Authorization: token },
  }

  const { data } = await axios.post<Book>(booksUrl, newObj, config)
  return data
}

const update = async (id: Id, updatedObj: BookNew) => {
  const config = {
    headers: { Authorization: token },
  }

  const { data } = await axios.put<Book>(
    `${booksUrl}/${id}`,
    updatedObj,
    config,
  )
  return data
}

const remove = async (id: Id) => {
  const config = {
    headers: { Authorization: token },
  }

  const response = await axios.delete<Book>(`${booksUrl}/${id}`, config)
  return response.data
}

export default { setToken, getAll, get, create, update, remove }
