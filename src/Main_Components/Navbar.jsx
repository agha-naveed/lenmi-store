import React from 'react'
import { FiSearch } from "react-icons/fi";
import { TiShoppingCart } from "react-icons/ti";
import { MdOutlineAccountCircle } from "react-icons/md";


export default function Navbar() {
  return (
    <div className='w-full h-36 bg-slate-800 py-2'>
        <div className="container mx-auto">
            <div className='flex w-full justify-between'>
                <div className='logo text-white text-[25px]'>Lenmi Store</div>
                
                <div className='flex w-1/2'>
                    <input type="text" className='px-2 h-10 w-full rounded-md outline-none' />
                    <FiSearch className='text-xl p-2 top-[2px] rounded-md w-9 h-9 text-white bg-slate-800 relative -left-9' />
                </div>

                <div className='text-white flex text-3xl'>
                    <TiShoppingCart />
                    <MdOutlineAccountCircle />
                </div>
            </div>
        </div>
    </div>
  )
}