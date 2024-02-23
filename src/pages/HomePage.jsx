import React from 'react';
import { CalendarIcon } from "@heroicons/react/24/outline";
import HeroImage1 from "../images/hero-image1.png";
import HeroImage2 from "../images/hero-image2.png";
import HeroImage3 from "../images/hero-image3.png";
import HeroImage4 from "../images/hero-image4.png";
import optionsImage from "../images/options.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faMessage, faPhone, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import 'react-phone-input-2/lib/style.css'
import PhoneInput from 'react-phone-input-2';
import Accordion from '../components/Accordian';
import CustomerStoriesImage from "../images/customer-stories.png"

import Hero1 from "../images/hero1.png"
import Hero2 from "../images/hero2.png"
import Hero4 from "../images/hero4.png"
import Hero3 from "../images/hero3.png"




const AccordianData = [
  {
    title : "Purchasing",
    content : "Enjoy a new simple way to make purchases that saves you time",
  },

  {
    title : "Sourcing",
    content : "Enjoy a new simple way to make purchases that saves you time",
  },

  {
    title : "Negotiations",
    content : "Enjoy a new simple way to make purchases that saves you time",
  },

  {
    title : "Financing",
    content : "Enjoy a new simple way to make purchases that saves you time",
  },

  {
    title : "Fullfilment",
    content : "Enjoy a new simple way to make purchases that saves you time",
  },
]

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className='w-full p-8 '>
        <div className='md:flex hidden  justify-between'>
          <img src={HeroImage1} alt='Hero Image 1' className='w-[600px] h-[400px] md:relative md:right-[150px] md:bottom-[70px] ' />


         <img src={HeroImage2} alt='Hero Image 2' className='w-[600px] h-[400px] md:relative md:left-[30px] md:bottom-[30px] ' />

        </div>
        <div className='flex md:p-0 py-20  flex-col items-center md:relative md:bottom-[80px] justify-center'>
          <h1 className='text-center text-darkBlue md:text-6xl text-4xl font-medium mb-6'>Procuring <span style={{ color: "#7677FF" }}>chemicals</span> just got easier</h1>
          <p className='text-center text-gray-600'>Gain access to the world's largest chemical marketplace, view live inventory and start transacting today.</p>
          <div className='flex md:flex-row flex-col mt-8 gap-6'>
            <button className='bg-darkBlue text-white font-medium px-4 py-3 rounded-lg'>Start free trial</button>
            <button className='flex gap-3 items-center'><CalendarIcon className='w-6 h-6' /> Schedule demo</button>
          </div>
        </div>



        <div className='md:flex hidden  flex- md:flex-row flex-col justify-center'>
          <img src={HeroImage3} alt='Hero Image 3' className='w-[600px] h-[400px] md:relative md:left-[60px] md:bottom-[50px] ' />
          <img src={HeroImage4} alt='Hero Image 4' className='w-[600px] h-[400px] md:relative md:left-[60px] md:bottom-[50px]' />
        </div>



      </div>


      {/* Sourcing Options Section */}

      <div className='w-full p-10 rounded-lg bg-gradient-to-l from-gray-400 to-bg2 via-bg1 mt-6'>
        <div className='flex md:flex-row flex-col  p-8'>
          <div className='flex-1'>
            <h1 className='text-white md:text-5xl text-3xl'><span style={{ color: "#9192FF" }}>Increase</span> your sourcing options</h1>
          </div>

          <div className='flex-1 '>
            <span className='text-xl text-white font-extralight'>Utilize our network functionality to create new sourcing
              relationships and enhance existing ones, resulting in the best
              possible sourcing results. With features like real-time pricing,
              direct chat with sellers, and streamlined procurement
              processes, obtaining the products you need has never been
              easier.</span>
          </div>

        </div>

        <img src={optionsImage} alt="" />
      </div>



      {/* Plans Section */}


      <div className='md:p-10 w-full mt-8'>

        <div className='flex p-8 flex-col items-center justify-center'>
          <h1 className='text-center text-4xl  font-medium'>A <span style={{ color: "#9192FF" }}> simple </span>  four-click procurement <br /> <span style={{ color: "#9192FF" }}>solution</span>
            to save you time and <br /> money
          </h1>


          <div className='mt-20 grid gap-16 md:grid-cols-4 grid-cols-1'>

            <div>
              <h1 className='text-4xl text-center font-medium' style={{ color: "#9192FF" }}>$156m+</h1>
              <p className='text-sm mt-2 text-center'>Of live inventory and growing</p>
            </div>

            <div>
              <h1 className='text-4xl text-center font-medium' style={{ color: "#9192FF" }}>12k+</h1>
              <p className='text-sm mt-2 text-center'>Integrated financial institutions</p>
            </div>

            <div>
              <h1 className='text-4xl text-center font-medium' style={{ color: "#9192FF" }}>200+</h1>
              <p className='text-sm mt-2 text-center'>LTL and FTL carriers</p>
            </div>

            <div>
              <h1 className='text-4xl text-center font-medium' style={{ color: "#9192FF" }}>99.3%</h1>
              <p className='text-sm mt-2 text-center'>Order acceptance rate</p>
            </div>

          </div>

        </div>



      </div>


      {/* Contact Section */}


      <div className='md:p-10 w-full mt-8'>

        <div style={{ background: "#5587FA1A" }} className='p-10 flex md:flex-row flex-col'>

          <div className="flex-1 p-8">
            <h1 className='text-3xl font-medium text-darkBlue'>Buy. Sell. Market on </h1>

            <p className='mt-8 text-gray-600'>Attract and Interact
              on your Company Profile.
              Transact on your Buying/Selling Dashboard.</p>

            <button className='bg-darkBlue mt-8 text-white px-4 py-3 rounded-md font-medium'>Register now</button>



            <div className='mt-32 flex md:flex-row flex-col gap-8'>

              <div className='flex gap-4 items-center'>
                <FontAwesomeIcon className='text-gray-500' icon={faPhoneVolume} />
                <span className='text-gray-500'>+91 999999999</span>
              </div>

              <div className='flex gap-4 items-center'>
                <FontAwesomeIcon className='text-gray-500' icon={faEnvelope} />
                <span className='text-gray-500'>support@chemcart.com</span>
              </div>

            </div>
          </div>

          {/* Form */}
          <div className="flex-1 md:p-8">
            <h1 className='text-xl text-gray-500 text-center'>Reach out to us We'll get back to you.</h1>
            <form className='p-6 flex flex-col'>
              <input type="text" placeholder='Full Name' className='mt-8 py-3 px-2' />
              <input type="text" placeholder='yourname@company.com' className='mt-8 py-3 px-2' />

              <div className='mt-8 p-0'>
                <PhoneInput
                  country={'in'}
                  placeholder='Enter mobile number'
                  inputStyle={{ width: "100%", margin: "10px" , height : "50px"}}
                />
              </div>
              <textarea className='mt-8 py-3 px-2' />

              <button className='bg-darkBlue mt-8 text-white px-4 py-3 rounded-md font-medium'>Send Message</button>
            </form>
          </div>

        </div>
      </div>


      {/* Solution Section */}

      <div className='md:p-10 w-full mt-8'>
  <div className='flex  md:flex-row flex-col  md:p-8'>
    <div className="flex-1 md:px-8 p-3">
      <h1 className='md:text-4xl text-3xl font-medium text-center'>Find the right <span style={{ color: "#7677FF" }}> solution</span> for you</h1>
      <div className='md:h-[700px] md:p-10 md:mt-0 mt-32 md:px-20 md:block flex gap-6 flex-col items-center justify-center   '>
        <img className='md:relative md:top-[60px]  ' src={Hero1} alt="" />
        <img className='md:relative   md:left-[150px] ' src={Hero3} alt="" />
        <img className='md:relative md:bottom-[130px]  md:right-[40px]  ' src={Hero1} alt="" />
      </div>


     

    </div>
    <div className="flex-1 px-8 md:mb-0">
      <p className='text-gray-500 mb-6'>The BluePallet platform makes it easier for members to buy and sell wholesale chemicals and ingredients.</p>
      {AccordianData.map((item,index)=>(
        <Accordion key={index} title={item.title} content={item.content}/>
      ))}
    </div>
  </div>
