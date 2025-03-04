import React,{useEffect,useState} from 'react'
import {useDispatch,useSelector} from "react-redux"
import { useParams ,useNavigate} from "react-router-dom"
import {getUserProfile, updateProfile} from "../../redux/apiCalls/profileApiCall"
import SidebarProfile from './SidebarProfile'
import {toast,ToastContainer} from "react-toastify"
function Profile() {

    const {id}=useParams()
    const dispatch=useDispatch()
    const {profile}=useSelector(state=>state.profile)

    useEffect(()=>{
      dispatch(getUserProfile(id))
      window.scrollTo(0,0)
    },[id])
    
  
    const navigate=useNavigate()

    const [username,setUsername]=useState(profile?.username)
    const[bio,setBio]=useState(profile?.bio)
    const [active,setActive]=useState("profile")

    const formSubmitHandler=(e)=>{
  
        e.preventDefault()

        if(username.trim()==="") return toast.error("username is required")
        if(bio.trim()==="") return toast.error("bio is required")
    
        dispatch(updateProfile(profile?._id,{username,bio}))
     
        
      }
  return (
    <div className='w-full flex flex-col lg:flex-row gap-4'>
        <ToastContainer theme='colored'/>
    <div className='w-full lg:w-[30%]'>
     <SidebarProfile profile={profile} active={active} setActive={setActive}/>
    </div>
<div className='w-full lg:w-[70%]   bg-[#f6f6f9] rounded-lg px-6 py-8 mr-8'>
         <h3 className='text-[#3756f7] text-2xl  font-bold pb-8'>General Info</h3>  
         <form  onSubmit={formSubmitHandler}
      className=' w-full flex flex-col gap-6 '>
       <div className=' w-full flex flex-col lg:flex-row gap-2'>
       <div className='w-full  lg:w-1/2 flex flex-col gap-2 '> 
        <label className="text-sm uppercase tracking wide "for="email">Username</label>
         <input  className=" w-full h-12 rounded-lg pl-2 text-sm border border-slate-300 bg-transparent outline-blue-500"
          value={username}
          onChange={(e)=>setUsername(e.target.value)}
         />
       </div>
       <div className='w-full lg:w-1/2 flex flex-col gap-2 '> 
        <label className="text-sm uppercase tracking wide "for="email">Bio</label>
         <input  className=" w-full h-12 rounded-lg pl-2 text-sm border border-slate-300 bg-transparent outline-blue-500"
           value={bio}
           onChange={(e)=>setBio(e.target.value)}
         />
       </div>
       </div>
   
        <div className=' flex flex-col  lg:flex-row gap-2'>
         <button type="submit" className='w-full lg:w-[190px] h-[50px] bg-[#3756f7] rounded-lg text-white text-center font-normal text-base border-2 border-[#3756f7] tracking-wide uppercase'>Update Info</button>
         <button className='w-full lg:w-[190px] h-[50px] bg-white rounded-lg text-[#3756f7] text-center font-normal text-base border-2 border-[#3756f7] tracking-wide uppercase hover:text-white hover:bg-[#3756f7] duration-300 ' onClick={()=>navigate(`/view-profile/${profile?._id}`)}>View Profile</button>

        </div>

       

     </form>
   
       
    </div>
    </div>
  )
}

export default Profile