import React, { useState } from 'react'
import Logo from '../../assets/logo.png'
import { Link ,useNavigate} from 'react-router-dom'
import {toast} from "react-toastify"
import {useDispatch,useSelector} from "react-redux"
import { registerUser } from '../../redux/apiCalls/authApiCall'
import Swal from 'sweetalert2'

function Register() {
  const dispatch=useDispatch();
  const {registerMessage}=useSelector(state=>state.auth)
  const Navigate=useNavigate()
    const [username,setUsername]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");



    const fromSubmitHandler=(e)=>{
     e.preventDefault();
     if(username.trim()==="") return toast.error("Username is required")
     if(email.trim()==="") return toast.error("email is required")
     if(password.trim()==="") return toast.error("password is required")
     dispatch(registerUser({username,email,password}))
    }


    

   
    if(registerMessage){
   
     Swal.fire({
      title:registerMessage ,
      icon: 'success'
    }).then(isOk=>{
     if(isOk){
      Navigate("/login")
     }
    })
    }
  return (
   
  
    <section className='flex items-center justify-center my-4'>
    <div className=' bg-[#F5F5FC] w-[450px] h-auto rounded-lg p-5  '>
        <div className='flex items-center justify-center mb-6 flex flex-col gap-6'>
        <img src={Logo}/>
        <h3 className='text-2xl text-blue-700 font-bold'>Create Account</h3>
        </div>
     
    <form onSubmit={fromSubmitHandler} className='flex flex-col gap-6 mx-6'>
    
        <div className='flex flex-col gap-2 '> 
        <label className="text-sm uppercase tracking wide "for="username">User Name</label>
        <input  className=" w-full h-12 rounded-lg pl-2 text-sm border border-slate-300 bg-transparent outline-blue-500"
        id="username" type="text" placeholder='Enter your username'
        value={username}
        onChange={(e)=>setUsername(e.target.value)}
        />
        </div>
        <div className='flex flex-col gap-2 '> 
        <label className="text-sm uppercase tracking wide "for="email">Email</label>
        <input  className=" w-full h-12 rounded-lg pl-2 text-sm border border-slate-300 bg-transparent outline-blue-500"
        id="email" type="email" placeholder='Enter your email'
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        />
        </div>
        <div className='flex flex-col gap-2 '> 
        <label className="text-sm uppercase tracking wide "for="password">Password</label>
        <input  className=" w-full h-12 rounded-lg pl-2 text-sm border border-slate-300 bg-transparent outline-blue-500"
        id="password" type="password" placeholder='Enter your password'
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        />
        </div>
        <button className="bg-blue-700 rounded-lg text-white w-full h-12 text-sm cursor-pointer hover:bg-blue-600 hover:outline outline-2 outline-blue-600  outline-offset "type="submit">Register</button>
        <div className=' flex  items-center justify-center'>
           <span className='text-sm'> Already have an account ?</span> <Link to="/login" className='text-blue-700 font-medium text-base'>Login</Link>
        </div>
    </form>
  
    </div>
    </section>
 
  )
}

export default Register