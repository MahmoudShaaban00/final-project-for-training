import React from 'react'
import { useNavigate } from 'react-router-dom'


export default function NotFound() {

  let navigate = useNavigate()
  const changePage = ()=>{
    navigate('./')
  }
  return (
   <div className='text-center mt-36'>
    <h1 className='xl:text-8xl'>404 Not Found</h1>
    <p className='text-lg font-semibold mt-10'> Your visited page not found. You may go home page.</p>
    <button onClick={()=>{changePage()}} className='bg-red-800 text-white mt-20 px-14 py-3 rounded'>Back to home page</button>
   </div>
  )
}
