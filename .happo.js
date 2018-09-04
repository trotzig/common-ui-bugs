const fs = require('fs');
const path = require('path');

const glob = require('glob');
const webpack = require('webpack');
const { RemoteBrowserTarget } = require('happo.io');

const { HAPPO_API_KEY: apiKey, HAPPO_API_SECRET: apiSecret } = process.env;

const FILENAME_PATTERN = /\/([\w-_]+)\/index\.html?$/;

function filenameToComponentName(filename) {
  return filename.replace(`${process.cwd()}/public/`, '').replace('/index.html', '') || 'index';
}

function happoPluginGatsby({ allPages = true } = {}) {
  return {
    customizeWebpackConfig: config => {
      let pages = glob.sync(path.join(__dirname, './public/**/index.html'));
      if (!pages.length) {
        throw new Error('No `index.html` files were found in the ./public folder. Make sure you run `gatsby build` first.');
      }
      const seenDirs = new Set();

      if (!allPages) {
        // Filter out "duplicate" pages (those that are variants of each other).
        pages = pages.filter(page => {
          const dir = path.dirname(path.dirname(page));
          if (seenDirs.has(dir)) {
            return false;
          }
          seenDirs.add(dir);
          return true;
        });
      }
      console.log(`Found ${pages.length} Gatsby pages`);
      config.resolve.extensions = ['', '.js', '.jsx', '.json'];

      config.plugins.push(
        new webpack.DefinePlugin({
          HAPPO_GATSBY_PAGES: JSON.stringify(
            pages.map(page => ({
              component: filenameToComponentName(page),
              content: fs.readFileSync(page, 'utf-8'),
            })),
          ),
        }),
      );
      return config;
    },

    publicFolders: [path.resolve(process.cwd(), 'public')],

    pathToExamplesFile: path.join(__dirname, 'happoExamples'),
  };
}

module.exports = {
  endpoint: 'http://localhost:4432',
  apiKey,
  apiSecret,
  plugins: [happoPluginGatsby({ allPages: true })],
  type: 'plain',
  targets: {
    chrome: new RemoteBrowserTarget('chrome', {
      viewport: '960x700',
    }),
    'chrome-small': new RemoteBrowserTarget('chrome', {
      viewport: '320x640',
    }),
  },
};
