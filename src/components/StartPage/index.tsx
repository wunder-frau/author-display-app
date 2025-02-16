const StartPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 px-6 text-center">
      <div className="max-w-2xl">
        <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Welcome to Books App
        </h1>
        <p className="mt-4 text-lg text-gray-700 sm:mt-6 sm:text-xl">
          Discover and manage your favorite books effortlessly.
        </p>
        <a
          href="/auth"
          className="mt-6 inline-block rounded-lg bg-indigo-600 px-6 py-3 text-lg font-medium text-white shadow-md transition hover:bg-indigo-700"
        >
          Get Started
        </a>
      </div>
    </div>
  )
}

export default StartPage
