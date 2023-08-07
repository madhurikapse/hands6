import React from 'react'
import {NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
      <>
      <div className='Nav'>
       <NavLink to='/' className='link'>Home</NavLink>
       <NavLink to='/student' className='link'>Student</NavLink>
       <NavLink to='/contactUs' className='link'>ContactUs</NavLink>
       </div>
      </>
    )
}

export default NavBar