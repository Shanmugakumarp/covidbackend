const config = global.config;
const mongoose = require('mongoose');
const { host, db_name } = config.db_config;
const connectionString = `mongodb://${host}:27017/${db_name}`;

mongoose.connect(process.env.MONGODB_URI || connectionString).then((result) => {
    console.log("DB Connection estabilished!");
}).catch((err) => {
    console.log(err);
});
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.Promise = global.Promise;

module.exports = {
    Tracker: require('./../models/tracker-model')
}