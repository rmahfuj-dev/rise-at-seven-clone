import React from 'react'
import logo from '../assets/images/logos/logo.svg'
const Navbar = () => {
  return (
    <nav className='flex justify-between items-center px-6 py-4 rounded-3xl border'>
      <img src={logo} alt="" className="logo w-45" />
      <ul className="nav-menu flex items-center gap-6 font-semibold hover:bg-black hover:text-white">
        <li>Services +</li>
        <li>International +</li>
        <li>About +</li>
        <li>Work</li>
        <li>Careers</li>
        <li>Blog</li>
        <li>Webiner</li>
      </ul>
      <div className="btn">Get In Touch</div>
    </nav>
  )
}

export default Navbar