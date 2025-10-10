// "use client"
// import { useState } from "react";
// import { ShopAllAraile } from "@/db";
// import AraileCard from "../reusable/cards/araileCard";
// import Image from "next/image";
// import shop from '../../icons/Shop all ARÁILÉ.svg';

// export default function Araile() {
//     const [currentPage, setCurrentPage] = useState(1);
//     const itemsPerPage = 4; // Adjust based on how many items you want per page
//     const totalPages = Math.ceil(ShopAllAraile.length / itemsPerPage);
//     const maxPages = 5; // Always show 5 page buttons

//     // Calculate the items to display for the current page
//     const startIndex = (currentPage - 1) * itemsPerPage;
//     const endIndex = startIndex + itemsPerPage;
//     const currentItems = ShopAllAraile.slice(startIndex, endIndex);

//     // Debug: Log current page info
//     console.log(`Current Page: ${currentPage}, Total Items: ${ShopAllAraile.length}, Items on this page: ${currentItems.length}`);

//     const handlePageClick = (page) => {
//         setCurrentPage(page);
//         // Scroll to top of the grid when page changes
//         window.scrollTo({ top: 0, behavior: 'smooth' });
//     };

//     const handleNext = () => {
//         if (currentPage < totalPages) {
//             setCurrentPage(currentPage + 1);
//             window.scrollTo({ top: 0, behavior: 'smooth' });
//         }
//     };

//     const handlePrevious = () => {
//         if (currentPage > 1) {
//             setCurrentPage(currentPage - 1);
//             window.scrollTo({ top: 0, behavior: 'smooth' });
//         }
//     };

//     const handleKeyDown = (e, action, page = null) => {
//         if (e.key === 'Enter' || e.key === ' ') {
//             e.preventDefault();
//             if (action === 'page') {
//                 handlePageClick(page);
//             } else if (action === 'next') {
//                 handleNext();
//             } else if (action === 'previous') {
//                 handlePrevious();
//             }
//         }
//     };

//     return (
//         <div className="w-full">
//             <div className="w-11/12 container mx-auto">
//                 <div className="flex flex-col gap-2 items-center bg-white text-[#212638] lg:w-[30%] mx-auto text-center pb-[72px]">
//                     <Image className="" alt="vector" src={shop} />
//                     <p className="font-light text-[16px]">I feel that I've reached a point in my career where I'm looking for new challenges that can push me to grow further as a product.</p>
//                 </div>
                
//                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-[24px] min-h-[400px]">
//                     {currentItems.length > 0 ? (
//                         currentItems.map((ara) => (
//                             <div key={ara?.id}>
//                                 <AraileCard myAra={ara} />
//                             </div>
//                         ))
//                     ) : (
//                         <div className="col-span-full text-center py-12">
//                             <p className="text-gray-500 text-lg">No items available on this page.</p>
//                         </div>
//                     )}
//                 </div>

//                 {/* Pagination */}
//                 <nav aria-label="Pagination Navigation">
//                     <ul className="flex justify-center gap-[19px] text-[20px] items-center font-medium py-[52px]">
//                         {/* Previous Button */}
//                         <li>
//                             <button
//                                 onClick={handlePrevious}
//                                 onKeyDown={(e) => handleKeyDown(e, 'previous')}
//                                 disabled={currentPage === 1}
//                                 className={`px-[20px] py-[10px] rounded-full transition duration-300 cursor-pointer  ${
//                                     currentPage === 1
//                                         ? 'text-gray-400 cursor-not-allowed'
//                                         : 'hover:bg-[#212638] hover:text-white'
//                                 }`}
//                                 aria-label="Go to previous page"
//                             >
//                                 Previous
//                             </button>
//                         </li>

