import Image from "next/image"
export default function AraileCard({ myAra }) {
    return(
        <div>
            <div className="relative ">
                <Image className="w-full"
                src={myAra.image}
                alt='Araile image'
                />
             <div className="absolute bottom-5 left-5 flex gap-65">
             <Image src={myAra.icon}
                alt="Araile icon"
                />
                   <Image className="" src={myAra.figures}
                alt="Araile icon"
                />
             </div>
            </div>
        </div>
    )
}