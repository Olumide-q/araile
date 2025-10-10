


'use client';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import { FaRegEyeSlash } from 'react-icons/fa6';

export default function ResetPasswordModal({ isOpen, onClose }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm();

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formError, setFormError] = useState(null);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  const handleToggleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  const onSubmit = async (data) => {
    // alert(`If an account exists for ${data.password}, a reset link has been sent.`);
    reset();
    onClose();
    setLoading(true);
    console.log(data)

    try {
      
      const response = await fetch('https://araile.onrender.com/api/account/auth/change-password', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      const resData = await response.json();
  console.log(resData);
  
      if (resData.detail === "submitted") {
        reset();
        // You can change to the page you want to redirect to after signup
        router.push("");
        setFormError("");
      }else {
        setFormError("Something went wrong");
      }
    } catch (error) {
      const apiError = await error.json();
      console.log(apiError);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#516B86]">
      <div className="bg-white p-10 w-[55%] mx-auto  shadow-lg relative">
       <div className='flex  mb-[71px]'>
      <div className='flex flex-col gap-[19px] '>
      <div className='flex'>
       <h2 className="text-[20px] text-left font-bold ">Welcome ! Lets secure your account</h2>
       <button onClick={onClose} className="absolute top-4 right-10  hover:text-black font-bold text-[40px]">&times;</button>
       </div>
      <p className="font-medium text-[16px] text-[#00000099]">First, create a strong password to protect your account</p>
      </div>
     
       </div>
  
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-[42px]'>
        {formError && <p className="text-red-500 font-bold">{formError}</p>}
       <div className=' relative flex flex-col justify-left gap-[20px]'>
       <label htmlFor="password" className='text-left text-[#000000] font-medium text-[16px] '>New Password</label>
          <input
             type={showPassword ? "text" : "password"}
            placeholder="Input Invitee’s NewPassword"
            className={`w-full pl-[21px] text-center lg:text-left rounded-[9px] shadow focus:outline-none py-[19px]  text-[#1A1A1A66] ${errors.new_password1 ? "border-red-500" : "border-[#9DC1FB]"}`}
            {...register('new_password1', {
              required: 'Password is required',
              minLength: {value: 8, message: "Password must be at least 8 characters long" },
              pattern: {  value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                message: "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
               },
            })}
          />
          <button
                      type="button" // Prevent form submission
                      className="absolute right-4 top-1/2 -translate-y- rounded-full"
                      onClick={handleTogglePassword}
                    >
                      {showPassword ? <MdOutlineRemoveRedEye /> : <FaRegEyeSlash />}
                    </button>
                    {errors.new_password1 && <p className="text-red-500 text-sm mb-2">{errors.new_password1.message}</p>}
       </div>

       <div className=' relative flex flex-col justify-left gap-[20px]'>
        <label htmlFor="password" className='text-left text-[#000000] font-medium text-[16px]'>Confirm Password</label>
        <input
         type={showConfirmPassword ? "text" : "password"}
         placeholder='Confirm Password' 
                       className={`w-full pl-[21px] text-center lg:text-left rounded-[9px] shadow focus:outline-none py-[19px]  text-[#1A1A1A66] ${errors.new_password2? "border-red-500" : "border-[#9DC1FB]"}`}
                       {...register("new_password2", {
                         required: "Please confirm your password",
                         validate: (value) =>
                           value === watch("new_password1") || "Passwords do not match",
                       })}
                    />
                     <button
              type="button"
              className="absolute right-4 top-1/2 -translate-y rounded-full"
              onClick={handleToggleConfirmPassword}
            >
              {showConfirmPassword ? <MdOutlineRemoveRedEye /> : <FaRegEyeSlash />}
            </button>

            {errors.new_password2 && (
            <p className="text-red-500 text-left">{errors.new_password2.message}</p>
          )}
       </div>
      
         <div className='mt-[320px] flex  justify-end'>
         <button type="submit"
         disabled={loading}
         className="bg-[#2A3048] font-bold text-white px-[39px] py-[14px] rounded-md ">
         {loading ? "Continuing..." : "Continue"}
          </button>
         </div>
        </form>
      </div>
    </div>
  );
  
}













// 'use client';
// import { useForm } from 'react-hook-form';
// import { useState } from 'react';
// import { IoIosClose } from 'react-icons/io';
// export default function ForgetPassword({ onClose }) {
//     const {
//         register,
//         handleSubmit,
//         formState: { errors },
//         watch
//       } = useForm();

//       const onSubmit = async (data) => {
//         console.log(data);
//       }
        // try {
        //   const response = await fetch(
        //     "https://araile.onrender.com/api/account/auth/change-password/",
        //     {
        //       method: "POST",
        //       headers: {
        //         "Content-Type": "application/json",
        //       },
        //       body: JSON.stringify(data),
        //     }
        //   );
        // }}
//     return(
//         <div className="relative w-[90%] lg:w-[45%] xl:w-[40%] bg-white rounded-lg shadow-lg flex flex-col px-10 py-7 gap-4">
//       <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-700" onClick={onClose}>
//         <IoIosClose size={20} />
//       </button>
//       <form onSubmit={handleSubmit(onSubmit)} className="">
//        <div>
//        <label htmlFor="password" className='text-[#52ffa8] text-lg'>New Password</label>
//        <input placeholder='Input Invitee’s password' 
//                       className={`w-full pl-[21px] text-center lg:text-left rounded-[9px] shadow focus:outline-none py-[19px] ${errors.password ? 'border-red-500' : 'border-[#9DC1FB]'}`}
//                       {...register("password1", {
//                         required: "Password is required",
//                         minLength: {value: 8, message: "Password must be at least 8 characters long" },
//                         pattern: {
//                           value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
//                           message: "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
//                         }
//                       })}
//                     />
//        </div>
//        <div>
//        <label htmlFor="password" className='text-[#52ffa8] text-lg'>Confirm Password</label>
//        <input placeholder='' 
//                       className={`w-full pl-[21px] text-center lg:text-left rounded-[9px] shadow focus:outline-none py-[19px] ${errors.password ? 'border-red-500' : 'border-[#9DC1FB]'}`}
//                       {...register("password2", {
//                         required: "Please confirm your password",
//                         validate: (value) =>
//                           value === watch("password1") || "Passwords do not match",
//                       })}
//                     />
//        </div>
//         <button type="continue" className="w-full mt-3 bg-black hover:bg-[#FFB850] text-white py-3 rounded-md font-medium">
//         Continue
//         </button>
//       </form>
//     </div>
//     )
// }