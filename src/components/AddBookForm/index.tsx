import React, { useState } from 'react'

import booksService from '../../services/books'
import Button from '../Button/Button'

import { Book } from '../../types'

interface Data {
  title: string
  firstname: string
  lastname: string
}

interface Props {
  onAdd: (_: Book) => void
}

const AddBookForm: React.FC<Props> = ({ onAdd }: Props) => {
  const [formData, setFormData] = useState<Data>({
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
      const newBook = await booksService.create(formData)
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
      className="mx-auto mb-8 w-full max-w-sm rounded-lg bg-white p-6 text-center"
    >
      <h2 className="mb-4 text-xl font-bold">Add New Book</h2>
      {error && <p className="mb-2 text-red-500">{error}</p>}
      <div className="mb-4 text-left">
        <label className="mb-1 block" htmlFor="title">
          Title
        </label>
        <input
          type="text"
          name="title"
          id="title"
          value={formData.title}
          onChange={handleChange}
          className="w-full rounded border p-2"
          required
        />
      </div>
      <div className="mb-4 text-left">
        <label className="mb-1 block" htmlFor="firstname">
          Author First Name
        </label>
        <input
          type="text"
          name="firstname"
          id="firstname"
          value={formData.firstname}
          onChange={handleChange}
          className="w-full rounded border p-2"
          required
        />
      </div>
      <div className="mb-4 text-left">
        <label className="mb-1 block" htmlFor="lastname">
          Author Last Name
        </label>
        <input
          type="text"
          name="lastname"
          id="lastname"
          value={formData.lastname}
          onChange={handleChange}
          className="w-full rounded border p-2"
          required
        />
      </div>
      <Button
        type="submit"
        disabled={loading}
        className="bg-green-500 text-white hover:bg-green-600"
      >
        {loading ? 'Adding...' : 'Add Book'}
      </Button>
    </form>
  )
}

export default AddBookForm
