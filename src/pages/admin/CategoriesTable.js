import React ,{useEffect,useState} from 'react'
import AdminSidebar from './AdminSidebar'
import {useSelector,useDispatch} from 'react-redux'
import { deleteCategory, fetchCategories } from '../../redux/apiCalls/categoryApiCall'
import {MdDeleteOutline} from "react-icons/md"
import Swal from 'sweetalert2'

function CategoriesTable() {
    const dispatch=useDispatch()
    const {categories}=useSelector(state=>state.category)
    const  [active,setActive]=useState("category")
    useEffect(()=>{
        dispatch(fetchCategories())
    },[])

    const deleteCategoryHandler=(categoryId)=>{
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
            dispatch(deleteCategory(categoryId))
            
              
            Swal.fire(
              'Deleted!',
              'Post has been deleted.',
              'success'
            )
          }
        })
    
       }
  return (
    <div className='w-full flex flex-row gap-4'>
  <div className='w-[25%]'>
   <AdminSidebar active={active}/>
  </div>
  <div className='w-[70%]'>
  <div className=" w-full px-2 mx-auto ">
    <div className="py-8">
    <h2 className="text-2xl leading-tight text-[#3756f7] font-semibold">
                Categories
            </h2>
         
   
        <div className="px-4 py-4 mx-4 overflow-x-auto ">
            <div className="inline-block min-w-full overflow-hidden rounded-lg shadow">
                <table className="min-w-full leading-normal">
                    <thead>
                        <tr>
                            <th scope="col" className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                                Count
                            </th>
                            <th scope="col" className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                                Category Title
                            </th>
                            <th scope="col" className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                                Option
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories?.map((item,index)=>
                        <tr key={item?._id}>
                        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                        <p className="text-gray-900 whitespace-no-wrap">
                             {index+1} 
                        </p>
                        </td>
                        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                            <p className="text-gray-900 whitespace-no-wrap">
                               {item?.title}
                            </p>
                        </td>
                        

                        <td className="px-5 py-5 text-2xl bg-white border-b flex gap-4 border-gray-200">
                        <button className='w-[140px] h-[40px] bg-red-600 text-white rounded-xl text-base font-semibold' onClick={()=>deleteCategoryHandler(item?._id)}>Delete Category</button>
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

export default CategoriesTable