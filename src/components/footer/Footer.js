import React from 'react'
import logo2 from "../../assets/logo2.png"

function Footer() {
  return (
    <div>
    <div className='w-full h-auto bg-[#191a1f] px-16 py-14  grid grid-cols-1 lg:grid-cols-3 gap-8 '>
        <div>
        <img  className='pb-4' src={logo2}/>
        <p className='text-base text-white w-[70%]  font-normal'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
        </div>
       
     <div >
      <h3 className='text-white text-2xl font-bold pb-4 font-titleFont'>Categories</h3>
      <ul className='flex flex-col gap-2' >
        <li className='text-base text-white fond-normal hover:text-[#3756f7]'> Travel</li>
        <li className='text-base text-white fond-normal hover:text-[#3756f7]'>Business</li>
        <li className='text-base text-white fond-normal hover:text-[#3756f7]'>Photography</li>
        <li className='text-base text-white fond-normal hover:text-[#3756f7]'>Fasion</li>
        <li className='text-base text-white fond-normal hover:text-[#3756f7]'>Lifestyle</li>
        <li className='text-base text-white fond-normal hover:text-[#3756f7]'s>Programming</li>
      </ul>

     </div>
     <div>
     <h3 className='text-white text-2xl font-bold pb-4 font-titleFont'>Important Link</h3>
     <ul className='flex flex-col gap-2' >
        <li className='text-base text-white fond-normal hover:text-[#3756f7]'> News</li>
        <li className='text-base text-white fond-normal hover:text-[#3756f7]'>Career</li>
        <li className='text-base text-white fond-normal hover:text-[#3756f7]'>Technology</li>
      </ul>
     </div>
    </div>
    <div className='w-full  h-auto py-6 bg-black flex items-center justify-center '> 
    <span className='text-white'>Copyright © 2023 Bloggar. All Rights Reserved.</span>

    </div>
    </div>
  )
}

export default Footer