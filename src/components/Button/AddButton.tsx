import React from 'react'

interface Props {
  onClick: React.MouseEventHandler<HTMLDivElement>
}

const AddNoteButton: React.FC<Props> = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className="flex w-58 cursor-pointer items-center justify-center rounded-lg border-2 border-dashed border-gray-300 p-4"
    >
      <span className="text-3xl text-gray-400">+</span>
    </div>
  )
}

export default AddNoteButton
