import React from 'react'
import Link from 'gatsby-link'
import { Title } from 'no-bull'

const IndexPage = () => (
  <div>
    <Title>Hi people</Title>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
