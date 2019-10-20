const userModel = require('../user-api/user-schema');
const projectModel = require('../project-api/project-schema');
const cardModel = require('../card-api/card-schema');
const _ = require('lodash');

module.exports = {
    getUserCount: (req, res) => {
        if (req.payload.accountLevel === false) {
            res.status(403).json({ message: 'Unauthorized access' });
        } else {
            userModel
                .countDocuments({})
                .then(users => {
                    res.status(200).json({ count: users });
                })
                .catch(err => {
                    res.status(500).send(err);
                });
        }
    },
    getProjectCount: (req, res) => {
        if (req.payload.accountLevel === false) {
            res.status(403).json({ message: 'Unauthorized access' });
        } else {
            projectModel
                .countDocuments({})
                .then(projects => {
                    res.status(200).json({ count: projects });
                })
                .catch(err => {
                    res.status(500).send(err);
                });
        }
    },
    getTaskCount: (req, res) => {
        if (req.payload.accountLevel === false) {
            res.status(403).json({ message: 'Unauthorized access' });
        } else {
            cardModel
                .countDocuments({})
                .then(card => {
                    res.status(200).json({ count: card });
                })
                .catch(err => {
                    res.status(500).send(err);
                });
        }
    },
    getAdminCount: (req, res) => {
        if (req.payload.accountLevel === false) {
            res.status(403).json({ message: 'Unauthorized access' });
        } else {
            userModel
                .find({ accountLevel: true })
                .countDocuments()
                .then(admins => {
                    res.status(200).json({ count: admins });
                })
                .catch(err => {
                    res.status(500).send(err);
                });
        }
    },
    getUsers: (req, res) => {
        if (req.payload.accountLevel === false) {
            res.status(403).json({ message: 'Unauthorized access' });
        } else {
            userModel
                .find({}, '-_id username')
                .then(users => {
                    res.status(200).send(users);
                })
                .catch(err => {
                    res.status(500).send(err);
                });
        }
    },
    getProjects: (req, res) => {
        if (req.payload.accountLevel === false) {
            res.status(403).json({ message: 'Unauthorized access' });
        } else {
            projectModel
                .find({}, 'projectName')
                .then(projects => {
                    res.status(200).send(projects);
                })
                .catch(err => {
                    res.status(500).send(err);
                });
        }
    },
    getTasks: (req, res) => {
        if (req.payload.accountLevel === false) {
            res.status(403).json({ message: 'Unauthorized access' });
        } else {
            cardModel
                .find({}, 'task')
                .then(tasks => {
                    res.status(200).send(tasks);
                })
                .catch(err => {
                    res.status(500).send(err);
                });
        }
    },
    getAdmins: (req, res) => {
        if (req.payload.accountLevel === false) {
            res.status(403).json({ message: 'Unauthorized access' });
        } else {
            userModel
                .find({ accountLevel: true }, '-_id username')
                .then(admins => {
                    res.status(200).send(admins);
                })
                .catch(err => {
                    res.send(err);
                });
        }
    },
    makeAdmin: (req, res) => {
        if (req.payload.accountLevel === false) {
            res.status(403).json({ message: 'Unauthorized access' });
        } else {
            userModel.findOne({ username: req.params.username }).then(user => {
                user.accountLevel = true;

                userModel
                    .findOneAndUpdate({ username: user.username }, user)
                    .then(newAdmin => {
                        res.send(newAdmin);
                    });
            });
        }
    },
    removeAdmin: (req, res) => {
        if (req.payload.accountLevel === false) {
            res.status(403).json({ message: 'Unauthorized access' });
        } else {
            userModel
                .findOne({ username: req.params.username })
                .then(user => {
                    if (user.username === 'admin') {
                        res.status(401).send(
                            'Main admin account cant be removed from admin'
                        );
                    } else {
                        user.accountLevel = false;

                        userModel
                            .findOneAndUpdate({ username: user.username }, user)
                            .then(newAdmin => {
                                res.send(newAdmin);
                            });
                    }
                })
                .catch(err => {
                    res.status(500).send(err);
                });
        }
    },
    deleteUser: (req, res) => {
        if (req.payload.accountLevel === false) {
            res.status(403).json({ message: 'Unauthorized access' });
        } else {
            userModel.findOne({ username: req.params.username }).then(user => {
                if (user.username === 'admin') {
                    res.status(401).send('Main admin account cant be deleted');
                } else if (user.accountLevel === true) {
                    res.status(401).send('Admin accounts cant be deleted');
                } else {
                    userModel
                        .findOneAndDelete({ username: user.username })
                        .then(username => {
                            res.status(200).json({'message': 'User is deleted'});
                        });
                }
            });
        }
    }
};
