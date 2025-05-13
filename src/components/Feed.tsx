import React from 'react'
import Post from './Post'

type Props = {}

const Feed = (props: Props) => {
  return (
    <div className='p-4 bg-white rounded-lg shadow-md flex flex-col gap-12'>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
    </div>
  )
}

export default Feed