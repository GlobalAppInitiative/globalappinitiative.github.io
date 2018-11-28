import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import GAILogo from '../components/gai-logo'
import './../styles/index.css'

const IndexPage = () => (
  <Layout>
    <div className='navbar'>
  	  <Link to="/submit-a-project/">Submit a Project</Link>
  	  <span>|</span>
      <Link to="/join-us/">Join Us</Link>
    </div>
    
    <div className='center-div'>
      <div style={{ maxWidth: '300px', marginLeft: '34%' }}>
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



  </Layout>
)

export default IndexPage
