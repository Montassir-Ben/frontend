import React ,{useState} from 'react'
import {useDispatch} from "react-redux"
import { updateProfile } from '../../redux/apiCalls/profileApiCall'
import {useLocation} from "react-router-dom"
import Profile from './Profile'
function UpdateProfile(props) {
    const location=useLocation()
    const profile=location.state?.profile
    
    const dispatch=useDispatch()
    const [username,setUsername]=useState(profile?.username)
    const[bio,setBio]=useState(profile?.bio)
    const formSubmitHandler=(e)=>{
      
        e.preventDefault()
    
        dispatch(updateProfile(profile?._id,{username,bio}))
     
        
      }
    
  return (
    <div className='w-full flex flex-col lg:flex-row gap-4'>
      <div className='w-full lg:w-[30%]'>
       <Profile/>
      </div>

    <div className='w-full lg:w-[70%]   bg-[#f6f6f9] rounded-lg px-6 py-8 mr-8'>
         <h3 className='text-[#3756f7] text-2xl  font-bold pb-8'>General Info</h3>  
         <form  onSubmit={formSubmitHandler}
      className=' w-full flex flex-col gap-6 '>
       <div className=' w-full flex flex-row gap-2'>
       <div className=' w-1/2 flex flex-col gap-2 '> 
        <label className="text-sm uppercase tracking wide "for="email">Username</label>
         <input  className=" w-full h-12 rounded-lg pl-2 text-sm border border-slate-300 bg-transparent outline-blue-500"
          value={username}
          onChange={(e)=>setUsername(e.target.value)}
         />
       </div>
       <div className='w-1/2 flex flex-col gap-2 '> 
        <label className="text-sm uppercase tracking wide "for="email">Bio</label>
         <input  className=" w-full h-12 rounded-lg pl-2 text-sm border border-slate-300 bg-transparent outline-blue-500"
           value={bio}
           onChange={(e)=>setBio(e.target.value)}
         />
       </div>
       </div>
   
        <div className=' flex gap-2'>
         <button type="submit" className='w-[190px] h-[50px] bg-[#3756f7] rounded-lg text-white text-center font-normal text-base border-2 border-[#3756f7] tracking-wide uppercase'>Update Info</button>
         <button className='w-[190px] h-[50px] bg-white rounded-lg text-[#3756f7] text-center font-normal text-base border-2 border-[#3756f7] tracking-wide uppercase hover:text-white hover:bg-[#3756f7] duration-300 '>Change password</button>

        </div>

       

     </form>
   
       
    </div>
    </div>
  )
}

export default UpdateProfile