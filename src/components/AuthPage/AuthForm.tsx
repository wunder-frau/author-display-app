import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import loginService from '../../services/login'

import Button from '../Button'
import InputField from '../InputField'

interface Props {
  setIsAuthed: (_: boolean) => void
  isRegistered: boolean
  error: string | null
  setError: React.Dispatch<React.SetStateAction<string | null>>
}

const AuthForm = ({ setIsAuthed, isRegistered, error, setError }: Props) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
  })
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const resetForm = () => setFormData({ email: '', password: '', name: '' })

  const handleAuth = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const response = isRegistered
        ? await loginService.login({
            email: formData.email,
            password: formData.password,
          })
        : await loginService.signUp({
            email: formData.email,
            password: formData.password,
            name: formData.name,
          })

      if (response?.accessToken && response?.user?.id) {
        localStorage.setItem('token', response.accessToken)
        localStorage.setItem('id', String(response.user.id))
        localStorage.setItem('username', response.user.name)
        setIsAuthed(true)
        loginService.setToken(response.accessToken)
        navigate('/me')
      } else {
        throw new Error('Invalid response from server')
      }

      resetForm()
    } catch (error) {
      setError('Authentication failed. Please try again.')
      console.error('Auth error:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleAuth} className="space-y-6">
      {!isRegistered && (
        <InputField
          label="Name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      )}
      <InputField
        label="Email address"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
        autoComplete="email"
      />
      <InputField
        label="Password"
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        required
        autoComplete={isRegistered ? 'current-password' : 'new-password'}
      />
      {error && <p className="text-center text-sm text-red-500">{error}</p>}
      <Button
        type="submit"
        disabled={loading}
        className="w-full bg-indigo-600 text-white hover:bg-indigo-500"
      >
        {loading ? 'Processing...' : isRegistered ? 'Sign in' : 'Sign up'}
      </Button>
    </form>
  )
}

export default AuthForm
