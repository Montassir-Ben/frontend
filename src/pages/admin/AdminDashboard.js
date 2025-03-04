import React, { useState } from 'react'
import AdminSidebar from './AdminSidebar'
import AdminMain from './AdminMain'

function AdminDashboard() {
  const  [active,setActive]=useState("dashboard")
  return (
  <div className='w-full flex flex-col lg:flex-row gap-4'>
  <div className='w-full lg:w-[25%]'>
   <AdminSidebar active={active} setActive={setActive}/>
  </div>
  <div className=' w-full lg:w-[70%]'>
    <AdminMain/>
  
  </div>

 </div>
  )
}

export default AdminDashboard