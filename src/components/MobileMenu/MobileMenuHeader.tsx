import { XMarkIcon } from '@heroicons/react/24/outline'

import Button from '../Button'
import Logo from '../Logo'

interface Props {
  onClose: () => void
}

const MobileMenuHeader = ({ onClose }: Props) => {
  return (
    <div className="flex items-center justify-between">
      <Logo />
      <Button
        onClick={onClose}
        className="-m-2.5 rounded-md p-2.5 text-gray-700"
      >
        <XMarkIcon aria-hidden="true" className="h-6 w-6" />
      </Button>
    </div>
  )
}

export default MobileMenuHeader