//                         {/* Page Numbers - Always show 1, 2, 3, 4, 5 */}
//                         {[1, 2, 3, 4, 5].map((page) => (
//                             <li key={page}>
//                                 <button
//                                     onClick={() => handlePageClick(page)}
//                                     onKeyDown={(e) => handleKeyDown(e, 'page', page)}
//                                     disabled={page > totalPages}
//                                     className={`px-[20px] py-[10px] rounded-full transition duration-300 cursor-pointer ${
//                                         page > totalPages
//                                             ? 'text-gray-400 cursor-not-allowed'
//                                             : currentPage === page
//                                             ? 'bg-[#212638] text-white'
//                                             : 'hover:bg-[#212638] hover:text-white'
//                                     }`}
//                                     aria-label={`Go to page ${page}`}
//                                     aria-current={currentPage === page ? 'page' : undefined}
//                                 >
//                                     {page}
//                                 </button>
//                             </li>
//                         ))}

//                         {/* Next Button */}
//                         <li>
//                             <button
//                                 onClick={handleNext}
//                                 onKeyDown={(e) => handleKeyDown(e, 'next')}
//                                 disabled={currentPage >= totalPages}
//                                 className={`px-[20px] py-[10px] rounded-full transition duration-300 cursor-pointer  ${
//                                     currentPage >= totalPages
//                                         ? 'text-gray-400 cursor-not-allowed'
//                                         : 'hover:bg-[#212638] hover:text-white'
//                                 }`}
//                                 aria-label="Go to next page"
//                             >
//                                 Next
//                             </button>
//                         </li>
//                     </ul>
//                 </nav>
//             </div>
//         </div>
//     );
// }

// 'use client'
// import Link from "next/link";
// import Image from "next/image";
// import shop from '../../icons/Shop all ARÁILÉ.svg';

// export default async function Products() {
//     const res = await fetch('https://araile.onrender.com/api/product/products', {
//         // Add cache control for better performance
//         next: { revalidate: 3600 }, // Revalidate every hour
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json',
//         }
//     });
    
//     const products = await res.json();
        
//         return(
//             <div className="w-full">
//                <div className="w-11/12 container mx-auto">
//                  <div className="flex flex-col gap-2 items-center bg-white text-[#212638] lg:w-[30%] mx-auto text-center pb-[72px]">
//                         <Image className="" alt="vector" src={shop} />
//                         <p className="font-light text-[16px]">I feel that I've reached a point in my career where I'm looking for new challenges that can push me to grow further as a product.</p>
//                     </div>
//                 <div className="grid grid-cols-1 lg:grid-cols-3 gap-[24px] min-h-[400px]">
//                 {products.map((product) => (
//                     <Link 
//                         href={`/product/${product.id}`} 
//                         className="p-12 shadow-md rounded-md text-left text-xl flex flex-col gap-4 cursor-pointer hover:shadow-lg transition-shadow" 
//                         key={product.id}
//                     >
//                         <h2 className="font-semibold">{product.name}</h2>
//                         <div className="flex items-center gap-4">
//                            {product.product_images?.length > 0 && (
//             <Image
//               src={product.product_images[0].image}
//               alt={product.name}
//               width="150"
//               height="150"
//             />
//           )}
//                             <div className="flex flex-col">
//                                 <p className="text-sm text-gray-600">{product.description}</p>
//                                 <p className="text-lg font-bold text-green-600">{product.price}</p>
//                                 <p className="text-sm text-gray-500">Color: {product.color}</p>
//                                 <p className="text-sm text-gray-500">Category: {product.category.category}</p>
//                             </div>
//                         </div>
//                     </Link> 
//                 ))}
//                 </div>
//                </div>
//             </div>
//         );
// }

"use client";

import { useEffect, useState } from "react";
// import Link from "next/link";
import Image from "next/image";
// import shop from "../../icons/Shop all ARÁILÉ.svg";
import { baseUrl } from "@/constant/const";
import img from '../../../public/images/Frame 23 (2).svg'


