import React from 'react';
import Card, { CardTitle, CardBlock, CardImage} from 'mineral-ui/Card';
import Button from 'mineral-ui/Button';
import { createThemedComponent } from 'mineral-ui/themes';
import IconClear from 'mineral-ui-icons/IconClear';

import BUGS from '../BUGS';

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
    return (
      <div>
        <h1>{title}</h1>
        <style>
          {css[selectedCss].styles}
        </style>
        <main
          css={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gridTemplateRows: '1fr 1fr',
            gridColumnGap: '20px',
            gridRowGap: '20px',
          }}
        >
          <div>
            <h2>What it looks like</h2>
            <Card>
              <CardBlock>
                <div css={{ minHeight: 60 }}>
                  {render()}
                </div>
              </CardBlock>
            </Card>
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
      </div>
    )
  }
}
