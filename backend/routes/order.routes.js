const {Router} = require('express');
const router = Router();

const ordersControllers = require('../controllers/order.controllers');
const objectIdMiddleware = require('../middelware/objectMiddleware');

router.get('/orders', ordersControllers.index);
router.post('/orders', ordersControllers.store);
router.get('/orders/:id', objectIdMiddleware, ordersControllers.show);
router.put('/orders/:id', objectIdMiddleware, ordersControllers.update);
router.delete('/orders/:id', objectIdMiddleware, ordersControllers.delete);

module.exports = router;