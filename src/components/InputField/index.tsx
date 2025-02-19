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
  <div className="text-left">
    <label
      htmlFor={name}
      className="mb-1 block text-sm font-medium text-gray-900"
    >
      {label}
    </label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      autoComplete={autoComplete}
      className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
    />
  </div>
)

export default InputField
