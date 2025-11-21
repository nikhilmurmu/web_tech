const express = require('express');
const app = express();

let bookings = [];

app.get('/', (req, res) => {
    res.json(bookings);
});

app.post('/', (req, res) => {
    const newBooking = req.body;
    bookings.push(newBooking);
    res.status(201).json(newBooking);
});

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
    console.log(`Booking Service is running on port ${PORT}`);
});