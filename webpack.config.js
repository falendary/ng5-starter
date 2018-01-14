const ngtools = require('@ngtools/webpack');
const webpackMerge = require('webpack-merge');
const commonPartial = require('./config/webpack/webpack.common');
const clientPartial = require('./config/webpack/webpack.client');
const serverPartial = require('./config/webpack/webpack.server');
const {getAotPlugin} = require('./config/webpack/webpack.aot');


const ENV = JSON.stringify(process.env.SERVER_TYPE) || 'local';

module.exports = function (options, webpackOptions) {

  options = options || {};

  var aot = false;

  if (ENV != 'local') {
    aot = true;
  }

  if (aot) {
    console.log('AOT compilation started');
  } else {
    console.log('GIT compilation started');
  }


  const serverConfig = webpackMerge({}, commonPartial, serverPartial, {
    //entry: aot ? './src/main.server.aot.ts' : serverPartial.entry,
    entry: serverPartial.entry,
    // entry: serverPartial.entry, // aot ? './src/main.server.aot.ts' : serverPartial.entry,
    plugins: [
      // getAotPlugin('server', !!options.aot)
      //getAotPlugin('server', aot)
      getAotPlugin('server', false)
    ]
  });

  const clientConfig = webpackMerge({}, commonPartial, clientPartial, {
    entry: aot ? './src/main.browser.aot.ts' : clientPartial.entry,
    // entry: clientPartial.entry,
    plugins: [
      // getAotPlugin('client', !!options.aot)
      getAotPlugin('client', aot)
    ]

  });

  // if (webpackOptions.p) {
  //   clientConfig = webpackMerge({}, clientConfig);
  // }

  const configs = [];
  configs.push(clientConfig, serverConfig);
  // if (!options.aot) {
  //   configs.push(clientConfig, serverConfig);
  //
  // } else if (options.client) {
  //   configs.push(clientConfig);
  //
  // } else if (options.server) {
  //   configs.push(serverConfig);
  // }

  return configs;
}
