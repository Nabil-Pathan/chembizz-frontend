import React from 'react'
import 'react-phone-input-2/lib/style.css'
import { Link } from 'react-router-dom'
import OtpInput from '../components/OtpInput'

const OtpVerification = () => {

  return (
    <div className='md:px-40 md:py-10 bg-gray-100'>

      <div className='p-10 flex md:flex-row flex-col bg-white rounded-2xl'>

        {/* Image */}

        <div className='md:w-[30%] md:p-0 px-10 py-32 flex flex-col justify-center items-center login-image rounded-2xl '>
          <div className=' flex flex-col justify-center items-center'>
            <h2 className='text-white text-3xl font-semibold text-center'>Don’t have an account yet?</h2>
            <p className='text-white text-sm mt-4 text-center'>Create Your Account to Start Your Digital
              Business Experience with ChemBiZZ</p>
            <button className='bg-darkBlue text-white px-6 py-3 mt-4 border border-gray-200 rounded-md'>Register</button>
          </div>
        </div>


        {/* Form */}

        <div className='p-10 md:w-[70%] flex flex-col items-center justify-center md:h-[700px] rounded-2xl'>
          <form className='flex flex-col items-center justify-center mt-8 '>
            <h1 className='text-darkBlue text-center text-4xl font-semibold'>Enter OTP</h1>

            <p className='text-darkBlue text-center text-sm mt-6'>Enter Confirmation Code
              We’ve sent you on your mobile / email.</p>

              <div className='mt-8'>
            <OtpInput />
            </div>

            <p className='text-darkBlue text-center mt-6'>Didn’t Receive Confirmation Code? Resend OTP</p>
            <div className='flex items-center justify-center'>
              <button className='bg-darkBlue mt-8 text-white px-8 py-3 rounded-md font-medium '>Continue</button>
            </div>
          </form>
        </div>

      </div>

    </div>
  )
}

export default OtpVerification