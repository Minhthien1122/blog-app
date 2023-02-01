import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../img/logo.png'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='container'>
        <div className='logo'>
          <img src={Logo} alt='logo' />
        </div>
        <div className='links'>
          <Link to="/?cat=art" className='link'>
            <h6>ART</h6>
          </Link>
          <Link to="/?cat=art" className='link'>
            <h6>SCIENCE</h6>
          </Link>
          <Link to="/?cat=art" className='link'>
            <h6>TECHNOLOGY</h6>
          </Link>
          <Link to="/?cat=art" className='link'>
            <h6>CINEMA</h6>
          </Link>
          <Link to="/?cat=art" className='link'>
            <h6>DESIGN</h6>
          </Link>
          <Link to="/?cat=art" className='link'>
            <h6>FOOD</h6>
          </Link>
          <span>ThienMinh</span>
          <span>Login</span>
          <span className="write">
            <Link className='link' to="/write">Write</Link>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Navbar