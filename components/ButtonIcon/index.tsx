import Link from 'next/link'
import { ReactNode } from 'react'

interface ButtonIcon {
  Icon: ReactNode
  className?: string
  onPress?: () => void
}

export default function ButtonIcon({ Icon, className, onPress }: ButtonIcon) {
  return (
    <div className={`p-3 rounded-full w-fit ${className}`}>
      <Link href='/' onClick={onPress}>
        {Icon}
      </Link>
    </div>
  )
}
