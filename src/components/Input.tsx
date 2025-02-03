import React, { useState } from 'react'
import '../index.css'
interface InputProps {
  addTitle: (title: string, author: string) => void
}

const Input: React.FC<InputProps> = ({ addTitle }) => {
  const [step, setStep] = useState<'title' | 'author'>('title')
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
    <form
      onSubmit={handleSubmit}
      className='mx-auto mt-10 flex w-full max-w-md flex-col items-center justify-center gap-4 sm:flex-row'
    >
      <input
        className='animate-[var(--animate-shineImpulse)] px-3 py-1 text-center text-[greenyellow]'
        type='text'
        placeholder={step === 'title' ? 'Enter Title' : 'Enter Author Name'}
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
      />
      <button
        className='animate-[var(--animate-shineImpulse)] cursor-pointer rounded-md px-3 py-1 text-base whitespace-nowrap text-[greenyellow]'
        type='submit'
      >
        {step === 'title' ? 'Next' : '+'}
      </button>
    </form>
  )
}

export default Input
