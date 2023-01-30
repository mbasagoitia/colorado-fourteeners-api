const mysql2 = require("mysql2");
const mysqlConfig = require("../config");

const connection = mysql2.createPool(mysqlConfig);

const query = (query, values) => {
    return new Promise((resolve, reject) => {
        connection.query(query, values, (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        })
    })
}

module.exports = query;