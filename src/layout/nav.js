// "use client"
// import { useState, useEffect, useRef } from "react";
// import { IoIosSearch } from "react-icons/io";
// import { CiShoppingCart } from "react-icons/ci";
// import { IoMdClose } from "react-icons/io";
// import { RxHamburgerMenu } from "react-icons/rx";
// import Link from "next/link";

// export default function Nav() {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);
//     const menuRef = useRef(null);

//     const toggleMenu = () => {
//         setIsMenuOpen(!isMenuOpen);
//     };

//     const closeMenu = () => {
//         setIsMenuOpen(false);
//     };

//     // Handle click outside to close menu
//     useEffect(() => {
//         const handleClickOutside = (event) => {
//             if (menuRef.current && !menuRef.current.contains(event.target)) {
//                 setIsMenuOpen(false);
//             }
//         };

//         if (isMenuOpen) {
//             document.addEventListener('mousedown', handleClickOutside);
//         }

//         return () => {
//             document.removeEventListener('mousedown', handleClickOutside);
//         };
//     }, [isMenuOpen]);

//     return(
//         <div className="w-full py-3 flex lg:justify-center fixed z-50">    
//             <div className="lg:w-11/12 container mx-auto lg:py-6 lg:px-8 relative">
//                 <div className="flex justify-between items-center">
//                     {/* Desktop Navigation - Left Side */}
//                     <div className="hidden lg:flex space-x-2">
//                         <Link href='/shopAll'>
//                             <button className="px-4 py-2 rounded-full bg-[#BCC2CB] backdrop-blur-sm text-stone-800 hover:bg-[#212638] hover:text-white transition duration-300 cursor-pointer">
//                                 Shop All
//                             </button>
//                         </Link>
//                         <Link href='/collection'>
//                             <button className="px-4 py-2 rounded-full bg-[#BCC2CB] backdrop-blur-sm text-stone-800 hover:bg-[#212638] hover:text-white transition duration-300 cursor-pointer">
//                                 Collections
//                             </button>
//                         </Link>
//                         <Link href='/about'>
//                             <button className="px-4 py-2 rounded-full bg-[#BCC2CB] backdrop-blur-sm text-stone-800 hover:bg-[#212638] hover:text-white transition duration-300 cursor-pointer">
//                                 About ARAILE
//                             </button>
//                         </Link>
//                     </div>
                    
//                     {/* Desktop Navigation - Right Side */}
//                     <div className="hidden lg:flex items-center space-x-2">
//                         <button className="px-4 py-2 rounded-full bg-[#BCC2CB] backdrop-blur-sm text-stone-800 hover:bg-[#212638] hover:text-white transition duration-300 flex items-center">
//                             <IoIosSearch className="mr-1" />
//                             Search
//                         </button>
//                         <button className="px-4 py-2 rounded-full bg-[#BCC2CB] backdrop-blur-sm text-stone-800 hover:bg-[#212638] hover:text-white transition duration-300 flex items-center">
//                             <CiShoppingCart className="mr-1" />
//                             0
//                         </button>
//                     </div>

//                     {/* Mobile Hamburger Menu Button */}
//                     <div className="lg:hidden relative flex justify-start pl-6" ref={menuRef}>
//                         <button 
//                             onClick={toggleMenu}
//                             className="p-3 rounded-full bg-slate-500 text-white hover:bg-slate-600 transition-colors"
//                         >
//                             {isMenuOpen ? <IoMdClose /> : <RxHamburgerMenu />}
//                         </button>
                        
//                         {/* Mobile Menu Dropdown */}
//                         {isMenuOpen && (
//                             <div className="absolute top-16 left-0 right-0 bg-[#BCC2CB] backdrop-blur-md shadow-lg rounded-lg pl-6 pr-20 py-4 space-y-6 z-10">
//                                 {/* Navigation Links */}
//                                 <div className="flex flex-col gap-4">
//                                     <Link href='/shopAll' onClick={closeMenu}>
//                                         <p className="px-4 py-2 border-b backdrop-blur-sm text-stone-800 hover:bg-[#212638] hover:text-white transition duration-300 cursor-pointer">
//                                             Shop All
//                                         </p>
//                                     </Link>
//                                     <Link href='/collection' onClick={closeMenu}>
//                                         <p className="px-4 py-2 border-b backdrop-blur-sm text-stone-800 hover:bg-[#212638] hover:text-white transition duration-300 cursor-pointer">
//                                             Collections
//                                         </p>
//                                     </Link>
//                                     <Link href='/about' onClick={closeMenu}>
//                                         <p className="px-4 py-2 border-b backdrop-blur-sm text-stone-800 hover:bg-[#212638] hover:text-white transition duration-300 cursor-pointer">
//                                             About ARAILE
//                                         </p>
//                                     </Link>
//                                 </div>
                                
