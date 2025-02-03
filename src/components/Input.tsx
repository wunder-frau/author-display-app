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
      className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mx-auto mt-10"
    >
      <input
        className='px-3 py-1 animate-[var(--animate-shineImpulse)] text-[greenyellow] text-center'
        type='text'
        placeholder={
          step === 'title' ? 'Enter Title' : 'Enter Author Name'
        }
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
      />
      <button className="px-3 py-1 text-base cursor-pointer rounded-md whitespace-nowrap animate-[var(--animate-shineImpulse)] text-[greenyellow]" type='submit'>{step === 'title' ? 'Next' : '+'}</button>
    </form>
  )
}

export default Input
