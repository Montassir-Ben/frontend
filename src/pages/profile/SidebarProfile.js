import React, {  useState } from 'react'
import {toast,ToastContainer} from "react-toastify"
import {useDispatch} from "react-redux"
import {Link} from "react-router-dom"
import {BsFillCameraFill,BsFillPersonFill,BsFilePost} from "react-icons/bs"
import  {FaRegComments} from "react-icons/fa"
import { uploadProfilePhoto } from '../../redux/apiCalls/profileApiCall'


function SidebarProfile({profile,active,setActive}) { 
  const [file,setFile]=useState(null)  
  const dispatch=useDispatch()
  
  const formSubmitHandler=(e)=>{
    e.preventDefault()
    if(!file) return toast.warning("ther is no file")
    const formData=new FormData()
    formData.append("image",file)
    dispatch(uploadProfilePhoto(formData))
  }
  
  return (

      <div className=' w-full bg-[#f6f6f9] rounded-lg py-8  '>
          <ToastContainer theme='colored'/>
        <div className='flex flex-col  items-center justify-center gap-4 px-6 '> 
          <div  className=' relative '>
          <img  className="w-[120px] h-[120px] rounded-full object-cover " 
           src={file ? URL.createObjectURL(file)  :  profile?.profilePhoto.url}/>
           <form onSubmit={formSubmitHandler}>
            <abbr>
              <label for="file" className='absolute top-[80px] right-[5px] text-xl bg-[#3756f7] text-white rounded-full flex items-center justify-center  w-[40px] h-[40px] '>
              <BsFillCameraFill/></label>
            </abbr>
            <input style={{display:"none"}}   type="file" id="file" onChange={(e)=>setFile(e.target.files[0])}/>
            <button  className='absolute top-[85px] right-[-90px] w-[80px] h-[30px] rounded-lg bg-[#3756f7] text-white' >Uplode</button>
           </form>
          </div>
          <h2 className='text-lg font-medium  text-[#3756f7] tracking-tight'>{profile?.username}</h2>
          <p className='text-base font-normal text-gray-500'>{profile?.bio}</p>
          <p className='text-base font-normal text-gray-500'>{profile?.email}</p>
          <div>
           <span className='text-[#3756f7] text-base font-normal'>Date Joined:{new Date(profile?.createdAt).toDateString()}</span>
          </div>
          </div>  
          
    
        <hr className='my-6'/>

        <div className='flex flex-col gap-4 text-center text-[#3756f7]  text-lg font-semibold '>
        <div className={`${ active ==="profile" 
                           && "bg-[#3756f7] text-white "
                          
          }
          w-full h-[45px] flex items-center pl-28  gap-2 `}>
        <BsFillPersonFill/> 
        <Link to={`/profile/${profile?._id}`}>Profile</Link>
        </div>

        <div  className={`${ active ==="post" 
                          && "bg-[#3756f7] text-white "
                          
          }w-full h-[45px] flex items-center pl-28 gap-2`} >
          <BsFilePost/>
         <Link to={`/profile/${profile?._id}/liste-post`}>Posts</Link>
        </div>
        
      </div>
       
      </div>
  
  )
}

export default SidebarProfile