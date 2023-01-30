const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const port = 3000;

// log server requests to console
const morgan = require("morgan");
app.use(morgan("dev"));

// parse request body to json
app.use(express.json());

// write information about each request to a .txt logger file
app.use(logger);

// test route
// app.get("/test", (req, res, next) => {
//     try {
//         res.send("Hello World");
//     } catch (err) {
//         next(err);
//     }
// })

// import routes
const { peaksRouter, logRouter, rangeRouter } = require("./routes");
app.use(logRouter);
app.use(peaksRouter);
app.use(rangeRouter);

// handle 404 (not found)
app.use((req, res, next) => {
    try {
        res.status(404).send("The route you requested does not exist. Check the request url and method and try again.");
    } catch (err) {
        next(err);
    }
})

// error handler
app.use((err, req, res, next) => {
    console.error(err);
    res.status(err.status || 500).send(err.messsage || "An error occurred on the server.");
})

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
})

function logger (req, res, next) {
    try {
        let { method, url } = req;
        let msg = `${method} ${url} at ${new Date().toLocaleTimeString()} on ${new Date().toLocaleDateString()}`;
        fs.appendFile(path.join(__dirname, "./request_log.txt"), `${msg}\n`, (err) => {
            if (err) {
                next(err);
            }
        })
        
    } catch (err) {
        next(err);
    }
    next();
}