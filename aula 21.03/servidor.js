const produto = require('./controller/produto');
const Categoria = require('./controller/categoria');
const cliente = require('./controller/cliente')

const http = require('http');

const PORTA = 8000;
const ENDERECO = 'localhost';

function recepcao(req, res){
    let resposta = "pagina não encontrada";

    if (req.url === "/clientes") {
        resposta = cliente.buscar();
    } else if (req.url === "/produtos") {
        resposta = produto.buscar();
    }
    res.end(resposta);
}

http.createServer(recepcao).listen(PORTA, ENDERECO, () => {
    console.log('-- ativo --');
});

