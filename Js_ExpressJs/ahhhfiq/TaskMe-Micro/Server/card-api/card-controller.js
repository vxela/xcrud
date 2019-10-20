const cardModel = require('./card-schema');

module.exports = {
    getCards: (req, res) => {
        cardModel
            .find({ projectID: req.params.projectID })
            .sort({ createdAt: -1 })
            .then(cards => {
                res.status(200).send(cards);
            }).catch(err => {
                res.status(404).send(err);
            });
    },
    addCard: (req, res) => {
        cardModel.create({
            task: req.body.task,
            projectID: req.params.projectID
        }).then(card => {
            res.status(200).send(card);
        });
    },
    updateCard: (req, res) => {
        cardModel
            .findByIdAndUpdate({ _id: req.body.id }, req.body)
            .then(card => {
                res.status(200).send(card);
            });
    },
    updateCardStatus: (req, res) => {
        cardModel
            .findByIdAndUpdate({ _id: req.params.id }, {status: true})
            .then(card => {
                res.status(200).send(card);
            })
            .catch(err => {
                res.status(400).send(err);
            });
    },
    deleteCard: (req, res) => {
        cardModel.findByIdAndDelete({ _id: req.params.id }).then(card => {
            res.status(200).json({
                message: 'Card has been deleted',
                card: card
            });
        });
    }
};
