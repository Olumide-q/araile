'use client'
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import { FaRegEyeSlash } from 'react-icons/fa6';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Link from 'next/link';

export default function SignUp() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = async (data) => {
    console.log(data);
    setLoading(true);
    try {
      // Log the request for debugging
      console.log('Submitting:', { email: data.email, password: data.password });
      
      // Fixed API endpoint - make sure this is your correct signup endpoint
      const response = await fetch('https://araile.onrender.com/api/account/auth/signup/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
const resData = response.json()
console.log(resData)
      if (response.ok) {
        const result = await response.json();
        console.log('Signup successful:', result);
        alert('Signup successful!');
        reset();
        // Optionally redirect to login or dashboard here
      } else {
        // Handle error response - only attempt to read the body once
        let errorMessage = `Signup failed with status: ${response.status}`;
        
        try {
          // Try to parse as JSON first
          const errorData = await response.json();
          errorMessage = errorData.message || errorMessage;
        } catch (jsonError) {
          // If not JSON, try to get text
          try {
            const errorText = await response.text();
            if (errorText) {
              errorMessage = errorText;
            }
          } catch (textError) {
            // If both fail, just use the status code message
            console.error('Could not parse error response');
          }
        }
        
        console.error(errorMessage);
        alert(errorMessage);
      }
    } catch (error) {
      // This catches network errors
      console.error('Network error:', error);
      alert('Something went wrong. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="body">
      <div className="w-full lg:w-[35%] mx-auto flex flex-col gap-[20px] lg:gap-[42px] lg:py-[10%] py-[30%] px-10">
        <div>
          <p className="text-center text-[32px] font-extralight lg:font-bold">Create a New Account</p>
        </div>

        <form className="flex flex-col gap-[24px]" onSubmit={handleSubmit(onSubmit)}>
          <input
            type="email"
            placeholder="Email address"
            className="w-full text-center lg:text-left rounded-[9px] lg:pl-[21px] shadow py-[19px] focus:outline-none"
            {...register('email', {
              required: 'Email address is required',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Enter a valid email address',
              },
            })}
          />
          {errors.email && <p className="text-red-600">{errors.email.message}</p>}

          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              className={`w-full pl-[21px] text-center lg:text-left rounded-[9px] shadow focus:outline-none py-[19px] ${
                errors.password ? 'border-red-500' : 'border-[#9DC1FB]'
              }`}
              {...register('password1', {
                required: 'Password is required',
                minLength: {
                  value: 8,
                  message: 'Password must be at least 8 characters long',
                },
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                  message: 'Password must include uppercase, lowercase, number & special character',
                },
              })}
            />
            <button
              type="button"
              onClick={handleTogglePassword}
              className="absolute right-4 top-1/2 -translate-y-1/2"
            >
              {showPassword ? <MdOutlineRemoveRedEye /> : <FaRegEyeSlash />}
            </button>
          </div>
          {errors.password && <p className="text-red-600">{errors.password.message}</p>}

          <div className="relative">
            <input 
              type={showPassword ? 'text' : 'password'} 
              placeholder="confirmPassword" 
              className={`w-full pl-[21px] text-center lg:text-left rounded-[9px] shadow focus:outline-none py-[19px] ${
                errors.confirmPassword ? 'border-red-500' : 'border-[#9DC1FB]'
              }`}
              {...register("Password2", {
                required: "Please confirm your password",
                validate: (value) => value === watch('password1') || "Passwords do not match"
              })}
            />
            <button
              type="button"
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full"
              onClick={handleTogglePassword}
            >
              {showPassword ? <MdOutlineRemoveRedEye /> : <FaRegEyeSlash />}
            </button>
          </div>
          {errors.confirmPassword && <p className="text-red-500 text-left">{errors.confirmPassword.message}</p>}
          
          <button
            type="submit"
            disabled={loading}
            className="text-[12px] px-[42px] lg:px-[10px] mt-[20px] lg:mt-[50px] lg:w-[40%] mx-auto bg-[#2A3048] text-white shadow py-[14px] rounded-[9px]"
          >
            {loading ? 'Signing up...' : 'Sign up'}
          </button>
          <div className='text-center'>
          <p>I have an account <Link href='/signin' className='hover: underline'>Sign in</Link></p>
          </div>
        </form>
      </div>
    </div>
  );
}





