// 'use client'
// import { useState, useEffect } from 'react';
// import Image from "next/image"
// import img from '../../../public/images/Frame 23.svg'
// import img1 from '../../../public/images/Frame 24 (2).svg'
// import img2 from '../../../public/images/Frame 23 (2).svg'
// import img3 from '../../../public/images/Frame 24 (1).svg'
// import { RiSubtractFill } from "react-icons/ri";
// import { IoMdAdd } from "react-icons/io";

// export default function Carts() {
//      const [currentImageIndex, setCurrentImageIndex] = useState(0);
//      const [quantity, setQuantity] = useState(1);

//       const images = [img, img1, img2, img3];

//         useEffect(() => {
//         const autoSwipe = setInterval(() => {
//             setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
//         }, 4000);

//         // Cleanup function to clear interval when component unmounts or dependencies change
//         return () => clearInterval(autoSwipe);
//     }, [images.length]);

//      const handleQuantityIncrease = () => {
//         setQuantity(quantity + 1);
//     };

//     const handleQuantityDecrease = () => {
//         if (quantity > 1) {
//             setQuantity(quantity - 1);
//         }
//     };
//      const handleImageChange = (newIndex) => {
//         setCurrentImageIndex(newIndex);
//     };
//     return(
//         <div className='flex flex-col items-center bg-[#212638]'>
//              <div className="relative mb-4 lg:mb-6">
//                                             <div className="w-80 h-96 md:w-96 md:h-120 lg:w-120 lg:h-150 bg-gray-50 rounded-lg overflow-hidden shadow-md">
//                                                 <Image 
//                                                     className="w-full h-full object-cover cursor-pointer animate__animated animate__zoomIn " 
//                                                     alt="Plisse Maxi Dress" 
//                                                     src={images[currentImageIndex]}
//                                                     onClick={() => handleImageChange((currentImageIndex + 1) % images.length)}
//                                                 />
//                                             </div>
//                                         </div>
//                                         <div className='flex flex-col lg:flex-row'>
//                                             <div>
//                                                 <h1 className=" fontFamily400 text-2xl font-bold mb-6 tracking-wider text-gray-900">
//                             PLISSE MAXI DRESS
//                         </h1>
//                                             </div>
//                                             <div>
//                                                 <div className="flex items-center justify-center lg:justify-start">
//                                     <div className="flex items-center">
//                                         <button 
//                                             onClick={handleQuantityDecrease}
//                                             className="p-2 cursor-pointer"
//                                             disabled={quantity <= 1}
//                                         >
//                                             <RiSubtractFill className={`text-sm ${quantity <= 1 ? 'text-gray-400' : ''}`} />
//                                         </button>
//                                         <span className="px-4 py-2 min-w-[2rem] text-center font-medium text-sm">
//                                             {quantity}
//                                         </span>
//                                         <button 
//                                             onClick={handleQuantityIncrease}
//                                             className="p-2 cursor-pointer"
//                                         >
//                                             <IoMdAdd className="" />
//                                         </button>
//                                     </div>
//                                 </div>
//                                             </div>
//                                         </div>
                                        
//                                         {/* Dots indicator */}
//                                         <div className="flex justify-center gap-3 mb-4">
//                                             {images.map((_, index) => (
//                                                 <button
//                                                     key={index}
//                                                     onClick={() => handleImageChange(index)}
//                                                     className={`w-3 h-3 rounded-full transition-colors ${
//                                                         currentImageIndex === index ? 'bg-gray-800' : 'bg-gray-300'
//                                                     }`}
//                                                 />
//                                             ))}
//                                         </div>
//         </div>
//     )
// }

'use client'
import { useState, useEffect } from 'react';
import Image from "next/image"
import img from '/public/images/frame-23.svg'
import img1 from '/public/images/frame-24-2.svg'
import img2 from '/public/images/frame-23-2.svg'
import img3 from '/public/images/frame-24-1.svg'
import { RiSubtractFill } from "react-icons/ri";
import { IoMdAdd } from "react-icons/io";

export default function Carts() {
     const [currentImageIndex, setCurrentImageIndex] = useState(0);
     const [quantity, setQuantity] = useState(1);

      const images = [img, img1, img2, img3];

        useEffect(() => {
        const autoSwipe = setInterval(() => {
            setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
        }, 4000);

        // Cleanup function to clear interval when component unmounts or dependencies change
        return () => clearInterval(autoSwipe);
    }, [images.length]);

     const handleQuantityIncrease = () => {
        setQuantity(quantity + 1);
    };

    const handleQuantityDecrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };
     const handleImageChange = (newIndex) => {
        setCurrentImageIndex(newIndex);
    };
    return(
        <div className='flex flex-col items-center bg-[#212638]'>
             <div className="relative mb-4 lg:mb-6">
                <div className="w-80 h-96 md:w-96 md:h-120 lg:w-120 lg:h-150 bg-gray-50 rounded-lg overflow-hidden shadow-md">
                    <Image 
                        className="w-full h-full object-cover cursor-pointer animate__animated animate__zoomIn " 
                        alt="Plisse Maxi Dress" 
                        src={images[currentImageIndex]}
                        width={480}
                        height={600}
                        onClick={() => handleImageChange((currentImageIndex + 1) % images.length)}
                    />
                </div>
            </div>
            <div className='flex flex-col lg:flex-row'>
                <div>
                    <h1 className=" fontFamily400 text-2xl font-bold mb-6 tracking-wider text-gray-900">
                        PLISSE MAXI DRESS
                    </h1>
                </div>
                <div>
                    <div className="flex items-center justify-center lg:justify-start">
                        <div className="flex items-center">
                            <button 
                                onClick={handleQuantityDecrease}
                                className="p-2 cursor-pointer"
                                disabled={quantity <= 1}
                            >
                                <RiSubtractFill className={`text-sm ${quantity <= 1 ? 'text-gray-400' : ''}`} />
                            </button>
                            <span className="px-4 py-2 min-w-[2rem] text-center font-medium text-sm">
                                {quantity}
                            </span>
                            <button 
                                onClick={handleQuantityIncrease}
                                className="p-2 cursor-pointer"
                            >
                                <IoMdAdd className="" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Dots indicator */}
            <div className="flex justify-center gap-3 mb-4">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => handleImageChange(index)}
                        className={`w-3 h-3 rounded-full transition-colors ${
                            currentImageIndex === index ? 'bg-gray-800' : 'bg-gray-300'
                        }`}
                    />
                ))}
            </div>
        </div>
    )
}