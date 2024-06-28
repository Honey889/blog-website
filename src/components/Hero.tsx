import Image from 'next/image'
import React from 'react'
import nature from '@/images/nature2.jpg'
const Hero = () => {
  return (
    <div className='w-full max-h-screen relative'>
      <Image src={nature} alt='banner image' className='w-full max-h-screen object-contain ' />
      <div className='absolute top-0 w-full h-full bg-black/30 text-gray-100 flex flex-col items-center justify-center '><h2 className='text-5xl lg:text-[110px] font-bold'>Nature&apos;s Narrartive</h2>
      <p className='text-xl md:text-2xl lg:text-5xl font-semibold'></p>

      

      </div>
    </div>
  )
}

export default Hero
