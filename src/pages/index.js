import React from 'react';
import Link from 'gatsby-link';
import Card, { CardTitle, CardBlock, CardImage} from 'mineral-ui/Card';

import verticalAlignmentImage from '../images/verticalAlignment.png';

const BUGS = [
  {
    title: 'Vertical alignment between icon and label',
    image: verticalAlignmentImage,
    path: '/bugs/vertical-alignment',
  },
  {
    title: 'The z-index bug, or "How I Learned To Use 9999999"',
    image: verticalAlignmentImage,
    path: '/bugs/z-index',
  },
];

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
      {BUGS.map(({ title, image, path }) => (
        <Link
          key={title}
          to={path}
          css={{
            textDecoration: 'none',
          }}
        >
          <Card>
            <CardTitle>{title}</CardTitle>
            <CardImage src={image} />
          </Card>
        </Link>
      ))}
    </main>
  </div>
);

export default IndexPage;
