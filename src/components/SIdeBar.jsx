import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faHouse , faUser , faFile ,  faBookOpen , faSackDollar , faCartShopping, faHome , faCircleArrowLeft , faCircleArrowRight , faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import Dashboard from "../components/DashBoard"
import Employees from "../components/Employees"
import MyDocuments from "../components/MyDocuments"
import MyCataLog from "../components/MyCataLog"
import SellingInquiry from "../components/SellingInquiry"
import BuyingInquiry from "../components/BuyingInquiry"




const SideBar = () => {
  const [open, setOpen] = useState(true);
  const [selectedMenu, setSelectedMenu] = useState(null);

  const Menus = [
    { title: "Dashboard", component: <Dashboard /> , icon : faHome},
    { title: "Employees", component: <Employees /> , icon : faUser},
    { title: "My Documents", component: <MyDocuments open={open} /> ,icon : faFile },
    { title: "My Catalog", component: <MyCataLog />, icon : faBookOpen },
    { title: "Selling Inquiry", component: <SellingInquiry /> ,icon : faSackDollar },
    { title: "Buying Inquiry", component: <BuyingInquiry/> , icon : faCartShopping },
  ];

  return (
    <div className="flex ">
      <div
        className={`md:block hidden ${open ? "w-72" : "w-20"} bg-darkBlue  z-2 p-5  pt-8 relative duration-300`}
      >

        <FontAwesomeIcon className='text-white cursor-pointer w-6 h-6' onClick={() => setOpen(!open)}  icon={  open ?  faCircleArrowLeft : faCircleArrowRight}/>


        <div className="flex gap-x-4 p-4 items-center">
          <h1
            className={`text-white origin-left font-semibold text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            ChemBizz
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                index === 0 && "bg-light-white"
              } `}
              onClick={() => setSelectedMenu(Menu.component)}
            >
              <FontAwesomeIcon icon={Menu.icon}/>
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </li>
          ))}

             <button className=' mt-6 flex items-center font-medium gap-2 text-white  p-4'>
              Logout

              <FontAwesomeIcon icon={faRightFromBracket}/>
            </button>
        </ul>
  
      </div>



      <div
        className={`md:hidden block w-20 bg-darkBlue  z-2 p-5  pt-8 relative duration-300`}
      >
        <ul className="pt-6 mt-32">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center  gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                index === 0 && "bg-light-white"
              } `}
              onClick={() => setSelectedMenu(Menu.component)}
            >
              <FontAwesomeIcon className='h-4 w-4' icon={Menu.icon}/>
            </li>
          ))}

            <button className=' mt-6 flex items-center font-medium gap-2 text-white  p-2'>
              <FontAwesomeIcon icon={faRightFromBracket}/>
            </button>

        </ul>


  
  
      </div>
      
      <div className="h-screen  overflow-x-hidden w-full  flex-1  md:p-4">
        {selectedMenu ? selectedMenu : <Dashboard/>}
      </div>
    </div>
  );
};

export default SideBar;
