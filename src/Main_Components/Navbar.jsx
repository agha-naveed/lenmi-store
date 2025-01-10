import React from 'react'
import { Link } from 'react-router';
import { FiSearch } from "react-icons/fi";
import { TiShoppingCart } from "react-icons/ti";
import { MdOutlineAccountCircle } from "react-icons/md";
import logo from '../assets/img/logo.webp'
import { FaBars } from "react-icons/fa6";


export default function Navbar() {
  return (
    <div className='w-full md:h-[116px] h-[130px] bg-slate-800 py-3'>
        <div className="container mx-auto">
            <div className='flex w-full justify-between'>
                <img decoding='async' className='w-48' src={logo} alt="Lenmi Store Logo" />
                
                <div className='md:flex hidden w-1/2'>
                    <input type="text" placeholder='What are you looking for?' className='pl-3 pr-[53px] h-[44px] w-full rounded-md outline-none font-muli-regular' />
                    <FiSearch title='Search' className='text-xl cursor-pointer p-2 top-[2px] rounded-md w-11 h-10 text-white bg-slate-800 relative -left-11' />
                </div>

                <div className='text-white flex text-[34px] gap-2'>
                    <TiShoppingCart className='cursor-pointer' title='Cart' />
                    <MdOutlineAccountCircle className='cursor-pointer' title='Account' />
                </div>
            </div>


            <div className='md:hidden flex py-5'>
                <FaBars className='text-white' />
                <div className='flex w-full'>
                    <input type="text" placeholder='What are you looking for?' className='relative left-5 pl-3 pr-[53px] h-[44px] w-full rounded-md outline-none font-muli-regular' />
                    <FiSearch title='Search' className='text-xl cursor-pointer p-2 top-[2px] rounded-md w-11 h-10 text-white bg-slate-800 relative -left-6' />
                </div>
            </div>

            <nav className='content-center md:block hidden'>
                <ul className='text-white flex w-full justify-center p-3 gap-2'>
                    <li className='flex'>
                        <Link to={"/"} className='py-2 px-4 transition-all underline-offset-0 hover:underline  hover:underline-offset-8'>Home</Link>
                    </li>
                    <li className='flex'>
                    <Link to={"/"} className='py-2 px-4 transition-all underline-offset-0 hover:underline  hover:underline-offset-8'>Products</Link>
                    </li>
                    <li className='flex'>
                    <Link to={"/"} className='py-2 px-4 transition-all underline-offset-0 hover:underline  hover:underline-offset-8'>Super Deals</Link>
                    </li>
                </ul>
            </nav>
            
        </div>
    </div>
  )
}