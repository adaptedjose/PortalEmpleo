-- creacion base de datos y tablas

DROP DATABASE IF EXISTS panel_Empleo;
CREATE DATABASE panel_Empleo;
USE panel_Empleo;

-- Tabla de Empresas
CREATE TABLE Empresa (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100),
  ubicacion VARCHAR(100)
);

-- Tabla de Reclutadores
CREATE TABLE Reclutador (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100),
  correo VARCHAR(100)
);

-- Tabla de Ofertas de Trabajo
CREATE TABLE OfertaTrabajo (
  id INT AUTO_INCREMENT PRIMARY KEY,
  titulo VARCHAR(100),
  descripcion TEXT,
  id_empresa INT,
  salario DECIMAL(10,2),
  tipo_empleo VARCHAR(50),
  id_reclutador INT,
  ubicacion VARCHAR(100),
  area VARCHAR(100),
  fecha_publicacion DATE,
  FOREIGN KEY (id_empresa) REFERENCES Empresa(id),
  FOREIGN KEY (id_reclutador) REFERENCES Reclutador(id)
);

-- Tabla de Habilidades
CREATE TABLE Habilidad (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100)
);

-- Relación entre Ofertas y Habilidades
CREATE TABLE Oferta_Habilidad (
  id_oferta INT,
  id_habilidad INT,
  FOREIGN KEY (id_oferta) REFERENCES OfertaTrabajo(id),
  FOREIGN KEY (id_habilidad) REFERENCES Habilidad(id)
);

-- Tabla de Usuarios
CREATE TABLE Usuario (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100),
  correo VARCHAR(100),
  contraseña VARCHAR(255)
);

-- Postulaciones de usuarios a ofertas
CREATE TABLE Postulacion (
  id_oferta INT,
  id_usuario INT,
  FOREIGN KEY (id_oferta) REFERENCES OfertaTrabajo(id),
  FOREIGN KEY (id_usuario) REFERENCES Usuario(id)
);


