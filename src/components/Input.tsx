import React, { useState } from 'react'
import '../index.css'
interface InputProps {
  addTitle: (title: string, author: string) => void
}

const Input: React.FC<InputProps> = ({ addTitle }) => {
  const [step, setStep] = useState<'title' | 'author'>('title') // Step to track input stage
  const [title, setTitle] = useState('')
  const [inputValue, setInputValue] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (step === 'title') {
      // Save the title and ask for the author next
      setTitle(inputValue)
      setInputValue('') // Clear input field
      setStep('author') // Move to the next step
    } else if (step === 'author') {
      // Save the author and call addTitle
      const author = inputValue
      addTitle(title, author)
      setInputValue('') // Clear input field
      setTitle('') // Clear title state
      setStep('title') // Reset to first step
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="animate-[var(--animate-shineImpulse)]"
        type='text'
        placeholder={
          step === 'title' ? 'Enter Book Title' : 'Enter Author Name'
        }
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
      />
      <button type='submit'>{step === 'title' ? 'Next' : 'Add Book'}</button>
    </form>
  )
}

export default Input
