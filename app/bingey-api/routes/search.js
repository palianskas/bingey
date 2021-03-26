const express = require('express'); //import express

const router  = express.Router(); 
const searchController = require('../controllers/search.js');

router.get('/q/:query', searchController.searchTitle);

module.exports = router;

