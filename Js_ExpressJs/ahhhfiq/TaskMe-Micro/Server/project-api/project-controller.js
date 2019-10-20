const projectModel = require('./project-schema');

module.exports = {
    addProject: (req, res) => {
        projectModel
            .create({
                projectName: req.body.projectName,
                createdBy: req.payload.id,
                projectDesc: req.body.projectDesc
            })
            .then(project => {
                res.status(200).send(project);
            })
            .catch(err => {
                res.status(500).send(err);
            });
    },
    getProjects: (req, res) => {
        projectModel
            .find({ createdBy: req.payload.id })
            .sort({ createdAt: -1 })
            .then(projects => {
                res.status(200).send(projects);
            })
            .catch(err => {
                res.status(500).send(err);
            });
    },
    getSpecificProject: (req, res) => {
        projectModel
            .findById({ _id: req.params.id })
            .then(project => {
                res.status(200).send(project);
            })
            .catch(err => {
                res.status(500).send(err);
            });
    },
    deleteProject: (req, res) => {
        projectModel
            .findByIdAndDelete({ _id: req.params.id })
            .then(project => {
                res.status(200).json({
                    message: 'Project successfully deleted',
                    project: project
                });
            })
            .catch(err => {
                res.status(500).send(err);
            });
    },
    updateProject: (req, res) => {
        projectModel
            .findByIdAndUpdate(
                { _id: req.params.id },
                {
                    projectName: req.body.projectTitle,
                    projectDesc: req.body.projectDesc
                }
            )
            .then(project => {
                res.status(200).send(project);
            })
            .catch(err => {
                res.status(500).send(err);
            });
    }
};
