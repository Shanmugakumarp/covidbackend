const { TrackerService } = require('../service');

const trackerService = new TrackerService();

class TrackerController {
    constructor(){

    }

    async getAll(req, res, next) {
        try {
            let data = await trackerService.getAll();
            res.json(data);
        } catch (err) {
            next(err);
        }
    }

    async getCases(req, res, next) {
        try {
            let data = await trackerService.getCases(req.query.type);
            res.json(data);
        } catch (err) {
            next(err);
        }
    }

    // async getById(req, res, next) {
    //     try {
    //         let savings = await savingsService.getById(req.params.id);
    //         if (savings) res.json(savings);
    //         else res.sendStatus(404);
    //     } catch (err) {
    //         next(err);
    //     }
    // }

    // async update(req, res, next) {
    //     try {
    //         await savingsService.update(req.params.id, req.body);
    //         await remindersService.delete(req.params.id);
    //         let reminders = await remindersService.create(savingsTrigger.createReminder(req.body));
    //         res.json({ message: "savings upadted successfully" });
    //     } catch (error) {
    //         next(err);
    //     }
    // }

    // async create(req, res, next) {
    //     try {
    //         let savings = await savingsService.create(req.body);
    //         let reminders = await remindersService.create(savingsTrigger.createReminder(savings));
    //         res.json({ message: "savings upadted successfully", data: savings, reminders: reminders });
    //     } catch (error) {
    //         next(err);
    //     }
    // }

    // async delete(req, res, next) {
    //     try {
    //         await savingsService.delete(req.params.id);
    //         await remindersService.delete(req.params.id);
    //         res.json({ message: "savings deleted successfully" });
    //     } catch (error) {
    //         next(err);
    //     }
    // }

}

module.exports = TrackerController ;