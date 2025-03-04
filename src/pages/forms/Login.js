import React, { useState } from 'react'
import Logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import {toast,ToastContainer} from "react-toastify"
import { useDispatch } from 'react-redux'
import { loginUser } from '../../redux/apiCalls/authApiCall'

function Login() {

  const [email,setEmail]=useState("")
  const[password,setPassword]=useState("")
  const dispatch=useDispatch()
  const fromSubmitHandler=(e)=>{
    e.preventDefault()
    if(email.trim()==="") return  toast.error("Email is required")
    if(password.trim()==="") return  toast.error("Password is required")
    dispatch(loginUser({email,password}))
  }
  return (
    <section className='flex items-center justify-center my-4'>
        <ToastContainer theme='colored'/>
    <div className=' bg-[#F5F5FC] w-[450px] h-auto rounded-lg p-5  '>
        <div className='flex items-center justify-center mb-6 flex flex-col gap-6'>
        <img src={Logo}/>
        <h3 className='text-2xl text-blue-700 font-bold'>Login</h3>
        </div>
     
    <form  onSubmit={fromSubmitHandler} className='flex flex-col gap-6 mx-6'>
        <div className='flex flex-col gap-2 '> 
        <label className="text-sm uppercase tracking wide "for="email">Email</label>
        <input 
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
         className=" w-full h-12 rounded-lg pl-2 text-sm border border-slate-300 bg-transparent outline-blue-500"id="email" type="email" placeholder='Enter your email'/>
        </div>
        <div className='flex flex-col gap-2 '> 
        <label className="text-sm uppercase tracking wide "for="password">Password</label>
        <input 
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
         className=" w-full h-12 rounded-lg pl-2 text-sm border border-slate-300 bg-transparent outline-blue-500"id="password" type="password" placeholder='Enter your password'/>
        </div>
        <button className="bg-blue-700 rounded-lg text-white w-full h-12 text-sm cursor-pointer hover:bg-blue-600 hover:outline outline-2 outline-blue-600  outline-offset "type="submit">Login</button>
        <div className='flex flex-col gap-2 items-center justify-center'>
        <Link to="/forget-password" className='text-blue-700 font-medium text-base'>forget password ?</Link>
      
           <span className='text-sm'>Don’t have account ?   <Link className='text-blue-700 font-medium text-base' to="/register">Sign Up</Link></span>
           
        </div>
    </form>
  
    </div>
    </section>
  )
}

export default Login