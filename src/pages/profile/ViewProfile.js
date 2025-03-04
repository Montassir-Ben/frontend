import React ,{useEffect} from 'react'
import {useDispatch,useSelector} from "react-redux"
import { useParams ,useNavigate, Link} from "react-router-dom"
import {getUserProfile} from "../../redux/apiCalls/profileApiCall"

function ViewProfile() {

  const {id}=useParams()
    const dispatch=useDispatch()

    useEffect(()=>{
      dispatch(getUserProfile(id))
    },[id])
    
    const {profile}=useSelector(state=>state.profile)


  return (
<section>
<div  className="  w-full h-[400px] bg-sky-950">
        <div className='flex flex-col gap-4 items-center  justify-center pt-20 '>
        <img  className="w-[140px] h-[140px] rounded-full object-cover " 
           src={profile?.profilePhoto.url}/>
        <h2 className='text-2xl font-semibold  text-white tracking-tight'>{profile?.username}</h2>
        <p className='text-base font-normal text-gray-300'>{profile?.bio}</p>
        <span className='text-[#3756f7] text-base font-normal'>Date Joined:{new Date(profile?.createdAt).toDateString()}</span>

        </div>
        
</div>
<div className='my-20 px-20'>
    <h3 className='text-2xl font-bold  pb-10'>{profile?.posts.length} Posts</h3> 
    {profile?.posts.map(post=>
     <div className='w-full h-auto flex flex-col gap-4 rounded-lg  border pb-6 pb-10'>
        <img  className="w-full h-[400px] rounded-t-lg  object-cover" src={post?.image.url}/>
        <h3 className='text-xl font-bold  font-titleFont hover:text-[#3756f7] duration-300 px-10'>{post?.title}</h3>
        <div className='px-10 flex justify-between items-center'>
        <span className='text-gray-500'>{new Date(post?.createdAt).toDateString()}</span>
         <span className='bg-[#3756f7] text-white px-6 rounded-lg '>{post?.category}</span>
        </div> 
        
        <p className='text-sm px-10 text-gray-600' >{post?.description}</p>
        <Link className='px-10 text-gray-500 hover:text-[#3756f7] duration-300  ' to={`/posts/detais/${post?._id}`}>READ MORE ...</Link>
     </div>
    )}
</div>

</section>
  )
}

export default ViewProfile