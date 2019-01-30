const express = require('express');
const path = require('path');
const app = express();
const publicPath = path.join(__dirname, '../dist');

app.use(express.static(publicPath));

app.listen(3000, () => {
    console.log('Server running on port 3000');
});