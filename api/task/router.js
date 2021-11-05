// build your `/api/tasks` router here
const router = require('express').Router();

const Task = require('./model');

router.get('/', async (req, res, next) => {
    try {
        const task = await Task.getTask();
        res.json(task);
    } catch (err) {
        next(err)
    }
})

router.post('/', async (req, res, next) => {
    try {
        const task = await Task.insert(req.body);
        res.json(task);
    } catch (err) {
        next(err)
    }
})

module.exports = router;