// 'use client'
// import { MdOutlineRemoveRedEye } from 'react-icons/md';
// import { FaRegEyeSlash } from 'react-icons/fa6';
// import { useState } from 'react';
// import { useForm } from 'react-hook-form';

// export default function SignUp() {
//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm();

//   const [showPassword, setShowPassword] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const handleTogglePassword = () => {
//     setShowPassword(!showPassword);
//   };

//   const onSubmit = async (data) => {
//     setLoading(true);
//     try {
//       const response = await fetch('https://araile.onrender.com/auth/signup', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           fullName: data.fullName,
//           email: data.email,
//           password: data.password,
//         }),
//       });

//       const result = await response.json();

//       if (response.ok) {
//         console.log('Signup successful:', result);
//         alert('Signup successful!');
//         reset();
//         // Optionally redirect to login or dashboard
//       } else {
//         console.error('Signup failed:', result.message);
//         alert(result.message || 'Signup failed');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       alert('Something went wrong.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="body">
//       <div className="w-full lg:w-[35%] mx-auto flex flex-col gap-[20px] lg:gap-[42px] lg:py-[10%] py-[30%] px-10">
//         <div>
//           <p className="text-center text-[32px] font-extralight lg:font-bold">Create Account</p>
//         </div>

//         <form className="flex flex-col gap-[24px]" onSubmit={handleSubmit(onSubmit)}>
//           <input
//             type="text"
//             placeholder="Full Name"
//             className="w-full text-center lg:text-left rounded-[9px] lg:pl-[21px] shadow py-[19px] focus:outline-none"
//             {...register('fullName', { required: 'Full name is required' })}
//           />
//           {errors.fullName && <p className="text-red-600">{errors.fullName.message}</p>}

//           <input
//             type="email"
//             placeholder="Email address"
//             className="w-full text-center lg:text-left rounded-[9px] lg:pl-[21px] shadow py-[19px] focus:outline-none"
//             {...register('email', {
//               required: 'Email address is required',
//               pattern: {
//                 value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
//                 message: 'Enter a valid email address',
//               },
//             })}
//           />
//           {errors.email && <p className="text-red-600">{errors.email.message}</p>}

//           <div className="relative">
//             <input
//               type={showPassword ? 'text' : 'password'}
//               placeholder="Password"
//               className={`w-full pl-[21px] text-center lg:text-left rounded-[9px] shadow py-[19px] ${
//                 errors.password ? 'border-red-500' : 'border-[#9DC1FB]'
//               }`}
//               {...register('password', {
//                 required: 'Password is required',
//                 minLength: {
//                   value: 8,
//                   message: 'Password must be at least 8 characters long',
//                 },
//                 pattern: {
//                   value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/,
//                   message: 'Password must include uppercase, lowercase, number & special character',
//                 },
//               })}
//             />
//             <button
//               type="button"
//               onClick={handleTogglePassword}
//               className="absolute right-4 translate-y-6"
//             >
//               {showPassword ? <MdOutlineRemoveRedEye /> : <FaRegEyeSlash />}
//             </button>
//           </div>
//           {errors.password && <p className="text-red-600">{errors.password.message}</p>}

//           <button
//             type="submit"
//             disabled={loading}
//             className="text-[12px] px-[42px] lg:px-[10px] mt-[20px] lg:mt-[50px] lg:w-[40%] mx-auto bg-[#2A3048] text-white shadow py-[14px] rounded-[9px]"
//           >
//             {loading ? 'Signing up...' : 'Sign up'}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }
















