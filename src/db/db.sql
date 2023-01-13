CREATE DATABASE tienda;
use tienda;

CREATE TABLE usuario(
	id INT AUTO_INCREMENT PRIMARY KEY,
    identificacion INT UNSIGNED NOT NULL,
    nombre VARCHAR(255) NOT NULL,
    correo VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE producto(
	id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    descripcion TEXT NOT NULL,
    valor FLOAT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
CREATE TABLE venta(
	id INT AUTO_INCREMENT PRIMARY KEY,
    id_usuario INT NOT NULL,
    id_producto INT NOT NULL,
    cantidad INT NOT NULL,
    estado BOOLEAN NOT NULL,
    total FLOAT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT fk_usuario FOREIGN KEY (id_usuario) REFERENCES usuario(id),
    CONSTRAINT fk_producto FOREIGN KEY (id_producto) REFERENCES producto(id)
);



INSERT INTO usuario 
	(
		identificacion, 
        nombre,
        correo
	)
    VALUES
	(1023019881, 'Nicolas Hernandez','sistemas@actores.org.co'),(1023033067, 'Angie Rivera','facturacion@actores.org.co')



INSERT INTO producto 
	(
		nombre, 
        descripcion,
        valor
	)
    VALUES
	('Trocipollo','Paquete', 1500),('Ponque Gala', 'Torta',2000)