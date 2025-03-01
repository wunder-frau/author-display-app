import clsx from 'clsx'
import { useState } from 'react'
import { GiBookshelf } from 'react-icons/gi'
import BotMessage from './BotMessage'
import ChatInput from './ChatInput'
import UserMessage from './UserMessage'

interface Props {
  isFooter?: boolean
}

const ChatBot = ({ isFooter = false }: Props) => {
  const [showChat, setShowChat] = useState(false)

  //console.log('isFooter:', isFooter)

  const iconBottomClass = isFooter ? 'bottom-[7rem]' : '!bottom-0'
  const chatWindowBottomClass = isFooter
    ? 'bottom-[calc(4rem+1rem+4rem)]'
    : 'bottom-[calc(4rem+1rem)]'

  return (
    <div>
      <GiBookshelf
        size={48}
        onClick={() => setShowChat(!showChat)}
        className={clsx(
          'fixed right-4 hover:cursor-pointer hover:text-blue-400 sm:right-12',
          iconBottomClass,
          { 'animate-bounce': !showChat },
        )}
      />
      {showChat && (
        <div
          className={clsx(
            'fixed right-2 h-[60vh] w-[90%] max-w-[320px] rounded-2xl bg-sky-700 p-5 shadow-md shadow-white',
            chatWindowBottomClass,
            'sm:right-12 sm:h-[400px] sm:max-w-md',
          )}
        >
          <div className="flex h-full flex-col">
            <div>
              <h2 className="text-lg font-semibold tracking-tight text-white">
                Chatbot
              </h2>
              <p className="text-gray-300">Powered by OpenAI</p>
            </div>
            <div className="mt-5 flex flex-1 flex-col items-center overflow-y-auto p-2 text-gray-300">
              <BotMessage />
              <UserMessage />
            </div>
            <ChatInput />
          </div>
        </div>
      )}
    </div>
  )
}

export default ChatBot
