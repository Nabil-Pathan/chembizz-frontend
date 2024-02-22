import React, { useState } from 'react';
import { ChevronDownIcon } from "@heroicons/react/24/outline"

const Accordion = ({ title , content}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border rounded-md mt-4 overflow-hidden">
      <div
        className="flex items-center justify-between px-4 py-2 cursor-pointer bg-gray-100"
        onClick={toggleAccordion}
      >
        <h3 className="text-lg font-medium">{title}</h3>
        
        <ChevronDownIcon className='w-6 h-6'/>
        
      </div>
      {isOpen && (
        <div className="p-4 bg-gray-50">
          <p className="text-gray-700">{content}</p>
        </div>
      )}
    </div>
  );
};

export default Accordion;
