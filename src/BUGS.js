import IconDeleteForever from 'mineral-ui-icons/IconDeleteForever';

export default {
  'vertical-alignment': {
    title: 'Vertical alignment between icon and label',
    render: () => (
      <span className="valign" css={{ fontSize: '18px', minHeight: 40 }}>
        <IconDeleteForever size="3em" />
        <b>Remove forever</b>
      </span>
    ),
    css: {
      bug: {
        styles: `
.valign svg {
  vertical-align: middle;
}
        `,
      },
      flex: {
        label: 'Use a flex layout',
        styles: `
.valign {
  display: inline-flex;
  align-items: center;
}
        `,
      },
      positionAbsolute: {
        label: 'Use absolute positioning',
        styles: `
.valign {
  display: inline-block;
  position: relative;
}
.valign svg {
   position: absolute;
   left: 0;
   top: 50%;
   transform: translateY(-50%);
}
.valign b {
  margin-left: 48px;
  line-height: 48px;
}
        `,
      },
    },
    path: '/bugs/vertical-alignment',
  },
  'z-index': {
    title: 'The z-index bug, or "How I Learned To Use 9999999"',
    render: () => (
      <span className="z-index">
        <IconDeleteForever />
      </span>
    ),
    css: {
      bug: `
        .z-index {
        }
      `
    },
    path: '/bugs/z-index',
  },
};

