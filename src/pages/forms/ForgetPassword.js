import React, { useState } from 'react'
import Logo from '../../assets/logo.png'
import { toast ,ToastContainer} from 'react-toastify'
import {useDispatch} from "react-redux"
import { forgotPassword } from '../../redux/apiCalls/passwordApiCall'
function ForgotPassword() {

  const [email,setEmail]=useState("")
  const dispatch=useDispatch()

  const formSubmitHandler=(e)=>{ 
    e.preventDefault()
   if(email.trim()==="") return toast.error("email is required")
   dispatch(forgotPassword(email))
  }


  return (
    <section className='flex items-center justify-center my-4'>
              <ToastContainer theme='colored'/>
    <div className=' bg-[#F5F5FC] w-[450px] h-auto rounded-lg p-5  '>
        <div className='flex items-center justify-center mb-6 flex flex-col gap-6'>
        <img src={Logo}/>
        <h3 className='text-2xl text-blue-700 font-bold'>Forgot Password</h3>
        </div>
     
    <form  onSubmit={formSubmitHandler} className='flex flex-col gap-6 mx-6'>
        <div className='flex flex-col gap-2 '> 
        <label className="text-sm uppercase tracking wide "for="email">Email</label>
        <input  className=" w-full h-12 rounded-lg pl-2 text-sm border border-slate-300 bg-transparent outline-blue-500"
        id="email" type="email" placeholder='Enter your email'
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        />
        </div>
      
        <button className="bg-blue-700 rounded-lg text-white w-full h-12 text-sm cursor-pointer hover:bg-blue-600 hover:outline outline-2 outline-blue-600  outline-offset "type="submit">Submit</button>
       
    </form>
  
    </div>
    </section>
  )
}

export default ForgotPassword