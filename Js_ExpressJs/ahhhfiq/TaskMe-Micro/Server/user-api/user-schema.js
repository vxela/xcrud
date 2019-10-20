'use strict';

const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const bcrypt = require('bcrypt');
const saltRound = 10;

const userSchema = mongoose.Schema(
    {
        username: {
            type: String,
            lowercase: true,
            required: [true, "can't be blank"],
            match: [/^[a-zA-Z0-9]+$/, 'is invalid'],
            unique: true,
            trim: true,
            uniqueCaseInsensitive: true
        },
        password: {
            type: String,
            min: 6,
            trim: true,
            required: [true, "Can't be blank"]
        },
        accountLevel: {
            type: Boolean,
            default: false
        },
        teams: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'team'
            }
        ]
    },
    { timestamps: true }
);

//Uses a plugin to ensure unique emails and/or username
userSchema.plugin(uniqueValidator, {
    message: 'Error, {VALUE} is already taken'
});

//Hashes users password before it is saved
userSchema.pre('save', function(next) {
    this.password = bcrypt.hashSync(this.password, saltRound);
    next();
});

var user = mongoose.model('User', userSchema);

module.exports = user;
