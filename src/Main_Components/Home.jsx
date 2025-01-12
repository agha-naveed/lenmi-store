import React from 'react'
import Slider from '../ExtraComponents/Slider'
import ProductCard from '../ExtraComponents/ProductCard'
import TrendingProducts from '../ExtraComponents/TrendingProducts'

export default function Home() {
  return (
    <section>
      <Slider />
      <div className='container mx-auto'>
        <TrendingProducts />
        <div className='flex flex-wrap gap-5 py-14'>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
      
    </section>
  )
}