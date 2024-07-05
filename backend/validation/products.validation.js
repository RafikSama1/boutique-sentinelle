const Joi = require('joi');

exports.store = {
    name: Joi.string().required(),
    imageSensor: Joi.string().valid('Indoor', 'Outdoor').required(),
    electronicShutterSpeed: Joi.number().positive(),
    illuminationDistance: Joi.number().positive().required(),
    lensType: Joi.string(),
    focalLength: Joi.string(),
    price: Joi.string(),
};
