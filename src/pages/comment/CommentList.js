import React ,{useState} from 'react'
import profile from "../../assets/p7.jpg"
import {FiEdit2,FiTrash,FiMessageSquare} from "react-icons/fi"
import {useSelector,useDispatch} from "react-redux"
import UpdateCommentModal from './UpdateCommentModal'
import Swal from 'sweetalert2'
import { deleteComment } from '../../redux/apiCalls/commentApiCall'

function CommentList({comments}) {
  const  {user}=useSelector(state=>state.auth)
  const [updateComment , setUpdateComment]=useState(false)
  const [commentForUpdate,setCommentForUpdate]=useState(null)
  const dispatch=useDispatch()

  const updateCommentHandler=(comment)=>{
   setCommentForUpdate(comment)
   setUpdateComment(true)
   }

  const  deleteCommentHandler=(commentId)=>{
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
       dispatch(deleteComment(commentId))      
        Swal.fire(
          'Deleted!',
          'Post has been deleted.',
          'success'
        )
      }
    })


  }

  return (
    <div>
      
      <div className='flex flex-col gap-4'>
      {comments?.map((comment)=>(
      <div className='w-full  flex flex-col items-start  gap-4  border-2 border-gray-300 rounded-lg px-8 py-6 hover:border-[#3756f7] duration-300'>
   
       <div className='flex flex-col gap-4'> 
        <h5 className='text-xs font-bold text-dark-hard'>{comment?.username}</h5>
         <span className='text-xs text-dark-hard'>{new Date(comment?.createdAt).toDateString()}</span>
         <p className='text-darl-light mt-[8px]'>{comment?.text}</p>
         {user?._id===comment?.user &&
          <div className='flex  items-cneter gap-x-4 text-dark-light text-sm mt-3 mb-3'>
          
            <button className='flex items-center space-x-2' onClick={()=>updateCommentHandler(comment)}>
              <FiEdit2/>
              <span>Edit</span>
            </button>
            <button className='flex items-center space-x-2' onClick={()=>deleteCommentHandler(comment?._id)}>
              <FiTrash/>
              <span>Delete</span>
            </button>
          </div>
         }
       </div>
      
      </div>
      ))}
      </div>
      {updateComment && <UpdateCommentModal setUpdateComment={setUpdateComment} 
      commentForUpdate={commentForUpdate}/>}
    </div>
   
  )
}

export default CommentList