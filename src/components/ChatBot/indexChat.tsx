import clsx from 'clsx'
import { useState } from 'react'
import { GiBookshelf } from 'react-icons/gi'

const ChatBot = () => {
  const [showChat, setShowChat] = useState(false)
  return (
    <div>
      <GiBookshelf
        size={64}
        onClick={() => setShowChat(!showChat)}
        className={clsx(
          'fixed right-12 bottom-[1rem] hover:cursor-pointer hover:text-blue-400',
          { 'animate-bounce': !showChat },
        )}
      />
    </div>
  )
}

export default ChatBot
