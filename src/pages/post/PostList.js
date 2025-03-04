import React from 'react'
import PostItem from './PostItem'

function PostList({posts}) {
  return (
    <div  className='w-full grid grid-cols-1 lg:grid-cols-2 gap-4'>
    {posts.map(item=><PostItem post={item} key={item._id}/>)} 
    </div>
  )
}

export default PostList