UPDATE tb_aluno SET
    matricula= '1234'
WHERE id = '8';

CREATE TABLE tb_escola (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    endereco VARCHAR(100)
);

INSERT INTO tb_escola
    (nome, endereco)
VALUES 
    ('Digital College Aldeota','Av Santos Dumont, 1510 - Aldeota');

INSERT INTO tb_escola
    (nome, endereco)
VALUES 
    ('Digital College Sul','Av. Washington Soares, 3663 - Torre 2 - 4º andar - Edson Queiroz');

INSERT INTO tb_escola
    (nome, endereco)
VALUES 
    ('Digital College Centro','Rua Antonio Pompeu, 508 - Centro');

INSERT INTO tb_escola
    (nome, endereco)
VALUES 
    ('Digital College Caucaia','Av. Edson da Mota Correa, 620 - Centro, Caucaia');


UPDATE tb_aluno SET
    escola_id = '1'
WHERE escola_id BETWEEN '20' and '21';    

UPDATE tb_aluno SET
    escola_id = '2'
WHERE escola_id=12 OR escola_id=13 OR escola_id=17; 

UPDATE tb_aluno SET
    escola_id = '3'
WHERE escola_id=30 OR escola_id=28 OR escola_id=27;    


SELECT tb_aluno.id, tb_aluno.nome, tb_escola.nome
FROM tb_aluno
INNER JOIN tb_escola ON tb_aluno.escola_id = tb_escola.id;

