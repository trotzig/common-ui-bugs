import Button from 'mineral-ui/Button';
import Card, { CardTitle, CardBlock } from 'mineral-ui/Card';
import IconClear from 'mineral-ui-icons/IconClear';
import IconNavigateBefore from 'mineral-ui-icons/IconNavigateBefore';
import IconNavigateNext from 'mineral-ui-icons/IconNavigateNext';
import React from 'react';
import Link from 'gatsby-link';

import BUGS from '../BUGS';
import Header from './header';
import Wrapper from './Wrapper';

function getNavPages(id) {
  const ids = Object.keys(BUGS)
  const i = ids.indexOf(id);

  let previous;
  let next;

  if (i !== 0) {
    previous = ids[i - 1];
  }

  if (i < (ids.length - 1)) {
    next = ids[i + 1];
  }

  return [previous, next];
}

export default class BugPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCss: 'bug',
    }
  }

  render() {
    const { id } = this.props;
    const { title, render, css } = BUGS[id];
    const { selectedCss } = this.state;
    const [previousPage, nextPage] = getNavPages(id);
    return (
      <div>
        <Header siteTitle={title} />
        <style>
          {css[selectedCss].styles}
        </style>
        <Wrapper>
          <main
            css={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gridColumnGap: '20px',
            }}
          >
            <div>
              <h2>What it looks like</h2>

              <div css={{ minHeight: 120, backgroundColor: '#f0f0f0', padding: 20, borderRadius: 3 }}>
                {render()}
              </div>

              <div css={{ marginLeft: -9, marginTop: 5 }}>
                <Button
                  minimal
                  onClick={() => this.setState({ selectedCss: 'bug' })}
                  disabled={selectedCss === 'bug'}
                  iconStart={<IconClear />}
                >
                  Reset styling
                </Button>
              </div>
            </div>
            <div>
              <h2>How to fix it</h2>
              {Object.keys(css).map((key) => {
                const { label, styles } = css[key];
                const onClick = () => this.setState({ selectedCss: key });
                if (key === 'bug') return null;
                return (
                  <div
                    key={key}
                    css={{
                      marginBottom: 30,
                      boxShadow: key === selectedCss ? '0 0 0 1px blue' : undefined,
                    }}
                  >
                    <Card onClick={onClick}>
                      <CardTitle>
                        {label}
                      </CardTitle>
                      <CardBlock>
                        <div
                          css={{
                            position: 'relative',
                            '&::after': {

                              background: 'linear-gradient(0deg, #f5f5f5, rgba(0, 0, 0, 0) 80%) no-repeat',
                              position: 'absolute',
                              bottom: 0,
                              left: 0,
                              width: '100%',
                              height: 30,
                              content: ' ',
                            },
                            '&::before': {

                              background: 'linear-gradient(180deg, #f5f5f5, rgba(0, 0, 0, 0) 80%) no-repeat',
                              position: 'absolute',
                              top: 0,
                              left: 0,
                              width: '100%',
                              height: 30,
                              content: ' ',
                            }
                          }}
                        >
                          <pre css={{
                            maxHeight: 150,
                            overflow: 'auto',
                          }}>
                            {styles.trim()}
                          </pre>
                        </div>
                      </CardBlock>
                    </Card>
                  </div>
                );
              })}
            </div>
          </main>
        </Wrapper>
        <div css={{
          position: 'fixed',
          left: 0,
          bottom: 20,
          width: '100%',
        }}>
          <Wrapper>
            <div css={{
              display: 'flex',
              justifyContent: 'space-between',
            }}>
              {previousPage ? (
                <Link to={`/bugs/${previousPage}`}>
                  <Button element="div" size="jumbo" iconStart={<IconNavigateBefore />} circular />
                </Link>
              ) : <span />}
              {nextPage ? (
                <Link to={`/bugs/${nextPage}`}>
                  <Button element="div" size="jumbo" iconStart={<IconNavigateNext />} circular />
                </Link>
              ) : <span/>}
            </div>
          </Wrapper>
        </div>
      </div>
    )
  }
}
