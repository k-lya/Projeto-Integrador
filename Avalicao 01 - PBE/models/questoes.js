const questoes = [
    {
        id: 1,
        pergunta: "Qual é a flor símbolo do Japão?",
        alternativaA: "Tulipa", 
        alternativaB: "Rosa",
        alternativaC: "Cerejeira(Sakura)",
        resposta: "C"
    },

    {
        id: 2,
        pergunta: "Qual flor é conhecida por flor do sol?",
        alternativaA: "Girassol", 
        alternativaB: "Orquídea",
        alternativaC: "Lírio",
        resposta: "A"
    },

    {
        id: 3,
        pergunta: "Qual dessas flores é comestível e usada em chás e saladas?",
        alternativaA: "Hortência", 
        alternativaB: "Amor-perfeito",
        alternativaC: "Dente-de-leão",
        resposta: "B"
    },

    {
        id: 4,
        pergunta: "A rosa azul natural não existe, mas é criada artificialmente através de:",
        alternativaA: "Cruzamento genético com violetas", 
        alternativaB: "Injeção de tinta no caule",
        alternativaC: "Modificação genética ou corante na água",
        resposta: "C"
    },

    {
        id: 5,
        pergunta: "Qual flor é associada ao Dia dos Namorados no Brasil?",
        alternativaA: "Margarida", 
        alternativaB: "Cravo",
        alternativaC: "Rosa",
        resposta: "C"
    },
];


let indiceAtual = 0; 

function selecionarProximaQuestao() {
  const pergunta = questoes[indiceAtual];
  
  indiceAtual = (indiceAtual + 1) % questoes.length;
  
  return pergunta;
}

module.exports = { selecionarProximaQuestao, questoes };
