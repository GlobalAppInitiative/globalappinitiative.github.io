import React from 'react'
import { Link } from 'gatsby'

import GAILogo from '../components/gai-logo'
import Footer from '../components/footer'
import './../styles/index.css'

const IndexPage = () => (
  <div>
    <div className='navbar'>
      <Link to="/about-us/">About Us</Link>
      <span>|</span>
      <Link to="/join-us/">Join Us</Link>
  	  <span>|</span>
      <Link to="/submit-a-project/">Submit a Project</Link>
    </div>
    
    <div className='center-div'>
      <div style={{ maxWidth: '300px', marginLeft: '40%' }}>
        <GAILogo />
      </div>

    	<h1>GAI</h1>
    	<h3>-- Cool tagline --</h3>
    </div>

    <div className='center-div'>
    	<button onClick={() => alert("Joined GAI")}>Join GAI</button>
    	<button onClick={() => alert("Submitted a project")}>Submit a project</button>
    </div>

    <div>
    	<h4>Other section with pics and stuff down here</h4>
    </div>

    <Footer />
  </div>

)

export default IndexPage
