const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const router = require("./routes");

require("./db.js");

const server = express();

server.name= "API";

//Middlewares
server.use(bodyParser.urlencoded({extended:false}));
server.use(bodyParser.json({}));
server.use(morgan("dev"));

server.use("/product", router)

// Error catching endware.
server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
    const status = err.status || 500;
    const message = err.message || err;
    console.error(err);
    res.status(status).send(message);
  });



module.exports = server;


