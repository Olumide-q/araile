// 'use client'
// import { MdOutlineRemoveRedEye } from 'react-icons/md';
// import { FaRegEyeSlash } from 'react-icons/fa6';
// import { useState } from 'react';
// import { useForm } from 'react-hook-form';

// export default function SignIn() {
//     const{
//         register,
//         handleSubmit,
//         reset,
//         formState: {errors}
//     } = useForm();
//     const [loading, setLoading] = useState(false)
//     const [showPassword, setShowPassword] = useState(false);
//     const handleTogglePassword = () => {
//       setShowPassword(!showPassword);
//     };
//     const onSubmit = async (data) => {
//         try {
//           const response = await fetch('https://araile.onrender.com', {
//             method: 'POST',
//             headers: {
//               'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({
//                 email: data.email,
//                 password: data.password,
//             }),
//           });
    
//           const result = await response.json();
    
//           if (response.ok) {
//             // Save token, navigate, or show success
//             console.log('Login successful:', result);
//             localStorage.setItem('token', result.token);
//           } else {
//             // Show error
//             console.error('Login failed:', result.message);
//           }
//         } catch (error) {
//           console.error('Network error:', error);
//         }
//       };
//     return(
//         <div className='body'>
//             <div className=" w-full lg:w-[35%]  mx-auto flex flex-col gap-[20px] lg:gap-[42px] lg:py-[18%] py-[50%] px-10">
//                 <div>
//                     <p className="text-center text-[32px] font-extralight lg:font-bold">Welcome Back</p>
//                 </div>
//                 <form className='flex flex-col gap-[24px]' onSubmit={handleSubmit(onSubmit)}>
//                 <input type='email' placeholder='Email address' className=" w-full text-center lg:text-left  rounded-[9px]  lg:pl-[21px]  shadow py-[19px] focus:outline-none " 
//                 {...register('email',{
//                     required: 'Email address is required',
//                     pattern:{
//                         value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
//                         message: "Please enter a valid email address"
//                     }
//                  })}
//               />
//               {errors.email && <p className='text-[#2A3048] text-left'>{errors.email.message}</p>}

//                 <div className='relative'>
//                <input type={showPassword ? 'text' : 'password'} placeholder='Password' className={`password' w-full  pl-[21px] text-center lg:text-left rounded-[9px] shadow focus:outline-none py-[19px] ${errors.password ? "border-red-500" : " border-[#9DC1FB]"} `}
//                 {...register("password",{
//                     required:"Password is required",
//                     minLength: {value: 8, message: "Password must be at least 8 characters long" },
//                     pattern: {
//                         value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
//                         message: "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
//                     }
//                 })}
//                 />
//                 <button
//                 className="absolute right-4 translate-y-6  rounded-full"
//                 onClick={handleTogglePassword}
//               >
//                 {showPassword ? <MdOutlineRemoveRedEye /> : <FaRegEyeSlash />}
//               </button>
//                </div>
//                 {errors.password && <p className='text-[#2A3048] text-left'>{errors.password.message}</p>}

//                 <div className=' flex  gap-4 flex-row  justify-between text-center'>
//                 <label className='flex flex-row gap-2 text-center text-[#1A1A1A66] text-sm ' htmlFor="consent">
//                 <input type="checkbox" value = "consent" />
//                 Remember me </label>
//                 <p className='text-[#1A1A1A66] text-sm'>Forgot Password?</p>
//             </div>
//             <button type='submit' className=' text-[12px] px-[42px] lg:px-[10px] mt-[20px] lg:mt-[50px] lg:w-[40%] mx-auto bg-[#2A3048] cursor-pointer text-white shadow   py-[14px] rounded-[9px] '>Sign in</button>
//                 </form>
//             </div>
//         </div>
    // )
