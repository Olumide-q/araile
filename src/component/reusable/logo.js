// "use client"
import Image from "next/image";
import logo from '../../../public/icons/ARÁILÉ (1).svg';
import Link from "next/link";

export default function Logo() {
    return (
                <Link href="/"  className="" aria-label="Go to homepage">
                    <Image 
                        className=" " 
                        alt="ARÁILÉ logo" 
                        src={logo}
                        priority
                    />
                </Link>
        
        // <div className="w-full bg-[#212638] flex justify-center py-3">    

        // </div>
    );
}

// import Image from "next/image"
// import logo from '../../icons/ARÁILÉ (1).svg'
// import Link from "next/link"
// export default function Logo() {
//     return(
//         <div className="w-full">
//               <div className="bg-[#212638] w-full flex justify-center py-3">
//                        <Link href='/'>
//                        <Image className="cursor-pointer  "  alt="vector" src={logo} />
//                        </Link>
//                         </div>
//         </div>
//     )
// }