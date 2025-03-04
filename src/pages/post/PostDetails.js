import React, { useEffect, useState } from 'react'
import { Link, useParams ,useNavigate} from 'react-router-dom'
import img from "../../assets/post-bg.jpg"

import {BsFillPersonFill} from "react-icons/bs"
import {FaRegComment,FaCalendar} from "react-icons/fa"
import {useDispatch,useSelector} from "react-redux"
import {  fetchSinglePost, toggleLikePost } from '../../redux/apiCalls/postApiCall'
import {BiLike, BiCategory} from 'react-icons/bi'
import CommentForm from '../comment/CommentForm'
import CommentList from '../comment/CommentList'
import imgbg from "../../assets/cat-bg.jpg"
import Sidebar from '../../components/sidbar/Sidebar'


function PostDetails() {
  const {id}=useParams();
   const dispatch=useDispatch();
   const [showModal,setShowModal]=useState(false)

   const {post}=useSelector(state=>state.post)
   const {user}=useSelector(state=>state.auth)
   
   useEffect(()=>{
   dispatch(fetchSinglePost(id))
   window.scrollTo(0,0)
   },[id]);
  
  
   

  return (
    <section>
       <div  className="  w-full h-[400px] " style={{ backgroundImage: `url(${img})` }} >
   
        <div className='flex items-center justify-center  font-titleFont flew flex-col gap-6 pt-40 px-6 lg:px-0 ' >
        <h2 className='text-2xl lg:text-5xl  font-semibold tracking-wider  text-[#1F2278]'>{post?.title}</h2>
        <h3 className='text-lg font-normal tracking-wider  text-[#1F2278] '><Link to="/" >Home</Link>/ Post</h3>

     </div>
        </div>

        <div className='w-full flex flex-col  lg:flex-row gap-6 px-10 lg:px-16 pb-16 mt-20'>
        <div className='w-full lg:w-[70%] flex flex-col gap-6'>

        <img  className="w-full h-[300px] lg:h-[400px] rounded-lg object-cover" src={post?.image.url}/>
        <h2 className='text-2xl lg:text-4xl font-semibold uppercase tracking-wid hover:text-[#3756f7] duration-300'>{post?.title}</h2>
        <div className='flex flex-col lg:flex-row gap-6 text-sm text-gray-500'>

        <div className='flex items-center gap-2'> 
        <BsFillPersonFill/>
        <span>By <Link to={`/view-profile/${post?.user._id}`}>{post?.user.username}</Link></span>
        </div>
      
        <div className='flex items-center gap-2'> 
        <FaRegComment/>
        <span>{post?.comments.length} Comments</span>
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
       
        <div className='flex items-center gap-2 text-gray-500 '>
        <BiLike onClick={()=>dispatch(toggleLikePost(post?._id))} size={23} />
        <span>{post?.likes.length} likes</span>
        </div>
        <h3 className='text-2xl text-[#3756f7] font-bold'> Leave a Comment </h3>
        {user ?<CommentForm postId={post?._id} />
        : <p  className='text-gray-600 text-base'>To write a comment you should login</p>
        }
          
        <hr className='my-6'/>
        <h3 className='text-2xl font-bold text-[#3756f7]'>{post?.comments.length} Comments</h3>
        <CommentList comments={post?.comments}/>
        </div>
        <div className='w-full lg:w-[30%]'>

         <Sidebar/>
        </div>
        </div>
     </section>
    
  )
}

export default PostDetails