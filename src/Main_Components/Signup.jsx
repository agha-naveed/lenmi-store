import React from 'react'
import logo from '../assets/img/logo.webp'
import { Link } from 'react-router'

export default function Signup() {
  return (
    <div className='flex w-full min-h-screen h-full'>
        <div className='w-1/2 min-h-full bg-slate-800 grid justify-center content-center'>
            <img src={logo} className='w-44' alt="Lenmi Store Logo" />
        </div>

        <div className='w-full min-h-full grid justify-center content-center'>
            <form method='post'></form>
            <p>Already have an account? <Link to="/login">Login</Link></p>
        </div>
        
    </div>
  )
}