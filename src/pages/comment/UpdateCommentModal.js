import React, { useState } from 'react'
import {useSelector,useDispatch} from "react-redux"
import { updateComment } from '../../redux/apiCalls/commentApiCall'

function UpdateCommentModal({setUpdateComment,commentForUpdate}) {

    const [text,setText]=useState(commentForUpdate?.text)
    const dispatch=useDispatch()

    const formSubmitHandler=(e)=>{
     e.preventDefault()
     dispatch(updateComment(commentForUpdate?._id,{text}))
     setUpdateComment(false)
    }
  return (
    <div className='fixed inset-0 flex justify-center items-center mt-2'>
        <div className=' bg-[#F5F5FC] w-[450px] h-auto rounded-lg p-5  '>
        <div className=' flex justify-end '>
       <button className="w-[40px] border-2 border-red-500 rounded-lg text-red-500" onClick={()=>setUpdateComment(false)} >X</button>
        </div>
        <div className='flex items-center justify-center mb-2 '>
        <h3 className='text-2xl text-blue-700 font-bold'>Update Comment</h3>
        </div>
        
        <form onSubmit={formSubmitHandler}  className='flex flex-col gap-4 mx-6'>
        
        
        <div className='flex flex-col gap-2 '> 
        <label className="text-sm uppercase tracking wide "for="description">
          Comment
        </label>
        <textarea 
         value={text}
          onChange={(e)=>setText(e.target.value)}
         className='w-full rounded-lg pl-2 border border-slate-300 outline-blue-500'
            cols="30" rows="5" id="description"></textarea>
        </div>
        <button className="bg-blue-700 rounded-lg text-white w-full h-12 text-sm cursor-pointer hover:bg-blue-600 hover:outline outline-2 outline-blue-600  outline-offset "type="submit">Edit</button>
       
    </form>
  
        </div>

    </div>
  )
}

export default UpdateCommentModal