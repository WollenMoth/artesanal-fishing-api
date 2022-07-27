const express = require("express");
const cors = require("cors");
const api = require("../routes/api");

const app = express();
const port = process.env.PORT || 8000;

const corsOptions = { origin: true };

app.use(express.json());
app.use(cors(corsOptions));

app.use("/api/v1", api);

app.get("*", (req, res) => {
    res.redirect("/api/v1");
});

const server = app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

module.exports = server;
