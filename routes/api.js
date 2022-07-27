const express = require("express");
const router = express.Router();

router.get("", (req, res) => {
    res.json({ message: "Welcome to the artisanal fishing API!" });
});

router.use("/captains", require("./captains"));
router.use("/companies", require("./companies"));
router.use("/boats", require("./boats"));
router.use("/proposals", require("./proposals"));

module.exports = router;
