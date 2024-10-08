// This schema stores notifications sent to users regarding their reminders
const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
    reminder: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Reminder',
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    sentAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Notification', notificationSchema);
