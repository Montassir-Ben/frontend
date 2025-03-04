import React from 'react'
import img from "../../assets/lifestyle.jpg"
import { Link } from 'react-router-dom'
import profile from "../../assets/p7.jpg"
import {FaCalendar} from "react-icons/fa"
import { useNavigate } from 'react-router-dom'

function PostItem({post}) {
  const navigate=useNavigate()
  return (
    <div className='w-full h-auto py-6 px-4 lg:px-8 flex flex-col gap-4 '>
    <div className=' w-full rounded-lg overflow-hidden '>
     <img className='w-full h-40 lg:h-60 object-cover' src={post?.image.url}/>
    </div>
    <div className='w-full mt-2  lg:mt-5'>
        <h3 className=' text-md :text-xl font-bold  font-titleFont  cursor-pointer hover:text-[#3756f7]' onClick={()=>navigate("/post")}>{post?.title}</h3>
    </div>
    <div className='  flex flex-col  lg:flex-row  gap-4 text-sm text-[#3756f7]'>
        <div className='flex items-center gap-2'>
            <img className=' rounded-full  w-[30px] h-[30px] object-cover' src={post?.user.profilePhoto.url}/>
            <Link to={`/view-profile/${post?.user._id}`}> By {post?.user.username}</Link>
        </div>
         <div className='flex items-center gap-2'>
        <FaCalendar/>
        <span>{new Date(post?.createdAt).toDateString()}</span>
        
        </div>
    </div>
    
    <p className='text-sm ' >{post?.description.slice(1,100)}</p>

    
   
    

    </div>
  )
}

export default PostItem