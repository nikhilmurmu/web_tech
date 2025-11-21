const express = require('express');
const app = express();

let users = [];

app.get('/', (req, res) => {
    res.json(users);
});

app.post('/', (req, res) => {
    const newUser = req.body;
    users.push(newUser);
    res.status(201).json(newUser);
});

const PORT = process.env.PORT || 3003;
app.listen(PORT, () => {
    console.log(`User Service is running on port ${PORT}`);
});