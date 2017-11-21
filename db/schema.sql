### Schema

TABASE IF EXISTS burgers_db;
CREATE DATABASE burger_db;
USE burger_db;

DROP TABLE IF EXISTS burgers;
CREATE TABLE burgers
(
	id INTEGER AUTO_INCREMENT NOT NULL ,
	burger_name VARCHAR(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	date TIMESTAMP NOT NULL,
	PRIMARY KEY (id)
);
