const mongoose = require('mongoose');

const projectSchema = mongoose.Schema(
    {
        projectName: {
            type: String,
            required: [true, 'Must have a project name']
        },
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        projectDesc: {
            type: String
        }
    },
    { timestamps: true }
);

var projects = mongoose.model('project', projectSchema);

module.exports = projects;