// }
'use client'
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import { FaRegEyeSlash } from 'react-icons/fa6';
import { useState } from 'react';
import { useRouter } from "next/navigation";
import { useForm } from 'react-hook-form';
import Link from "next/link";
import { Truculenta } from 'next/font/google';
import ResetPasswordModal from '@/component/modals/newPassword';


export default function SignIn() {
    const {
        register,
        handleSubmit,
        reset,
        formState: {errors}
    } = useForm();
    const router = useRouter();
    const [showModal, setShowModal] = useState(false);
    const [loading, setLoading] = useState(false);
    const [formError, setFormError] = useState(null);
    const [showPassword, setShowPassword] = useState(false);
    
    const handleTogglePassword = () => {
      // e.preventDefault(); // Prevent form submission
      setShowPassword(!showPassword);
    };
    
    const onSubmit = async (data) => {
      console.log(data);
      setLoading(true);
        
        try {
          // Make sure to use the correct API endpoint path
          // The 405 error indicates the main URL doesn't accept POST requests
          const response = await fetch('https://araile.onrender.com/api/account/auth/login/', { // Add the proper endpoint path
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          });
          
          const resData = await response.json();
      console.log(resData);
      
          if (resData.detail === "Login successful") {
            reset();
            // You can change to the page you want to redirect to after signup
            router.push("");
            setFormError("");
          }else if(resData.email){
            setFormError(`Email: ${resData.email[0]}`);
            // localStorage.setItem('token', result.token);
          } else {
            setFormError("Something went wrong");
          }
        } catch (error) {
          const apiError = await error.json();
          console.log(apiError);
        } finally {
          setLoading(false);
        }
    };
    
    return(
        <div className='body'>
            <div className="h-screen w-full lg:w-[35%] mx-auto flex flex-col gap-[20px] lg:gap-[42px] lg:py-[18%] py-[50%] px-10">
                <div>
                    <p className="text-center text-[32px] font-extralight lg:font-bold">Welcome Back</p>
                </div>
                
                {/* {error && (
                  <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
                    {error}
                  </div>
                )} */}
                
                <form className='flex flex-col gap-[24px]' onSubmit={handleSubmit(onSubmit)}>
                {formError && <p className="text-red-500 font-bold">{formError}</p>}
                  <input 
                    type='email' 
                    placeholder='Email address' 
                    className="w-full text-center lg:text-left rounded-[9px] lg:pl-[21px] shadow py-[19px] focus:outline-none" 
                    {...register('email', {
                      required: 'Email address is required',
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Please enter a valid email address"
                      }
                    })}
                  />
                  {errors.email && <p className='text-red-500 text-left'>{errors.email.message}</p>}

                  <div className='relative'>
                    <input 
                      type={showPassword ? 'text' : 'password'} 
                      placeholder='Password' 
                      className={`w-full pl-[21px] text-center lg:text-left rounded-[9px] shadow focus:outline-none py-[19px] ${errors.password ? 'border-red-500' : 'border-[#9DC1FB]'}`}
                      {...register("password", {
                        required: "Password is required",
                        minLength: {value: 8, message: "Password must be at least 8 characters long" },
                        pattern: {
                          value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                          message: "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
                        }
                      })}
                    />
                    <button
                      type="button" // Prevent form submission
                      className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full"
                      onClick={handleTogglePassword}
                    >
                      {showPassword ? <MdOutlineRemoveRedEye /> : <FaRegEyeSlash />}
                    </button>
                  </div>
                  {errors.password && <p className='text-red-500 text-left'>{errors.password.message}</p>}

                  <div className='flex flex-row items-center justify-between text-center'>
                    <label className='flex flex-row gap-2 text-center text-[#1A1A1A66] text-sm' htmlFor="remember">
                      <input type="checkbox" id="remember" {...register("remember")} />
                      Remember me
                    </label>
                      <div>
                          <button onClick={() => setShowModal(true)} className="text-sm text-[#1A1A1A66] hover:text-blue-500">
                            Forgot password?
                          </button>
                         <ResetPasswordModal  isOpen={showModal} onClose={() => setShowModal(false)}/>
                      </div>
                  </div>
                  
                  <button 
                    type='submit' 
                    disabled={loading}
                    className='text-[12px] px-[42px] lg:px-[10px] mt-[20px] lg:mt-[50px] lg:w-[40%] mx-auto bg-[#2A3048] cursor-pointer text-white shadow py-[14px] rounded-[9px] disabled:opacity-50'
                  >
                    {loading ? 'Signing in...' : 'Sign in'}
                  </button>
                </form>
            </div>
        </div>
    )
}

