const Camera = require('../models/Camera');

exports.index = async(req, res)=>{
    const cameras = await Camera.find();
    res.json(cameras);
};

exports.store = async(req, res)=>{
    const camera = await Camera.create(req.body);
    res.json(camera);
};

exports.show = async(req, res)=>{
    const camera = await Camera.findById(req.params.id);
    res.json(camera);
};

exports.update = async(req, res)=>{
    const camera = await Camera.findByIdAndUpdate(req.params.id, req.body, {new:true});
    res.json(camera);
};

exports.delete = async(req, res)=>{
    const camera = await Camera.findByIdAndDelete(req.params.id);
    res.send('Deleted successfully');
};