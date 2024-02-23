import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faPlus, faSearch , faCloudArrowDown , faPrint , faShareNodes , faComment } from '@fortawesome/free-solid-svg-icons';
import Image from '../images/chemical.png';

const SellingInquiry = () => {

  const data = [
    {
      image : Image ,
      title : "CMH- ACID",
      description : "CAS: 181289-15-6  Naptune Pharma  Inquiry Quantity: 15kg"
    },

    {
      image : Image ,
      title : "CMH- ACID",
      description : "CAS: 181289-15-6  Naptune Pharma  Inquiry Quantity: 15kg"
    },

    {
      image : Image ,
      title : "CMH- ACID",
      description : "CAS: 181289-15-6  Naptune Pharma  Inquiry Quantity: 15kg"
    },

   

  ];

  const [activeLink, setActiveLink] = useState('all');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="w-full md:p-6 p-2 overflow-x-hidden">
      <div className="flex flex-col p-2">
        <h1 className="md:text-3xl text-xl font-semibold">Selling Enquiry</h1>

        <div className="flex gap-3 mt-4">
          <span
            className={`cursor-pointer ${activeLink === 'all' && 'border-b-2 border-black'}`}
            onClick={() => handleLinkClick('all')}
          >
            All
          </span>
          <span
            className={`cursor-pointer ${activeLink === 'open' && 'border-b-2 border-black'}`}
            onClick={() => handleLinkClick('open')}
          >
            Open
          </span>
          <span
            className={`cursor-pointer ${activeLink === 'close' && 'border-b-2 border-black'}`}
            onClick={() => handleLinkClick('close')}
          >
            Close
          </span>
          <span
            className={`cursor-pointer ${activeLink === 'pending' && 'border-b-2 border-black'}`}
            onClick={() => handleLinkClick('pending')}
          >
            Pending
          </span>
        </div>
        <hr className="my-4 border-t-2 border-gray-200" />

        <div className="flex gap-3 items-center relative">
          <FontAwesomeIcon icon={faSearch} className="absolute top-3 left-4" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-gray-100 w-[100%]  text-gray-800 pl-10 py-2 outline-none rounded-md"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
           


            {
              data.map((item,index)=>(
                <div key={index} className="border border-gray-300 rounded-lg p-4">

                <div className='flex '>
                <div className="w-60 h-40 mr-4">
                  <img src={item.image} alt="" className="w-full h-full object-cover" />
                </div>
                <div>
                <h2 className='text-xl font-semibold'>{item.title}</h2>
                <p className='text-gray-500'>{item.description}</p>
                  <button className="bg-darkBlue rounded-lg text-white text-sm px-3 py-1 mt-2">Pending</button>
                </div>
                </div>
                
  
                <div className='flex mt-4 items-center justify-around gap-2'>
                   <FontAwesomeIcon className='w-5 h-5 text-gray-600' icon={faCloudArrowDown}/>
                   <FontAwesomeIcon className='w-5 h-5 text-gray-600' icon={faPrint}/>
                   <FontAwesomeIcon className='w-5 h-5 text-gray-600' icon={faShareNodes}/>
                   <FontAwesomeIcon className='w-5 h-5 text-gray-600' icon={faComment}/>
                </div>
              </div>
              ))
            }
        </div>

      </div>
    </div>
  );
};

export default SellingInquiry;
