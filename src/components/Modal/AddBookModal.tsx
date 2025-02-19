import React from 'react'
import { Book } from '../../types'
import AddBookForm from '../AddBookForm'
import Modal from './index'

interface Props {
  isOpen: boolean
  onClose: () => void
  onAdd: (_: Book) => void
}

const AddBookModal: React.FC<Props> = ({ isOpen, onClose, onAdd }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <AddBookForm
        onAdd={(newBook) => {
          onAdd(newBook)
          onClose()
        }}
      />
    </Modal>
  )
}

export default AddBookModal
