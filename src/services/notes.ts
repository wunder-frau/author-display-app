import { Id, Note, NoteNew } from '../types'
import apiClient, { setAuthToken } from './apiClient'

const notesUrl = '/notes'

const setToken = (newToken: string | null) => {
  setAuthToken(newToken)
}

const getAllByBook = async (bookId: Id) => {
  const { data } = await apiClient.get<Note[]>(`${notesUrl}/${bookId}`)
  return data
}

const create = async (bookId: Id, content: string) => {
  const trimmedContent = content.trim()
  if (!trimmedContent) {
    throw new Error('Note content is required!')
  } else if (trimmedContent.length > 5000) {
    throw new Error('Note content must be 5000 characters or less.')
  }
  const { data } = await apiClient.post<Note>(`${notesUrl}/${bookId}`, {
    content: trimmedContent,
  })
  return data
}

const update = async (id: Id, updatedObj: NoteNew) => {
  if (!id) {
    throw new Error('Note ID is missing!')
  }
  const { data } = await apiClient.put<Note>(`${notesUrl}/${id}`, updatedObj)
  return data
}

const remove = async (id: Id) => {
  if (!id) {
    throw new Error('Note ID is missing!')
  }
  const { data } = await apiClient.delete<Note>(`${notesUrl}/${id}`)
  return data
}

export default { setToken, getAllByBook, create, update, remove }
