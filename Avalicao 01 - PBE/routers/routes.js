const express = require('express');
const router = express.Router();
const gameController = require('../controllers/game-controller');

router.get('/', (req, res) => {
  res.render('pages/tela-inicial'); 
});

// Rotas do jogo
router.get('/', gameController.iniciarJogo);  // tela inicial
router.get('/game', gameController.carregarPergunta);  //jogo

module.exports = router;