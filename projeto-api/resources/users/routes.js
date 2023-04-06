const app = require("express").Router();
const database = require("../../connection/database");
const argon2 = require('argon2')

app.get("/users", async (req, res) => {
    let lista = await database.execute(`
        SELECT * FROM tb_user;
    `);
    res.send(JSON.stringify(lista));
});

app.post("/users", async (req, res) => {
    let senhaCriptografada = await argon2.hash(req.body.senha);
    let response = await database.execute(`
        INSERT INTO tb_user 
        (nome, email, senha, token)
        VALUES
        ('${req.body.nome}','${req.body.email}','${senhaCriptografada}', '${req.body.token}');
    `);

    await database.execute(`
        UPDATE tb_user
        SET token = '${req.body.senha}_${response.insertId}'
        WHERE id = ${response.insertId};
    `);
    let dados = req.body;
    dados.id = response.insertId;
    res.send(JSON.stringify(dados));
});

app.get("/users/auth", async(req, res) => {
    let users = await database.execute(`
        SELECT * FROM tb_user 
        WHERE email = '${req.headers.email}' ;
        
    `);

    if (!users[0]){
        res.send(400);
        return;
    }

    if(users.length === 0){
        res.send(JSON.stringify({"message": "Usuario ou senha invalido"}))
        return;
    }

    res.send(JSON.stringify({"token": users[0].token}));
});

module.exports = app;
