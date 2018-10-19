const express = require("express");
const path = require("path");

const app = new express();

require('dotenv').load();

const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'dist')));

app.use("*", function (req, resp) {
    resp.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
    console.log("Application started");
    console.log("Running on port: " + PORT);
    console.log();
});