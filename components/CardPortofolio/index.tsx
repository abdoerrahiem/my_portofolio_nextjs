import Image from 'next/image'
import React from 'react'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'

interface CardPortofolio {
  image: string | StaticImport
  title: string
  description: string
  tech: string
}

export default function CardPortofolio({
  image,
  title,
  description,
  tech,
}: CardPortofolio) {
  return (
    <div className='bg-white rounded-lg p-4 inline-block w-full mb-4 h-[250px]'>
      <Image
        src={image}
        alt='logo'
        className='w-[100px] h-[100px] mb-2 m-auto'
      />
      <p className='text-sm font-medium text-neutral-700 mb-2'>{title}</p>
      <p className='text-xs text-neutral-700 mb-2'>{description}</p>
      <div className='flex flex-row'>
        <p className='text-xs text-neutral-700 mr-1'>Tech:</p>
        <p className='text-xs text-yellow-500 font-medium'>{tech}</p>
      </div>
    </div>
  )
}
