const Camera = require('../models/Camera');

exports.index = async(req, res)=>{
    const cameras = await Camera.find();
    return res.json(cameras);
};

exports.store = async(req, res)=>{
    const camera = await Camera.create({
        name: req.body.name,
        imageSensor: req.body.imageSensor,
        electronicShutterSpeed: req.body.electronicShutterSpeed,
        illuminationDistance: req.body.illuminationDistance,
        lensType: req.body.lensType,
        focalLength: req.body.focalLength,
        price: req.body.price,
        image: req.file.path
    });
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