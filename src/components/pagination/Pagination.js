import React from 'react'

function Pagination({pages,currentPage,setCurrentPage}) {
    const generatedPages=[];
    for(let i=1;i<=pages;i++){
        generatedPages.push(i)
    }
  return (
    <div className='flex items-center justify-center'>
        <div className='pr-3  cursor-pointer' onClick={()=>setCurrentPage(current=>current-1)} disabled={currentPage===1}>
            Previous
        </div>
        {generatedPages.map(page=>(
            <div  onClick={()=>setCurrentPage(page)} key={page} className='w-[40px] h-[40px] flex items-center justify-center border cursor-pointer'> {page}</div>
        )
            )}
        <div className='pl-3 cursor-pointer ' onClick={()=>setCurrentPage(current=>current+1)} disabled={currentPage===pages}>
            Next
        </div>
    </div>
  )
}

export default Pagination