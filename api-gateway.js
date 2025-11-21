const express = require('express');
const app = express();
const sportService = require('./sport-service');
const bookingService = require('./booking-service');
const userService = require('./user-service');

app.use('/sports', sportService);
app.use('/bookings', bookingService);
app.use('/users', userService);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`API Gateway is running on port ${PORT}`);
});