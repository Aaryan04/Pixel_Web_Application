const Project = require('../models/Project');


module.exports.getAllProjects = (req, res) => {
    Project.find({}, (err, projects) => {
        if (err) {
        res.send(err);
        }
        res.json(projects);
    });
}

module.exports.getProjectById = (req, res) => {
    Project.findById(req.params.id, (err, project) => {
        if (err) {
        res.send(err);
        }
        res.json(project);
    });
}

module.exports.createProject = (req, res) => {
    Project.create(req.body, (err, project) => {
        if (err) {
        res.send(err);
        }
        res.json(project);
    });
}

module.exports.updateProject = (req, res) => {
    Project.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, (err, project) => {
        if (err) {
        res.send(err);
        }
        res.json(project);
    });
}

module.exports.deleteProject = (req, res) => {
    Project.remove({_id: req.params.id}, (err, project) => {
        if (err) {
        res.send(err);
        }
        res.json(project);
    });
}