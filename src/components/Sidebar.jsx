import { useState } from "react";
import { NavLink } from "react-router-dom";
import {RiCloseLine} from "react-icons/ri";
import {logo} from "../assets";
import { links } from "../assets/constants";
import { HiOutlineMenu } from "react-icons/hi";

function NavLinks (){
  return (
    <div className="mt-10">
      {links.map((item)=>{
        return (
          <NavLink 
          key={item.name}
          to={item.to}
          className="flex flex-row justify-start items-center my-8 te-sm font-medium  text-gray-400 hover:text-cyan-400"
          onClick={()=> handleClick && handleClick()}
          >
            <item.icon className="w-6 h-6 mr-2"/>
            {item.name}
          </NavLink>
        );
      })}
    </div>
  );
}


const Sidebar = () => {
  const [mobileMenyOpen,setMobileMenyOpen] = useState(false);
  return(
    <>
      <div className=" md:flex hidden flex-col w-[240px] py-10 px-4 bg-[#1c182c]">
        <img src={logo} alt="logo" className=" w-full h-14 object-contain "/>
        <NavLinks />
      </div>
      <div className=" absolute md:hidden block top-6 right-3">
        {mobileMenyOpen ?
          <RiCloseLine 
          onClick={()=>{setMobileMenyOpen(false)}}
          className="w-6 h-6 text-white mr-2"/>
          :
          <HiOutlineMenu 
          onClick={()=>{setMobileMenyOpen(true)}}
          className="w-6 h-6 text-white mr-2" />
        }
      </div>
      <div className={`absolute top-0 h-screen w-2/3 bg-gradient-to-tl from-white/10 to-[#483d8b] backdrop-blur-lg z-10 p-6 md:hidden smooth-transition ${mobileMenyOpen ? 'left-0' : '-left-full'} `}>
        <img src={logo} alt="logo" className=" w-full h-14 object-contain "/>
        <NavLinks handleClick={()=>setMobileMenyOpen(false)}/>
      </div>
    </>
      
  );
}; 

export default Sidebar;
