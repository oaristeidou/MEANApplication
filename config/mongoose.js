/**
 * Created by odyssefs on 11/7/15.
 */

var develop = require('./development'),
    mongoose = require("mongoose");

module.exports = function () {
    var db = mongoose.connect(develop.db);
    require('../app/models/island.server.model');
    return db;
}
