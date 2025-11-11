const { body } = require('express-validator');

const createProductValidation = [
    body('name')
        .notEmpty().withMessage('Product name is required')
        .isString().withMessage('Product name must be a string')
        .isLength({ min: 3 , max: 100}).withMessage('Product name must be between 3 and 100 characters'),
    body('description')
        .notEmpty().withMessage('Product description is required')
        .isString().withMessage('Product description must be a string')
        .isLength({ min: 10 }).withMessage('Product name must be at least 10 characters long'),
    body('price')
        .notEmpty().withMessage('Product price is required')
        .isFloat({ gt: 0 }).withMessage('Product price must be a number greater than 0'),
    body('stock')
        .notEmpty().withMessage('Product stock is required')
        .isInt({ gt: -1 }).withMessage('Product stock must be a non-negative integer'),
    body('category')
        .notEmpty().withMessage('Product category is required')
        .isString().withMessage('Product category must be a string')
];

module.exports = {
    createProductValidation
};