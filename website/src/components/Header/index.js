import React from 'react'
import Link from 'gatsby-link'

const Header = ({ title, description }) => (
  <div>
    <div>
      <h1>
        <Link to="/">
          <i className="fas fa-bullseye" />
          {title}
        </Link>
      </h1>
    </div>
  </div>
)

export default Header
