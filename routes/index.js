const express = require('express');
const router = express.Router();
//const logo = require('../public/images/planet.svg')

/* GET home page. */
router.get('/', function(req, res, next,p='') {
  res.render('index', { title: 'Express', logo:'',post:p});
});

module.exports = router;
