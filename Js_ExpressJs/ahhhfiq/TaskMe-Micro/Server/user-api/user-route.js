const express = require('express');

const ejwt = require('express-jwt');

const router = express.Router();

const userController = require('./user-controller');

const auth = ejwt({
    secret: process.env.secretKey,
    userProperty: 'payload'
});

router.post('/login', userController.userLogin);

router.post('/register', userController.userRegister);

router.get('/profile', auth, userController.viewUser);

router.patch('/update/:username', auth, userController.userUpdate);

router.delete('/delete/:username', auth, userController.userDelete);


module.exports = router;
