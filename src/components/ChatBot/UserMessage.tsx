import { FaBookOpenReader } from 'react-icons/fa6'

const UserMessage = () => {
  return (
    <div className="my-2 flex w-full">
      <div className="mr-2 flex h-8 w-8 justify-center rounded-full border bg-sky-900 p-1">
        <FaBookOpenReader size={18} />
      </div>
      <div>
        <div className="font-medium text-white">User</div>
        <p className="text-sm text-gray-200">Hi, recommend me a book please!</p>
      </div>
    </div>
  )
}

export default UserMessage
