const express = require('express');

const router = express.Router();
const AppController = require('../controllers/AppController').default;
const StudentsController = require('../controllers/StudentsController').default;

router.get('/', AppController.getHomepage);

router.get('/students', StudentsController.getAllStudents);

router.get('/students/:major', StudentsController.getAllStudentsByMajor);

module.exports = router;
