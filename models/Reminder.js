const mongoose = require('mongoose');

const reminderSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    time: {
        type: Date,
        required: true,
    },
    type: {
        type: String,
        enum: ['mindfulness', 'break'],
        default: 'mindfulness',
    },
}, {
    timestamps: true,
});

const Reminder = mongoose.model('Reminder', reminderSchema);

module.exports = Reminder;
