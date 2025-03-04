import React ,{useState} from 'react'
import {toast,ToastContainer} from "react-toastify"
import {useDispatch} from "react-redux"
import { createCategory } from '../../redux/apiCalls/categoryApiCall'
function AddCategoryForm() {
    const [title,setTitle]=useState("")
    const dispatch=useDispatch()

    const formSubmitHandler=(e)=>{
     e.preventDefault()
     if(title.trim()==="") return toast.error("Category Title is required")
      dispatch(createCategory({title}))
    setTitle("")
    }
  return (
    <section className='flex items-center justify-center my-4'>
         <ToastContainer theme='colored'/>
    <div className='  w-[700px] h-auto  border-2 rounded-lg p-5  '>
        <div className='flex items-center justify-center mb-6 '>
     
        <h3 className='text-2xl text-blue-700 font-bold'>Add Now Category</h3>
        </div>
     
    <form  onSubmit={formSubmitHandler} className='flex flex-col gap-6 mx-6'>
        
        <div className='flex flex-col gap-2 '> 
        <label className="text-sm uppercase tracking wide "for="title">Category Title</label>
        <input  className=" w-full h-12 rounded-lg pl-2 text-sm border border-slate-300 bg-transparent outline-blue-500"
        id="title" type="text" 
        value={title}
        onChange={(e)=>setTitle(e.target.value)}
        placeholder='Enter category title'/>
        </div>
        <button className="bg-blue-700 rounded-lg text-white w-full h-12 text-lg  font-semibold cursor-pointer hover:bg-blue-600 hover:outline outline-2 outline-blue-600  outline-offset "type="submit">Submit</button>
       
    </form>
  
    </div>
    </section>
  )
}

export default AddCategoryForm