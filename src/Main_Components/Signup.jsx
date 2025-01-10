import React from 'react'
import logo from '../assets/img/logo.webp'
import { Form, Link } from 'react-router'
import { useForm } from 'react-hook-form';

export default function Signup() {

    const { register, handleSubmit, formState: { errors } } = useForm();


    const onSubmit = (data) => {
        // console.log(data)
        // const res = axios.post("http://localhost:7000/api/create-new-invoice", data)
        // .then(response => setMessage(response.data)).catch(err => console.warn(err))
        
    
        // if(!message) {
        //   setMessage(res.data);
        //   setTimeout(() => {
        //     navigate('/');
        //   }, 2000)
        // }
        // else {
        //   setMessage("Error Occured!");
        // }
      }

      function restrictSigns(event) {
        const char = event.key;
        if (char === '+' || char === '-') {
            event.preventDefault()
        }
      }

    return (
        <div className='flex w-full min-h-screen h-full'>
            <div className='w-1/2 min-h-full bg-slate-800 grid justify-center content-center'>
                <img src={logo} className='w-44' alt="Lenmi Store Logo" />
            </div>

            <div className='w-full min-h-full grid justify-center content-center'>
                
                <h2 className='text-4xl p-6 font-muli-bold text-center'>Signup</h2>
                
                <Form onSubmit={handleSubmit(onSubmit)} className='grid gap-2 font-muli-regular' method='POST'>
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
                        <label htmlFor="">Email</label>
                        <input type="email" placeholder='e.g: abc@xyz.com' className='h-9 px-2 rounded-md border border-gray-300' required {...register("email")} />
                    </div>
                    <div className='grid'>
                        <label htmlFor="">Phone Number</label>
                        <input type="number" onKeyDown={(e) => restrictSigns(e)}  className='h-9 px-2 rounded-md border border-gray-300' required {...register("phone_number", {min: 11})} />
                    </div>

                    <button type='submit' title='Sign up!' className='w-full h-10 transition-all rounded-md border font-muli-semibold bg-slate-800 text-white '>Sign up!</button>

                </Form>

                <p>Already have an account? <Link to="/login">Login</Link></p>
            </div>
            
        </div>
    )
}