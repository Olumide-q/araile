import Image from 'next/image'
import logo from '/public/icons/araile-2.svg'
import { FaTiktok } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { PiInstagramLogoLight } from "react-icons/pi";
export default function Footer() {
    return(
        <div className="w-full bg-[#212638]">
            <div className=" w-11/12 container mx-auto  flex flex-col lg:flex-row justify-between gap-8 py-8 px-5 lg:py-5 ">
            <div className='flex flex-col lg:flex-row font-light text-[14px] text-white gap-2 '>
                <p>FAQS</p>
                <p>Return & Refund Policy</p>
                <p>Shipping Info</p>
                <p>Collections</p>
            </div>
                 <div className=" lg:-ml-40">
                            <Image className="   "  alt="vector" src={logo} />
                            </div>
                            <div className='flex flex-col lg:flex-row text-white gap-5 lg:justify-end'>
                            <FaTiktok />
                            <RiTwitterXFill />
                            <PiInstagramLogoLight />
                    </div>
            </div>
        </div>
    )
}