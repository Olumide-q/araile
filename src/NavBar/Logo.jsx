import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '/public/icons/araile-1.svg' // Fixed path

const Logo = () => {
  return (
     <Link href="/" className="bg-[#212638] w-full flex justify-center items-center h-10 z-999 transform-3d fixed" aria-label="Go to homepage">
        <Image 
            className="cursor-pointer tracking-wide" 
            alt="ARÁILÉ logo" 
            src={logo}
            priority
        />
    </Link>
  )
}

export default Logo
