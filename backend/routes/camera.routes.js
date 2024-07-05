const {Router} = require('express');
const router = Router();

const camerasControllers = require('../controllers/camera.controllers');
const objectIdMiddleware = require('../middelwares/objectMiddleware');
const errorHandler = require('../middelwares/errorHandler.middleware');

const validator = require('../middelwares/validator.middleware');
const productsValidation = require('../validation/products.validation');

router.get('/products', camerasControllers.index, errorHandler(camerasControllers.index));
router.post('/products',validator(productsValidation.store), camerasControllers.store, errorHandler(camerasControllers.store));
router.get('/products/:id', objectIdMiddleware, camerasControllers.show, errorHandler(camerasControllers.show));
router.put('/products/:id', objectIdMiddleware, validator(camerasControllers.update), camerasControllers.update, errorHandler(camerasControllers.update));
router.delete('/products/:id', objectIdMiddleware, camerasControllers.delete, errorHandler(camerasControllers.delete));

module.exports = router;