import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import {BsFillPersonFill,BsFilePost,BsColumnsGap} from "react-icons/bs"
import {BiCategory} from "react-icons/bi"
import  {FaRegComments} from "react-icons/fa"
import AddCategoryForm from './AddCategoryForm'
import {useSelector,useDispatch} from 'react-redux'
import { fetchCategories } from '../../redux/apiCalls/categoryApiCall'
import { getUsersCount } from '../../redux/apiCalls/profileApiCall'
import { getPostCount } from '../../redux/apiCalls/postApiCall'
import { fetchAllComments } from '../../redux/apiCalls/commentApiCall'

function AdminMain() {
    const dispatch=useDispatch()
    const {categories}=useSelector(state=>state.category)
    const {usersCount}=useSelector(state=>state.profile)
    const {postCount}=useSelector(state=>state.post)
    const {comments}=useSelector(state=>state.comment)
    useEffect(()=>{
        dispatch(fetchCategories())
        dispatch(getUsersCount())
        dispatch(getPostCount())
        dispatch(fetchAllComments())
    },[])
   
  return (
    <div className='flex flex-col gap-4  px-4 lg:px-0'>
    <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 '>
     <div className='w-full  h-auto flex flex-col gap-4  border-2 rounded-lg px-2 py-4 '>
       <h2 className='text-xl font-medium text-gray-500'>Users</h2>
       <span className='text-base font-semibold text-red-500' >{usersCount}</span>
       <div className='flex items-center justify-center gap-2 bg-blue-500 rounded-lg text-white text-base font-normal h-[40px] '>
        <BsFillPersonFill/>
        <Link to="/admin/users-table">See all users</Link>
       </div>
     </div>
     <div className='w-full  flex flex-col gap-4 border-2 rounded-lg px-2 py-4'>
     <h2 className='text-xl font-medium text-gray-500'>Posts</h2>
     <span className='text-base font-semibold text-red-500'>{postCount}</span>
     <div className='flex items-center justify-center gap-2 bg-blue-500 rounded-lg text-white text-base font-normal h-[40px] '>
        <BsFilePost/>
        <Link  to="/admin/post-table"> See all posts</Link>
       </div>
     </div>
     <div className='w-full flex flex-col gap-4 border-2 rounded-lg px-2 py-4 '>
     <h2 className='text-xl font-medium text-gray-500'>Categories</h2>
     <span className='text-base font-semibold text-red-500'>{categories.length}</span>
     <div className='flex items-center justify-center gap-2 bg-blue-500 rounded-lg text-white text-base font-normal h-[40px] '>
        <BiCategory/>
        <Link to="/admin/categories-table">See all categories</Link>
       </div>
     </div>
     <div className='w-full flex flex-col gap-4 border-2 rounded-lg px-2 py-4  '>
     <h2 className='text-xl font-medium text-gray-500'>Comments</h2>
     <span className='text-base font-semibold text-red-500'>{comments.length}</span>
     <div className='flex items-center  gap-2 bg-blue-500 rounded-lg text-white text-base font-normal p-[6px] '>
        <FaRegComments/>
        <Link to="/admin/comment-table">See all comments</Link>
       </div>
     </div>
    </div>
    <hr/>
    <AddCategoryForm/>
    </div>
   


  )
}

export default AdminMain