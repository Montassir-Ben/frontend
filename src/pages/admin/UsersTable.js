import React, { useEffect ,useState} from 'react'
import AdminSidebar from './AdminSidebar'
import {useSelector,useDispatch} from 'react-redux'
import { deleteProfile, getAllUsersProfile } from '../../redux/apiCalls/profileApiCall'
import Swal from 'sweetalert2'
import {useNavigate} from 'react-router-dom'


function UsersTable() {
  const dispatch=useDispatch()
  const {profiles,isProfileDeleted}=useSelector(state=>state.profile)
  const navigate=useNavigate()
  const  [active,setActive]=useState("user")
  useEffect(()=>{
   dispatch(getAllUsersProfile())
  },[isProfileDeleted])
  const deleteUserHandler=(userId)=>{
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this User!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((isOk) => {
      if (isOk.isConfirmed) {
        dispatch(deleteProfile(userId))
        Swal.fire(
          'Deleted!',
          'User has been deleted.',
          'success'
        )
      }
    })

   }
 
  return (
    <div className='w-full flex flex-col  lg:flex-row gap-4'>
  <div className='w-full lg:w-[25%]'>
   <AdminSidebar active={active}/>
  </div>
  <div className='w-full lg:w-[70%]'>
  <div className=" w-full px-2 mx-auto ">
    <div className="py-8">
   
            <h2 className="text-2xl leading-tight text-[#3756f7] font-semibold">
                Users
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
                                User
                            </th>
                            <th scope="col" className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                                Email
                            </th>
                            <th scope="col" className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                                Option
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                      {profiles.map((item,index)=>
                        <tr key={item?._id}>
                        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                        <p className="text-gray-900 whitespace-no-wrap">
                              {index+1}
                        </p>
                        </td>
                        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                        <div className='flex items-center gap-2'>
                            <img src={item?.profilePhoto.url} className='w-[40px] h-[40px] rounded-full object-cover'/>

                             <p className="text-gray-900 whitespace-no-wrap">
                              {item?.username}
                             </p>
                             </div>
                        </td>
                        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                            <p className="text-gray-900 whitespace-no-wrap">
                                {item?.email}
                                
                            </p>
                        </td>
                        <td className="px-5 py-5 text-2xl bg-white border-b flex gap-4 border-gray-200">
                        <button className='w-[100px] h-[40px]  text-white rounded-xl bg-teal-400 text-base font-semibold'onClick={()=>navigate(`/view-profile/${item?._id}`)} >View User </button>
                        <button className='w-[100px] h-[40px] bg-red-600 text-white rounded-xl text-base font-semibold' onClick={()=>deleteUserHandler(item?._id)} >Delete User </button>

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

export default UsersTable