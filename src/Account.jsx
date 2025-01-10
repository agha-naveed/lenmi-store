import React from 'react'
import { Outlet } from 'react-router'
import logo from './assets/img/logo.webp'

export default function Account() {
  return (
    <div className='flex w-full min-h-screen h-full'>
      <div className='w-1/2 min-h-full bg-slate-800 grid justify-center content-center'>
        <img src={logo} className='w-44' alt="Lenmi Store Logo" />
      </div>
      <Outlet />
    </div>
  )
}