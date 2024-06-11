import React from 'react'
import logo from './images/logo.png'

const Nav = () => {
  return (
    <div className='nav-items'>
       <div className='nav-inner'>
        <img src={logo} alt='' className='logo' />
        <h1>Meme Generator</h1>
        </div> 
        <p className='nav-text'>React Course - Project 3</p>
    </div>
  )
}

export default Nav