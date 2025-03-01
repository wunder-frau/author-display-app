import { PiBooksFill } from 'react-icons/pi'

const BotMessage = () => {
  return (
    <div className="my-2 flex w-full">
      <div className="mr-2 flex h-8 w-8 justify-center rounded-full border bg-sky-900 p-1">
        <PiBooksFill size={18} />
      </div>
      <div>
        <div className="font-medium text-white">Bot</div>
        <p className="text-sm text-gray-200">Hello, how can I help you?</p>
      </div>
    </div>
  )
}

export default BotMessage
