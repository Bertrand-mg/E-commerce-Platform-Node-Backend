const express = require('express');
const router = express.Router();

const AuthController = require('../controllers/auth.controller');
const { registerValidation, loginValidation } = require('../validations/auth.validation');
const validate = require('../middlewares/validate');

router.post('/register', registerValidation, validate ,AuthController.register);
router.post('/login', loginValidation, validate, AuthController.login);

module.exports = router;