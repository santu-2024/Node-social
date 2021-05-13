const express = require('express');
const router = express.Router();
const homeControllers = require('../controllers/home_controllers');


router.get('/', homeControllers.home);

module.exports = router;