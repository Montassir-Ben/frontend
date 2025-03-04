import React,{useEffect} from 'react'
import {useParams,Link} from "react-router-dom"

import imgbg from '../../assets/post-bg.jpg'
import Pagination from '../../components/pagination/Pagination'
import Sidebar from '../../components/sidbar/Sidebar'
import {useDispatch,useSelector} from 'react-redux'
import { fetchPostsCategory, getPostCount } from '../../redux/apiCalls/postApiCall'
import { BiCategory} from 'react-icons/bi'
import {BsFillPersonFill} from "react-icons/bs"
import {FaRegComment,FaCalendar} from "react-icons/fa"
function Category() {
    const {category}=useParams()
    const dispatch=useDispatch()
    const {postCat,postCount}=useSelector(state=>state.post)
    
    useEffect(()=>{
      dispatch(fetchPostsCategory(category))
      window.scrollTo(0,0)
      },[category])
    
      useEffect(()=>{
        dispatch(getPostCount())
        },[])
  return (
    <section className='pb-6'>
    <div  className="  w-full h-[400px] "  style={{ backgroundImage: `url(${imgbg})` }} >
     <div className='flex items-center justify-center  font-titleFont flew flex-col gap-6 pt-40 ' >
        <h2 className='text-5xl  font-semibold tracking-wider  text-[#1F2278]'>{category} </h2>
        <h3 className='text-lg font-normal tracking-wider  text-[#1F2278] '><Link to="/" >Home</Link>/ Post</h3>
     </div>
    </div>
    <div className='w-full flex flex-row gap-6 px-16 pb-16 mt-20'>
        <div className='w-[70%] flex flex-col gap-10'>
          {postCat.map(post=>
           <>
           <img  className="w-full  h-[400px] rounded-lg object-cover" src={post?.image.url}/>
           <h3 className='text-xl font-bold  font-titleFont hover:text-[#3756f7] duration-300 '>{post?.title}</h3>
           <div className='flex items-center gap-6 text-sm text-gray-500'>

              <div className='flex items-center gap-2'> 
              <BsFillPersonFill/>
              <span>By <Link to={`/view-profile/${post?.user._id}`}>{post?.user.username}</Link></span>
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

           </>
            )}
        </div>
        <div className='w-[30%]'>
    <Sidebar/>
    </div>
    </div>    
   
     </section>
  )
}

export default Category