import React from 'react'
import Link from 'gatsby-link'

import Wrapper from '../components/Wrapper';

const Header = ({ siteTitle }) => (
  <div
    css={{
      background: '#10aa8d',
      marginBottom: '1.45rem',
    }}
  >
    <Wrapper>
      <h1 css={{ padding: '20px 0', margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </Wrapper>
  </div>
)

export default Header
