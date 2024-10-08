const express = require('express');
const {
    createReminder,
    getUserReminders,
    updateReminder,
    deleteReminder,
} = require('../controllers/reminderController');

const router = express.Router();

// Route to create a new reminder
router.post('/', createReminder);

// Route to get all reminders for a user
router.get('/:userId', getUserReminders);

// Route to update a reminder
router.put('/:id', updateReminder);

// Route to delete a reminder
router.delete('/:id', deleteReminder);

module.exports = router;
