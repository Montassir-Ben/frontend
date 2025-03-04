import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import {BsChevronRight} from 'react-icons/bs'
import {useDispatch,useSelector} from "react-redux"
import { fetchCategories } from '../../redux/apiCalls/categoryApiCall'
import { FaHandHoldingHeart } from 'react-icons/fa'
import { fetchPosts } from '../../redux/apiCalls/postApiCall'

function Sidebar() {
  const dispath=useDispatch()
  const {categories}=useSelector(state=>state.category)
  const {posts}=useSelector(state=>state.post)

  useEffect(()=>{
   dispath(fetchCategories())
  },[])
  useEffect(()=>{
    dispath(fetchPosts())
   },[])
  
  return (
    <div className='flex flex-col gap-4'>
    <div className='w-full rounded-lg border flex flex-col gap-4 px-2 lg:px-8 py-6'>
      <h3 className=' text-lg lg:text-2xl pb-6 '>Post Categories</h3>

     
      
      {categories.map(category=>
      <Link  className="border-b-[1px] pb-6 hover:text-[#3756f7] cursor-pointer duration-300 flex items-center gap-2" 
      to={`/posts/categories/${category.title}`}> <BsChevronRight/>{category.title}
      </Link>
        )}
       
  
    </div>
    <div className='w-full rounded-lg border flex flex-col gap-6 px-8 py-6'>
      <h3 className='text-lg lg:text-2xl pb-6 '>Related Posts</h3>
     
     {posts.map(post=>
     <div className='flex flex-nowrap  gap-x-4'>
      <img src={post?.image.url} className='rounded-lg w-1/4 lg:w-1/3 object-cover'/>
      <div className='flex flex-col gap-2'>
        <h3 className='text-md lg:text-base font-normal tracking-wide uppercase hover:text-[#3756f7]  duration-300 cursor-pointer'>{post?.title}</h3>
      <span className='text-sm text-gray-500'>{new Date(post?.createdAt).toLocaleDateString()}</span>
      </div>
     </div>
      )}
 
        
  
    </div>
    </div>
    
  )
}

export default Sidebar