import React from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { faLocationDot, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Contact = () => {
  return (
    <div className='w-full p-10'>

      <div className='p-10 bg-gray-100 flex md:flex-row flex-col rounded-lg shadow-lg'>

        <div className="flex-1 ">
          <form className='flex flex-col'>
            <h1 className='text-darkBlue text-4xl font-semibold'>Get in <span className='text-lightBlue'> Touch </span></h1>
            <input type="text" placeholder='Name' className='mt-8 py-3 px-2' />
            <input type="text" placeholder='yourname@company.com' className='mt-8 py-3 px-2' />
            <div className='mt-8 p-0'>
              <PhoneInput
                country={'in'}
                placeholder='Enter mobile number'
                inputStyle={{ width: "100%", margin: "10px" , height : "50px" }}
              />
            </div>

            <div className='mt-8'>
              <select id="country" className='block bg-white w-full p-2 mt-2  rounded-md'>
                <option value="in">India</option>
                <option value="us">United States</option>
                <option value="gb">United Kingdom</option>
                <option value="ca">Canada</option>
                {/* Add more options as needed */}
              </select>
            </div>


            <div className='flex mt-8 gap-6'>
              <div className='px-8 flex items-center gap-4 py-4 rounded-lg bg-white'>
                <input className='' type="radio" placeholder='Register Now' />
                <span className='text-gray-400'> Register Now </span>
              </div>
              <div className='px-4 flex items-center gap-4 py-3 rounded-lg bg-white'>
                <input className='' type="radio" placeholder='Request a Demo' />
                <span className='text-gray-400'> Request a Demo </span>
              </div>
            </div>

            <textarea placeholder='Message' className='mt-8 py-3 px-2' />

            <div className='flex gap-6 items-center mt-6'>
              <input type="checkbox" />
              <p className='text-darkBlue font-thin'>By clicking on this, you agree to our Terms & Conditions, Terms of use, and Privacy Policy</p>
            </div>

            <button className='bg-darkBlue mt-8 text-white px-4 py-3 rounded-md font-medium'>Send Message</button>
          </form>
        </div>

        <div className="flex-1 p-8">

          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3669.543897911318!2d72.62590417458416!3d23.11378657910986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84604595e899%3A0x3e7418c1b4e56140!2sWebEarl%20Technologies%20Private%20Limited!5e0!3m2!1sen!2sin!4v1708591679124!5m2!1sen!2sin" className='md:h-[400px] md:w-[600px] w-[350px] h-[300px]' style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>


          <div className='mt-8'>

            <div className='grid gap-4 md:grid-cols-2 grid-cols-1'>

              <div className='flex items-center justify-center  gap-6'>
                <span className='p-3 rounded-full text-white' style={{ background: "#5587FA" }}>
                  <FontAwesomeIcon className='h-8 w-8' icon={faLocationDot} />
                </span>

                <div>
                  <h1 className='font-semibold text-xl text-darkBlue'>Location</h1>
                  <p className='font-thin  mt-3  text-darkBlue'>C-89, C Block, Sector 65, Delhi NCR, Noida</p>
                </div>
              </div>


              <div className='flex items-center justify-center  gap-6'>
                <span className='p-3 rounded-full text-white' style={{ background: "#5587FA" }}>
                  <FontAwesomeIcon className='h-8 w-8' icon={faEnvelope} />
                </span>

                <div>
                  <h1 className='font-semibold text-xl text-darkBlue'>Email</h1>
                  <p className='font-thin  mt-3  text-darkBlue'>123@gmail.com,
                    123@gmail.com</p>
                </div>
              </div>


              <div className='flex items-center md:mr-12 mr-20 justify-center  gap-6'>
                <span className='p-3 rounded-full text-white' style={{ background: "#5587FA" }}>
                  <FontAwesomeIcon className='h-8 w-8' icon={faPhone} />
                </span>

                <div>
                  <h1 className='font-semibold text-xl text-darkBlue'>Call</h1>
                  <p className='font-thin  mt-3  text-darkBlue'>+91 987-987-9876 <br />
                    +91 987-987-9876</p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Contact