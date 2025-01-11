import React, { useState } from 'react'
import { Form, Link } from 'react-router'
import { useForm } from 'react-hook-form';
import axios from 'axios';

export default function Login() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    let [message, setMessage] = useState("")

    const onSubmit = (data) => {
        console.log(data)
        const res = axios.post("http://localhost:3000/api/user-signup", data)
        .then(response => setMessage(response.data)).catch(err => console.warn(err))
        
    
        if(!message) {
          setMessage(res.data);
          setTimeout(() => {
            navigate('/');
          }, 2000)
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
                
                <h2 className='text-4xl p-6 font-muli-bold text-center'>Login</h2>
                
                <Form onSubmit={handleSubmit(onSubmit)} className='grid gap-2 font-muli-regular border border-gray-400 p-5 rounded-md' method='POST'>
                    
                  <div className='grid'>
                    <label htmlFor="">Email</label>
                    <input type="email" placeholder='e.g: abc@xyz.com' className='w-[300px] h-9 px-2 rounded-md border border-gray-300' required {...register("email")} />
                  </div>

                  <div className='grid'>
                    <label htmlFor="">Password</label>
                    <input type="password" className='w-[300px] h-9 px-2 rounded-md border border-gray-300' required {...register("password")} />
                  </div>

                  <button type='submit' title='Login' className='w-full h-10 transition-all rounded-md border font-muli-semibold bg-slate-800 hover:bg-slate-900 text-white '>Login</button>

                </Form>

                <p className='py-2 text-[18px]' title='Click to signup'>Create an account? <Link to="/account/signup" className='text-red-400 hover:underline'>Signup</Link></p>
            </div>
            
        </>
    )
}