import IconDeleteForever from 'mineral-ui-icons/IconDeleteForever';
import IconMenu from 'mineral-ui-icons/IconMenu';

export default {
  'vertical-alignment': {
    title: 'Vertical alignment',
    render: () => (
      <span className="elem" css={{ fontSize: '18px', minHeight: 40 }}>
        <IconDeleteForever size="3em" />
        <b>Remove forever</b>
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
  margin-left: 48px;
  line-height: 48px;
}
        `,
      },
    },
    path: '/bugs/vertical-alignment',
  },
  'z-index': {
    title: 'Z-index issues',
    render: () => (
      <div className="elem" css={{
        position: 'relative',
        minHeight: 200,
      }}>
        <div className="elem-1" css={{
          position: 'absolute',
          top: 10,
          right: 140,
          padding: 10,
          width: 100,
          background: '#fff',
          border: '1px solid #ccc',
        }}>
          I'm an element on the page
        </div>
        <div className="elem-2" css={{
          position: 'absolute',
          top: 10,
          right: 20,
          padding: 10,
          width: 100,
          background: '#fff',
          border: '1px solid #ccc',
        }}>
          I'm a different element on the page
        </div>
        <nav css={{
          background: '#c52774',
          color: 'white',
          minHeight: 48,
          display: 'flex',
          alignItems: 'center',
          padding: '0 20px',
          position: 'relative',
        }}>
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
        `
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
        `
      }
    },
    path: '/bugs/z-index',
  },
};