// 'use client'
// import { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import { MdOutlineRemoveRedEye } from 'react-icons/md';
// import { FaRegEyeSlash } from 'react-icons/fa6';

// export default function SignIn() {
//     const {
//         register,
//         handleSubmit,
//         reset,
//         formState: {errors}
//     } = useForm();
//     const [loading, setLoading] = useState(false)
//     const [showPassword, setShowPassword] = useState(false);
//     const [error, setError] = useState('');
   
//     const handleTogglePassword = (e) => {
//               e.preventDefault(); // Prevent form submission
//                setShowPassword(!showPassword);
//              };
//   const onSubmit = async (data) => {
//         setLoading(true);
//        setError('');
//     try {
//       const response = await fetch('https://araile.onrender.com/api/account/auth/login/', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(data),
//       });

//       const result = await response.json();

//       if (response.ok) {
//         // Save token, navigate, or show success
//         console.log('Login successful:', result);
//         localStorage.setItem('token', result.token);
//       } else {
//         // Show error
//         console.error('Login failed:', result.message);
//       }
//     } catch (error) {
//       console.error('Network error:', error);
//     } finally {
//                    setLoading(false);
//                 }
//   };

//   return (
//    <div className='body'>
//      <div className="w-full lg:w-[35%] mx-auto flex flex-col gap-[20px] lg:gap-[42px] lg:py-[18%] py-[50%] px-10">
//         <div>
//             <p className="text-center text-[32px] font-extralight lg:font-bold">Welcome Back</p>
//             </div>
//      <form className='flex flex-col gap-[24px]' onSubmit={handleSubmit(onSubmit)}>
//       <input {...register('email')} placeholder="Email" className="w-full text-center lg:text-left rounded-[9px] lg:pl-[21px] shadow py-[19px] focus:outline-none" />
//       <div className='relative'>
//       <input
//        type={showPassword ? 'text' : 'password'} 
//        {...register('password')}  placeholder="Password"  className={`w-full pl-[21px] text-center lg:text-left rounded-[9px] shadow focus:outline-none py-[19px] ${errors.password ? 'border-red-500' : 'border-[#9DC1FB]'}`}/>
//       <button
// type="button" // Prevent form submission
// className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full"
// onClick={handleTogglePassword}
// >
// {showPassword ? <MdOutlineRemoveRedEye /> : <FaRegEyeSlash />}
// </button> 
//       </div>
//       <div className='flex gap-4 flex-row justify-between text-center'>
//                      <label className='flex flex-row gap-2 text-center text-[#1A1A1A66] text-sm' htmlFor="remember">
//                        <input type="checkbox" id="remember" {...register("remember")} />
//                        Remember me
//                      </label>
//                      <p className='text-[#1A1A1A66] text-sm'>Forgot Password?</p>
//                    </div>
//       <button type='submit' 
//                    disabled={loading}
//                     className='text-[12px] px-[42px] lg:px-[10px] mt-[20px] lg:mt-[50px] lg:w-[40%] mx-auto bg-[#2A3048] cursor-pointer text-white shadow py-[14px] rounded-[9px] disabled:opacity-50'
//                   >
//                     {loading ? 'Signing in...' : 'Sign in'}
//                 </button>
//     </form>
//      </div>
//    </div>
//   );
// }


