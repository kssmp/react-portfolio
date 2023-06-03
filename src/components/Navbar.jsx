import React, { useEffect , useState } from 'react'
import { Link } from 'react-router-dom'; /*use to link different parts of the page*/

import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo,menu,close } from '../assets';




const Navbar = () => {

  const [active, setActive] = useState(''); /*use state field*/
  const [toggle, setToggle] = useState(false); /*use state field*/


  return (
    <nav 
    /*dynamic template string*/
    /* w is full width
    flec property
    top-0 makes it stay at top
    z-20 to make it appear above other elemnts*/

      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      {/* its a special utility clas we have created in the styles.js file to provide variable padding*/}

      <div className='w-full flex justify-between items-center max-w-7x1 mx-auto'>
        <Link 
        to="/"
        className='flex items-center gap-2'
        onClick={()=>{
          setActive("");
          window.scrollTo(0,0);
        }}>
        {/* $nbsp is the unicodecharacter for spacebar */}
        {/* <img src={logo} alt='logo' className='w-9 h-100 object-contain'/> */}
          <p className='text-white text-[18px] font-bold cursor-pointer flex '> Saket &nbsp;<span className='sm:block hidden'>Koppineedi</span>
          </p>
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((Link)=>(
            /*rendering an list item for each link*/
            <li
            key ={ Link.id }
            className={`${
              /*here we can make the links highlight when the curson is on it and then onclicking get rerouted to that particular page*/
              active === Link.title 
              ? "text-white" : "text-secondary"
            } hover:text-white text-[18px] font-medium cursor-pointer`}
            onClick={() => setActive(Link.title)}
            >
              <a href={`#${Link.id}`}>{Link.title}</a>
            </li>
          ))}
        </ul>

        {/* here we are trying to customize the wbepage for smaller screens */}
        <div className='sm:hidden flec flex-1 justoify-end items-center'>
        <img 
          src={toggle ? close : menu} alt ='menu' 
          className='w-[28px] h-[28px] object-contain cursor-pointer'
          onClick={()=> setToggle(!toggle)}
        />
        <div className={`${!toggle? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] Z-10 rounded-xl`}>
          <ul className='list-none flex justify-end items-start flex-col gap-4'>
            {navLinks.map((Link)=>(
              /*rendering an list item for each link*/
              <li
              key ={ Link.id }
              className={`${
                /*here we can make the links highlight when the curson is on it and then onclicking get rerouted to that particular page*/
                active === Link.title 
                ? "text-white" : "text-secondary"
              } font-poppins font-medium cursor-pointer text-[16px]`}
              onClick={() => {
                setToggle(!toggle)
                setActive(Link.title)}}
              >
                <a href={`#${Link.id}`}>{Link.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      </div>

    </nav>
    )
}

export default Navbar