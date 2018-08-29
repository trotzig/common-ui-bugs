import IconCheck from 'mineral-ui-icons/IconCheck';
import IconMenu from 'mineral-ui-icons/IconMenu';

export default {
  'vertical-alignment': {
    title: 'Vertical alignment',
    render: () => (
      <span className="elem" css={{ color: '#c52774', fontSize: '18px', minHeight: 40 }}>
        <IconCheck size={34} />
        <b css={{ color: '#666' }}>All good!</b>
      </span>
    ),
    css: {
      bug: {
        styles: `
.elem svg {
  vertical-align: baseline;
}
        `,
      },
      flex: {
        label: 'Use flexbox',
        styles: `
.elem {
  display: inline-flex;
  align-items: center;
}
        `,
      },
      positionAbsolute: {
        label: 'Use absolute positioning',
        styles: `
.elem {
  display: inline-block;
  position: relative;
}
.elem svg {
   position: absolute;
   left: 0;
   top: 50%;
   transform: translateY(-50%);
}
.elem b {
  margin-left: 34px;
  line-height: 40px;
}
        `,
      },
    },
    path: '/bugs/vertical-alignment',
  },
  'z-index': {
    title: 'Z-index issues',
    render: () => (
      <div
        className="elem"
        css={{
          position: 'relative',
          minHeight: 130,
        }}
      >
        <div
          className="elem-1"
          css={{
            position: 'absolute',
            top: 10,
            right: 140,
            padding: 10,
            width: 100,
            background: '#fff',
            border: '1px solid #ccc',
          }}
        >
          I'm an element on the page
        </div>
        <div
          className="elem-2"
          css={{
            position: 'absolute',
            top: 10,
            right: 20,
            padding: 10,
            width: 100,
            background: '#fff',
            border: '1px solid #ccc',
          }}
        >
          I'm a different element on the page
        </div>
        <nav
          css={{
            background: '#c52774',
            color: 'white',
            minHeight: 48,
            display: 'flex',
            alignItems: 'center',
            padding: '0 20px',
            position: 'relative',
          }}
        >
          <IconMenu size={30} />
          <b css={{ marginLeft: 10 }}>I'm a navbar</b>
        </nav>
      </div>
    ),
    css: {
      bug: {
        styles: `
.elem-2 {
  z-index: 2;
}
.elem nav {
  z-index: 1;
}
        `,
      },
      stackingContexts: {
        label: 'Use DOM order + stacking contexts',
        styles: `
.elem nav {
  position: relative;
}
        `,
      },
      brooklyn999999: {
        label: 'Dance the z-index dance',
        styles: `
.elem nav {
  z-index: 99999999999;
}
.elem-2 {
  z-index: 9999999
}
        `,
      },
    },
    path: '/bugs/z-index',
  },
  'overflowing-urls': {
    title: 'Overflowing URLs',
    render: () => (
      <div
        className="elem"
        css={{
          maxWidth: 240,
          fontFamily: 'serif',
          position: 'relative',
          border: '1px solid #ccc',
          padding: 10,
        }}
      >
        Check out this cool cat that I found while googling for something completely different:{' '}
        <a href="https://www.google.se/search?q=happo+screenshot+testing&foo=asdfklasjdflkasdflkasdlfkjasldkflaskdfjlaksjdflkajsdlfkjalsdkfjlaksdjflkasjdlfkjasdlfkjalsdkfjlaskdjflakjdflkajsdlfk">
          https://www.google.se/search?q=happo+screenshot+testing&foo=asdfklasjdflkasdflkasdlfkjasldkflaskdfjlaksjdflkajsdlfkjalsdkfjlaksdjflkasjdlfkjasdlfkjalsdkfjlaskdjflakjdflkajsdlfk
        </a>. Isn't it cute?
      </div>
    ),
    css: {
      bug: {
        styles: `
        `,
      },
      breakWords: {
        label: 'Break words',
        styles: `
.elem a[href^="https:"] {
  word-wrap: break-word;
}
        `,
      },
      hideOverflow: {
        label: 'Hide the overflow',
        styles: `
.elem {
  overflow: hidden;
}
        `,
      },
    },
    path: '/bugs/z-index',
  },
};
