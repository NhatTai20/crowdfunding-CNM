import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import './Home.scss'
const Home = () => {
  return (
    <div className='Home'>
        <h1>Crowfunding App</h1>
        <nav>
            <Link to='campaigns'>Campaign List</Link> |{' '}
            <Link to='campaigns/new'>New Campaign</Link>
        </nav>
        <Outlet/>
    </div>
  )
}

export default Home