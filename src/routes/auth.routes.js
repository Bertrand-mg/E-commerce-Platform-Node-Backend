const express = require('express');
const router = express.Router();

const AuthController = require('../controllers/auth.controller');
const { registerValidation, loginValidation } = require('../validations/auth.validation');
const validationHandler = require('../middlewares/validationHandler');

router.post('/register', registerValidation, validationHandler ,AuthController.register);
router.post('/login', loginValidation, validationHandler, AuthController.login);

module.exports = router;