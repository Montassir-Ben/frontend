import React from 'react'
import { Link } from 'react-router-dom'
import {BsFillPersonFill,BsFilePost,BsColumnsGap} from "react-icons/bs"
import {BiCategory} from "react-icons/bi"
import  {FaRegComments} from "react-icons/fa"
function AdminSidebar({active}) {
  return (
    <div className='w-full h-screen bg-[#f6f6f9] border-r-2  px-8 py-10 '>
      <div className={`${active === "dashboard" && "text-[#3756f7]"}
      flex items-center gap-2 text-lg font-semibold tracking-wide  pb-12`}>
      <BsColumnsGap/><Link to="/admin"> Dashboard </Link>
      </div>  
      <div className='flex flex-col gap-6'>
        <div  className={`${active === "user" && "text-[#3756f7]" }
        flex items-center  gap-2`}>
        <BsFillPersonFill/> <Link to="/admin/users-table">Users</Link>
        </div>
        <div className={`${active === "post" && "text-[#3756f7]" }
        flex items-center  gap-2`}>
        <BsFilePost/> <Link to="/admin/post-table">Posts</Link>
        </div>
        <div  className={`${active === "category" && "text-[#3756f7]" }
        flex items-center  gap-2`}>
        <BiCategory/> <Link to="/admin/categories-table">Categories</Link>
        </div>
        <div className={`${active === "comment" && "text-[#3756f7]" }
        flex items-center  gap-2`}>
        <FaRegComments/> <Link to="/admin/comment-table">Comments</Link>
        </div>
      </div>  
    </div>
  )
}

export default AdminSidebar