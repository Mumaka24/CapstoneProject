const express = require('express');
const { createSession, getUserSessions } = require('../controllers/sessionController');

const router = express.Router();

router.post('/', createSession);
router.get('/:userId', getUserSessions);

module.exports = router;
