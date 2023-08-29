const express = require('express');
const Routes = express.Router();
const TrackerRoutes = require('./tracker-route');

Routes.use("/tracker", TrackerRoutes);

module.exports = { 
    Routes,
    TrackerRoutes
};
