import React from 'react'
import { Outlet } from 'react-router'
import logo from './assets/img/logo.webp'

export default function Account() {
  return (
    <div className='md:flex grid w-full min-h-screen h-full'>
      <div className='md:w-1/3 w-full md:min-h-screen h-32 bg-slate-800 grid justify-center content-center'>
        <img src={logo} className='w-44' alt="Lenmi Store Logo" />
      </div>
      <Outlet />
    </div>
  )
}