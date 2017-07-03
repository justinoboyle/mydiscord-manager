window.$localStorage = window.localStorage;

const apiloader = require('mydiscord-api-loader'),
      _package = require('./package'),
      fs = require('fs'),
      path = require('path');

const config = {
    package: _package,
    localplugins: path.join(__dirname, 'local-plugins')
};

if(!fs.existsSync(localplugins))
    fs.mkdir(localplugins);

apiloader(config);