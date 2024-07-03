const {Router} = require('express');
const router = Router();

const camerasControllers = require('../controllers/camera.controllers');
const objectIdMiddleware = require('../middelware/objectMiddleware');

router.get('/products', camerasControllers.index);
router.post('/products', camerasControllers.store);
router.get('/products/:id', objectIdMiddleware, camerasControllers.show);
router.put('/products/:id', objectIdMiddleware, camerasControllers.update);
router.delete('/products/:id', objectIdMiddleware, camerasControllers.delete);

module.exports = router;