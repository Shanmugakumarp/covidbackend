const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    date: { type: String },
    country: { type: String },
    confirmed: { type: Number },
    deaths: { type: Number },
    recovered: { type: Number },
    active: { type: Number },
    new_cases: { type: Number },
    new_deaths: { type: Number },
    new_recovered: { type: Number },
    WHO_region: { type: String },
});


schema.set('toJSON', { virtuals: true});
module.exports = mongoose.model('datatrackers', schema);