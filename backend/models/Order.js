const {model} = require('mongoose');

module.exports = model('Order', {
    products: [Object],
    customerFullName: String,
    shippingAdress: String,
    phoneNumber: String,
    status: String
});