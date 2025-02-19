import { Book } from '../../types'
import AddBookForm from '../AddBookForm'

import Modal from '.'

interface Props {
  isOpen: boolean
  onClose: () => void
  onAdd: (_: Book) => void
}

const AddBookModal = ({ isOpen, onClose, onAdd }: Props) => {
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
