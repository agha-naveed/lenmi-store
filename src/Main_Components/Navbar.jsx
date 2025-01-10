import React from 'react'
import { Link } from 'react-router';
import { FiSearch } from "react-icons/fi";
import { TiShoppingCart } from "react-icons/ti";
import { MdOutlineAccountCircle } from "react-icons/md";
import logo from '../assets/img/logo.webp'


export default function Navbar() {
  return (
    <div className='w-full h-[116px] bg-slate-800 py-2'>
        <div className="container mx-auto">
            <div className='flex w-full justify-between'>
                <img decoding='async' className='w-48' src={logo} alt="Lenmi Store Logo" />
                
                <div className='flex w-1/2'>
                    <input type="text" placeholder='What are you looking for?' className='pl-3 pr-[53px] h-[44px] w-full rounded-md outline-none font-muli-regular' />
                    <FiSearch title='Search' className='text-xl cursor-pointer p-2 top-[2px] rounded-md w-11 h-10 text-white bg-slate-800 relative -left-11' />
                </div>

                <div className='text-white flex text-[34px] gap-2'>
                    <TiShoppingCart className='cursor-pointer' title='Cart' />
                    <MdOutlineAccountCircle className='cursor-pointer' title='Account' />
                </div>
            </div>


            <nav className='content-center'>
                <ul className='text-white flex w-full justify-center p-3 gap-2'>
                    <li className='flex'>
                        <Link to={"/"} className='py-2 px-4'>Home</Link>
                    </li>
                    <li className='flex'>
                        <Link to={"/"} className='py-2 px-4'>Products</Link>
                    </li>
                    <li className='flex'>
                        <Link to={"/"} className='py-2 px-4'>Super Deals</Link>
                    </li>
                </ul>
            </nav>
            
        </div>
    </div>
  )
}