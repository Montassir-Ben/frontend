import React , { useState }from 'react'

import {useDispatch,useSelector} from 'react-redux'
import { createComment } from '../../redux/apiCalls/commentApiCall'
import { toast } from 'react-toastify'



function CommentForm({postId}) {
    
 const [text,setText]=useState("")
 const dispatch=useDispatch()
 
    const formSubmitHandler=(e)=>{
      e.preventDefault();
      if(text.trim()==="") return toast.error("Please write something")
     dispatch(createComment({postId,text}))
     
       setText("")
   
    }
  return (
    <form onSubmit={formSubmitHandler}>
     <div className='flex flex-col items-end rounded-lg border-2 border-gray-300 p-4 hover:border-[#3756f7] duration-300'>
        <textarea 
        className='w-full focus:outline-none' 
        placeholder='comment ....'
        rows="4"
        value={text}
        onChange={(e)=>setText(e.target.value)}/>
        <button type='submit' 
        className='px-6 rounded-lg mt-2 py-2.5 w-[150px] text-white bg-[#3756f7] font-semibold'>send</button>

     </div>
    </form>
  )
}

export default CommentForm