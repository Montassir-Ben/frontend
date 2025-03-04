import React, { useState } from 'react'
import { Link,Navigate } from 'react-router-dom'
import Logo from '../../assets/logo.png'
import { useNavigate } from 'react-router-dom'
import {  useSelector,useDispatch } from 'react-redux'
import {  logoutUser } from '../../redux/apiCalls/authApiCall'
import {FiMenu} from 'react-icons/fi'
import { MdClose } from 'react-icons/md'



function Navbar() {
    const navigate=useNavigate()
    const [isOpen,setIsOpen]=useState(false)
    const {user}=useSelector(state=>state.auth)
    const [showMenu,setShowMenu]=useState(false)
    const dispath=useDispatch();

    const logoutHandler=()=>{
      setIsOpen(false)
      dispath(logoutUser())
     
    }
  return (
    <div className='w-full h-24 flex justify-between  bg-white px-6 lg:px-16 items-center mx-auto sticky  top-0 z-50 font-titleFont  '>
        <div className='flex flex-row gap-2'>
        <span  onClick={()=>setShowMenu(!showMenu)} className='text-2xl md:hidden  w-10 h-10 
        inline-flex items-center justify-center  cursor-pointer text-[#3756f7]'>
          <FiMenu/>
        </span>
        
          <img src={Logo} className='w-[60%] lg:w-full'/>
        </div>
        <div>
            <ul className='hidden md:inline-flex flex items-center gap-6  '>
                <Link to="/"className='text-xl font-semibold text-[#1F2278] tracking-wide cursor-pointer hover:text-[#3756f7] duration-300 '>Home</Link>
                <Link to="/post" className='text-xl font-semibold text-[#1F2278]  tracking-wide cursor-pointer hover:text-[#3756f7] duration-300'>Post</Link>
       
            </ul>
           
        {
          showMenu &&(
            <div className='bg-white border rounded-lg  w-[110px] absolute mt-2 left-2 top-[65px] '>
             <div>
              <div>
                
                <ul className='flex flex-col  top-4 gap-4 p-6 relative'>
                  
                   <Link to="/"  onClick={()=>setShowMenu(false)} className='text-xl font-semibold text-[#1F2278] tracking-wide cursor-pointer hover:text-[#3756f7] duration-300 '>Home</Link>
                   <Link to="/post"  onClick={()=>setShowMenu(false)}  className='text-xl font-semibold text-[#1F2278]  tracking-wide cursor-pointer hover:text-[#3756f7] duration-300'>Post</Link>
               
                 
                  
                </ul>
                <span onClick={()=>setShowMenu(false)}
              className='absolute top-4 right-4 text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer'
              >
              <MdClose/>
              </span>
              </div>
              </div>
             
            </div>
          )
        }
                  
        </div>
        <div>
          {user ?
          <>
       
         <img  onClick={()=>setIsOpen((prev)=>!prev)}
          className=" relative w-[50px] h-[50px] rounded-full object-cover"src={user?.profilePhoto?.url}/>
          { isOpen && (
              <div className='absolute bg-white border rounded-lg right-0  w-[110px] top-[80px]'>
              <ul className='flex flex-col gap-2  justify-center items-center py-4  '>
              {user.isAdmin && 
              <Link  to="/admin"  onClick={()=>setIsOpen(false)}
              className=' text-lg font-medium text-[#1F2278] hover:text-[#3756f7] duration-300 '>Admin</Link>

               } 
              <Link to={`/profile/${user?._id}`}
               onClick={()=>setIsOpen(false)}
               className='text-lg font-medium text-[#1F2278] hover:text-[#3756f7] duration-300 '
               >Profile</Link>
              <Link  className=' text-lg font-medium text-[#1F2278] hover:text-[#3756f7] duration-300 ' onClick={logoutHandler}>Logout</Link>
              
               
              </ul>
              </div>
            
          )
         
        
          }
          </>
          :
          <div className='flex gap-2'>
          <button className=' text-[#3756f7] text-sm lg:text-base h-[30px] w-[70px]  lg:w-[100px] rounded-xl  border border-[#3756f7] font-normal tracking-wider '
                onClick={()=>navigate("/login")}>Login</button>
                 <button className=' text-[#3756f7] text-sm lg:text-base h-[30px] w-[70px] lg:w-[100px] rounded-xl  border border-[#3756f7] font-normal tracking-wider '
                onClick={()=>navigate("/register")}>Register</button>
          </div>
          }
                
            
        </div>
    </div>
  )
}

export default Navbar