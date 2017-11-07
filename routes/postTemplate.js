const express = require('express');
const router = express.Router();
const fs = require('fs')
let psts = require('../data/posts.json')
psts = JSON.stringify(psts)
//const logo = require('../public/images/planet.svg')

/* GET home page. */
router.get('/', function(req, res, next, post) {
  res.render('post', { post })
});

module.exports = router;
