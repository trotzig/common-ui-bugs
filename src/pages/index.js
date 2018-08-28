import Card, { CardTitle, CardBlock, CardImage} from 'mineral-ui/Card';
import Link from 'gatsby-link';
import React from 'react';

import BUGS from '../BUGS';

const IndexPage = () => (
  <div>
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
              {render()}
            </CardBlock>
            <style>{css.bug.styles}</style>
          </Card>
        </Link>
      ))}
    </main>
  </div>
);

export default IndexPage;
