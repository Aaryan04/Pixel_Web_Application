const { Router } = require('express');
const projectController = require('../controllers/projectController');
const projectRouter = Router();


projectRouter.get('/', projectController.getAllProjects);
projectRouter.get('/:id', projectController.getProjectById);
projectRouter.post('/', projectController.createProject);
projectRouter.put('/:id', projectController.updateProject);
projectRouter.delete('/:id', projectController.deleteProject);

module.exports = projectRouter;