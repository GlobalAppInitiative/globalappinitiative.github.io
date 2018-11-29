import React from 'react'

import GAILogo from '../components/gai-logo'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import './../styles/index.css'

const IndexPage = () => (
  <div>
    <Navbar />
    
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
