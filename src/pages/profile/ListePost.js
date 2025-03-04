import React ,{useState,useEffect} from 'react'
import {BiEdit} from "react-icons/bi"
import {MdDeleteOutline} from "react-icons/md"
import {Link,useNavigate,useLocation,useParams} from "react-router-dom"
import Swal from 'sweetalert2'
import {useDispatch, useSelector} from "react-redux"
import { deletePost } from '../../redux/apiCalls/postApiCall'
import {getUserProfile, updateProfile} from "../../redux/apiCalls/profileApiCall"
import SidebarProfile from './SidebarProfile'
import {AiOutlineEye} from "react-icons/ai"

function ListePost() {

    const [showModal,setShowModal]=useState(false)
    const navigate=useNavigate()
    const dispatch=useDispatch()
   
  
    const {id}=useParams()
    const [active,setActive]=useState("post")

   

    useEffect(()=>{
      dispatch(getUserProfile(id))
    },[id])
      
    const {profile}=useSelector(state=>state.profile)
    const deletePostHandler=(postId)=>{
        Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then((isOk) => {
          if (isOk.isConfirmed) {
            dispatch(deletePost(postId))
            
              
            Swal.fire(
              'Deleted!',
              'Post has been deleted.',
              'success'
            )
          }
        })
    
       }
  return (


    <div className='w-full flex flex-col lg:flex-row gap-4'>
    <div className='w-full lg:w-[30%]'>
     <SidebarProfile profile={profile} active={active} setActive={setActive}/>
    </div>
    <div className='w-full lg:w-[60%]'>


<div className=" w-full px-2 mx-auto ">
    <div className="py-8">
    <div className="flex justify-end">
            
            <button  className='w-[150px] h-[50px] bg-[#3756f7] rounded-lg text-white text-center font-bold text-base border-2 border-[#3756f7] tracking-wide uppercase'
             onClick={()=>navigate("/create-post")}>
                 Add Post
            </button>
            
     </div>
        <div className="px-4 py-4 mx-4 overflow-x-auto ">
            <div className="inline-block min-w-full overflow-hidden rounded-lg shadow">
                <table className="min-w-full leading-normal">
                    <thead>
                        <tr>
                            <th scope="col" className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                                Title
                            </th>
                            <th scope="col" className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                                Category
                            </th>
                            <th scope="col" className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                                Created at
                            </th>
                            <th scope="col" className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                                Option
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {profile?.posts?.map((post,index)=>
                        <tr key={index?._id}>
                            <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                            <p className="text-gray-900 whitespace-no-wrap">
                                  {post?.title}
                            </p>
                            </td>
                            <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                <p className="text-gray-900 whitespace-no-wrap">
                                    {post?.category}
                                </p>
                            </td>
                            <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                <p className="text-gray-900 whitespace-no-wrap">
                                    {new Date(post?.createdAt).toLocaleDateString()}
                                    
                                </p>
                            </td>
                            <td className="px-5 py-5 text-2xl bg-white border-b flex gap-4 border-gray-200">
                                <Link to="/posts/update-post"
                                state={{ post }}
                                ><BiEdit className='text-teal-600' onClick={()=>setShowModal(true)}/></Link>
                                 
                                 <MdDeleteOutline className='text-red-500' onClick={()=>deletePostHandler(post?._id)} />
                                 <AiOutlineEye className='text-blue-600'   onClick={()=>navigate(`/posts/detais/${post?._id}`)} />
                                     
                            </td>
                            
                        </tr>
                               
                      )}  
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>


    </div>
    </div>
  
  )
}

export default ListePost