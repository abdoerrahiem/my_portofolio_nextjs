import Link from 'next/link'
import { ReactNode } from 'react'

interface Button {
  title: string
  onPress?: () => void
  className?: string
  RightComponent?: ReactNode
}

export default function Button({
  title,
  onPress,
  className,
  RightComponent,
}: Button) {
  return (
    <Link
      href='/'
      onClick={onPress}
      className={`bg-yellow-500 w-fit px-5 py-2 rounded-[5px] flex flex-row ${className}`}
    >
      <p className='text-sm'>{title}</p>
      {RightComponent}
    </Link>
  )
}
