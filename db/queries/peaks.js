const query = require("../models");

const getAll = async () => {
    return await query("SELECT * FROM peaks;");
}

const getPeakById = async (id) => {
    return await query("SELECT * FROM peaks WHERE id = ?;", [id]);
}

const getPeaksByDifficulty = async (difficulty, range) => {
    return await query("SELECT * FROM peaks WHERE difficulty = ?;", [difficulty]);
}

const getPeaksByRange = async (range) => {
    return await query("SELECT * FROM peaks WHERE mountain_range = ?;", [range]);
}

const getPeaksByParams = async (difficulty, range) => {
    return await query("SELECT * FROM peaks WHERE difficulty = ? AND mountain_range = ?", [difficulty, range]);
}

const getRanges = async () => {
    return await query("SELECT DISTINCT mountain_range FROM peaks ORDER BY mountain_range;");
}

const addPeak = async (peakDetails) => {
    return await query("INSERT INTO peaks SET ?;", [peakDetails]);
}

const updatePeak = async (id, peakDetails) => {
    return await query("UPDATE peaks SET ? WHERE id = ?;", [peakDetails, id]);
}

const removePeak = async (id) => {
    return await query("DELETE FROM peaks WHERE id = ?;", [id]);
}

module.exports = {
    getAll,
    getPeakById,
    getPeaksByDifficulty,
    getPeaksByRange,
    getPeaksByParams,
    getRanges, 
    addPeak,
    updatePeak,
    removePeak
}

