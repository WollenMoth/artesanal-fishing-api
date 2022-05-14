const express = require("express");

const app = express();

app.use(express.json());

app.get("/api", (req, res) => {
    res.send("Welcome to the artisanal fishing API!");
});

module.exports = app;
