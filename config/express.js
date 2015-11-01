/**
 * Created by odyssefs on 10/31/15.
 */

// Invoke 'strict' JavaScript mode
'use strict';

var express = require('express');

module.exports = function () {
    var app = express();
    app.use('/', express.static('./'));
    app.listen(8000);
};
