CREATE TABLE tb_banner (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR (50) NOT NULL,
    description VARCHAR (255), 
    image VARCHAR (255) NOT NULL,
    status INT DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME NULL
);