export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
    console.log("12334", products)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(`${baseUrl}api/product/products`, {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        });
                    console.log(res)
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
        console.log(error)
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const ensureHttps = (url) => {
    if(!url) return img

    // url trim whitespace
    url = url.trim()

    if(url.startsWith('//')){
        return `https:${url}`
    }

    // Add Baseurl if no protocol
    if(!url.startsWith('http://') && !url.startsWith('https://') ){
        return `https://araile.pythonanywhere.com${url}`
    }
    
    return url
  }

  return (
    <div className="w-full">
      <div className="w-11/12 container mx-auto">
        <div className="flex flex-col gap-2 items-center bg-white text-[#212638] lg:w-[30%] mx-auto text-center pb-[72px]">
           <p className="fontFamily400 text-[32px] font-light  px-[10px] uppercase">Shop all ARÁILÉ </p>
          <p className="font-light text-[16px]">
            I feel that I've reached a point in my career where I'm looking for new challenges that can push me to grow further as a product.
          </p>
        </div>

        {loading ? (
          <p className="text-center text-gray-500">Loading products...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px] min-h-[400px] pb-8  lg:px-[5rem]">
            {products.map((product) => (
              <div
                href={`/product/${product.id}`}
                className="shadow-md rounded-md text-left text-xl  hover:shadow-lg transition-shadow overflow-hidden"
                key={product.id}
              >
                <div className="relative w-full h-150 xl:h-200">
                    {
                        product.product_images.slice(0,1).map((img) => (
                     <Image 
                        className="object-cover"
                        key={img.id}
                        src={ensureHttps(img?.image)}
                        alt={product.name}
                        fill
                    />
                        ))
                    }
                 <div className="flex flex-col lg:flex-row justify-between items-center  absolute bottom-0 left-0 right-0 bg-opacity-50 p-4 text-white ">
                     <div className="fontFamily400  flex flex-col border p-2  ">
                    <h2 className="font-semibold text-lg mb-1 ">{product.name}</h2>
                    {/* <p className="text-sm mb-1">{product.description}</p> */}
                    <p className="text-sm mb-1">Color: {product.color}</p>
                    <p className="text-sm">Category: {product.category.category}</p>
                  </div>
                  <div>
                    <p className="fontFamily400 text-lg font-bold px-2  bg-[#212638]">#{product.price}</p>
                  </div>
                 </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// import { useState } from "react";
// import { ShopAllAraile } from "@/db";
// import AraileCard from "../reusable/cards/araileCard";
// import Image from "next/image";
// import shop from '../../icons/Shop all ARÁILÉ.svg';

// export default function Araile() {
//     const [currentPage, setCurrentPage] = useState(1);
//     const itemsPerPage = 6; // Adjust based on how many items you want per page
//     const totalPages = Math.ceil(ShopAllAraile.length / itemsPerPage);

//     // Calculate the items to display for the current page
//     const startIndex = (currentPage - 1) * itemsPerPage;
//     const endIndex = startIndex + itemsPerPage;
//     const currentItems = ShopAllAraile.slice(startIndex, endIndex);

//     const handlePageClick = (page) => {
//         setCurrentPage(page);
//         // Scroll to top of the grid when page changes
//         window.scrollTo({ top: 0, behavior: 'smooth' });
//     };

//     const handleNext = () => {
//         if (currentPage < totalPages) {
//             setCurrentPage(currentPage + 1);
//             window.scrollTo({ top: 0, behavior: 'smooth' });
//         }
//     };

//     const handlePrevious = () => {
//         if (currentPage > 1) {
//             setCurrentPage(currentPage - 1);
//             window.scrollTo({ top: 0, behavior: 'smooth' });
//         }
//     };

//     const handleKeyDown = (e, action, page = null) => {
//         if (e.key === 'Enter' || e.key === ' ') {
//             e.preventDefault();
//             if (action === 'page') {
//                 handlePageClick(page);
//             } else if (action === 'next') {
//                 handleNext();
//             } else if (action === 'previous') {
//                 handlePrevious();
//             }
//         }
//     };

//     return (
//         <div className="w-full">
//             <div className="w-11/12 container mx-auto">
//                 <div className="flex flex-col gap-2 items-center bg-white text-[#212638] lg:w-[32%] mx-auto text-center pb-[72px]">
//                     <Image className="" alt="vector" src={shop} />
//                     <p>I feel that I've reached a point in my career where I'm looking for new challenges that can push me to grow further as a product.</p>
//                 </div>
                
//                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-[24px]">
//                     {currentItems.map((ara) => (
//                         <div key={ara?.id}>
//                             <AraileCard myAra={ara} />
//                         </div>
//                     ))}
//                 </div>

//                 {/* Pagination */}
//                 <nav aria-label="Pagination Navigation">
//                     <ul className="flex justify-center gap-[19px] text-[20px] items-center font-medium py-[52px]">
//                         {/* Previous Button */}
//                         <li>
//                             <button
//                                 onClick={handlePrevious}
//                                 onKeyDown={(e) => handleKeyDown(e, 'previous')}
//                                 disabled={currentPage === 1}
//                                 className={`px-[20px] py-[10px] rounded-full transition duration-100 cursor-pointer focus:outline-none focus:ring-offset-2 ${
//                                     currentPage === 1
//                                         ? 'text-gray-400 cursor-not-allowed'
//                                         : 'hover:bg-[#212638] hover:text-white'
//                                 }`}
//                                 aria-label="Go to previous page"
//                             >
//                                 Previous
//                             </button>
//                         </li>

//                         {/* Page Numbers - Always show 1, 2, 3, 4, 5 */}
//                         {[1, 2, 3, 4, 5].map((page) => (
//                             <li key={page}>
//                                 <button
//                                     onClick={() => handlePageClick(page)}
//                                     onKeyDown={(e) => handleKeyDown(e, 'page', page)}
//                                     className={`px-[20px] py-[10px] rounded-full transition duration-300 cursor-pointer focus:outline-none  focus:ring-offset-2 ${
//                                         currentPage === page
//                                             ? 'hover:bg-[#212638] hover:text-white'
//                                             : 'hover:bg-[#212638] hover:text-white'
//                                     }`}
//                                     aria-label={`Go to page ${page}`}
//                                     aria-current={currentPage === page ? 'page' : undefined}
//                                 >
//                                     {page}
//                                 </button>
//                             </li>
//                         ))}

//                         {/* Next Button */}
//                         <li>
//                             <button
//                                 onClick={handleNext}
//                                 onKeyDown={(e) => handleKeyDown(e, 'next')}
//                                 disabled={currentPage === totalPages}
//                                 className={`px-[20px] py-[10px] rounded-full transition duration-100 cursor-pointer focus:outline-none  focus:ring-offset-2 ${
//                                     currentPage === totalPages
//                                         ? 'text-gray-400 cursor-not-allowed'
//                                         : 'hover:bg-[#212638] hover:text-white'
//                                 }`}
//                                 aria-label="Go to next page"
//                             >
//                                 Next
//                             </button>
//                         </li>
//                     </ul>
//                 </nav>
//             </div>
//         </div>
//     );
// }

// import Link from "next/link";
// import Image from "next/image";
// import shop from '../../icons/Shop all ARÁILÉ.svg';

// export default async function Products() {
//     const res = await fetch('https://araile.onrender.com/api/product/products');
//     const products = await res.json();
    
//     return(
//         <div className="w-full">
//            <div className="w-11/12 container mx-auto">
//              <div className="flex flex-col gap-2 items-center bg-white text-[#212638] lg:w-[30%] mx-auto text-center pb-[72px]">
//                     <Image className="" alt="vector" src={shop} />
//                     <p className="font-light text-[16px]">I feel that I've reached a point in my career where I'm looking for new challenges that can push me to grow further as a product.</p>
//                 </div>
//             <div className="grid grid-cols-1 lg:grid-cols-3 gap-[24px] min-h-[400px]">
//             {products.map((product) => (
//                 <Link href={`/product/${product.id}`} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer" key={product.id}>
//                     <div className="relative w-full h-64">
//                         <Image 
//                             src={product.product_images} 
//                             alt={product.name}
//                             fill
//                             className="object-cover"
//                         />
//                     </div>
//                     <div className="p-6">
//                         <div className="flex justify-between items-start mb-2">
//                             <h2 className="font-semibold text-lg text-gray-900 line-clamp-2">{product.name}</h2>
//                             <span className="text-xl font-bold text-gray-900">${product.price}</span>
//                         </div>
                        
//                         <p className="text-gray-600 text-sm mb-3 line-clamp-3">{product.description}</p>
                        
//                         <div className="flex flex-wrap gap-2 mb-3">
//                             <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
//                                 {product.brand}
//                             </span>
//                             <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
//                                 {product.color}
//                             </span>
//                         </div>
                        
//                         <div className="flex justify-between items-center text-sm text-gray-500">
//                             <span>SKU: {product.sku}</span>
//                             <span className={`px-2 py-1 rounded-full text-xs ${
//                                 product.visibility ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
//                             }`}>
//                                 {product.visibility ? 'Available' : 'Unavailable'}
//                             </span>
//                         </div>
                        
//                         {product.category && (
//                             <div className="mt-3 pt-3 border-t border-gray-100">
//                                 <p className="text-xs text-gray-500">
//                                     Category: {product.category.category}
//                                 </p>
//                                 {product.subcategory && (
//                                     <p className="text-xs text-gray-500">
//                                         Subcategory: {product.subcategory.subcategory}
//                                     </p>
//                                 )}
//                             </div>
//                         )}
                        
//                         {product.stock && (
//                             <div className="mt-2">
//                                 <div className="flex justify-between text-xs text-gray-500">
//                                     <span>Stock: {product.stock}</span>
//                                     <span>Size: {product.size}</span>
//                                 </div>
//                             </div>
//                         )}
                        
//                         {product.warranty && (
//                             <p className="text-xs text-gray-400 mt-1">
//                                 Warranty: {product.warranty}
//                             </p>
//                         )}
//                     </div>
//                 </Link>
//             ))}
//             </div>
//            </div>
//         </div>
//     );
// }

// 

// import { ShopAllAraile } from "@/db"
// import AraileCard from "../reusable/cards/araileCard"
// import Image from "next/image"

// import shop from '../../icons/Shop all ARÁILÉ.svg'
// export default function Araile() {
//     return(
//         <div className="w-full ">
//           <div className="w-11/12 container mx-auto  ">
//           <div className=" flex flex-col gap-2 items-center bg-white text-[#212638] lg:w-[32%] mx-auto text-center pb-[72px] ">
//                 <Image className="  "  alt="vector" src={shop} />
//                 <p>I feel that I’ve reached a point in my career where I’m looking for new challenges that can push me to grow further as a product.</p>
//             </div>
//             <div className=" grid grid-cols-1  lg:grid-cols-2 gap-[24px]  ">
//         {ShopAllAraile.map((ara) => (
//           <div key={ara?.id}>
//            <AraileCard myAra={ara} />
//           </div>
//         ))}
//       </div>
//       <div>
//         <ul className="flex justify-center gap-[19px] text-[20px] items-center font-medium py-[52px]">
//           <li className="hover:bg-[#212638] hover:text-white hover:rounded-full hover:py-[10px] hover:px-[20px] hover:transition duration-100 cursor-pointer">1</li>
//           <li className="hover:bg-[#212638] hover:text-white hover:rounded-full hover:py-[10px] hover:px-[20px] hover:transition duration-100 cursor-pointer">2</li>
//           <li className="hover:bg-[#212638] hover:text-white hover:rounded-full hover:py-[10px] hover:px-[20px] hover:transition duration-100 cursor-pointer">3</li>
//           <li className="hover:bg-[#212638] hover:text-white hover:rounded-full hover:py-[10px] hover:px-[20px] hover:transition duration-100 cursor-pointer">4</li>
//           <li className="hover:bg-[#212638] hover:text-white hover:rounded-full hover:py-[10px] hover:px-[20px] hover:transition duration-100 cursor-pointer">5</li>
//           <p className="hover:bg-[#212638] hover:text-white hover:rounded-full hover:py-[10px] hover:px-[20px] hover:transition duration-100 cursor-pointer">Next</p>
//         </ul>
//       </div>
//           </div>
//         </div>
//     )
// } 