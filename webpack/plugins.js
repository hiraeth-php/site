const MiniCSS = require('mini-css-extract-plugin');
const BrowserSync = require('browser-sync-webpack-plugin');

module.exports = {

  //
  // MiniCSS
  //

  MiniCSS: new MiniCSS({
      filename: 'styles/[name].css'
  }),

  //
  // Browser Sync
  //

  BrowserSync: new BrowserSync({
    port: 3000,
    host: 'localhost',
    server: './public/',
    startPath: '/patterns/',
    files: ['./public/patterns/**/*']
  })
};
