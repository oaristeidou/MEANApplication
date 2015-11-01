/**
 * Created by odyssefs on 10/3/15.
 */
// Run with the shell command "node server.js".
// Run in the background with "node server.js &".
// (first install Express with the command "npm install express")
// (first install Node.js, see https://github.com/joyent/node/wiki/Installation
var express = require('./config/express'),
    app = express();
console.log('Now serving http://localhost:8000');
