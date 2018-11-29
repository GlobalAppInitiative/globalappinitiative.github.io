import React from 'react'
import { Link } from 'gatsby'

import Footer from '../components/footer'

const AboutUsPage = () => (
  <div>
    <h1>Hi from the About Us page</h1>
    <p>Welcome to the page</p>
    <Link to="/">Go back to the homepage</Link>
    <Footer />
  </div>
)

export default AboutUsPage
