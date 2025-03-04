import React, { useEffect ,useState} from 'react'
import {useSelector,useDispatch} from "react-redux"
import { fetchCategories } from '../../redux/apiCalls/categoryApiCall'
import {toast,ToastContainer} from "react-toastify"
import { updatePost, updatePostImage } from '../../redux/apiCalls/postApiCall'
import {useLocation} from "react-router-dom"
import {useNavigate} from "react-router-dom"
import {BsFillImageFill} from "react-icons/bs"

function UpdatePost() {


    const dispatch=useDispatch()
    const {categories}=useSelector(state=>state.category)
    const location=useLocation()
    const post=location.state?.post
    const navigate=useNavigate()
  


    const [title,setTitle]=useState(post?.title)
    const [description,setDescription]=useState(post?.description)
    const [category,setCategory]=useState(post?.category)
    const [file,setFile]=useState(null)
  
     useEffect(()=>{
        dispatch(fetchCategories())
     },[])
    
    const formSubmitHandler=(e)=>{
     
        e.preventDefault();
      if(title.trim()==="") return toast.error("Title Post is required")
      if(category.trim()==="") return toast.error("Category Post is required")
      if(description.trim()==="") return toast.error("Description Post is required")
      dispatch(updatePost(post?._id,{title,description,category}))
      navigate(`/profile/${post?.user._id}`)  
   
    }
    const updateImageSubmitHandler=(e)=>{
        e.preventDefault();
        if(!file) return toast.warning("this us no file!")
        const formData=new FormData()
        formData.append("image",file)
        dispatch(updatePostImage(formData,post?._id))

    }

  return (
    <section className='flex items-center justify-center mb-8 mt-4'>
   <ToastContainer theme='colored'/>
      <div className=' w-full  lg:w-3/5 h-auto  p-5  '>
        <div className='flex items-center justify-center mb-6'>
   
          <h3 className='text-3xl text-blue-700 font-bold'>Update  Post</h3>
         </div>
        <div>
         <img src={file ? URL.createObjectURL(file)   : post?.image.url} className="w-full h-[70%] rounded-lg object-cover "/>
        <form onSubmit={updateImageSubmitHandler} className='pt-6 pl-6 flex items-center gap-6' >
            <abbr>
               
              <label for="file" className=' text-xl  text-[#3756f7]  flex items-center gap-2 '>
              <BsFillImageFill/>  Select image </label>
            </abbr>
            <input style={{display:"none"}}   type="file" id="file"   onChange={(e)=>setFile(e.target.files[0])}/>
            <button type='submit' className= 'w-[100px] h-[30px] rounded-lg   bg-[#3756f7] text-white' >Uplode</button>
        </form>
        </div>

         <form  onSubmit={formSubmitHandler}  className='flex flex-col gap-6 mx-6 pt-6'>
        <div className='flex flex-col gap-2 '> 
        <label className="text-sm uppercase tracking wide "for="title">Title</label>
        <input  value={title} onChange={(e)=>setTitle(e.target.value)}
        className=" w-full h-12 rounded-lg pl-2 text-sm border border-slate-300 bg-transparent outline-blue-500"id="title" type="text" />
        </div>
        <div className='flex flex-col gap-2 '> 
        <label className="text-sm uppercase tracking wide "for="category">Category</label>
        <select id="category"
        value={category} onChange={(e)=>setCategory(e.target.value)}
        className='w-full h-12 rounded-lg pl-2 text-sm border border-slate-300 bg-transparent outline-blue-500'>
            
           { categories.map(category=><option  key={category._id} value={category.title}>
             {category.title}
            </option>)

           }
        </select>
        </div>
        <div className='flex flex-col gap-2 '> 
        <label className="text-sm uppercase tracking wide "for="description">Description</label>
        <textarea 
          value={description} onChange={(e)=>setDescription(e.target.value)}
         className='w-full rounded-lg pl-2 border border-slate-300 outline-blue-500'
            cols="30" rows="7" id="description"></textarea>
        </div>
       
      
        <button className="bg-blue-700 rounded-lg text-white w-full h-12 text-lg  font-semibold cursor-pointer hover:bg-blue-600 hover:outline outline-2 outline-blue-600  outline-offset "type="submit">Update</button>
       
    </form>
  
      </div>
    </section>
  )
}

export default UpdatePost