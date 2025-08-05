import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const  {userId} = useParams();
  return (
    <div className='bg-gray-600 text-white w-5xl h-2xl p-4 text-center flex justify-center'>User: {userId}</div>
  )
}

export default User