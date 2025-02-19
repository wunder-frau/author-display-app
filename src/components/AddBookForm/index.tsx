import React, { useState } from 'react'

import bookService from '../../services/books'
import { AuthorInfo, Book, BookNew } from '../../types'

import Button from '../Button'
import InputField from '../InputField'

interface Props {
  onAdd: (_: Book) => void
}

const AddBookForm = ({ onAdd }: Props) => {
  const [formData, setFormData] = useState<BookNew & Partial<AuthorInfo>>({
    title: '',
    firstname: '',
    lastname: '',
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    try {
      const newBook = await bookService.create(formData)
      onAdd(newBook)
      setFormData({ title: '', firstname: '', lastname: '' })
    } catch (error) {
      setError('Error adding book. Please try again.')
      console.error('Error adding book:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto w-full max-w-md rounded-xl bg-white p-6"
    >
      <h2 className="mb-6 text-center text-2xl font-bold text-gray-900">
        Add New Book
      </h2>

      {error && (
        <p className="mb-4 rounded bg-red-100 px-4 py-2 text-red-600">
          {error}
        </p>
      )}

      <div className="space-y-4">
        <InputField
          label="Title"
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <InputField
          label="Author First Name"
          type="text"
          name="firstname"
          value={formData.firstname || ''}
          onChange={handleChange}
          required
        />
        <InputField
          label="Author Last Name"
          type="text"
          name="lastname"
          value={formData.lastname || ''}
          onChange={handleChange}
          required
        />
      </div>

      <Button
        type="submit"
        disabled={loading}
        className="mt-6 w-full rounded-md bg-green-500 py-2 text-lg font-semibold text-white transition-all hover:bg-green-700 disabled:opacity-50"
      >
        {loading ? 'Adding...' : 'Add Book'}
      </Button>
    </form>
  )
}

export default AddBookForm
