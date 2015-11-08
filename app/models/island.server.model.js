/**
 * Created by odyssefs on 11/7/15.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var IslandSchema = new Schema({
    name: String,
    population: Number,
    googleMapInfo: {
        mapPoint: {
            latitude: Number,
            longitude: Number
        },
        center: {
            latitude: Number,
            longitude: Number
        },
        mapOptions: {
            draggable: Boolean
        },
        zoom: Number,
        windowDetails: String
    },
    locationName: String,
    img: String,
    shortDesc: String,
    longDesc: String
});

mongoose.model('Island', IslandSchema);