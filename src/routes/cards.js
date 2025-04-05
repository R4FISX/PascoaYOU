const express = require('express');
const router = express.Router();
const cardsController = require('../controllers/cardsController');

router.post('/', cardsController.createCard);
router.get('/:id', cardsController.getCardById);

module.exports = router;