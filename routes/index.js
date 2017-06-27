var express = require('express');
var router = express.Router();
var homeController = require('../controllers/homeController');
var userController = require('../controllers/userController');
var teamController = require('../controllers/teamController');

// display root route
router.get('/', homeController.home);

// display list of users
router.get('/users', userController.getUsers);

// display one user
router.get('/users/:id', userController.getUser);

// display list of teams
router.get('/teams', teamController.getTeams);

module.exports = router;