//                                 {/* Search and Cart for Mobile */}
//                                 <div className="flex flex-col gap-4">
//                                     <button className="px-4 py-2 rounded-full bg-white backdrop-blur-sm text-stone-800 hover:bg-[#212638] hover:text-white transition duration-300 flex items-center justify-center">
//                                         <IoIosSearch className="mr-1" />
//                                         Search
//                                     </button>
//                                     <button className="px-4 py-2 rounded-full bg-white backdrop-blur-sm text-stone-800 hover:bg-[#212638] hover:text-white transition duration-300 flex items-center justify-center">
//                                         <CiShoppingCart className="mr-1" />
//                                         Cart (0)
//                                     </button>
//                                 </div>
//                             </div>
//                         )}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }
"use client"
import { useState, useEffect, useRef } from "react";
import { IoIosSearch } from "react-icons/io";
import { CiShoppingCart } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";

export default function Nav({ cartCount = 0 }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const handleSearchClick = () => {
        setShowSearch(!showSearch);
        // Add your search logic here
        console.log('Search clicked');
    };

    // Handle click outside to close menu
    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            closeMenu();
        }
    };

    useEffect(() => {
        if (isMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
            document.addEventListener('touchstart', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('touchstart', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('touchstart', handleClickOutside);
        };
    }, [isMenuOpen]);

    // Reusable button styles
    const buttonBaseStyles = "px-4 py-2 rounded-full bg-[#BCC2CB] backdrop-blur-sm text-stone-800 hover:bg-[#212638] hover:text-white transition duration-300";
    const navButtonStyles = `${buttonBaseStyles} flex items-center`;
    const mobileButtonStyles = `${buttonBaseStyles} uppercase flex items-center justify-center`;

    return(
        <div className="w-full py-3 mt-10 flex lg:justify-center fixed z-50">    
            <div className="lg:w-11/12 container mx-auto lg:py-6 lg:px-8 relative">
                <div className="flex justify-between items-center">
                    {/* Desktop Navigation - Left Side */}
                    <div className="hidden lg:flex space-x-2">
                        <Link href='/shopAll'>
                            <button className={buttonBaseStyles} aria-label="Shop All Products">
                                Shop All
                            </button>
                        </Link>
                        <Link href='/collection'>
                            <button className={buttonBaseStyles} aria-label="View Collections">
                                Collections
                            </button>
                        </Link>
                        <Link href='/about'>
                            <button className={buttonBaseStyles} aria-label="About ARAILE">
                                About ARAILE
                            </button>
                        </Link>
                    </div>
                    {/* Desktop Navigation - Right Side */}
                    <div className="hidden lg:flex items-center space-x-2">
                        <button 
                            className={navButtonStyles}
                            onClick={handleSearchClick}
                            aria-label="Search products"
                        >
                            <IoIosSearch className="mr-1" />
                            Search
                        </button>
                        <Link href='/cart'>
                            <button 
                                className={navButtonStyles}
                                aria-label={`Shopping cart with ${cartCount} items`}
                            >
                                <CiShoppingCart className="mr-1" />
                                {cartCount}
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Mobile Hamburger Menu Button */}
                <div className="lg:hidden relative pl-80 md:pl-170 md:pr-4 pr-6" ref={menuRef}>
                    <button 
                        onClick={toggleMenu}
                        className="p-3 rounded-full bg-slate-500 text-white hover:bg-slate-600 transition-colors"
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    >
                        {isMenuOpen ? <IoMdClose /> : <RxHamburgerMenu />}
                    </button>
                    
                    {/* Mobile Menu Dropdown */}
                    {isMenuOpen && (
                         <div className="absolute top-full left-10 md:left-54 md:right-8 right-3 bg-white transparent opacity-75 shadow-lg rounded-lg mt-1 md:pl-6 md:pr-10 pl-8 pr-4 py-4 space-y-6">
                                {/* Navigation Links */}
                                <div className="flex flex-col gap-4">
                                    <Link href='/shopAll' onClick={closeMenu}>
                                        <p className="px-4 py-2 border-b backdrop-blur-sm text-stone-800 hover:bg-[#212638] uppercase hover:text-white transition duration-300">
                                            Shop All
                                        </p>
                                    </Link>
                                    <Link href='/collection' onClick={closeMenu}>
                                        <p className="px-4 py-2 border-b backdrop-blur-sm text-stone-800 hover:bg-[#212638] uppercase hover:text-white transition duration-300">
                                            Collections
                                        </p>
                                    </Link>
                                    <Link href='/about' onClick={closeMenu}>
                                        <p className="px-4 py-2 border-b backdrop-blur-sm text-stone-800 hover:bg-[#212638] uppercase hover:text-white transition duration-300">
                                             About ARAILE
                                        </p>
                                    </Link>
                                </div>
                                
                                {/* Search and Cart for Mobile */}
                                <div className="flex flex-col gap-4">
                                    <button 
                                        className={mobileButtonStyles}
                                        onClick={handleSearchClick}
                                        aria-label="Search products"
                                    >
                                        <IoIosSearch className="mr-1" />
                                        Search
                                    </button>
                                    <Link href='/cart'>
                                        <button 
                                            className={mobileButtonStyles}
                                            aria-label={`Shopping cart with ${cartCount} items`}
                                        >
                                            <CiShoppingCart className="mr-1" />
                                            Cart ({cartCount})
                                        </button>
                                    </Link>
                                </div>
                            </div>
                    )}
                </div>
            </div>
        </div>
    )
}