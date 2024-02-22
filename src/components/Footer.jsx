import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "../images/logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin , faTwitter , faInstagram} from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
  return (
    <footer  className='p-10 mt-4 footer text-gray-300'>

      <div className='flex md:flex-row flex-col p-8 items-center justify-between'>
        <div>
          <h1 className='text-xl font-medium'>Subscribe to our newsletters</h1>
          <p className='text-1/2xl font-thin mt-2'>Stay up to date with the latest news, announcement, and articles.</p>
        </div>

        {/* Search Bar Section */}

        <div className='p-10'>
          <div className='flex md:mt-0 mt-10 justify-center items-center '>
            <input type='text' placeholder='Enter Your email' style={{background : "#12214e"}} className='shadow-lg text-gray-800  md:pl-10 pl-2 pr-3 md:w-full w-[250px]  py-2 rounded-md' />

            <button style={{ background : "#00AEEF"}} className='btn text-white font-semibold px-3 py-2 rounded-lg duration-500 ml-1'>
              Submit
            </button>

          </div>
        </div>

      </div>


      <hr  />


      <div className='flex md:flex-row flex-col md:p-8 items-center justify-between'>

        <div className='flex-1 p-6'>
         <img src={Logo} alt="" />

          <p className='mt-2'>Connecting the world of chemical <br /> commerce together
            to make its members more successful.</p>

            <h3 className='mt-8 text-1/2xl'>
            <Link to='/about'>
               About ChemBizz
            </Link>
            </h3>
        </div>


        {/* Links here */}
        <div className='flex-1 p-6'>
          <div className="grid md:grid-cols-2 gap-8 grid-cols-1">

            <div>
              <h1 className="font-semibold">Resources</h1>

              <ul className='mt-4'>

                <li>
                  <Link>Terms & Conditions</Link>
                </li>
                <li>
                  <Link>Privacy Policy</Link>
                </li>

                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>
                <li>
                  <Link>Software License Agreement</Link>
                </li>

                <li>
                  <Link>Blog</Link>
                </li>
              </ul>

            </div>


            <div>
              <h1  className="font-semibold">Contact</h1>

              <ul className='mt-4'>

                <li>
                  <Link>support@Chemcart.io</Link>
                </li>
                <li>
                  <Link>(512) 686-3450</Link>
                </li>

                <li>
                  <Link>5501 Balcones Drive #162A Austin,
                    TX 78731</Link>
                </li>
              </ul>

            </div>

            <div>

            </div>

          </div>
        </div>


      </div>

      <hr />

      <div className='w-full p-8 flex md:flex-row flex-col gap-6 items-center justify-between'>
        <span className='text-center'>&copy; Balcones Drive #162A Austin,
          TX 78731</span>

        <p className='text-center'>Marketplace facilitator notice</p>


        <p className='text-center'>Electronic communications agreement</p>


        {/* icons */}
        <div className='flex gap-3'> 
         <FontAwesomeIcon className='h-4 w-4 cursor-pointer' icon={faLinkedin}/>
         <FontAwesomeIcon className='h-4 w-4 cursor-pointer' icon={faInstagram}/>
         <FontAwesomeIcon className='h-4 w-4 cursor-pointer' icon={faTwitter}/>
        </div>


      </div>

    </footer>
  );
};

export default Footer;
