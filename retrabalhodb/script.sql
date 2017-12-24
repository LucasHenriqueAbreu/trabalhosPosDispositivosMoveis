-- Script para tabalho de banco de dados

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema galeria
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS galeria DEFAULT CHARACTER SET utf8 ;
USE galeria ;

-- -----------------------------------------------------
-- Tabela galeria.pessoa
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS galeria.pessoa (
  idpessoa INT NOT NULL,
  nome VARCHAR(45) NULL,
  datanasc DATE NULL,
  PRIMARY KEY (idpessoa))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Tabela galeria.usuario
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS galeria.usuario (
  idusuario INT NOT NULL,
  email VARCHAR(45) NULL,
  senha VARCHAR(45) NULL,
  idpessoa INT NULL,
  PRIMARY KEY (idusuario),
  CONSTRAINT fk_pessoa
    FOREIGN KEY ()
    REFERENCES galeria.pessoa ()
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Tabela galeria.exposicao
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS galeria.exposicao (
  idexposicao INT NOT NULL,
  idvisita INT NULL,
  duracao TIMESTAMP NULL,
  nome VARCHAR(45) NULL,
  descricao VARCHAR(45) NULL,
  PRIMARY KEY (idexposicao))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Tabela galeria.interesse
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS galeria.interesse (
  idusuario INT NOT NULL,
  idexposicao INT NULL,
  PRIMARY KEY (idusuario),
  CONSTRAINT fk_exposicao
    FOREIGN KEY ()
    REFERENCES galeria.exposicao ()
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Tabela galeria.guia
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS galeria.guia (
  idguia INT NOT NULL,
  idpessoa INT NULL,
  PRIMARY KEY (idguia),
  INDEX fk_guia_idx (idpessoa ASC),
  CONSTRAINT fk_pessoa
    FOREIGN KEY (idpessoa)
    REFERENCES galeria.pessoa (idpessoa)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Tabela galeria.visita
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS galeria.visita (
  idvisita INT NOT NULL,
  idusuario INT NULL,
  idguia INT NULL,
  quantidadepessoa INT NULL,
  data DATE NULL,
  PRIMARY KEY (idvisita),
  INDEX fk_usuario_idx (idusuario ASC),
  INDEX fk_guia_idx (idguia ASC),
  CONSTRAINT fk_usuario
    FOREIGN KEY (idusuario)
    REFERENCES galeria.usuario (idusuario)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT fk_guia
    FOREIGN KEY (idguia)
    REFERENCES galeria.guia (idguia)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Tabela galeria.artista
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS galeria.artista (
  idartista INT NOT NULL,
  idpessoa INT NULL,
  PRIMARY KEY (idartista),
  INDEX fk_pessoa_idx (idpessoa ASC),
  CONSTRAINT fk_pessoa
    FOREIGN KEY (idpessoa)
    REFERENCES galeria.pessoa (idpessoa)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Tabela galeria.obra
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS galeria.obra (
  idobra INT NOT NULL,
  nome VARCHAR(45) NULL,
  descricao VARCHAR(45) NULL,
  PRIMARY KEY (idobra))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Tabela galeria.artista_obra
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS galeria.artista_obra (
  idartista INT NOT NULL,
  idobra INT NOT NULL,
  INDEX fk_artista_idx (idartista ASC),
  INDEX fk_obra_idx (idobra ASC),
  CONSTRAINT fk_artista
    FOREIGN KEY (idartista)
    REFERENCES galeria.artista (idartista)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT fk_obra
    FOREIGN KEY (idobra)
    REFERENCES galeria.obra (idobra)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Tabela galeria.obra_exp
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS galeria.obra_exp (
  idobra INT NOT NULL,
  idexposicao INT NOT NULL,
  INDEX fk_obra_exposicao_idx (idexposicao ASC),
  INDEX fk_obra_idx (idobra ASC),
  CONSTRAINT fk_exposicao
    FOREIGN KEY (idexposicao)
    REFERENCES galeria.exposicao (idexposicao)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT fk_obra
    FOREIGN KEY (idobra)
    REFERENCES galeria.obra (idobra)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
