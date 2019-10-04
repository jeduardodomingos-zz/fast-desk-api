'use strict'

const express = require('express');
const http = require('http');
const database = require('./src/config/database.js');
const jwt = require('jsonwebtoken');

const app = express();
const port = normalizePort(process.env.PORT || 3000);
const hostname = "127.0.0.1";

const appRoute = require('./src/routes/app-route.js');

function normalizePort(portNumber) {
    const port = parseInt(portNumber);

    if (isNaN(port)) {
        return portNumber;
    }

    if (port >= 0) {
        return port;
    }

    return false;
}

function errorHandler(err) {

    if (err.syscall !== 'listen') {
        throw err;
    }

    const bind = typeof port == 'string' ? 'Pipe ' + port : 'Port ' + port;

    switch (error.code) {
        case "EACCES":
            console.error("Hey man access denied, " + bind + " requires elevated privileges.");
            process.exit(1);
            break;
        case "EADDRINUSE":
            console.error("We have a problems, " + bind + " is already in use.");
            process.exit(1);
            break;
        default:
            throw error;
    }
}

function closeHandler(evt) {
    console.log("O serviço foi encerrado.");
}

app.use(express.json());
app.use("/api/", appRoute);


database.sync({ force: true }).then(() => {
    const server = http.createServer(app);

    app.set("port", port);

    server.listen(port, () => {
        console.log(`Serviço em execução em http://${hostname}:${port}/api/`);
    });

    server.on('error', errorHandler);
    server.on('close', closeHandler);
});
