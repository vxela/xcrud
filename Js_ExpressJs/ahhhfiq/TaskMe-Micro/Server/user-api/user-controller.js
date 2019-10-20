const userModel = require('./user-schema');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const _ = require('lodash');

module.exports = {
    userLogin: (req, res, next) => {
        userModel.findOne({ username: req.body.username }, (err, userInfo) => {
            if (err) {
                next();
            } else if (!userInfo) {
                res.json({
                    status: 'error',
                    message: 'User not found',
                    data: null
                });
            } else {
                if (bcrypt.compareSync(req.body.password, userInfo.password)) {
                    const token = jwt.sign(
                        {
                            id: userInfo._id,
                            username: userInfo.username,
                            accountLevel: userInfo.accountLevel
                        },
                        req.app.get('secretKey')
                    );
                    const filterUser = _.omit(userInfo.toObject(), [
                        'password'
                    ]); //Removing the password field from response
                    res.json({
                        status: 'success',
                        message: 'User Found',
                        data: { user: filterUser, token: token }
                    });
                } else {
                    res.json({
                        status: 'error',
                        message: 'Invalid password',
                        data: null
                    });
                }
            }
        });
    },
    userRegister: (req, res, next) => {
        userModel.create(
            {
                username: req.body.username,
                password: req.body.password
            },
            (err, userInfo) => {
                if (err) {
                    console.log(err);
                    next();
                } else {
                    const token = jwt.sign(
                        {
                            id: userInfo._id,
                            username: userInfo.username,
                            accountLevel: userInfo.accountLevel
                        },
                        req.app.get('secretKey')
                    );
                    res.json({
                        status: 'Success',
                        message: 'User registered successfully!',
                        data: { token: token }
                    });
                }
            }
        );
    },
    viewUser: (req, res) => {
        if (!req.payload.id) {
            res.status(401).json({
                message: 'UnauthorizedError: private profile'
            });
        } else {
            // Otherwise continue
            userModel.findById(req.payload.id).exec(function(err, user) {
                const filterUser = _.omit(user.toObject(), ['password']); //Removing the password field from response
                res.status(200).json(filterUser);
            });
        }
    },
    userUpdate: (req, res) => {
        // console.log(req);

        // if (req.body.username == null || req.body.username == undefined) {
        //     //User wants to update only their password
        //     req.body.password = bcrypt.hashSync(req.body.password, 10);
        //     userModel
        //         .findOneAndUpdate(
        //             { username: req.params.username },
        //             {
        //                 username: req.params.username,
        //                 password: req.body.password
        //             }
        //         )
        //         .then(user => {
        //             res.status(200).send(user);
        //         })
        //         .catch(err => {
        //             res.status(500).send(err);
        //         });
        // } else if (
        //     req.body.password == null ||
        //     req.body.password == undefined
        // ) {
        //     //User wants to update their username only
        //     userModel.find({ username: req.body.username }).then(userInfo => {
        //         userModel
        //             .findOneAndUpdate(
        //                 { username: req.body.username },
        //                 { username: req.body.user, password: userInfo.password }
        //             )
        //             .then(user => {
        //                 res.status(200).send(user);
        //             }).catch(err) ;
        //     });
        // } else {
        //     userModel
        //         .findOneAndUpdate({ username: req.params.username }, req.body)
        //         .then(user => {
        //             res.status(200).send(user)
        //         }).catch(err => {
        //             res.status(200).send(err)
        //         });
        // }
        userModel
            .findOneAndUpdate({ username: req.params.username }, { $set: { username: req.body.username }}, { new : true})
            .then(user => {
                res.status(200).send(user);
            })
            .catch(err => {
                res.status(200).send(err);
            });
    },
    userDelete: (req, res) => {
        userModel
            .findOneAndDelete({ username: req.params.username })
            .then(user => {
                res.status(200).send(user);
            });
    }
};
