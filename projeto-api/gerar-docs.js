const autogen = require ('swagger-autogen');

const arquivoSaida = './docs.json';
const endPoints = ['./server.js'];

autogen(arquivoSaida, endPoints);

//para gerar
// node gerar-docs.js 