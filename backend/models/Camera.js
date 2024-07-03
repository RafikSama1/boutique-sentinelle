const {model} = require('mongoose');

module.exports = model('Camera', {
    name: String,
    imageSensor: String,
    electronicShutterSpeed: String,
    illuminationDistance: String,
    lensType: String,
    focalLength: String,
    price: Number
});