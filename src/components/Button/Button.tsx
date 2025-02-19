import React from 'react'

interface Props {
  onClick?: () => void | Promise<void>
  children: React.ReactNode
  className?: string
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
}

const Button: React.FC<Props> = ({
  onClick,
  children,
  className,
  disabled = false,
  type = 'button',
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`rounded px-4 py-2 transition-colors ${className}`}
    >
      {children}
    </button>
  )
}

export default Button
