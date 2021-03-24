const express = require('express');

const titleController = require('$/controllers/titleController.js');

const router = express.Router();

router.route('titles').post(titleController.postTitle);

module.exports = router;
