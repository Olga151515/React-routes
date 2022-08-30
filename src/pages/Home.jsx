import React from 'react'
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div>
       <h1>Academical Inc.</h1>
       <div className='divider'></div>
       <Outlet />
    </div>
   
  )
}

export default Home