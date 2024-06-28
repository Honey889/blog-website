import {FiMenu} from 'react-icons/fi'
import React from 'react'
import Logo from './Logo';
import Link from 'next/link';

const Navbar = () => {
    const navigation = [
        { title: "Home", href: "/" },
        { title: "Features", href: "/features"},
        { title: "About Me", href: "/about"},
        { title: "Studio", href: "/studio"},
    ];
  return (
    <div className='w-full bg-black/20 h-20 shadow-md sticky top-0 backdrop-blur-2xl transition-colors z-50'>
      <div className='max-w-screen-xl mx-auto flex items-center justify-between px-4 lg:px-0 h-full'>
        <Logo title="Earthly Endeavors" classname="text-black hover:text-white/80 " />
        <div className='hidden md:inline-flex items-center gap-7 text-white hover:text-white/90'>
            {navigation.map((item)=>(
                <Link key={item?.title} href={item?.href} className='text-sm uppercase font-semibold relative group overflow-hidden'>
                {item?.title}
                <span className='w-full h-[2px] bg-white absolute inline-block left-0 bottom-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-200' />
                </Link>
            ))}
           
        </div>
        <div className='md:hidden'>
            <FiMenu className='text-2xl text-white'/>
        </div>
      </div>
    </div>
  )
}

export default Navbar
