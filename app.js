'use strict'
require('dotenv/config');

const express = require('express');
const http = require('http');
const database = require('./src/config/database.js');
const properties = require('./src/config/server-properties.js');
const jwt = require('jsonwebtoken');

const app = express();
const port = properties.normalizePort(process.env.PORT || 3000);
const hostname = "127.0.0.1";

const appRoute = require('./src/routes/app-route.js');
const userRoute = require('./src/routes/security-route.js');
const sharedRoute = require('./src/routes/shared-route.js');


app.use(express.json());

app.use("/api", appRoute);
app.use("/api", userRoute);
app.use("/api", sharedRoute);


app.use((error, req, res, next) => {
    res.status(500).json({ error });
});

database.sync({ force: false }).then(() => {
    const server = http.createServer(app);

    app.set("port", port);

    server.listen(port, () => {
        console.log(`Serviço em execução em http://${hostname}:${port}/api/`);
    });

    server.on('error', properties.errorHandler);
    server.on('close', properties.closeHandler);
});
