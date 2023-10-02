import Image from 'next/image'
import React from 'react'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'

interface CardSkill {
  image: string | StaticImport
}

export default function CardSkill({ image }: CardSkill) {
  return (
    <div className='bg-white dark:bg-neutral-800 rounded-lg mb-4 h-[150px] p-5 flex flex-row justify-center items-center'>
      <Image
        src={image}
        alt='logo'
        className='w-[90%] max-sm:w-[50%] h-auto mb-2'
      />
    </div>
  )
}
