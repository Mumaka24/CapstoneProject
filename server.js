const express = require('express');
const dotenv = require('dotenv');
const PORT = process.env.PORT || 3001;
const app = express();
const cookieParser = require('cookie-parser')
const connectToDb = require('./config/connectToDb')
connectToDb()
const userRoutes = require('./routes/userRoutes');
const sessionRoutes = require('./routes/sessionRoutes');
const notificationRoutes = require('./routes/notificationRoutes');
const reminderRoutes = require('./routes/reminderRoutes');  // Add reminder routes

dotenv.config();
// ------->------->-------> Middleware
const ensureLoggedIn = require('./config/ensureLoggedIn')
app.use(express.json());
//  data -> json

app.use(require('./config/checkToken'))
app.use(cors({
    origin:true,
    credentials: true
  }))
// Use Routes
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/sessions', require('./routes/ sessionRoutes'));
app.use('/api/notifications', require('./routes/ notificationRoutes'));
app.use('/api/reminders',  require('./routes/reminderRoutes'));  // Connect reminders

app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
