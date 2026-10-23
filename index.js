const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send("Hello from GIT + Docker integration!, second commmit ");
});

app.listen(port, '0.0.0.0', () => {
    console.log(`App is running on port ${port}`);
});
