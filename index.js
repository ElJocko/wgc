'use strict';

var logger = require('./app/lib/logger');

logger.info('wgc app starting');

var os = require('os');
logger.info('** hostname = ' + os.hostname());
logger.info('** type = ' + os.type());
logger.info('** platform = ' + os.platform());
logger.info('** arch = ' + os.arch());
logger.info('** release = ' + os.release());
logger.info('** uptime = ' + os.uptime())
logger.info('** versions = ' + JSON.stringify(process.versions));

// Configure the app
logger.info('Configuring the app');
var config = require('./app/lib/config');

// Create the express application
logger.info('Starting express');
var express = require('express');
var app = express();

// Only use request logger for development environment
if (config.app.env === 'development') {
    logger.info('Enabling request logging');
    var morgan = require('morgan');
    app.use(morgan('dev', { stream : logger.stream }));
}

// Set up the static routes
app.use(express.static('public'));

var server = app.listen(config.server.port, function () {
    var host = server.address().address;
    var port = server.address().port;

    logger.info('Listening at http://%s:%s', host, port);
    logger.info('wgc start up complete');
});

module.exports = app;
