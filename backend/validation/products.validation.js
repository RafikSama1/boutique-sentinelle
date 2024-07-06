const Joi = require('joi');

exports.store = {
    name: Joi.string().required(),
    imageSensor: Joi.string(),
    electronicShutterSpeed: Joi.string(),
    illuminationDistance: Joi.string(),
    lensType: Joi.string(),
    focalLength: Joi.string(),
    price: Joi.number().positive().required(),
};
