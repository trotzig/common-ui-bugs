import Card, { CardTitle, CardBlock, CardImage} from 'mineral-ui/Card';
import Link from 'gatsby-link';
import React from 'react';

import BUGS from '../BUGS';
import Header from '../components/header';
import Wrapper from '../components/Wrapper';

const IndexPage = () => (
  <div>
    <Header siteTitle="Common UI bugs and how to fix them" />
    <Wrapper>
      <p>This is a community-sourced collection of commont web UI bugs and how to fix them.</p>
      <main
        css={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gridColumnGap: '20px',
          gridRowGap: '20px',
        }}
      >
        {Object.keys(BUGS).map((key) => ({ ...BUGS[key], key })).map(({ key, title, render, css }) => (
          <Link
            key={key}
            to={`/bugs/${key}`}
            css={{
              textDecoration: 'none',
            }}
          >
            <Card>
              <CardTitle>{title}</CardTitle>
              <CardBlock>
                <div css={{ minHeight: 170 }}>
                  {render()}
                </div>
              </CardBlock>
              <style>{css.bug.styles}</style>
            </Card>
          </Link>
        ))}
      </main>
    </Wrapper>
  </div>
);

export default IndexPage;
