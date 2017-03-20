// An example configuration file.
// https://raw.github.com/angular/protractor/master/example/conf.js
exports.config = {

  capabilities: {
    'browserName': 'chrome',
    'chromeOptions': {
      'args': ['incognito', '--lang=en', '--window-size=1366,768']
    }
  },

  allScriptsTimeout: 80000,

  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000
  }
};
