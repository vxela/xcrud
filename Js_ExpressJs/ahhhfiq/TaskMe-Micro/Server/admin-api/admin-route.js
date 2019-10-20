const express = require('express');

const ejwt = require('express-jwt');

const router = express.Router();

const adminController = require('./admin-controller');

const auth = ejwt({
    secret: process.env.secretKey,
    userProperty: 'payload'
});

router.get('/user/count', auth, adminController.getUserCount);

router.get('/count', auth, adminController.getAdminCount);

router.get('/users', auth, adminController.getUsers);

router.get('/projects', auth, adminController.getProjects);

router.get('/tasks', auth, adminController.getTasks);

router.get('/admins', auth, adminController.getAdmins);

router.get('/project/count', auth, adminController.getProjectCount);

router.get('/card/count', auth, adminController.getTaskCount);

router.put('/adminify/:username', auth, adminController.makeAdmin);

router.put('/remove/:username', auth, adminController.removeAdmin);

router.delete('/delete/:username', auth, adminController.deleteUser);

module.exports = router;
