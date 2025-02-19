import { Bars3Icon } from '@heroicons/react/24/outline'
import React from 'react'
import Button from '../Button/Button'

interface Props {
  onClick: () => void
}

const MobileMenuButton: React.FC<Props> = ({ onClick }) => (
  <div className="flex lg:hidden">
    <Button
      onClick={onClick}
      className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
    >
      <Bars3Icon aria-hidden="true" className="h-6 w-6" />
    </Button>
  </div>
)

export default MobileMenuButton
