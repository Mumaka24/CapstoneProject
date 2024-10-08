const express = require('express');
const { createNotification, getUserNotifications } = require('../controllers/notificationController');

const router = express.Router();

router.post('/', createNotification);
router.get('/:userId', getUserNotifications);

module.exports = router;
