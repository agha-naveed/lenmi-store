import React, { useState } from 'react'
import { Form, Link } from 'react-router'
import { useForm } from 'react-hook-form';
import axios from 'axios';

export default function Signup() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    let [message, setMessage] = useState("")


    const onSubmit = (data) => {
        console.log(data)
        const res = axios.post("http://localhost:3000/api/user-signup", data)
        .then(response => setMessage(response.data)).catch(err => console.warn(err))
        
        if(!message) {
          setMessage(res.data);
        }
        else {
          setMessage("Error Occured!");
        }
    }

      function restrictSigns(event) {
        const char = event.key;
        if (char === '+' || char === '-') {
            event.preventDefault()
        }
      }

    return (
        <>

            <div className='w-full min-h-full grid justify-center content-center'>
                
                <h2 className='text-4xl p-6 font-muli-bold text-center'>Signup</h2>
                
                <Form onSubmit={handleSubmit(onSubmit)} className='grid gap-2 font-muli-regular border border-gray-400 p-5 rounded-md' method='POST'>
                    <div className='flex gap-2'>
                        <div className='grid'>
                            <label htmlFor="">First Name</label>
                            <input type="text" className='h-9 px-2 rounded-md border border-gray-300' required {...register("first_name")} />
                        </div>
                        <div className='grid'>
                            <label htmlFor="">Last Name</label>
                            <input type="text" className='h-9 px-2 rounded-md border border-gray-300' required {...register("last_name")} />
                        </div>
                    </div>
                    <div className='grid'>
                        <label htmlFor="">Phone Number</label>
                        <input type="number" onKeyDown={(e) => restrictSigns(e)}  className='h-9 px-2 rounded-md border border-gray-300' required {...register("phone_number", {min: 11})} />
                    </div>
                    <div className='grid'>
                        <label htmlFor="">Email</label>
                        <input type="email" placeholder='e.g: abc@xyz.com' className='h-9 px-2 rounded-md border border-gray-300' required {...register("email")} />
                    </div>
                    <div className='grid'>
                        <label htmlFor="">Password</label>
                        <input type="password" className='h-9 px-2 rounded-md border border-gray-300' required {...register("password")} />
                    </div>

                    <div className='grid py-2'>
                        <label htmlFor="">Account Type:</label>
                        <div className='flex gap-5'>
                            <div className='flex gap-1'>
                                <input type="radio" id='personal-account' required {...register("account_type")} />
                                <label htmlFor="personal-account">Personal</label>
                            </div>
                            <div className='flex gap-1'>
                                <input type="radio" id='business-account' required {...register("account_type")} />
                                <label htmlFor="business-account">Business</label>
                            </div>
                        </div>
                    </div>

                    <button type='submit' title='Sign up!' className='w-full h-10 transition-all rounded-md border font-muli-semibold bg-slate-800 hover:bg-slate-900 text-white '>Sign up!</button>

                </Form>

                <p className='py-2 text-[18px]' title='Login if already have an account'>Already have an account? <Link to="/account" className='text-red-400 hover:underline'>Login</Link></p>
            </div>
            
        </>
    )
}