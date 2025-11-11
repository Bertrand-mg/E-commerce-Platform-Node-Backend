const express = require('express');
const router = express.Router();

const ProductController = require('../controllers/product.controller');
const { createProductValidation, } = require('../validations/product.validation');
const validationHandler = require('../middlewares/validationHandler');
const AuthMiddleware = require('../middlewares/authMiddleware');

router.post('/', 
    AuthMiddleware.Authenticate, 
    AuthMiddleware.Authoroization("Admin"),  
    createProductValidation, validationHandler, ProductController.createProduct);
router.put('/:id', 
    AuthMiddleware.Authenticate, 
    AuthMiddleware.Authoroization("Admin"),
    createProductValidation, validationHandler, ProductController.updateProduct);
router.get('/', ProductController.getAllProducts);

module.exports = router;