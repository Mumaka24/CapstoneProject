const Notification = require('../models/Notification');

// Create a Notification
const createNotification = async (req, res) => {
    const { userId, message, time } = req.body;

    try {
        const notification = await Notification.create({
            user: userId,
            message,
            time,
        });

        res.status(201).json(notification);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get Notifications for a User
const getUserNotifications = async (req, res) => {
    const { userId } = req.params;

    try {
        const notifications = await Notification.find({ user: userId });
        res.json(notifications);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { createNotification, getUserNotifications };
