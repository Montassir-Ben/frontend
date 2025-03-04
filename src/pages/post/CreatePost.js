import React, { useEffect, useState } from 'react'
import {toast,ToastContainer} from "react-toastify"
import {useSelector,useDispatch} from "react-redux"
import {useNavigate} from "react-router-dom"
import { createPost } from '../../redux/apiCalls/postApiCall';
import {RotatingLines} from "react-loader-spinner"
import { fetchCategories } from '../../redux/apiCalls/categoryApiCall';

function CreatePost() {
  const dispath=useDispatch();
  const {loading,isPostCreated}=useSelector(state=>state.post)
    const [title,setTitle]=useState("")
    const [description,setDescription]=useState("")
    const [category,setCategory]=useState("")
    const [file,setFile]=useState(null)
    const {categories}=useSelector(state=>state.category)
    const formSubmitHandler=(e)=>{
        e.preventDefault()
        if(title.trim()==="") return toast.error("Post Title is required")
        if(category.trim()==="") return toast.error("Post Category is required")
        if(description.trim()==="") return toast.error("Post Description is required")
        if(!file) return toast.error("Post Imagr is required")
        const formData=new FormData()
        formData.append("image",file)
        formData.append("title",title)
        formData.append("category",category)
        formData.append("description",description)
        dispath(createPost(formData))
    }
    const navigate=useNavigate()
    useEffect(()=>{
      if(isPostCreated){
        navigate("/")
      }
    },[isPostCreated,navigate])

    useEffect(()=>{
     dispath(fetchCategories())
    },[])

  return (
    <section className='flex items-center justify-center mb-8 mt-4'>
        <ToastContainer theme='colored'/>
    <div className='w-full   lg:w-2/4 h-auto  p-5  '>
        <div className='flex items-center justify-center mb-6'>
       
        <h3 className='text-2xl text-blue-700 font-bold'>Create New Post</h3>
        </div>
     
    <form onSubmit={formSubmitHandler} className='flex flex-col gap-6 mx-6'>

      <div className='flex flex-col gap-2'>
      <label className="text-sm uppercase tracking wide "for="title">Title </label>
        <input  className=" w-full h-12 rounded-lg pl-2 text-sm border border-slate-300 bg-transparent outline-blue-500"
        id="tilte" type="text" placeholder='Title'
        value={title} 
        onChange={(e)=>setTitle(e.target.value)}
        />
      </div>
        
    <div className='flex flex-col gap-2'>
    <label className="text-sm uppercase tracking wide "for="category">Category</label>
        <select
         value={category} 
         onChange={(e)=>setCategory(e.target.value)} 
         id="category"
        className='w-full h-12 rounded-lg pl-2 text-sm border border-slate-300 bg-transparent outline-blue-500'>
            <option disabled value="">
              Select A Category
            </option>
           { categories.map(category=><option  key={category._id} value={category.title}>
             {category.title}
            </option>)

           }
        </select> 
    </div>

    <div className='flex flex-col gap-2'>
    <label className="text-sm uppercase tracking wide "for="description">Description</label>
        <textarea 
         value={description}
         onChange={(e)=>setDescription(e.target.value)}
         className='w-full rounded-lg pl-2 border border-slate-300 outline-blue-500'
        placeholder='Description' id="description" cols="30" rows="8"></textarea>
    </div> 

    <div className='flex flex-col gap-2'>
    <label className="text-sm uppercase tracking wide "for="photo">Photo</label>
        <input 
        onChange={(e)=>setFile(e.target.files[0])}
        type="file" name="file" id="photo" className='file:bg-blue-500 file:border-none file:rounded-lg file:text-white file:cursor-pointer file:m-2 file:py-1 file:px-4
        w-full h-12 rounded-lg border border-slate-300 outline-500 text-gray-400 pl-2 text-sm bg-transparent' />
       
    </div>   
        <button className="bg-blue-700 rounded-lg text-center flex justify-center items-center text-white w-full h-12 text-lg font-semibold cursor-pointer hover:bg-blue-600 hover:outline outline-2 outline-blue-600  outline-offset "
        type="submit">
          {
            loading 
            ?(
              <RotatingLines
               strokeColor="white"
               strokeWidth="5"
               animationDuration="0.75"
               width="40"
               visible={true}
/>
            )
            
            :"Create"
          }
    
          </button>
       
    </form>
  
    </div>
    </section>
  )
}

export default CreatePost