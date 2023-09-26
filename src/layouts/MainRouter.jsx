import React from 'react'
import { Outlet } from 'react-router-dom'
import Home from '../pages/Home'


const MainRouter = () => {
  return (
    <div className='bg-slate-100 min-h-screen'>
      <Outlet/>
    </div>
  )
}

export default MainRouter