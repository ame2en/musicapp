import React, { useEffect } from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { logo } from '../assets';
import { links } from '../assets/constants';
import {RiCloseLine} from "react-icons/ri"
import { HiOutlineMenu } from 'react-icons/hi';
import { useMediaQuery } from 'react-responsive';


const NavLinks = ()=>{
  return (
    <div className='mt-10 flex flex-col'>
      {links.map((link,i)=>(
        <NavLink
          key={i}
         className="my-4 text-sm font-medium justify-start items-center text-gray-400 hover:text-cyan-400 flex flex-row"
          onClick={()=> handleclick && handleclick()}
         >
          <link.icon className='w-6 h-6 mr-2' />
          {link.name}
          </NavLink>
      ))}
    </div>
  );
}

const Sidebar = () => {

  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

  useEffect(()=>{
    window.scrollTo(0, 0);
  },[isMobile]);

  const [mobilemenu,setMobilemenu] = useState(false);

  return (
    <>
      <div className='md:flex hidden flex-col w-[240px] py-10 px-4 bg-[#191624]'>
        <img src={logo} alt="logo"   className=' w-full h-14 object-contain'/>
        <NavLinks />
      </div>

      <div className='absolute md:hidden block top-6 right-3'>
        {
          mobilemenu ? (
            <RiCloseLine onClick= {()=> setMobilemenu(false)} className= " w-6 h-6 text-white mr-2 "/>
          ) :
          <HiOutlineMenu onClick= {()=> setMobilemenu(true)} className= " w-6 h-6 text-white mr-2 "/>
        }
      </div>

      <div className={` absolute top-0  h-screen w-2/3 bg-gradient-to-tl from-white/10 to-[#483d8b] backdrop-blur-lg z-10 p-6 md:hidden 
      ${mobilemenu ? 'left-0' : ' -left-full'}`}>
        <img src={logo} alt="" className='w-full h-14 object-contain'/>
        <NavLinks onClick= {()=> setMobilemenu(false)} />
      </div>
    </>
  )
}

export default Sidebar