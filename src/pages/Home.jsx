import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='main-container'>
      <Link to='animals'>Animals</Link>
    </div>
  )
}

export default Home