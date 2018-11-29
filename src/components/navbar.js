import React from 'react'

import { Link } from 'gatsby'
import '../styles/navbar.css'

const Navbar = () => (
  <div className='navbar'>
    <Link to="/about-us/">About Us</Link>
    <span>|</span>
    <Link to="/join-us/">Join Us</Link>
    <span>|</span>
    <Link to="/submit-a-project/">Submit a Project</Link>
  </div>
)

export default Navbar