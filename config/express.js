/**
 * Created by odyssefs on 10/31/15.
 */

// Invoke 'strict' JavaScript mode
'use strict';

var express = require('express');

module.exports = function () {
    var app = express();
    require('../app/routes/island.server.route.js')(app);
    app.use('/', express.static('./'));

    // Use the Express application instance to listen to the '3000' port
    app.listen(8000);
};
