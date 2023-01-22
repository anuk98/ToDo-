import React from 'react'
import Home from '../Home'
import Signup from '../Signup'
import './Nav.css'

function Nav() {
  return (
    <div className='navbar'>
        <Home/>
        <Signup/>
    </div>
  )
}

export default Nav