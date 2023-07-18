const express = require('express');
const router = express.Router();

const {signUp, verifyOtp} = require('../controllers/userController');

router.post('/signup', signUp);

router.post('/signup/verify', verifyOtp);

module.exports = router;