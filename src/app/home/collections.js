import Image from "next/image"
import frame1 from '../../../public/images/Frame 24.svg'
import frame2 from '../../../public/images/Frame 23.svg'
import frame3 from '../../../public/images/Frame 23 (1).svg'
// import icon from '../../icons/image 1 (6).svg'
// import icon1 from '../../icons/Frame 27.svg'
// import icon2 from '../../icons/Frame 27 (1).svg'
// import icon3 from '../../icons/Frame 27 (2).svg'
export default function Collection() {
    return(
        <div className="w-full ">
           <div className="w-11/12 container mx-auto pb-10 ">
           <div className="bg-white text-[#212638] lg:w-[35%] mx-auto text-center pt-[67px] pb-[50px] ">
             <p className="fontFamily400 text-[32px]">ARÁILÉ COLLECTIONS</p>
            <p className="lg:text-[18px] text-[16px] font-extralight">I feel that I’ve reached a point in my career where I’m looking for new challenges that can push me to grow further as a product.</p>
            </div>
            <div className=" w-full flex flex-col gap-[27px]  ">
                <div className="grid lg:grid-cols-2 gap-[27px] ">
               <div className="relative group cursor-pointer overflow-hidden rounded-lg">
    <Image className="w-full cursor-pointer transition-transform duration-500 ease-out group-hover:scale-110"  alt="vector" src={frame1} />
            <div className="absolute bottom-8 right-8 text-right">
                            <p className="fontFamily600 text-[32px] font-bold text-white border px-[10px] uppercase">ARÁILÉ tOPS</p>
                            </div>
            </div>
                <div className="relative group cursor-pointer overflow-hidden rounded-lg">
                    <Image className="w-full cursor-pointer transition-transform duration-500 ease-out group-hover:scale-110 "  alt="vector" src={frame2} />
                            <div className="absolute bottom-8 right-8 text-right">
                                            <p className="fontFamily600 text-[32px] font-bold text-white border px-[10px] uppercase">ARÁILÉ DRESS</p>
                                            </div>
                            </div>
                </div>
                <div className="relative group cursor-pointer overflow-hidden rounded-lg">
                <Image className="w-full cursor-pointer transition-transform duration-500 ease-out group-hover:scale-110  "  alt="vector" src={frame3} />
        <div className="absolute bottom-8 right-8 text-right">
                                            <p className="fontFamily600 lg:text-[32px] font-bold text-white border px-[10px] uppercase">ARÁILÉ VEST SET</p>
                                            </div>
                </div>
            </div>
           </div>
        </div>
    )
}