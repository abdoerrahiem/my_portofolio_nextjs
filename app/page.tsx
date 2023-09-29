'use client'

import {
  BsFillMoonStarsFill,
  BsGithub,
  BsLinkedin,
  BsFacebook,
  BsInstagram,
  BsDownload,
} from 'react-icons/bs'
import Image from 'next/image'
import ProfileImage from '@/assets/images/profile.jpeg'
import ButtonIcon from '@/components/ButtonIcon'
import Button from '@/components/Button'
import { useState } from 'react'
import CardPortofolio from '@/components/CardPortofolio'

export default function Home() {
  const [activeTab, setActiveTab] = useState<string>('portofolio')

  return (
    <div className='max-w-[500px] m-auto'>
      <ButtonIcon
        Icon={<BsFillMoonStarsFill />}
        className='bg-white m-auto my-8'
        onPress={() => {}}
      />
      <div className='flex flex-row mb-5 w-fit m-auto'>
        <Image
          src={ProfileImage}
          alt='profile'
          className='w-[100px] h-[100px] rounded-full border-[2px] border-yellow-500'
        />
        <div className='flex-1 ml-5'>
          <p className='text-neutral-700 font-medium text-3xl mb-1'>
            Abdur Rahim
          </p>
          <p className='text-neutral-700 mb-3 text-xs'>Fullstack Developer</p>
          <div className='flex flex-row'>
            <ButtonIcon
              Icon={<BsGithub size={16} />}
              className='p-1 mr-2'
              onPress={() => {}}
            />
            <ButtonIcon
              Icon={<BsLinkedin size={16} />}
              className='p-1 mr-2'
              onPress={() => {}}
            />
            <ButtonIcon
              Icon={<BsFacebook size={16} />}
              className='p-1 mr-2'
              onPress={() => {}}
            />
            <ButtonIcon
              Icon={<BsInstagram size={16} />}
              className='p-1 mr-2'
              onPress={() => {}}
            />
          </div>
        </div>
      </div>

      <div className='flex flex-row mb-8'>
        <div className='flex-1'>
          <p className='text-sm text-neutral-700 text-center'>7</p>
          <p className='text-sm text-neutral-700 text-center'>Years of work</p>
          <p className='text-sm text-neutral-700 text-center'>experience</p>
        </div>
        <div className='flex-1'>
          <p className='text-sm text-neutral-700 text-center'>50+</p>
          <p className='text-sm text-neutral-700 text-center'>Completed</p>
          <p className='text-sm text-neutral-700 text-center'>projects</p>
        </div>
        <div className='flex-1'>
          <p className='text-sm text-neutral-700 text-center'>20+</p>
          <p className='text-sm text-neutral-700 text-center'>Satisfied</p>
          <p className='text-sm text-neutral-700 text-center'>customers</p>
        </div>
      </div>

      <div className='flex flex-row w-[80%] m-auto mb-10'>
        <Button
          title='Download CV'
          RightComponent={<BsDownload size={16} className='ml-2' />}
          className='flex-1 justify-center'
        />
        <div className='mx-2' />
        <Button
          title='Contact me'
          className='!bg-white flex-1 justify-center'
        />
      </div>

      <div className='flex flex-row bg-white rounded-md p-2 mb-10'>
        <Button
          title='Portofolio'
          className={`${
            activeTab === 'portofolio' ? '!bg-neutral-300' : '!bg-white'
          } flex-1 justify-center`}
          onPress={() => setActiveTab('portofolio')}
        />
        <Button
          title='Skills'
          className={`${
            activeTab === 'skills' ? '!bg-neutral-300' : '!bg-white'
          } flex-1 justify-center`}
          onPress={() => setActiveTab('skills')}
        />
      </div>

      {activeTab === 'portofolio' && (
        <div className='columns-2'>
          <CardPortofolio />
          <CardPortofolio />
          <CardPortofolio />
        </div>
      )}
    </div>
  )
}
