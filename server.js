/**
 * Created by odyssefs on 10/3/15.
 */
// Run with the shell command "node server.js".
// Run in the background with "node server.js &".
// (first install Express with the command "npm install express")
// (first install Node.js, see https://github.com/joyent/node/wiki/Installation
var port = 8000,
    express = require('express'),
    app = express();
app.use('/', express.static(__dirname));
app.listen(port);
console.log('Now serving http://localhost:' + port + '/index.html');
