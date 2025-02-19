import React from 'react'
import { Link } from 'react-router-dom'

const Logo: React.FC = () => (
  <div className="flex lg:flex-1">
    <Link to="/" className="-m-1.5 p-1.5">
      <span className="text-4xl">📚</span>
    </Link>
  </div>
)

export default Logo
