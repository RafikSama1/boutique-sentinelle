const Order = require('../models/Order');

exports.index = async(req, res)=>{
    const orders = await Order.find();
    res.json(orders);
};

exports.store = async(req, res)=>{
    const order = await Order.create(req.body);
    res.json(order);
};

exports.show = async(req, res)=>{
    const order = await Order.findById(req.params.id);
    res.json(order);
};

exports.update = async(req, res)=>{
    const order = await Order.findByIdAndUpdate(req.params.id, req.body, {new:true});
    res.json(order);
};

exports.delete = async(req, res)=>{
    const order = await Order.findByIdAndDelete(req.params.id);
    res.send('Deleted successfully');
};