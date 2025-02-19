import React from 'react'

interface Props {
  label: string
  type: string
  name: string
  value: string
  onChange: (_e: React.ChangeEvent<HTMLInputElement>) => void
  required?: boolean
  autoComplete?: string
}

const InputField = ({
  label,
  type,
  name,
  value,
  onChange,
  required,
  autoComplete,
}: Props) => (
  <div>
    <label htmlFor={name} className="block text-sm font-medium text-gray-900">
      {label}
    </label>
    <div className="mt-2">
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        autoComplete={autoComplete}
        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
      />
    </div>
  </div>
)

export default InputField
