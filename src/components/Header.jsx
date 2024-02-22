import React, { useState } from 'react';
import { ChevronDownIcon, Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';
import Logo from "../images/logo.png"

const Header = () => {
    let Links = [
        { name: "Customer stories", link: "/" },
        { name: "Who we serve", link: "/" },
        { name: "Solutions", link: "/" },

    ];

    let Links2 = [
        { name: "Tradepass", link: "/" },
        { name: "Pricing", link: "/" },
        { name: "Buy", link: "/" },
        { name: "Sell", link: "/" },
    ]
    let [open, setOpen] = useState(false);

    return (
        <div className='shadow-md md:relative   w-full py-2 bottom-2  top-0 left-0'>
            <div className='md:flex items-center justify-between bg-white py-4 md:px-4 px-10'>
                {/* logo section */}
                <div className='font-medium text-xl cursor-pointer flex items-center gap-1'>
                    <Link className='flex gap-2 md:pr-10' to="/">
                        <img src={Logo} alt="" />
                        <h1 className='text-darkBlue'>ChemBizz</h1>
                    </Link>
                </div>
                {/* Menu icon */}
                <div onClick={() => setOpen(!open)} className='absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7'>
                    {
                        open ? <XMarkIcon /> : <Bars3BottomRightIcon />
                    }
                </div>
                {/* link items */}
                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto  left-0 w-full md:w-auto md:px-4 pl-9 transition-all duration-500 ease-in ${open ? 'top-16 shadow-lg ' : 'top-[-490px]'}`}>
                    {Links.map((link) => (
                        <li key={link.name} className='flex items-center gap-2 px-2 font-semibold' style={{ whiteSpace: 'nowrap' }}>
                            <Link to={link.link} className='text-darkBlue md:p-0 p-4 text-center flex items-center justify-center gap-2 hover:text-blue-400 duration-500'>
                                {link.name}
                                <ChevronDownIcon className='w-4 h-4' />
                            </Link>
                        </li>
                    ))}

                    {Links2.map((link) => (
                        <li key={link.name} className='flex items-center gap-2 px-2 font-semibold' style={{ whiteSpace: 'nowrap' }}>
                            <Link to={link.link} className='text-darkBlue md:p-0 p-4 text-center hover:text-blue-400 duration-500'>
                                {link.name}
                            </Link>
                        </li>
                    ))}

                    <div className='md:hidden flex flex-col gap-4 pl-2 '>
                        <Link to="/signup">
                            <button className='btn bg-darkBlue text-white font-semibold px-3 py-2 rounded duration-500 '>Signup</button>
                        </Link>
                    </div>

                </ul>
                {/* Search Bar */}
                <div className='md:flex hidden  items-center relative'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-500 absolute left-2 top-1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                    <input type='text' placeholder='Search...' className='bg-gray-100 text-gray-800 pl-10 py-1 w-[200px]  rounded-md' />

                    <button className='btn bg-darkBlue text-white font-semibold px-3 py-2  duration-500 ml-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                    </button>

                </div>
                {/* buttons */}
                <div className='md:flex  md:mr-2  hidden items-center'>
                    <Link to="/login">
                        <button className='btn font-semibold px-3 py-1 rounded duration-500'>Login</button>
                    </Link>

                    <Link to="/signup">
                        <button className='btn bg-darkBlue text-white font-semibold px-3 py-1 rounded duration-500 ml-4'>Signup</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Header;




