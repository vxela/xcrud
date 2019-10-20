const express = require('express');
const ejwt = require('express-jwt');

const router = express.Router();

const projectController = require('./project-controller');

const auth = ejwt({
    secret: process.env.secretKey,
    userProperty: 'payload'
});

router.get('/', auth, projectController.getProjects);

router.get('/:id', auth, projectController.getSpecificProject);

router.post('/add', auth, projectController.addProject);

router.put('/update/:id', auth, projectController.updateProject);

router.delete('/delete/:id', auth, projectController.deleteProject);

module.exports = router;
