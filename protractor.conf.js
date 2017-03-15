// An example configuration file.
// https://raw.github.com/angular/protractor/master/example/conf.js
exports.config = {

  capabilities: {
    'browserName': 'chrome'
  },

  allScriptsTimeout: 80000,

  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000
  }
};
