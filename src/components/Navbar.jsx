import React, {useState} from 'react'
import { AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from "react-icons/ai"
import { BsFillCartFill } from 'react-icons/bs'
import { FaAddressBook, FaLock } from 'react-icons/fa'
import { TbBrandHackerrank, TbHome, TbPageBreak, TbPhoneCall, TbShoppingCartDollar } from 'react-icons/tb'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  return ( <div className='mx-auto justify-between items-center p-4 bg-black text-white flex'>
     {/* Left content */}
      <div className='flex items-center '>
        <div onClick={()=> setNav(!nav)} className=" cursor-pointer"> 
          <AiOutlineMenu size={30} />
        </div>
        <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>Food
          <span className='text-yellow-300 font-bold ml-1'>Palace</span>
        </h1>
        <div className='bg-gray-800 py-2 pl-4 pb-2 rounded-full ml-4 width-[200px] sm:w-[400px] lg:w-[500px] flex items-center'>
          <AiOutlineSearch size={20} />
          <input className="bg-transparent focus:outline-none w-full p-2" type="text" placeholder='Search Items...' />
          
        </div>    

      </div>

      {/* Right content */}
      <div className='lg:flex items-center'>
        <button className='bg-yellow-300 text-black lg:flex sm:hidden w-full items-flex p-3 rounded-full text-[16px] font-bold'>
          <BsFillCartFill size={23} className='mr-1' />Cart
        </button>
        
         </div>



      {/* Mobile */}
      {/* Overlay */}
      {nav ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div> : ''}
        

      {/* Side Drawer */}

      <div className={nav ? 'bg-yellow-400 fixed top-0 left-0 w-[300px] h-screen z-10 duration-300' : 'bg-yellow-400 fixed top-0 left-[-100%] w-[300px] h-screen z-10 duration-300'}>
        <AiOutlineClose size={30} onClick={()=> setNav(!nav)} className='text-black absolute right-4 top-4 cursor-pointer' />
        <h2 className='text-black text-2xl p-4'>Food<span className='ml-1 font-bold'>Palace</span></h2>
        <nav>
          <ul className='flex flex-col p-4 text-black'>
            <li className='flex text-xl py-4 border-b-black cursor-pointer'><TbHome size={25} className='mr-4'/> Home</li>
            <li className='text-xl py-4 border-black cursor-pointer flex'><TbPageBreak size={25} className='mr-4'/>About</li>
            <li className='text-xl py-4 border-b-black cursor-pointer flex'><TbPhoneCall size={25} className='mr-4'/>Contact</li>
            <li className='text-xl py-4 border-b-black cursor-pointer flex'><FaLock size={25} className='mr-4'/>Privacy Policy</li>
            <li className='text-xl py-4 border-b-black cursor-pointer flex'><FaAddressBook size={25} className='mr-4'/>Terms & Conditions</li>
          </ul>
        </nav>
      </div>
  
  
  
  
  </div>
  )
}

export default Navbar