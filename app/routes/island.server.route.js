/**
 * Created by odyssefs on 11/7/15.
 */

var island = require('../../app/controllers/island.server.controller');

module.exports = function (app) {
    app.route('/island')
        .post(island.create)
        .get(island.list);
};