// 'use client'
// import { MdOutlineRemoveRedEye } from 'react-icons/md';
// import { FaRegEyeSlash } from 'react-icons/fa6';
// import { useState } from 'react';
// import { useForm } from 'react-hook-form';

// export default function SignUp() {
//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm();

//   const [showPassword, setShowPassword] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const handleTogglePassword = () => {
//     setShowPassword(!showPassword);
//   };

//   const onSubmit = async (data) => {
//     setLoading(true);
//     try {
//       const response = await fetch('https://araile.onrender.com/auth/signup', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           email: data.email,
//           password: data.password,
          
//         }),
//       });

//       const result = await response.json();

//       if (response.ok) {
//         console.log('Signup successful:', result);
//         alert('Signup successful!');
//         reset();
//         // Optionally redirect to login or dashboard
//       } else {
//         console.error('Signup failed:', result.message);
//         alert(result.message || 'Signup failed');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       alert('Something went wrong.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="body">
//       <div className="w-full lg:w-[35%] mx-auto flex flex-col gap-[20px] lg:gap-[42px] lg:py-[10%] py-[30%] px-10">
//         <div>
//           <p className="text-center text-[32px] font-extralight lg:font-bold">Create a New Account</p>
//         </div>

//         <form className="flex flex-col gap-[24px]" onSubmit={handleSubmit(onSubmit)}>
//           <input
//             type="email"
//             placeholder="Email address"
//             className="w-full text-center lg:text-left rounded-[9px] lg:pl-[21px] shadow py-[19px] focus:outline-none"
//             {...register('email', {
//               required: 'Email address is required',
//               pattern: {
//                 value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
//                 message: 'Enter a valid email address',
//               },
//             })}
//           />
//           {errors.email && <p className="text-red-600">{errors.email.message}</p>}

//           <div className="relative">
//             <input
//               type={showPassword ? 'text' : 'password'}
//               placeholder="Password"
//               className={`w-full pl-[21px] text-center lg:text-left rounded-[9px] shadow focus:outline-non py-[19px] ${
//                 errors.password ? 'border-red-500' : 'border-[#9DC1FB]'
//               }`}
//               {...register('password', {
//                 required: 'Password is required',
//                 minLength: {
//                   value: 8,
//                   message: 'Password must be at least 8 characters long',
//                 },
//                 pattern: {
//                   value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/,
//                   message: 'Password must include uppercase, lowercase, number & special character',
//                 },
//               })}
//             />
//             <button
//               type="button"
//               onClick={handleTogglePassword}
//               className="absolute right-4 translate-y-6"
//             >
//               {showPassword ? <MdOutlineRemoveRedEye /> : <FaRegEyeSlash />}
//             </button>
//           </div>
//           {errors.password && <p className="text-red-600">{errors.password.message}</p>}

//                               <div className='relative'>
//                                 <input 
//                                    type={showPassword ? 'text' : 'password'} 
//                                    placeholder='Confirm Password' 
//                                   className={`w-full pl-[21px] text-center lg:text-left rounded-[9px] shadow focus:outline-none py-[19px] ${errors.password ? 'border-red-500' : 'border-[#9DC1FB]'}`}
//                                   {...register("password", {
//                                      required: "Password is required",
//                                      minLength: {value: 8, message: "Password must be at least 8 characters long" },
//                                      pattern: {
//                                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
//                                        message: "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
//                                     }
//                                    })}
//                                  />
//                                 <button
//                                    type="button" // Prevent form submission
//                                    className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full"
//                                    onClick={handleTogglePassword}
//                                  >
//                                    {showPassword ? <MdOutlineRemoveRedEye /> : <FaRegEyeSlash />}
//                                </button>
//                              </div>
//                              {errors.password && <p className='text-red-500 text-left'>{errors.password.message}</p>}
//           <button
//             type="submit"
//             disabled={loading}
//             className="text-[12px] px-[42px] lg:px-[10px] mt-[20px] lg:mt-[50px] lg:w-[40%] mx-auto bg-[#2A3048] text-white shadow py-[14px] rounded-[9px]"
//           >
//             {loading ? 'Signing up...' : 'Sign up'}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }


