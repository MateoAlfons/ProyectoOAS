CREATE DATABASE torneo_db;

USE torneo_db;

CREATE TABLE equipo(
    id INT(4) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(64),
    puntos INT(8),
    ga INT(8),
    ge INT(8)
);

RENAME TABLE equipo to equipos;

DESCRIBE equipos;
/*
INSERT INTO equipos(Nombre,Puntos,GA,GE) values('Arg','3','2','1');

SELECT * FROM equipos;
*/