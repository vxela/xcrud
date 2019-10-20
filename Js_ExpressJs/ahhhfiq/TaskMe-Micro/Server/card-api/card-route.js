const express = require('express');

const router = express.Router();

const cardController = require('../card-api/card-controller');

router.get('/:projectID', cardController.getCards);

router.post('/add/:projectID', cardController.addCard);

router.put('/update/:id', cardController.updateCard);

router.put('/status/:id', cardController.updateCardStatus);

router.delete('/delete/:id', cardController.deleteCard);

module.exports = router;