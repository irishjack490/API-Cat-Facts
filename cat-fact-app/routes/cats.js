const express = require('express');
const router = express.Router();
const catsCtrl = require('../controllers/catfacts');

//GET cats/fact
router.get('/fact', catsCtrl.show);


 module.exports = router;