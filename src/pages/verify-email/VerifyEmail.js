import React, { useEffect } from 'react'
import {BsPatchCheck} from "react-icons/bs"
import { Link ,useParams} from 'react-router-dom'
import {useSelector,useDispatch} from "react-redux"
import { verifyEmail } from '../../redux/apiCalls/authApiCall'

function VerifyEmail() {
 const dispatch=useDispatch()
 const {userId,token}=useParams()


 useEffect(()=>{
   dispatch(verifyEmail(userId,token))
 },[userId,token])
 const  {isEmailVerified}=useSelector(state=>state.auth)

  return (
    <section className=' w-full flex flex-col gap-6 itmes-center justify-center my-24'>
       <div className=' flex flex-col gap-4 items-center  justify-center py-20'>
        {isEmailVerified ?
        <>
        <BsPatchCheck className='text-teal-400 text-3xl '/>
        <h1 className='text-teal-400 text-3xl font-bold '>Your email address has been successfully verified</h1>
        <Link className='text-gray-600 text-xl font-semibold ' to="/login">Go To Login Page</Link>
        </>
        : <h2 className='text-red-400 text-3xl font-bold '>Non found</h2>
       
       
    }
     </div>
    </section>
  )
}

export default VerifyEmail