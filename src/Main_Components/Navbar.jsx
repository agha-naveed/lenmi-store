import React from 'react'
import { Link } from 'react-router';
import { FiSearch } from "react-icons/fi";
import { TiShoppingCart } from "react-icons/ti";
import { MdOutlineAccountCircle } from "react-icons/md";
import logo from '../assets/img/logo.webp'
import { FaBars } from "react-icons/fa6";


export default function Navbar() {
  return (
    <div className='w-full md:h-[130px] h-[135px] bg-slate-800 py-3'>
        <div className="container mx-auto">
            <div className='flex w-full justify-between md:px-0 px-3'>
                <img decoding='async' className='md:w-40 w-32' src={logo} alt="Lenmi Store Logo" />
                
                <div className='md:flex hidden w-1/2'>
                    <input type="text" placeholder='What are you looking for?' className='pl-3 pr-[53px] h-[44px] w-full rounded-md outline-none font-muli-regular' />
                    <FiSearch title='Search' className='text-xl cursor-pointer p-2 top-[2px] rounded-md w-11 h-10 text-white bg-slate-800 relative -left-11' />
                </div>

                <div className='text-white flex gap-4'>
                    <div className='relative group'>
                        <MdOutlineAccountCircle className='account text-[34px] cursor-pointer' title='Account' />

                        <div className='login-signup-popup scale-y-0 group-hover:scale-y-100 transition_1 absolute -left-24 z-10 w-52 px-[6px] py-2 rounded-[10px] bg-white text-black'>
                            <div className="grid font-muli-regular gap-1">
                                <button className='w-full h-[40px] bg-slate-800 transition-all hover:bg-white hover:text-black hover:border border-black text-white rounded-[10px]'>Login</button>
                                <button className='w-full h-[30px] transition-all hover:underline rounded-[10px]'>Signup</button>
                            </div>
                        </div>
                    </div>

                    <TiShoppingCart className='cursor-pointer text-[34px]' title='Cart' />
                </div>
            </div>


            <div className='md:hidden flex py-5 px-3'>
                <FaBars className='text-white text-[38px] relative left-1' />
                <div className='flex w-full'>
                    <input type="text" placeholder='What are you looking for?' className='relative left-7 pl-3 pr-[53px] h-[44px] w-full rounded-md outline-none font-muli-regular' />
                    <FiSearch title='Search' className='text-xl cursor-pointer p-2 top-[2px] rounded-md w-11 h-10 text-white bg-slate-800 relative -left-4' />
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
                    <li className='flex'>
                        <Link to={"/"} className='py-2 px-4 transition-all underline-offset-0 hover:underline  hover:underline-offset-8'>Sell</Link>
                    </li>
                    
                </ul>
            </nav>
            
        </div>
    </div>
  )
}