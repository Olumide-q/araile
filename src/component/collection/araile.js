'use client'
import { useState, useEffect } from 'react';
import Image from "next/image"
import img from '../../images/Frame 23.svg'
import img1 from '../../images/Frame 24 (2).svg'
import img2 from '../../images/Frame 23 (2).svg'
import img3 from '../../images/Frame 24 (1).svg'
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiSubtractFill } from "react-icons/ri";
import { IoMdAdd } from "react-icons/io";
import { baseUrl } from "@/constant/const";
import Link from "next/link";
import 'animate.css';

export default function Araile() {
    const [selectedSize, setSelectedSize] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const images = [img, img1, img2, img3];
    const sizes = ['XS', 'S', 'M', 'L', 'XL'];
    const price = 149500;

    // Define colors that match each dress image
    const dressColors = [
        '#E8B4B8', // Pink for first image
        '#8B4513', // Brown for second image
        '#F8F8FF', // White/Cream for third image
        '#2D2D2D'  // Peach/Beige for fourth image
    ];

    // Get current dress color based on selected image
    const currentDressColor = dressColors[currentImageIndex];

    // Auto-swipe effect with 4-second timer
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

    const handleSizeSelect = (size) => {
        setSelectedSize(size);
        setIsDropdownOpen(false);
    };

    const handleAddToCart = () => {
        if (!selectedSize) {
            alert('Please select a size');
            return;
        }
        const totalPrice = price * quantity;
        alert(`Added to cart: ${quantity} x Plisse Maxi Dress (Size: ${selectedSize}) - Total: ₦${totalPrice.toLocaleString()}`);
    };

    const handleImageChange = (newIndex) => {
        setCurrentImageIndex(newIndex);
    };

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

    return(
        <div className='w-full bg-gray-100 lg:pt-0 pt-16 '>
            <div className="min-h-screen flex items-center justify-center p-4 md:p-8">
                <div className="container mx-auto">
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center justify-center">
                        
                        {/* Left Column - Product Info (Desktop Only) */}
                      <div className="flex-1 max-w-xs hidden lg:block">
                        <div className='flex-1 max-w-xs flex flex-col justify-center'>
                            <h1 className=" fontFamily400 text-2xl font-bold mb-6 tracking-wider text-gray-900">
                            PLISSE MAXI DRESS
                        </h1>
                        <p className=" text-[#000000] mb-8 leading-relaxed text-[16px] font-light">
                            I feel that I've reached a point in my career where I'm looking for new challenges that can push me to grow further as a product.
                        </p>
                        </div>
                        <div className="bg-black text-white px-4 py-2 rounded inline-block">
                            <span className="fontFamily400 font-bold text-lg">₦149,500</span>
                        </div>
                    </div>

                        {/* Center Column - Main Image */}
                        <div className="flex-1 flex flex-col items-center order-first lg:order-none ">
                            {/* Product Title and Price Section - Above Image */}
                            <div className="mb-4 lg:mb-6 text-center lg:hidden">
                                <h1 className="fontFamily400 text-xl md:text-2xl font-bold tracking-wider text-gray-900 mb-4">
                                    PLISSE MAXI DRESS
                                </h1>
                                <p className="text-[#000000] mb-6 leading-relaxed text-sm md:text-[16px] font-light max-w-md mx-auto">
                                    I feel that I've reached a point in my career where I'm looking for new challenges that can push me to grow further as a product.
                                </p>
                                {/* Price - Centered on mobile/tablet, hidden on large screens */}
                                <div className="bg-black text-white px-4 py-2 rounded inline-block ">
                                    <span className="fontFamily400 font-bold text-lg">₦149,500</span>
                                </div>
                            </div>
                            
                            <div className="relative mb-4 lg:mb-6">
                                <div className="w-80 h-96 md:w-96 md:h-120 lg:w-120 lg:h-150 bg-gray-50 rounded-lg overflow-hidden shadow-md">
                                    <Image 
                                        className="w-full h-full object-cover cursor-pointer animate__animated animate__zoomIn " 
                                        alt="Plisse Maxi Dress" 
                                        src={images[currentImageIndex]}
                                        onClick={() => handleImageChange((currentImageIndex + 1) % images.length)}
                                    />
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

                        {/* Right Column - Controls */}
                        <div className="flex-1 lg:max-w-xs lg:w-full space-y-6 lg:space-y-8 flex flex-col justify-left lg:justify-center">
                            
                            {/* Color Section - Dynamic color matching */}
                            <div className="text-center lg:text-left">
                                <h3 className="fontFamily400 text-lg md:text-[20px] font-bold text-[#212638] mb-4 uppercase tracking-widest">
                                    color
                                </h3>
                                <div className="flex justify-center lg:justify-start">
                                    <div 
                                        className="w-20 h-6 rounded-full border border-gray-300"
                                        style={{ backgroundColor: currentDressColor }}
                                    ></div>
                                </div>
                            </div>

                            {/* Size Section */}
                            <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4'>
                                <h3 className="fontFamily400 text-lg md:text-[20px] font-bold text-[#212638] uppercase tracking-widest text-center lg:text-left">
                                    size
                                </h3>
                                <div className="relative">
                                    <button 
                                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                        className="w-full lg:w-48 bg-[#BCC2CB] rounded-3xl px-4 py-3 flex items-center justify-between hover:bg-gray-300 transition-colors text-sm"
                                    >
                                        <span className="text-gray-700">
                                            {selectedSize || 'Select Size'}
                                        </span>
                                        <RiArrowDropDownLine className={`text-gray-600 text-xl transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                                    </button>
                                    
                                    {isDropdownOpen && (
                                        <div className="absolute top-full mt-1 w-full lg:w-48 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                                            {sizes.map((size) => (
                                                <button
                                                    key={size}
                                                    onClick={() => handleSizeSelect(size)}
                                                    className="w-full text-left px-4 py-2 hover:bg-gray-100 first:rounded-t-lg last:rounded-b-lg text-sm"
                                                >
                                                    {size}
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Quantity Section */}
                            <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4'>
                                <h3 className="fontFamily400 text-lg md:text-[20px] font-bold text-[#212638] uppercase tracking-widest text-center lg:text-left">
                                    Quantity
                                </h3>
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

                            {/* Add to Cart Button */}
                            <div className="pt-4">
                                <button 
                                    onClick={handleAddToCart}
                                    className={`w-full rounded-3xl py-4 px-6 font-light transition-colors text-sm md:text-[16px] ${
                                        selectedSize 
                                            ? 'bg-[#BCC2CB] hover:bg-gray-400 text-[#212638]' 
                                            : 'bg-gray-200 text-[#212638] cursor-not-allowed'
                                    }`}
                                    disabled={!selectedSize}
                                >
                                    Add to Cart NGN {(price * quantity).toLocaleString()}.00
                                </button>
                                {!selectedSize && (
                                    <p className="text-red-500 text-xs mt-2 text-center">Please select a size first</p>
                                )}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
           <div className="w-full">
      <div className="w-11/12 container mx-auto">
        <div className="flex flex-col gap-2 items-center text-[#212638] lg:w-[30%] mx-auto text-center pb-[72px]">
           <p className="fontFamily400 text-[32px] font-light  px-[10px] uppercase">More ARÁILÉ Dress </p>
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
        </div>
    )
}
