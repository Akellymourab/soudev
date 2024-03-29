// const express = require('express');
// const app = express.Router();

const app = require('express').Router();
const database = require('../../connection/database');

const TABLE_NAME = 'tb_banner';
const BASE_URL = '/banners';

app.get(BASE_URL, async (req, res) => {
    let verificadas = pessoasAutorizadas.filter(
        cada => cada.token === req.headers.token
    );
    if (verificadas.length === 0){
        res.sendStatus(401);
        return;
    }
    

    let dados = await database.execute(`SELECT * FROM ${TABLE_NAME}`);

    res.send(dados);
});

app.get(`${BASE_URL}/:id`, async (req, res) => {
    let dados = await database.execute(`
        SELECT * FROM tb_banner WHERE id='${req.params.id}'
    `);

    res.send(dados[0]);
});

app.post(BASE_URL, async (req, res) => {
    let corpo = req.body;

    let sql = await database.execute(`
        INSERT INTO tb_banner (titulo, descricao, imagem)
        VALUES ('${corpo.title}', '${corpo.description}', '${corpo.image}')
    `);

    corpo.id = sql.insertId;
    
    res.send(corpo);
});

app.patch(`${BASE_URL}/:id`, async (req, res) => {
    let dados = req.body;

    let jaExiste = await database.execute(`
        SELECT * FROM tb_banner WHERE id='${req.params.id}'
    `);

    //testando se realmente se existe algum banner com aquele id
    if (undefined === jaExiste[0]) {
        res.sendStatus(404);
        return;
    }

    await database.execute(`
        UPDATE tb_banner SET
            titulo='${req.body.title || jaExiste[0].title}',
            descricao='${req.body.description || jaExiste[0].description}',
            imagem='${req.body.image || jaExiste[0].image}'
        WHERE id='${req.params.id}'
    `);

    dados.id = req.params.id;

    res.send(dados);
});

app.delete(`${BASE_URL}/:id`, async (req, res) => {
    await database.execute(`DELETE FROM tb_banner WHERE id='${req.params.id}'`)

    res.sendStatus(204);
});



module.exports = app;
