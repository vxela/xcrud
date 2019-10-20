const mongoose = require('mongoose');

const teamSchema = mongoose.Schema(
    {
        teamName: {
            type: String,
            required: [true, 'Must have a team name']
        },
        teamLeader: [{ type: Schema.types.ObjectId, ref: 'User' }, {required: true}],
        teamMembers: [{ type: Schema.types.ObjectId, ref: 'User' }],
        description: {
            type: String
        }
    },
    {
        timestamps: true
    }
);

const team = mongoose.model('team', teamSchema);

module.exports = team;
