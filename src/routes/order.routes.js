const express = require('express');
const router = express.Router();

const OrderController = require('../controllers/order.controller');
const AuthMiddleware = require('../middlewares/authMiddleware');
const validationHandler = require('../middlewares/validationHandler');

router.post('/', 
    AuthMiddleware.Authenticate,
    AuthMiddleware.Authorization("User"),
    OrderController.createOrder);
router.get('/', 
    AuthMiddleware.Authenticate,
    AuthMiddleware.Authorization("User"),
    OrderController.getOrderByUserId);

module.exports = router;