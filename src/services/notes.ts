import apiClient, { setAuthToken } from './apiClient'

const notesUrl = '/notes'

const setToken = (newToken: string | null) => {
  setAuthToken(newToken)
}

const getAllByBook = async (bookId: string) => {
  const { data } = await apiClient.get<{ id: string; content: string }[]>(
    `${notesUrl}/${bookId}`,
  )
  return data
}

const create = async (bookId: string, content: string) => {
  const trimmedContent = content.trim()
  if (!trimmedContent) {
    throw new Error('Note content is required!')
  }
  if (trimmedContent.length > 5000) {
    throw new Error('Note content must be 5000 characters or less.')
  }
  const { data } = await apiClient.post<{ id: string; content: string }>(
    `${notesUrl}/${bookId}`,
    { content: trimmedContent },
  )
  return data
}

const update = async (noteId: string, content: string) => {
  if (!noteId) {
    throw new Error('Note ID is missing!')
  }
  const { data } = await apiClient.put<{ id: string; content: string }>(
    `${notesUrl}/${noteId}`,
    { content },
  )
  return data
}

const remove = async (noteId: string) => {
  if (!noteId) {
    throw new Error('Note ID is missing!')
  }
  const { data } = await apiClient.delete<{ message: string }>(
    `${notesUrl}/${noteId}`,
  )
  return data
}

export default { setToken, getAllByBook, create, update, remove }
