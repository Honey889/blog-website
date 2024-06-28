import  Container  from './Container'
import React from 'react'
import Logo from './Logo'
import Link from 'next/link'
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin, BsYoutube } from 'react-icons/bs'

const Footer = () => {
  return (
    <Container className='p-6 bg-black/30 text-gray-200 flex items-center justify-between'>
      <Logo title="Earthly Endeavors" classname='text-black '/>
      <div className='text-black hidden md:inline-flex items-center gap-7 '>
        
        <BsYoutube className='text-2xl hover:text-red-600 duration-200'/>
       <BsFacebook className='text-2xl hover:text-blue-500 duration-200'/>
       <BsGithub className='text-2xl hover:text-white duration-200' />
       <BsLinkedin className='text-2xl hover:text-blue-400 duration-200'/>
      </div>
      <p className='text-sm text-black'> &copy; 2024. All rights reserved.
      

        {/* <Link className='hover:text-white font-semibold duration-200'> @reactjsBD</Link> */}
      </p>
    </Container>
  )
}

export default Footer

