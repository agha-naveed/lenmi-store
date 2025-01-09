import React from 'react'
import { FiSearch } from "react-icons/fi";
import { TiShoppingCart } from "react-icons/ti";
import { MdOutlineAccountCircle } from "react-icons/md";


export default function Navbar() {
  return (
    <div className='w-full h-36 bg-slate-800 py-2'>
        <div className="container mx-auto">
            <div className='flex w-full justify-between'>
                <div className='logo text-white text-[25px] font-muli-bold'>Lenmi Store</div>
                
                <div className='flex w-1/2'>
                    <input type="text" placeholder='What are you looking for?' className='pl-3 pr-[53px] h-10 w-full rounded-md outline-none font-muli-regular' />
                    <FiSearch title='Search' className='text-xl cursor-pointer p-2 top-[2px] rounded-md w-11 h-9 text-white bg-slate-800 relative -left-11' />
                </div>

                <div className='text-white flex text-[34px] gap-2'>
                    <TiShoppingCart />
                    <MdOutlineAccountCircle />
                </div>
            </div>
        </div>
    </div>
  )
}