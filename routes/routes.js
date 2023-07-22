const express = require('express');
const router = express.Router();
const ctrlr = require('../controllers/controllers');

router.get('/data', ctrlr.main_page);

router.post('/newNote', ctrlr.post_note);
router.post('/editNote/:id', ctrlr.edit_note);

router.delete('/deleteNote/:id', ctrlr.delete_note);

module.exports = router;