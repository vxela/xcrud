const teamModel = require('./team-schema');
const userModel = require('../user-api/user-schema');

module.exports = {
    // getUserTeams: (req, res) => {
    //     teamModel.findOne({})
    // },
    createTeam: (req, res) => {
        teamModel.create({
            teamName: req.body.teamName,
            teamLeader: req.body.teamLeader,
            description: req.body.description
        })
    }
}