import React from 'react'
import logo from '../assets/img/logo.webp'
import { Link } from 'react-router'
import { useForm } from 'react-hook-form';

export default function Signup() {
    const { register, handleSubmit } = useForm();

    return (
        <div className='flex w-full min-h-screen h-full'>
            <div className='w-1/2 min-h-full bg-slate-800 grid justify-center content-center'>
                <img src={logo} className='w-44' alt="Lenmi Store Logo" />
            </div>

            <div className='w-full min-h-full grid justify-center content-center'>
                
                <h2 className='text-4xl font-muli-bold text-center'>Signup</h2>
                
                <form method='post'>
                    <div>
                        <label htmlFor="">First Name</label>
                        <input type="text" />
                    </div>
                </form>

                <p>Already have an account? <Link to="/login">Login</Link></p>
            </div>
            
        </div>
    )
}