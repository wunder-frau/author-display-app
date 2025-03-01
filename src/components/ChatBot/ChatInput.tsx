const ChatInput = () => {
  return (
    <div className="mt-auto flex flex-col items-center space-y-2 p-2 sm:flex-row sm:space-y-0 sm:space-x-2">
      <form className="flex w-full items-center justify-center space-x-2 sm:justify-start">
        <input
          type="text"
          placeholder="Type your message here"
          className="flex h-10 w-full rounded-md border border-[#e5e7eb] px-3 text-sm text-white focus:border-sky-500 focus:outline-none"
        />
        <button className="inline-flex items-center justify-center rounded-md bg-sky-900 px-4 py-2 text-sm font-medium text-white hover:bg-sky-800">
          Send
        </button>
      </form>
    </div>
  )
}

export default ChatInput
