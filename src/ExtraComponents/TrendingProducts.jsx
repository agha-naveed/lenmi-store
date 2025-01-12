import React from 'react'

export default function TrendingProducts() {
  return (
    <div className='w-[260px] h-full border border-black rounded-lg p-2'>
        <div className='w-full justify-items-center grid gap-5'>
            <div className='w-[240px] h-[230px] p-2 group transition_2 rounded-lg overflow-hidden border relative cursor-pointer'>
                <img src="https://img.drz.lazcdn.com/static/pk/p/7b2a2355148607d8c12d443afbae210b.jpg_720x720q80.jpg_.webp" className='w-full h-full object-cover transition_2' />
            </div>

            <div className='flex gap-3'>
                <div className='w-full h-full group transition_2 rounded-lg overflow-hidden border relative cursor-pointer'>
                    <img src="https://typeshop.pk/wp-content/uploads/2024/09/749789-product-0-i-638518506623874710_06458751-c09a-4dec-b82f-416beff7e94f.webp" className='w-full h-full object-cover transition_2' />
                </div>
                <div className='w-full h-full group transition_2 rounded-lg overflow-hidden border relative cursor-pointer'>
                    <img src="https://typeshop.pk/wp-content/uploads/2024/09/749789-product-0-i-638518506623874710_06458751-c09a-4dec-b82f-416beff7e94f.webp" className='w-full h-full object-cover transition_2' />
                </div>
            </div>
        </div>

    </div>
  )
}
