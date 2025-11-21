const express = require('express');
const app = express();

const sports = ['football', 'basketball', 'tennis', 'cricket', 'volleyball'];

app.get('/', (req, res) => {
    res.json(sports);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Sport Service is running on port ${PORT}`);
});