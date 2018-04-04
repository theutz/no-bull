import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
//
import 'styles/index.scss'
import Header from 'components/Header'
import { Container } from 'no-bull'

const TemplateWrapper = ({ children, data }) => {
  const { title, description } = !!data && data.site.meta

  return (
    <div>
      <Helmet
        title={title}
        meta={[
          { name: 'description', content: description },
          { name: 'keywords', content: 'sample, something' },
          { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        ]}
      >
        <script
          defer
          src="https://use.fontawesome.com/releases/v5.0.9/js/all.js"
          integrity="sha384-8iPTk2s/jMVj81dnzb/iFR2sdA7u06vHJyyLlAd4snFpCl/SnyUjRrbdJsw1pGIl"
          crossorigin="anonymous"
        />
      </Helmet>
      <Header title={title} />
      <Container>{children()}</Container>
    </div>
  )
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export const query = graphql`
  query LayoutIndex {
    ...SiteMetadata
  }

  fragment SiteMetadata on RootQueryType {
    site {
      meta: siteMetadata {
        title
        description
      }
    }
  }
`

export default TemplateWrapper
