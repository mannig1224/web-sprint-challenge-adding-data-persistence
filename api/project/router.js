// build your `/api/projects` router here
const router = require('express').Router();

const Project = require('./model');

router.get('/', async (req, res, next) => {
    try {
        const project = await Project.getProjects();
        res.json(project);
    } catch (err) {
        next(err)
    }
})

router.get('/:id', async (req, res, next) => {
    try {
        const project = await Project.getProjectId(req.params.id);
        res.json(project);
    } catch (err) {
        next(err)
    }
})

router.post('/', async (req, res, next) => {
    try {
        const project = await Project.insert(req.body);
        res.json(project);
    } catch (err) {
        next(err)
    }
})

module.exports = router;