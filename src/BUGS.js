import IconCheck from 'mineral-ui-icons/IconCheck';
import IconMenu from 'mineral-ui-icons/IconMenu';
import IconFace from 'mineral-ui-icons/IconFace';

export default {
  'vertical-alignment': {
    title: 'Vertical alignment',
    render: () => (
      <div
        className="elem"
        css={{
          color: '#c52774',
          fontSize: '18px',
          minHeight: 40,
        }}
      >
        <IconCheck size={34} />
        <b css={{ color: '#666' }}>All good!</b>
      </div>
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
            width: 100,
            background: '#fff',
            border: '1px solid #ccc',
            padding: 10,
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
.elem a[href^="http"] {
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
  },
  'long-dynamic-text': {
    title: 'Long dynamic texts',
    render: () => (
      <div
        className="elem"
        css={{
          maxWidth: 230,
        }}
      >
        <nav
          css={{
            background: '#c52774',
            color: '#fff',
            height: 48,
            display: 'flex',
            alignItems: 'center',
            padding: '0 20px',
            position: 'relative',
            '& svg': {
              flexShrink: 0,
            }
          }}
        >
          <IconMenu size={30} />
          <b css={{ margin: '0 10px', flexGrow: 1 }}>
            Yael Rebecca Levy-Zaubermann
          </b>
          <IconFace size={30} />
        </nav>
      </div>
    ),
    css: {
      bug: {
        styles: `
        `,
      },
      ellipsize: {
        label: 'Ellipsize',
        styles: `
.elem b {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
        `,
      },
      hideOverflow: {
        label: 'Horizontal scroll',
        styles: `
.elem b {
  white-space: nowrap;
  overflow-x: auto;
}
        `,
      },
    },
  },
  'non-responsive-images': {
    title: 'Non-responsive images',
    render: () => (
      <div
        className="elem"
        css={{
          maxWidth: 230,
          fontFamily: 'serif',
          border: '1px solid #ccc',
          padding: 10,
        }}
      >
        <p>
          Check out this cat!
        </p>
        <div className="placeholder" />
        <img src="https://placekitten.com/g/400/200" css={{ lineHeight: 0, display: 'block' }} />
        <p css={{ marginTop: 10 }}>
          Isn't it cute? I wish there was a way I could own that cat.
        </p>
      </div>
    ),
    css: {
      bug: {
        styles: `
        `,
      },
      switchToBg: {
        label: 'Switch to a background image',
        styles: `
.elem img {
  display: none;
}
.elem .placeholder {
  background-image: url(https://placekitten.com/g/400/200);
  background-repeat: no-repeat;
  width: 100%;
  padding-top: 50%;
  background-size: cover;
}
        `,
      },
      widthAuto: {
        label: 'Use max-width',
        styles: `
.elem img {
  max-width: 100%;
}
        `,
      },
    },
  },
  'static-dimensions': {
    title: 'Static dimensions',
    render: () => (
      <div
        className="elem"
        css={{
          color: '#c52774',
          fontSize: '18px',
          fontFamily: 'serif',
          padding: '0 20px',
          border: '1px solid #ccc',
          lineHeight: '25px',
          background: '#fff',
        }}
      >
        I'm some text
        <br />
        that wraps to two lines
      </div>
    ),
    css: {
      bug: {
        styles: `
.elem {
  height: 40px;
}
        `,
      },
      minHeight: {
        label: 'Use min-height',
        styles: `
.elem {
  min-height: 40px;
}
        `,
      },
      avoid: {
        label: 'Avoid dimensions completely',
        styles: `
.elem {
}
        `,
      },

    },
  },
};
