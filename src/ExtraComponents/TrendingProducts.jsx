import React from 'react'

export default function TrendingProducts() {
  return (
    <div className='w-[360px] h-full rounded-3xl p-5 bg-gray-200'>
        <div className='w-full justify-items-center grid gap-5'>
            <h3 className='text-2xl text-left w-full font-muli-bold tracking-[-1px] text-orangeClr'>Trending Products</h3>

            <div className='w-full h-auto rounded-3xl bg-white'>
                <div className='p-6'>
                    <div>
                        <div className='w-full h-[280px] rounded-3xl overflow-hidden'>
                            <img src="https://www.space-tech.co/cdn/shop/files/LE-30-Lifestyle_c501ee74-78ea-4157-8b02-e723ca8eab44_2048x2048.jpg?v=1735718661" alt="" className='w-full h-full object-cover' />
                        </div>
                        <span className='text-black w-full flex gap-1 items-end justify-center font-muli-semibold'>
                            PKR
                            <span className='text-[22px] relative top-[2px]'>1,116</span>
                            <span className='bg-slate-800 text-white ml-1 relative top-[-3px] text-[12px] px-1 rounded-[4px] '>-72%</span>
                        </span>
                    </div>

                    <div></div>
                </div>
            </div>
            
        </div>

    </div>
  )
}
