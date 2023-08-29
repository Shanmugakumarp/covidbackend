const express = require('express');
const TrackerRouter = express.Router();
const { TrackerController } = require('../controller');
let controller = new TrackerController();

//trackerroutes
TrackerRouter.get('/getAll', controller.getAll);
TrackerRouter.get('/listcases', controller.getCases);

module.exports = TrackerRouter;