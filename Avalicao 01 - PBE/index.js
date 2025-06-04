const express = require('express');
const app = express();
const routes = require('./routers/routes'); 

// app.set('views', './views'); 
app.set('view engine', 'ejs');
app.use(express.static('public'));
// app.use(express.json());

// Rotas
app.use('/', routes); 

app.listen(3000, () => console.log('Servidor rodando: http://localhost:3000'));