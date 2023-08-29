const { Client } = require('../db');
const Tracker = Client.Tracker;

class TrackerService {
 
    async getAll() { 
        return await Tracker.find();
    }

    async getCases(type) { 
        return await Tracker.find({[type]: {$gt: 0}});
    }

    // async getById(id) {
  
    //     return await Savings.findById({
    //         $oid: id
    //     });
    // }

    // async getLastInsertId() {
    //     return await Savings.find().sort({"_id" : -1}).limit(1);
    // }

    // async create(payload){
    //     if(await Savings.findOne({ payload })) {
    //         return {};
    //     }
    //     const user = new Savings(payload);
    //     return await user.save();
    //     // return await Savings.find().sort({"_id" : -1}).limit(1);
    // }

    // async update(id, payload) {
    //     await Savings.updateOne({_id: id}, payload);
    // }

    // async delete(id) {
    //     await Savings.findOneAndRemove({_id: id});
    // }
}

module.exports = TrackerService;