import Link from 'next/link'
import { ReactNode } from 'react'

interface ButtonIcon {
  Icon: ReactNode
  className?: string
  onPress?: () => void
  href?: string
  target?: '_blank' | '_parent' | '_self' | '_top'
}

export default function ButtonIcon({
  Icon,
  className,
  onPress,
  href,
  target = '_self',
}: ButtonIcon) {
  return (
    <div className={`p-3 rounded-full w-fit ${className}`}>
      <Link href={href ?? '/'} target={target} onClick={onPress}>
        {Icon}
      </Link>
    </div>
  )
}
