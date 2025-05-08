'use client';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { IoIosClose } from 'react-icons/io';
export default function ForgetPassword({ onClose }) {
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch
      } = useForm();

      const onSubmit = async (data) => {
        console.log(data);
      }
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
    return(
        <div className="relative w-[90%] lg:w-[45%] xl:w-[40%] bg-white rounded-lg shadow-lg flex flex-col px-10 py-7 gap-4">
      <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-700" onClick={onClose}>
        <IoIosClose size={20} />
      </button>
      <form onSubmit={handleSubmit(onSubmit)} className="">
       <div>
       <label htmlFor="password" className='text-[#52ffa8] text-lg'>New Password</label>
       <input placeholder='Input Invitee’s password' 
                      className={`w-full pl-[21px] text-center lg:text-left rounded-[9px] shadow focus:outline-none py-[19px] ${errors.password ? 'border-red-500' : 'border-[#9DC1FB]'}`}
                      {...register("password1", {
                        required: "Password is required",
                        minLength: {value: 8, message: "Password must be at least 8 characters long" },
                        pattern: {
                          value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                          message: "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
                        }
                      })}
                    />
       </div>
       <div>
       <label htmlFor="password" className='text-[#52ffa8] text-lg'>Confirm Password</label>
       <input placeholder='' 
                      className={`w-full pl-[21px] text-center lg:text-left rounded-[9px] shadow focus:outline-none py-[19px] ${errors.password ? 'border-red-500' : 'border-[#9DC1FB]'}`}
                      {...register("password2", {
                        required: "Please confirm your password",
                        validate: (value) =>
                          value === watch("password1") || "Passwords do not match",
                      })}
                    />
       </div>
        <button type="continue" className="w-full mt-3 bg-black hover:bg-[#FFB850] text-white py-3 rounded-md font-medium">
        Continue
        </button>
      </form>
    </div>
    )
}