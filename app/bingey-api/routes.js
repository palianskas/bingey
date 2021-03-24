const express = require('express');

const titleController = require('$/controllers/titleController.js');

const router = express.Router();

router.post('/titles', titleController.validate('createTitle'), titleController.createTitle);

module.exports = router;
