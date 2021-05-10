const express = require('express');

const titleController = require('$/controllers/title.js');

const router = express.Router();

router.post('/', titleController.validate('createTitle'), titleController.createTitle);
router.get('/:id', titleController.getTitleById);

module.exports = router;
