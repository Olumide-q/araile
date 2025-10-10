import React from 'react'
import logo from '../icons/ARÁILÉ (1).svg';
import Link from 'next/link'
import Image from 'next/image'



const Logo = () => {
  return (
     <Link href="/" className="  bg-[#212638] w-full flex justify-center items-center h-10 z-999 transform-3d fixed "  aria-label="Go to homepage">
        <Image 
            className="cursor-pointer tracking-wide  " 
            alt="ARÁILÉ logo" 
            src={logo}
            priority
        />
    </Link>
  )
}

export default Logo
