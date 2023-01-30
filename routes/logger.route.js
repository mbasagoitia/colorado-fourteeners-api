const express = require("express");
const { readFile } = require("fs");
const router = express.Router();
const path = require("path");
const filePath = path.join(__dirname, "../request_log.txt");

router.get("/requestlog", (req, res, next) => {
    try {
        readFile(filePath, (err, contents) => {
            if (err) {
                next (err);
            } else {
                res.send(contents);
            }
        })
    } catch (err) {
        next(err);
    }
})

module.exports = router;