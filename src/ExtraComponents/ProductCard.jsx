import React from 'react'
import { FaStar } from "react-icons/fa";

export default function ProductCard() {
  return (
    <div className='bg-white border border-black rounded-lg w-52 h-72 p-2'>
        <div className='object-cover w-full'>
            <img src="https://typeshop.pk/wp-content/uploads/2024/09/749789-product-0-i-638518506623874710_06458751-c09a-4dec-b82f-416beff7e94f.webp" className='w-full h-[150px] rounded-lg object-cover' alt="" />
        </div>
        <div>
            <h2 className='text-[14.3px] font-muli-regular ellipsis'>14" inch Laptop with 512GB SSD</h2>
            <div className='flex text-[13px] my-1'>
                <div className='flex'>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                </div>
                <p className='text-gray-600'><span>10000+</span> sold</p>
            </div>

            <div className='flex gap-2'>
                <div className='font-muli-bold tracking-[-2px]'>PKR <span className='text-[28px]'>833</span></div>
                <span className='line-through content-end text-[14px] relative bottom-1 text-gray-500'>PKR 980</span>
            </div>
        </div>
    </div>
  )
}
