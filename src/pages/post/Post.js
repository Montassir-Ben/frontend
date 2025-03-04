import React, { useEffect, useState } from 'react'

import { Link, useParams ,useNavigate} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import { fetchPosts, fetchPostsPagination, getPostCount } from '../../redux/apiCalls/postApiCall'
import Sidebar from '../../components/sidbar/Sidebar'
import {BsFillPersonFill} from "react-icons/bs"
import {FaRegComment,FaCalendar} from "react-icons/fa"
import { BiCategory} from 'react-icons/bi'
import Pagination from '../../components/pagination/Pagination'
import imgbg from '../../assets/post-bg.jpg'
function Post() {
  const dispatch=useDispatch()
  const {posts,postCount}=useSelector(state=>state.post)
  const [currentPage,setCurrentPage]=useState(1)
  const POST_PAR_PAGE=3
  const pages=Math.ceil(postCount/POST_PAR_PAGE)
  useEffect(()=>{
  dispatch(fetchPostsPagination(currentPage))
  window.scrollTo(0,0)
  },[currentPage])

  useEffect(()=>{
    dispatch(getPostCount())
    },[])

  return (
    <section className='pb-6'>
    <div  className="  w-full h-[400px] "  style={{ backgroundImage: `url(${imgbg})` }} >
   
     <div className='flex justify-center items-center text-center  '>  
    <div className='flex flex-col gap-4 font-titleFont mb-14 py-48 px-6'>
        <h1 className='text-4xl md:text-5xl text-[#1F2278] font-bold capitalize'>Post </h1>
        <h3 className='text-lg font-normal tracking-wider  text-[#1F2278] '><Link to="/" >Home</Link>/ Post</h3>

    </div>
      
    </div>
    </div>
    <div className='w-full flex  flex-col lg:flex-row gap-6 px-16 pb-16 mt-20'>
        <div className='w-full lg:w-[70%] flex flex-col gap-12'>
          {posts.map(post=>
            <div className='flex flex-col gap-6'>
             <img  className="w-full h-[250px]  lg:h-[400px] rounded-lg object-cover" src={post?.image.url}/>
             <h3 className='text-xl font-bold  font-titleFont hover:text-[#3756f7] duration-300 '>{post?.title}</h3>
             <div className='flex flex-col lg:flex-row gap-4 text-sm text-gray-500'>

                <div className='flex items-center gap-2'> 
                <BsFillPersonFill/>
                <span>By <Link to={`/view-profile/${post?.user._id}`}>{post?.user.username}</Link></span>
                </div>

                <div className='flex items-center gap-2'> 
                <FaRegComment/>
               <span>{post?.comments?.length} Comments</span>
               </div>

                <div className='flex items-center gap-2'>
                <FaCalendar/>
                <span>{new Date(post?.createdAt).toDateString()}</span>
                </div> 

                <div className='flex items-center gap-2'>
                <BiCategory/>
                <span>{post?.category}</span>
               </div>
        </div>
        
        <p className='text-gray-600 text-base'>{post?.description}</p>
        <Link className='text-gray-500 hover:text-[#3756f7] duration-300  ' to={`/posts/detais/${post?._id}`}>READ MORE ...</Link>

             </div>
            )}
        </div>
        <div className='w-full lg:w-[30%]'>
    <Sidebar/>
    </div>
    </div>    
    <Pagination pages={pages} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
     </section>
    
  )
}

export default Post