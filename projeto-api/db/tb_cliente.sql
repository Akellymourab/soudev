CREATE TABLE tb_clientes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR (100) NOT NULL
);

INSERT INTO tb_clientes (nome) VALUES ('kelly');

CREATE TABLE tb_enderecos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    endereco VARCHAR (100) NOT NULL,
    clienteID int,
    FOREIGN KEY (clienteID) REFERENCES tb_clientes(id)
);

INSERT INTO tb_enderecos (endereco, clienteID) VALUES ('rua da barca 123', 1);

SELECT (tb_clientes.id, tb_clientes.nome)