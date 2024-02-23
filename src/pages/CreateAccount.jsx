import React from 'react'
import Image from "../images/Rectangle.png"
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { Link } from 'react-router-dom'

const CreateAccount = () => {
  return (
    <div className='md:px-40 md:py-10 bg-gray-100'>

        <div className='px-10 py-4 flex md:flex-row flex-col bg-white rounded-2xl'>
            {/* Form */}

             <div className='p-6 md:w-[70%] flex flex-col items-center justify-center rounded-2xl'>
             <form className='flex flex-col '>
            <h1 className='text-darkBlue text-4xl font-semibold text-center'>Create New Account</h1>

             <div className='flex md:flex-row flex-col w-full md:gap-4 gap-2 mt-6'>
            <input type="text" placeholder='Owner Name' className='w-full outline-none mt-8 border border-gray-200 rounded-md py-3 px-2' />
            <input type="text" placeholder='Company Name' className='mt-8 outline-none  border border-gray-200 rounded-md py-3 px-2' />          
            </div>


            <input type="text" placeholder='GST No. ' className='mt-8 outline-none py-3 px-2 border border-gray-200 rounded-md' />

            <input
              type="tel"
              placeholder='Enter mobile number'
              className='mt-8 py-3 px-2 border border-gray-200'
            />

            <input type="email" placeholder='Email ' className='mt-8 py-3 outline-none px-2 border border-gray-200 rounded-md' />


            <div className='flex w-full gap-4'>

            <div className='mt-8 flex-1'>
              <select id="country" className='block bg-white w-full p-2 mt-2  border border-gray-200 rounded-md'>
                <option value="in">India</option>
                <option value="us">United States</option>
                <option value="gb">United Kingdom</option>
                <option value="ca">Canada</option>
                {/* Add more options as needed */}
              </select>
            </div>

            <div className='mt-8 flex-1'>
              <select id="country" className='block bg-white w-full p-2 mt-2  border border-gray-200 rounded-md'>
                <option value="in">Gujarat</option>
                <option value="us">Maharashtra</option>
                <option value="gb">Delhi</option>
                <option value="ca">Uttarpradesh</option>
                {/* Add more options as needed */}
              </select>
            </div>

            </div>


            <div className='flex md:flex-row flex-col gap-4 w-full'>

             

            <div className='mt-8 flex-1'>
              <select id="country" className='block bg-white w-full p-2 mt-2  border border-gray-200 rounded-md'>
                <option value="in">Ahemdabad</option>
                <option value="us">Anand</option>
                <option value="gb">Surat</option>
                <option value="ca">Vadodra</option>
                {/* Add more options as needed */}
              </select>
            </div>

            <div className='flex-1 '>
              <input type="text" placeholder='Pin Code ' className='mt-8 outline-none py-3 px-2 border border-gray-200 rounded-md' />
              </div>

            </div>


            <input type="text" placeholder='Address ' className='mt-8 outline-none py-3 px-2 border border-gray-200 rounded-md' />


            <input type="password" placeholder='Password ' className='mt-8 outline-none py-3 px-2 border border-gray-200 rounded-md' />
            <input type="password" placeholder='Confirm Password ' className='mt-8 outline-none py-3 px-2 border border-gray-200 rounded-md' />


            


            <div className='flex gap-6 items-center mt-6'>
              <input type="checkbox" />
              <p className='text-darkBlue font-thin'>By clicking on this, you agree to our Terms & Conditions, Terms of use, and Privacy Policy</p>
            </div>

              <div className='flex items-center justify-center'>
            <button className='bg-darkBlue mt-8 text-white px-4 py-3 rounded-md font-medium'>Register</button>
            </div>
          </form>
             </div>


             {/* Image */}
             <div className='md:w-[30%] h-[900px]  flex flex-col justify-center items-center login-image rounded-2xl'>
              <div className=' flex flex-col justify-center items-center'>
                <h2 className='text-white text-3xl font-semibold text-center'>Already Have an account?</h2>
                <p className='text-white text-sm mt-4 text-center'>Log in to your account to start  your selling or purchasing with company name</p>
                <Link to="/login">
                <button className='bg-darkBlue text-white px-6 py-3 mt-4 border border-gray-200 rounded-md'>Login</button>
                </Link>
              </div>
            </div>

        </div>

    </div>
  )
}

export default CreateAccount