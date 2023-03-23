const express = require('express');

const categoriaRouter = require('./controller/categoria/router');
const produtoRouter = require('./controller/produto/router');
const clienteRouter = require('./controller/cliente/router');

//iniciando uma aplicacao com express
const app = express();

//Colocando o express para usar o router de categoria
app.use(categoriaRouter);
app.use(produtoRouter);
app.use(clienteRouter);

const PORTA = 8000;


app.listen(PORTA, () =>{
    console.log('---ATIVO---');
});




