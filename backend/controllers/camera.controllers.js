const Camera = require('../models/Camera');

exports.index = async(req, res)=>{
    const cameras = await Camera.find();
    return res.json(cameras);
};

exports.store = async(req, res)=>{
    const camera = await Camera.create(req.body);
    return res.json(camera);
};

exports.show = async(req, res)=>{
    const camera = await Camera.findById(req.params.id);
    return camera ? res.json(camera) : res.status(404).json({ message: "Not found" });
};

exports.update = async(req, res)=>{
    const camera = await Camera.findByIdAndUpdate(req.params.id, req.body, {new:true});
    return camera ? res.json(camera) : res.status(404).json({ message: "Not found" });
};

exports.delete = async(req, res)=>{
    const camera = await Camera.findByIdAndDelete(req.params.id);
    return camera ? res.json({ message: "Deleted successfully" }) : res.status(404).json({ message: "Not found" });
};