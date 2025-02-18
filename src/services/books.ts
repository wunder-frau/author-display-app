import { Book, BookNew, Id } from '../types'
import apiClient, { setAuthToken } from './apiClient'

const booksUrl = '/books' // using relative endpoint since apiClient already has baseURL

const setToken = (newToken: string | null) => {
  setAuthToken(newToken)
}

const getAll = async () => {
  const { data } = await apiClient.get<Book[]>(booksUrl)
  return data
}

const get = async (id: Id) => {
  const { data } = await apiClient.get<Book>(`${booksUrl}/${id}`)
  return data
}

const create = async (newObj: BookNew) => {
  const { data } = await apiClient.post<Book>(booksUrl, newObj)
  return data
}

const update = async (id: Id, updatedObj: BookNew) => {
  const { data } = await apiClient.put<Book>(`${booksUrl}/${id}`, updatedObj)
  return data
}

const remove = async (id: Id) => {
  const { data } = await apiClient.delete<Book>(`${booksUrl}/${id}`)
  return data
}

// Include setToken in the exported object
export default { setToken, getAll, get, create, update, remove }
