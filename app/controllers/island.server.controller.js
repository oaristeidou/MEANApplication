/**
 * Created by odyssefs on 11/7/15.
 */
var Island = require('mongoose').model('Island');

exports.create = function (req, res, next) {
    var island = new Island(req.body);

    island.save(function (err) {
        if (err)
            return next(err);
        else
            return res.json(island);
    });
};

exports.list = function (req, res, next) {
    Island.find({}, function (err, islands) {
        if (err)
            return next(err);
        else
            return res.json(islands);

    });
};