const generateimage = require('../controllers/openai');
const express = require('express');
const router = express.Router();

router.post('/generateimage', generateimage);

module.exports = router;