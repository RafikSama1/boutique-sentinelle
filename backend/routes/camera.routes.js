const {Router} = require('express');
const router = Router();

const camerasControllers = require('../controllers/camera.controllers');
const objectIdMiddleware = require('../middelware/objectMiddleware');

router.get('/bs', camerasControllers.index);
router.post('/bs', camerasControllers.store);
router.get('/bs/:id', objectIdMiddleware, camerasControllers.show);
router.put('/bs/:id', objectIdMiddleware, camerasControllers.update);
router.delete('/bs/:id', objectIdMiddleware, camerasControllers.delete);

module.exports = router;