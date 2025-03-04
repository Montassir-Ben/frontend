import React, { useEffect } from 'react'
import PostList from '../post/PostList'
import Sidebar from '../../components/sidbar/Sidebar'
import {useDispatch,useSelector} from "react-redux"
import { fetchPosts } from '../../redux/apiCalls/postApiCall'

import imgbg from "../../assets/home-bg.jpg"




function Home() {
  const dispatch=useDispatch()
 
  useEffect(()=>{
    dispatch(fetchPosts())
    console.log('zahra')
    window.scrollTo(0,0)
  },[])
  const {posts}=useSelector(state=>state.post)
    
  return (
  <section className='mb-20 '>
    <div  className="  w-full h-[500px] object-cover"    style={{ backgroundImage: `url(${imgbg})` }}>
    <div className='flex justify-center items-center text-center  '>  
    <div className='flex flex-col gap-4 font-titleFont mb-14 py-48 px-6'>
        <h1 className='text-4xl md:text-5xl text-[#1F2278] font-bold capitalize'> Welcome To Bloggar  </h1>
    </div>
      
    </div>
    </div>
   


   
    <div className='flex flex-col lg:flex-row  gap-4   mt-20 px-6 lg:px-16'>
    <div className='w-full lg:w-[70%]'>
    <PostList posts={posts}/>
    </div>
    <div className='w-full lg:w-[30%]'>
   <Sidebar />
    </div>
       
    </div>
  </section>
  )
}

export default Home

