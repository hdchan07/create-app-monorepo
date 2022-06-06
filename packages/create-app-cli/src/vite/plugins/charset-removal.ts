import type * as Postcss from 'postcss';

function charsetRemovalPlugin() {
  const plugin: Postcss.Plugin = {
    postcssPlugin: 'internal:charset-removal',
    AtRule: {
      charset(atRule) {
        if (atRule.name === 'charset') {
          atRule.remove();
        }
      },
    },
  };

  return plugin;
}

export default charsetRemovalPlugin;
