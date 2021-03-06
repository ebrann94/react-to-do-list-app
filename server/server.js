const express = require('express');
const path = require('path');
const app = express();
const publicPath = path.join(__dirname, '../dist');

const port = process.env.PORT || 3333;

app.use(express.static(publicPath));

app.listen(port, () => {
    console.log(`Server running on port ${port}` );
});