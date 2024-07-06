const {Router} = require('express');
const router = Router();

const camerasControllers = require('../controllers/camera.controllers');
const objectIdMiddleware = require('../middelwares/objectMiddleware');
const errorHandler = require('../middelwares/errorHandler.middleware');

const validator = require('../middelwares/validator.middleware');
const productsValidation = require('../validation/products.validation');

const multer = require('multer');
const upload = multer({dest: "public/uploads/"});

router.get('/products', errorHandler(camerasControllers.index));
router.post('/products', upload.single('image'), validator(productsValidation.store), errorHandler(camerasControllers.store));
router.get('/products/:id', objectIdMiddleware, errorHandler(camerasControllers.show));
router.put('/products/:id', objectIdMiddleware, validator(camerasControllers.update), errorHandler(camerasControllers.update));
router.delete('/products/:id', objectIdMiddleware, errorHandler(camerasControllers.delete));

module.exports = router;