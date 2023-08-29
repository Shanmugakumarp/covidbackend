'use strict'
require('rootpath')();
const appConfig = require('./../config/service-config.json');
global.config = appConfig;
const { ErrorHandler } = require('./helper');

const app = require('express')();
const bodyParser = require('body-parser');
const cors = require('cors');
const { Routes } = require('./routes');
const logger = console.log;

class App {
    constructor(){}

    async bootUp() {
        logger('App starting boot up... !');
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: false }));
        app.use(cors());
        app.use("/", Routes);
        app.use(ErrorHandler);
        try {
            await this.startServer(app);
            logger('App successfully boot up... !');
        }
        catch(err){
            logger(err.message);
        }
    }

    async startServer(server) {
        let port = global.config && global.config.app_config.port ? global.config.app_config.port: 8080;
        server.listen(port, function () {
            logger(`App listening at${port} ...!`);
        })
    }
}

module.exports = App;