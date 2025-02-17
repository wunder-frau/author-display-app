import { useState } from 'react'
import booksService from '../../services/books'
import { Book } from '../../types'

interface AddBookFormData {
  title: string
  firstname: string
  lastname: string
}

interface Props {
  onAdd: (newBook: Book) => void
}

const AddBookForm: React.FC<Props> = ({ onAdd }) => {
  const [formData, setFormData] = useState<AddBookFormData>({
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
    } catch (error: any) {
      setError(error.message || 'An error occurred')
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
      <button
        type="submit"
        disabled={loading}
        className="rounded bg-green-500 px-4 py-2 text-white transition-colors hover:bg-green-600"
      >
        {loading ? 'Adding...' : 'Add Book'}
      </button>
    </form>
  )
}

export default AddBookForm
