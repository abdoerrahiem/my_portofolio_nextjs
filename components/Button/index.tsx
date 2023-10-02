import Link, { LinkProps } from 'next/link'
import { ReactNode } from 'react'

interface Button {
  title: string
  onPress?: () => void
  className?: string
  RightComponent?: ReactNode
  href?: string
  target?: '_blank' | '_parent' | '_self' | '_top'
  download?: boolean
  titleClassName?: string
}

export default function Button({
  title,
  onPress,
  className,
  RightComponent,
  href,
  target = '_self',
  download,
  titleClassName,
}: Button) {
  return (
    <Link
      href={href ?? '/'}
      target={target}
      onClick={onPress}
      className={`bg-yellow-500 w-fit px-5 py-2 rounded-[5px] flex flex-row justify-center items-center ${className}`}
      download={download}
    >
      <p className={`text-sm text-neutral-700 font-medium ${titleClassName}`}>
        {title}
      </p>
      {RightComponent}
    </Link>
  )
}