</div>


      <div className='w-full md:p-10 rounded-lg customer-stories mt-6'>
         <div className='flex flex-col items-center justify-center p-8'>
           <h1 className='text-white md:text-5xl text-3xl font-medium text-center'>Customer success <br /> <span style={{ color: "#9192FF" }}> stories </span></h1>
           <p className='mt-4 font-thin text-gray-200 text-center'>How chemical sourcing experts are using new technologies.</p>


           <div className='md:w-[80%] md:h-[400px] flex md:flex-row flex-col items-center justify-center gap-6 mt-10'>
            <img className='md:w-[20%] w-[100%]  md:h-[100%] h-[300px] md:object-cover object-contain rounded-3xl cursor-pointer transition-all ease-in hover:w-[100%]' src={CustomerStoriesImage} alt="" />
            <img className='md:w-[20%] w-[100%]  md:h-[100%] h-[300px] md:object-cover object-contain rounded-3xl cursor-pointer transition-all ease-in hover:w-[100%]'  src={CustomerStoriesImage} alt="" />
            <img className='md:w-[20%] w-[100%]  md:h-[100%] h-[300px] md:object-cover object-contain rounded-3xl cursor-pointer transition-all ease-in hover:w-[100%]'  src={CustomerStoriesImage} alt="" />
            <img className='md:w-[20%]  w-[100%] md:h-[100%] h-[300px] md:object-cover object-contain rounded-3xl cursor-pointer transition-all ease-in hover:w-[100%]'  src={CustomerStoriesImage} alt="" />
           </div>

        </div>        
      </div>




      <div className='w-full mt-10 md:p-20 p-8'>
        <div className='md:p-20 px-6 py-10 flex flex-col items-center justify-center rounded-lg component'>
           <h1 className='text-center text-4xl font-medium text-white'>Efficiently expand your chemical business</h1>
            <h3  className='text-center text-3x mt-6 font-light text-white'>Connect with more chemical professionals. More opportunities. More growth.</h3>
            <button className='bg-darkBlue mt-8 text-white px-4 py-3 rounded-md font-medium'>Get Started</button>
        </div>
      </div>

    </div>
  );
};

export default HomePage;
