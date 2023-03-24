-- para listar os bancos de dados --
SHOW DATABASES;

-- para criar um banco de dados --
CREATE DATABASE nome_do_banco;

-- para excluir um banco --
DROP DATABASE nome_do_banco;

-- para selecionar/entrar no banco de dados --
USE nome_do_banco;

-- TABELAS --

-- criar uma tabela --
CREATE TABLE tb_curso(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    carga_horaria INT(4) NOT NULL,
    descricao VARCHAR(255)
);

-- detalhar a estrutura de uma tabela --
DESC nome_da_Tabela;

-- para alterar tabela --
ALTER TABLE nome_da_Tabela ....

-- para excluir uma tabela --
DROP TABLE nome_da_Tabela;