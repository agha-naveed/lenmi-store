import React from 'react'
import { FiSearch } from "react-icons/fi";
import { TiShoppingCart } from "react-icons/ti";
import { MdOutlineAccountCircle } from "react-icons/md";


export default function Navbar() {
  return (
    <div className='w-full h-36 bg-slate-800'>
        <div className='flex'>
            <div className='logo text-white text-3xl'>Lenmi Store</div>
            
            <div className='flex'>
                <input type="text" className='px-2 rounded-md outline-none' />
                <FiSearch className='text-2xl text-white bg-slate-800' />
            </div>

            <div className='text-white flex text-3xl'>
                <TiShoppingCart />
                <MdOutlineAccountCircle />
            </div>
        </div>
    </div>
  )
}