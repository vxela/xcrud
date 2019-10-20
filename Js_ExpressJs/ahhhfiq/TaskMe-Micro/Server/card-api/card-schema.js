const mongoose = require('mongoose');

const cardSchema = mongoose.Schema(
    {
        task: {
            type: String,
            required: [true, 'Must have a title']
        },
        status: {
            type: Boolean,
            default: false
        },
        projectID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'project',
            required: true
        }
    }
);

const card = mongoose.model('card', cardSchema);

module.exports = card;