'use client'

import {
  BsFillMoonStarsFill,
  BsGithub,
  BsLinkedin,
  BsFacebook,
  BsInstagram,
  BsDownload,
  BsPinMapFill,
  BsFillSunFill,
} from 'react-icons/bs'
import Image from 'next/image'
import ProfileImage from '@/assets/images/profile.jpeg'
import ButtonIcon from '@/components/ButtonIcon'
import Button from '@/components/Button'
import { useEffect, useState } from 'react'
import CardPortofolio from '@/components/CardPortofolio'
import LogoCapsuleInn from '@/assets/images/capsule_inn.png'
import LogoTutortpb from '@/assets/images/tutortpb.png'
import LogoRabfire from '@/assets/images/rabfire.png'
import LogoJersipedia from '@/assets/images/jersipedia.png'
import LogoBitwyre from '@/assets/images/bitwyre.png'
import CardSkill from '@/components/CardSkill'
import LogoReactNative from '@/assets/images/react_native.png'
import LogoFlutter from '@/assets/images/flutter.png'
import LogoNodejs from '@/assets/images/nodejs.png'
import LogoExpressjs from '@/assets/images/expressjs.png'
import LogoMongodb from '@/assets/images/mongodb.png'

export default function Home() {
  const [activeTab, setActiveTab] = useState<string>('portofolio')
  const [isDarkmode, setIsDarkmode] = useState<boolean>(false)

  useEffect(() => {
    if (localStorage.theme === 'light') {
      document.documentElement.classList.remove('dark')
      setIsDarkmode(false)
    } else if (
      localStorage.theme === 'dark' ||
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      document.documentElement.classList.add('dark')
      setIsDarkmode(true)
    } else {
      document.documentElement.classList.remove('dark')
      setIsDarkmode(false)
    }
  }, [])

  const onMode = () => {
    if (isDarkmode) {
      document.documentElement.classList.remove('dark')
      setIsDarkmode(false)
      localStorage.theme = 'light'
    } else {
      document.documentElement.classList.add('dark')
      setIsDarkmode(true)
      localStorage.theme = 'dark'
    }
  }

  return (
    <div className='max-w-[500px] m-auto'>
      <div className='flex flex-row mb-5 mt-10 w-fit m-auto'>
        <Image
          src={ProfileImage}
          alt='profile'
          className='w-[100px] h-[100px] rounded-full border-[2px] border-yellow-500 dark:border-yellow-300'
        />
        <div className='flex-1 ml-5'>
          <p className='text-neutral-700 dark:text-white font-medium text-3xl mb-1'>
            Abdur Rahim
          </p>
          <p className='text-neutral-700 dark:text-white mb-3 text-xs'>
            Fullstack Mobile Developer
          </p>
          <div className='flex flex-row'>
            <ButtonIcon
              Icon={<BsGithub size={16} />}
              className='p-1 mr-2 text-neutral-700 dark:text-white'
              href='https://github.com/abdoerrahiem'
              target='_blank'
            />
            <ButtonIcon
              Icon={<BsLinkedin size={16} />}
              className='p-1 mr-2 text-neutral-700 dark:text-white'
              href='https://www.linkedin.com/in/abdoerrahiem'
              target='_blank'
            />
            <ButtonIcon
              Icon={<BsFacebook size={16} />}
              className='p-1 mr-2 text-neutral-700 dark:text-white'
              href='https://facebook.com/abdoerrahiem'
              target='_blank'
            />
            <ButtonIcon
              Icon={<BsInstagram size={16} />}
              className='p-1 mr-2 text-neutral-700 dark:text-white'
              href='https://instagram.com/abdoerrahiem'
              target='_blank'
            />
          </div>
        </div>
      </div>

      <div className='flex flex-row mb-8'>
        <div className='flex-1'>
          <p className='text-base text-neutral-700 text-center font-medium dark:text-white'>
            4
          </p>
          <p className='text-sm text-neutral-700 text-center dark:text-white'>
            Years of work
          </p>
          <p className='text-sm text-neutral-700 text-center dark:text-white'>
            experience
          </p>
        </div>
        <div className='flex-1'>
          <p className='text-base text-neutral-700 text-center font-medium dark:text-white'>
            5++
          </p>
          <p className='text-sm text-neutral-700 text-center dark:text-white'>
            Completed
          </p>
          <p className='text-sm text-neutral-700 text-center dark:text-white'>
            projects
          </p>
        </div>
        <div className='flex-1'>
          <p className='text-base text-neutral-700 text-center font-medium dark:text-white'>
            5++
          </p>
          <p className='text-sm text-neutral-700 text-center dark:text-white'>
            Satisfied
          </p>
          <p className='text-sm text-neutral-700 text-center dark:text-white'>
            customers
          </p>
        </div>
      </div>

      <div className='flex flex-row items-center mb-8 max-sm:px-4'>
        <BsPinMapFill size={16} className='text-neutral-700 dark:text-white' />
        <p className='ml-2 text-sm text-neutral-700 font-medium dark:text-white'>
          Mempawah, West Kalimantan 🇮🇩
        </p>
      </div>

      <div className='flex flex-row mb-10 max-sm:px-4'>
        <Button
          title='Download CV'
          RightComponent={<BsDownload size={14} className='ml-2 max-sm:ml-1' />}
          className='flex-1 max-sm:px-3 dark:bg-yellow-300 rounded-full'
          href='/AbdurCV.pdf'
          target='_blank'
          download={true}
          titleClassName='max-sm:text-xs'
        />
        <div className='mx-2 max-sm:mx-1' />
        <Button
          title='Contact me'
          className='!bg-white flex-1 max-sm:px-3 dark:!bg-neutral-800 rounded-full'
          href='https://wa.link/0dn1l1'
          target='_blank'
          titleClassName='max-sm:text-xs dark:text-white'
        />
        <div className='flex-[0.5] max-sm:flex-[0.1]' />
        <ButtonIcon
          Icon={
            isDarkmode ? (
              <BsFillSunFill className='text-neutral-700 dark:text-white' />
            ) : (
              <BsFillMoonStarsFill className='text-neutral-700 dark:text-white' />
            )
          }
          className='bg-white text-neutral-700 dark:bg-neutral-800'
          onPress={onMode}
        />
      </div>

      <div className='flex flex-row bg-white dark:bg-neutral-800 rounded-full p-2 mb-10 max-sm:mx-4'>
        <Button
          title='Portofolio'
          titleClassName='dark:text-white'
          className={`${
            activeTab === 'portofolio'
              ? '!bg-neutral-300 dark:!bg-screen-dark'
              : '!bg-white dark:!bg-neutral-800'
          } flex-1 justify-center rounded-full`}
          onPress={() => setActiveTab('portofolio')}
        />
        <Button
          title='Skills'
          titleClassName='dark:text-white'
          className={`${
            activeTab === 'skills'
              ? '!bg-neutral-300 dark:!bg-screen-dark'
              : '!bg-white dark:!bg-neutral-800'
          } flex-1 justify-center rounded-full`}
          onPress={() => setActiveTab('skills')}
        />
      </div>

      {activeTab === 'portofolio' && (
        <div className='columns-2 max-sm:columns-1 max-sm:px-4'>
          <CardPortofolio
            image={LogoCapsuleInn}
            title='Capsule Inn'
            description='Capsuleinn is the first capsule-based lodging application in Lampung.'
            tech='React Native'
          />
          <CardPortofolio
            image={LogoTutortpb}
            title='TutorTPB'
            description='TutorTPB is a learning platform for TPB Mathematics, Physics,
            Chemistry, and PTI.'
            tech='React Native'
          />
          <CardPortofolio
            image={LogoRabfire}
            title='Rabfire'
            description='Rabfire is a social media app like Facebook.'
            tech='React Native'
          />
          <CardPortofolio
            image={LogoJersipedia}
            title='Jersipedia'
            description='Jersipedia is an e-commerce app that users can search & buy interesting jerseys.'
            tech='Flutter'
          />
          <CardPortofolio
            image={LogoBitwyre}
            title='Bitwyre'
            description='Bitwyre is a Next-Gen Ultra Low-Latency Crypto Derivatives Exchange.'
            tech='React Native'
          />
        </div>
      )}

      {activeTab === 'skills' && (
        <div className='columns-2 max-sm:columns-1 max-sm:px-4'>
          <CardSkill image={LogoReactNative} />
          <CardSkill image={LogoExpressjs} />
          <CardSkill image={LogoNodejs} />
          <CardSkill image={LogoFlutter} />
          <CardSkill image={LogoMongodb} />
        </div>
      )}

      <div className='my-3'>
        <p className='text-center font-medium text-neutral-700 dark:text-white text-xs'>
          Created with ❤️️ using Nextjs
        </p>
      </div>
    </div>
  )
}
