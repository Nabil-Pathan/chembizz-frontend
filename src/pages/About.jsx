import React from 'react'
import GalleryImage from "../images/gallery.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe , faUserTie , faLink , faRocket } from '@fortawesome/free-solid-svg-icons'
import PointLine from "../images/about-point-line.png"

const Data = [
  {
    title : "Go Global",
    description : "Chemical buyers and sellers from all over the world",
    icon : faGlobe
  },

  {
    title : "Multiple Vendors",
    description : "Search multiple vendors for your requirement",
    icon : faUserTie
  },

  {
    title : "Direct Connection",
    description : "Send and recieve inquiry directly",
    icon : faLink
  },

  {
    title : "Simple Easy and smart",
    description : "Search ,connect buy or sell it's that simple",
    icon : faRocket
  },
]

const About = () => {
  return (
    <div className='md:p-20 bg-gray-100'>

      {/* Hero Section */}
       <div className='w-full p-10'>

         <div className='flex md:flex-row flex-col items-center'>

           <div className="flex-1">
             <img className='w-[400px]  rounded-2xl' src={GalleryImage} alt="" />
           </div>

           <div className="flex-1 md:p-10 p-4">
             <h1 className='text-darkBlue font-medium  md:text-5xl text-3xl'>About <span>ChemBizz</span></h1>
             <h2 className='text-xl text-gray-600 mt-8'>AnBizz.com is a Digital Platform of the chemical industry</h2>

             <div className='flex md:flex-row flex-col gap-6'>
            <button className='bg-darkBlue mt-8 text-white px-4 py-3 rounded-md font-medium'>Request Demo</button>
            <button className='border-darkBlue border mt-8 px-4 py-3 rounded-md font-medium'> Register Now</button>
            </div>

           </div>

         </div>
       </div>

       <hr  />

       {/*  */}

       <div className='w-full md:p-0 p-10 mt-20'>
         <div className='grid gap-8 md:grid-cols-4 grid-cols-1'> 

         {
           Data.map((item , index)=>(
            <div key={index} className='flex shadow-lg bg-white p-6 rounded-md  gap-10'>

              <div className='flex flex-col items-center'>
            <span className='p-2 rounded-full text-white' style={{ background: "#5587FA" }}>
              <FontAwesomeIcon className='h-8 w-8' icon={item.icon} />
            </span>
            </div>

            <div className=''>
              <h1 className='font-semibold  text-darkBlue'>{item.title}</h1>
              <p className='font-thin  mt-3  text-gray-600'>{item.description}</p>
            </div>
          </div>
           ))
         }
        

         </div>
       </div>

       {/* Who we are Section */}

       <div className='w-full mt-10 p-10'>

          <div className="flex md:flex-row flex-col md:p-8">

            <div className="flex-1 md:p-6">
               <h1 className='text-3xl text-darkBlue font-semibold '>Who we Are ? </h1>
               <p className='text-sm text-darkBlue mt-6'>We are a team of enthusiastic professionals, who like everything about chemicals. As individual from chemical industries we identify problems which arise in our day to day life which need:</p>

               <div className='flex items-center gap-4 mt-8'>
                 <img className='h-3' src={PointLine} alt="" />
                 <p>A comman platform for all requirements</p>
               </div>


               <div className='flex items-center gap-4 mt-8'>
                 <img className='h-3' src={PointLine} alt="" />
                 <p>Integrity</p>
               </div>



               <div className='flex items-center gap-4 mt-8'>
                 <img className='h-3' src={PointLine} alt="" />
                 <p>Professional competence</p>
               </div>


               <div className='flex items-center gap-4 mt-8'>
                 <img className='h-3' src={PointLine} alt="" />
                 <p>Powerful</p>
               </div>

               <p className='text-darkBlue mt-8'>All these requirement motivate us to develop ChemBiZZ.</p>


            </div>

            <div className="flex-1 md:p-6">
               <img className='w-[400px]' src={GalleryImage} alt="" />
            </div>

          </div>

       </div>

       {/* Research Section */}

       <div className='w-full mt-10 md:p-10 p-4'>
          <div className="bg-white flex flex-col items-center justify-center  px-8 py-4">
            <h1 className='text-center text-3xl font-semibold'>Start Your Research Today</h1> 

            <h2 className='text-gray-600 mt-4 text-center text-xl'>Start searching for chemicals and connect with valuable people like you in minutes.</h2>

            <button className='bg-darkBlue mt-8 text-white px-4 py-3 rounded-md font-medium'>Browse Listing</button>
          </div>
       </div>

    </div>
  )
}

export default About