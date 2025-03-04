import React, { useEffect,useState } from 'react'
import Logo from '../../assets/logo.png'
import {useDispatch,useSelector} from "react-redux"
import {useParams,useNavigate} from "react-router-dom"
import { getResetPassword, resetPassword } from '../../redux/apiCalls/passwordApiCall'
import {toast,ToastContainer} from "react-toastify"
function ResetPassword() {

  const [password,setPassword]=useState("")
  const dispatch=useDispatch()
  const {userId,token}=useParams()
  const {isError}=useSelector(state=>state.password)
  const navigate=useNavigate()

  useEffect(()=>{
    dispatch(getResetPassword(userId,token))
  },[userId,token])

  const formSubmitHandler=(e)=>{ 
    e.preventDefault()
   if(password.trim()==="") return toast.error("password is required")
   dispatch(resetPassword(password,{userId,token}))
 
  
  
  }

  return (
    <section className='flex items-center justify-center my-4'>
         <ToastContainer theme='colored'/>
    <div className=' bg-[#F5F5FC] w-[450px] h-auto rounded-lg p-5  '>
        <div className='flex items-center justify-center mb-6 flex flex-col gap-6'>
        <img src={Logo}/>
        <h3 className='text-2xl text-blue-700 font-bold'>Reset Password</h3>
        </div>
      {isError ? <h2>Not found</h2>
      :(<form onSubmit={formSubmitHandler} className='flex flex-col gap-6 mx-6'>
        
        <div className='flex flex-col gap-2 '> 
        <label className="text-sm uppercase tracking wide "for="password">New Password</label>
        <input  className=" w-full h-12 rounded-lg pl-2 text-sm border border-slate-300 bg-transparent outline-blue-500"
        id="password" type="password" placeholder='Enter your  new password'
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        />
        </div>
        <button className="bg-blue-700 rounded-lg text-white w-full h-12 text-sm cursor-pointer hover:bg-blue-600 hover:outline outline-2 outline-blue-600  outline-offset "type="submit">Submit</button>
       
    </form>)
  }
    </div>
    </section>
  )
}

export default ResetPassword