exports.iniciarJogo = function(req, res) {
  res.render('pages/tela-inicial');
};

exports.carregarPergunta = function(req, res) {
  const questao = questoes.selecionaProximaQuestao(); 
  res.render('pages/tela-game', {
    questao: questao,  
    perguntasTotal: 0,
    acertos: 0,
    erros: 0
  });
};