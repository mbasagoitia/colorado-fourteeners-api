const express = require("express");
const { getAll, getPeakById, getPeaksByDifficulty, getPeaksByRange, getPeaksByParams, addPeak, updatePeak, removePeak } = require("../db/queries/peaks");
const router = express.Router();


router.get("/peaks/:id?", async (req, res, next) => {
    try {
        let results;

        let { id } = req.params;
        let { difficulty, range } = req.query;

        if (id) {
            results = await getPeakById(id);
        } else if (difficulty && range) {
            results = await getPeaksByParams(difficulty, range);
        } else if (difficulty) {
            results = await getPeaksByDifficulty(difficulty);
        } else if (range) {
            results = await getPeaksByRange(range);
        }
        else {
            results = await getAll();
        }
        if (results.length == 0) {
            res.send("No results found for your request.");
        }
        res.json(results);
    } catch (err) {
        next(err);
    }
})

router.post("/peaks", async (req, res, next) => {
    let peakInfo = req.body;
    try {
        let { insertId } = await addPeak(peakInfo);
        res.json({ insertId, msg: "Successfully added new peak to the database" });
    } catch (err) {
        next(err);
    }
})

router.put("/peaks/:id", async (req, res, next) => {
    let { id } = req.params;
    let peakInfo = req.body;

    try {
        let peakId = parseInt(id);
        if (isNaN(peakId)) {
            res.status(400).json({ msg: "You must provide a valid ID parameter", id: peakId});
        } else {
            await updatePeak(peakId, peakInfo);
            res.json({ msg: "Successfully updated peak in database", id: peakId });
        }
    } catch (err) {
        next(err);
    }
})

router.delete("/peaks/:id", async (req, res, next) => {
    let { id } = req.params;

    try {
        let peakId = parseInt(id);
        if (isNaN(peakId)) {
            res.status(400).json({ msg: "You must provide a valid ID parameter", id: peakId});
        } else {
            await removePeak(peakId);
            res.json({ msg: "Successfully removed peak from database", id: peakId });
        }
    } catch (err) {
        next(err);
    }
})

module.exports = router;