// 'use client'
// import { MdOutlineRemoveRedEye } from 'react-icons/md';
// import { FaRegEyeSlash } from 'react-icons/fa6';
// import { useState } from 'react';
// import { useForm } from 'react-hook-form';
// export default function SignUp() {
//     return(
//         <div className='body'>
//             <div className="w-full lg:w-[35%] mx-auto flex flex-col gap-[20px] lg:gap-[42px] lg:py-[18%] py-[50%] px-10">
//                             <div>
//                                 <p className="text-center text-[32px] font-extralight lg:font-bold">Create a New Account</p>
//                             </div>
                            
//                             {error && (
//                               <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
//                                 {error}
//                               </div>
//                             )}
                            
//                             <form className='flex flex-col gap-[24px]' onSubmit={handleSubmit(onSubmit)}>
//                               <input 
//                                 type='email' 
//                                 placeholder='Email address' 
//                                 className="w-full text-center lg:text-left rounded-[9px] lg:pl-[21px] shadow py-[19px] focus:outline-none" 
//                                 {...register('email', {
//                                   required: 'Email address is required',
//                                   pattern: {
//                                     value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
//                                     message: "Please enter a valid email address"
//                                   }
//                                 })}
//                               />
//                               {errors.email && <p className='text-red-500 text-left'>{errors.email.message}</p>}
            
//                               <div className='relative'>
//                                 <input 
//                                   type={showPassword ? 'text' : 'password'} 
//                                   placeholder='Password' 
//                                   className={`w-full pl-[21px] text-center lg:text-left rounded-[9px] shadow focus:outline-none py-[19px] ${errors.password ? 'border-red-500' : 'border-[#9DC1FB]'}`}
//                                   {...register("password", {
//                                     required: "Password is required",
//                                     minLength: {value: 8, message: "Password must be at least 8 characters long" },
//                                     pattern: {
//                                       value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
//                                       message: "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
//                                     }
//                                   })}
//                                 />
//                                 <button
//                                   type="button" // Prevent form submission
//                                   className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full"
//                                   onClick={handleTogglePassword}
//                                 >
//                                   {showPassword ? <MdOutlineRemoveRedEye /> : <FaRegEyeSlash />}
//                                 </button>
//                               </div>
//                               {errors.password && <p className='text-red-500 text-left'>{errors.password.message}</p>}

//                               <div className='relative'>
//                                 <input 
//                                   type={showPassword ? 'text' : 'password'} 
//                                   placeholder='Forget Password' 
//                                   className={`w-full pl-[21px] text-center lg:text-left rounded-[9px] shadow focus:outline-none py-[19px] ${errors.password ? 'border-red-500' : 'border-[#9DC1FB]'}`}
//                                   {...register("password", {
//                                     required: "Password is required",
//                                     minLength: {value: 8, message: "Password must be at least 8 characters long" },
//                                     pattern: {
//                                       value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
//                                       message: "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
//                                     }
//                                   })}
//                                 />
//                                 <button
//                                   type="button" // Prevent form submission
//                                   className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full"
//                                   onClick={handleTogglePassword}
//                                 >
//                                   {showPassword ? <MdOutlineRemoveRedEye /> : <FaRegEyeSlash />}
//                                 </button>
//                               </div>
//                               {errors.password && <p className='text-red-500 text-left'>{errors.password.message}</p>}
            
//                               <button 
//                                 type='submit' 
//                                 disabled={loading}
//                                 className='text-[12px] px-[42px] lg:px-[10px] mt-[20px] lg:mt-[50px] lg:w-[40%] mx-auto bg-[#2A3048] cursor-pointer text-white shadow py-[14px] rounded-[9px] disabled:opacity-50'
//                               >
//                                 {loading ? 'Signing in...' : 'Sign in'}
//                               </button>
//                             </form>
//                         </div>
//         </div>
//     )
// }