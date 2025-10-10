import Image from "next/image"
import logo from '../../icons/ARÁILÉ (1).svg'
import icon from '../../icons/image 1 (6).svg'
// import img from '../../images/Frame 9 (1).svg'
// import img1 from '../../images/Frame 67.svg'
import icon2 from '../../icons/image 1 (7).svg'
// import Logo from "@/NavBar/Logo"


export default function Hero() {
    return(
        <div className="w-full ">
            <div className='hero flex min-h-screen items-end justify-end relative'>
                <Image className=" hidden lg:block "  alt="vector" src={icon} />
                <Image className=" lg:hidden absolute top-80"  alt="vector" src={icon2} />
            </div>
            <div className="bg-[#212638] w-full flex justify-center py-3">
            <Image className="   "  alt="vector" src={logo} />
            </div>
          
            {/* <div>
                   <p className="fontFamily500">ARÁILÉ COLLECTIONS</p>
            </div> */}
        </div>
        
    )
}