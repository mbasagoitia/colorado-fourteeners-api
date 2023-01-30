const express = require("express");
const router = express.Router();
const { getRanges } = require("../db/queries/peaks");

router.get("/ranges", async (req, res, next) => {
    try {
        let results = await getRanges();
        res.json(results);
    } catch (err) {
        next(err);
    }
})

module.exports = router;