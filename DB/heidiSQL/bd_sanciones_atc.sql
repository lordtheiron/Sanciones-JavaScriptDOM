-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         10.4.27-MariaDB - mariadb.org binary distribution
-- SO del servidor:              Win64
-- HeidiSQL Versión:             12.3.0.6589
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Volcando estructura de base de datos para bd_sanciones_atc
DROP DATABASE IF EXISTS `bd_sanciones_atc`;
CREATE DATABASE IF NOT EXISTS `bd_sanciones_atc` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;
USE `bd_sanciones_atc`;

-- Volcando estructura para tabla bd_sanciones_atc.alumamonestado
DROP TABLE IF EXISTS `alumamonestado`;
CREATE TABLE IF NOT EXISTS `alumamonestado` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `amonestacion` int(11) DEFAULT NULL,
  `alumno` int(11) DEFAULT NULL,
  `profesor` int(11) DEFAULT NULL,
  `fecha` date DEFAULT NULL,
  `firma` enum('S','N') DEFAULT 'N',
  `fechaFirma` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_alumamonestado_amonestacion` (`amonestacion`),
  KEY `FK_alumamonestado_alumnos` (`alumno`),
  KEY `FK_alumamonestado_profesor` (`profesor`),
  CONSTRAINT `FK_alumamonestado_alumnos` FOREIGN KEY (`alumno`) REFERENCES `alumnos` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_alumamonestado_amonestacion` FOREIGN KEY (`amonestacion`) REFERENCES `amonestacion` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_alumamonestado_profesor` FOREIGN KEY (`profesor`) REFERENCES `profesor` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci ROW_FORMAT=DYNAMIC;

-- Volcando datos para la tabla bd_sanciones_atc.alumamonestado: ~4 rows (aproximadamente)
DELETE FROM `alumamonestado`;
INSERT INTO `alumamonestado` (`id`, `amonestacion`, `alumno`, `profesor`, `fecha`, `firma`, `fechaFirma`) VALUES
	(1, 1, 1, 1, '2023-02-25', 'N', NULL),
	(2, 1, 2, 2, '2023-02-25', 'N', NULL),
	(3, 2, 1, 4, '2023-02-25', 'N', NULL),
	(4, 3, 1, 4, '2023-02-25', 'N', NULL),
	(5, 1, 1, 3, '2023-02-26', 'N', NULL);

-- Volcando estructura para tabla bd_sanciones_atc.alumnogrupomateria
DROP TABLE IF EXISTS `alumnogrupomateria`;
CREATE TABLE IF NOT EXISTS `alumnogrupomateria` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `alumno` int(11) DEFAULT NULL,
  `materia` int(11) DEFAULT NULL,
  `grupo` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_alumnogrupomateria_alumnos` (`alumno`),
  KEY `FK_alumnogrupomateria_materia` (`materia`),
  KEY `FK_alumnogrupomateria_grupo` (`grupo`),
  CONSTRAINT `FK_alumnogrupomateria_alumnos` FOREIGN KEY (`alumno`) REFERENCES `alumnos` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_alumnogrupomateria_grupo` FOREIGN KEY (`grupo`) REFERENCES `grupo` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_alumnogrupomateria_materia` FOREIGN KEY (`materia`) REFERENCES `materia` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcando datos para la tabla bd_sanciones_atc.alumnogrupomateria: ~0 rows (aproximadamente)
DELETE FROM `alumnogrupomateria`;

-- Volcando estructura para tabla bd_sanciones_atc.alumnomateria
DROP TABLE IF EXISTS `alumnomateria`;
CREATE TABLE IF NOT EXISTS `alumnomateria` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `alumno` int(11) DEFAULT NULL,
  `materia` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_alumnomateria_alumnos` (`alumno`),
  KEY `FK_alumnomateria_materia` (`materia`),
  CONSTRAINT `FK_alumnomateria_alumnos` FOREIGN KEY (`alumno`) REFERENCES `alumnos` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_alumnomateria_materia` FOREIGN KEY (`materia`) REFERENCES `materia` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=82 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcando datos para la tabla bd_sanciones_atc.alumnomateria: ~81 rows (aproximadamente)
DELETE FROM `alumnomateria`;
INSERT INTO `alumnomateria` (`id`, `alumno`, `materia`) VALUES
	(1, 1, 1),
	(2, 1, 2),
	(3, 1, 3),
	(4, 1, 4),
	(5, 1, 5),
	(6, 2, 1),
	(7, 2, 2),
	(8, 2, 3),
	(9, 2, 4),
	(10, 2, 5),
	(11, 3, 1),
	(12, 3, 2),
	(13, 3, 3),
	(14, 3, 4),
	(15, 3, 5),
	(16, 4, 1),
	(17, 4, 2),
	(18, 4, 3),
	(19, 4, 4),
	(20, 5, 2),
	(21, 5, 3),
	(22, 5, 4),
	(23, 5, 5),
	(24, 6, 3),
	(25, 6, 4),
	(26, 6, 5),
	(27, 7, 2),
	(28, 7, 3),
	(29, 7, 4),
	(30, 8, 1),
	(31, 8, 2),
	(32, 8, 3),
	(33, 8, 5),
	(34, 9, 2),
	(35, 9, 3),
	(36, 9, 4),
	(37, 9, 5),
	(38, 10, 2),
	(39, 10, 3),
	(40, 10, 4),
	(41, 11, 1),
	(42, 11, 4),
	(43, 11, 5),
	(44, 12, 2),
	(45, 12, 3),
	(46, 12, 4),
	(47, 13, 1),
	(48, 13, 3),
	(49, 13, 5),
	(50, 14, 1),
	(51, 14, 2),
	(52, 14, 3),
	(53, 14, 4),
	(54, 14, 5),
	(55, 15, 1),
	(56, 15, 2),
	(57, 15, 3),
	(58, 15, 4),
	(59, 15, 5),
	(60, 16, 1),
	(61, 16, 2),
	(62, 16, 3),
	(63, 16, 4),
	(64, 17, 2),
	(65, 17, 3),
	(66, 17, 4),
	(67, 17, 5),
	(68, 18, 1),
	(69, 18, 2),
	(70, 18, 3),
	(71, 18, 4),
	(72, 19, 1),
	(73, 19, 2),
	(74, 19, 3),
	(75, 19, 4),
	(76, 19, 5),
	(77, 20, 1),
	(78, 20, 2),
	(79, 20, 3),
	(80, 20, 4),
	(81, 20, 5);

-- Volcando estructura para tabla bd_sanciones_atc.alumnos
DROP TABLE IF EXISTS `alumnos`;
CREATE TABLE IF NOT EXISTS `alumnos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL DEFAULT '0',
  `fechaNac` date DEFAULT NULL,
  `correoMen` varchar(50) DEFAULT 'tobarra1992@hotmail.com',
  `correoAd` varchar(50) DEFAULT 'lordtheiron@outlook.com',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcando datos para la tabla bd_sanciones_atc.alumnos: ~18 rows (aproximadamente)
DELETE FROM `alumnos`;
INSERT INTO `alumnos` (`id`, `nombre`, `fechaNac`, `correoMen`, `correoAd`) VALUES
	(1, 'Benigno Severino Hierro Pacheco', '1992-06-26', 'tobarra1992@hotmail.com', 'lordtheiron@outlook.com'),
	(2, 'Belén Sacristán Arellano', '2023-02-12', 'tobarra1992@hotmail.com', 'lordtheiron@outlook.com'),
	(3, 'Carlos del Valls', '0000-00-00', 'tobarra1992@hotmail.com', 'lordtheiron@outlook.com'),
	(4, 'Iker Arce-Torrents', '1997-05-23', 'tobarra1992@hotmail.com', 'lordtheiron@outlook.com'),
	(5, 'Bernardo Cerro', '1992-09-18', 'tobarra1992@hotmail.com', 'lordtheiron@outlook.com'),
	(6, 'Jovita Mateo Blazquez', '2008-07-12', 'tobarra1992@hotmail.com', 'lordtheiron@outlook.com'),
	(7, 'Adela de Dueñas', '2005-02-04', 'tobarra1992@hotmail.com', 'lordtheiron@outlook.com'),
	(8, 'Hernán Guijarro Águila', '2011-08-15', 'tobarra1992@hotmail.com', 'lordtheiron@outlook.com'),
	(9, 'José Vendrell Sierra', '1999-11-30', 'tobarra1992@hotmail.com', 'lordtheiron@outlook.com'),
	(10, 'Esperanza de Parra', '2010-05-11', 'tobarra1992@hotmail.com', 'lordtheiron@outlook.com'),
	(11, 'Jafet Pujadas Granados', '1995-04-09', 'tobarra1992@hotmail.com', 'lordtheiron@outlook.com'),
	(12, 'Nuria Agustina Quero Campillo', '2007-02-27', 'tobarra1992@hotmail.com', 'lordtheiron@outlook.com'),
	(13, 'Amelia Infante Raya', '1990-07-14', 'tobarra1992@hotmail.com', 'lordtheiron@outlook.com'),
	(14, 'Charo Tenorio Céspedes', '2003-12-23', 'tobarra1992@hotmail.com', 'lordtheiron@outlook.com'),
	(15, 'Faustino Bustamante Rivero', '2006-02-03', 'tobarra1992@hotmail.com', 'lordtheiron@outlook.com'),
	(16, 'Ciriaco Blazquez Alcolea', '2015-05-06', 'tobarra1992@hotmail.com', 'lordtheiron@outlook.com'),
	(17, 'Maximino Lucena Barón', '1996-07-18', 'tobarra1992@hotmail.com', 'lordtheiron@outlook.com'),
	(18, 'Isabela del Montero', '1995-08-17', 'tobarra1992@hotmail.com', 'lordtheiron@outlook.com'),
	(19, 'Jerónimo Clemente Mayo', '2002-11-11', 'tobarra1992@hotmail.com', 'lordtheiron@outlook.com'),
	(20, 'Lázaro Avilés Monreal', '2006-02-06', 'tobarra1992@hotmail.com', 'lordtheiron@outlook.com');

-- Volcando estructura para tabla bd_sanciones_atc.alumsancionado
DROP TABLE IF EXISTS `alumsancionado`;
CREATE TABLE IF NOT EXISTS `alumsancionado` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sancion` int(11) DEFAULT NULL,
  `alumno` int(11) DEFAULT NULL,
  `profesor` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_alumsancionado_sanciones` (`sancion`),
  KEY `FK_alumsancionado_alumnos` (`alumno`),
  KEY `FK_alumsancionado_profesor` (`profesor`),
  CONSTRAINT `FK_alumsancionado_alumnos` FOREIGN KEY (`alumno`) REFERENCES `alumnos` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_alumsancionado_profesor` FOREIGN KEY (`profesor`) REFERENCES `profesor` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_alumsancionado_sanciones` FOREIGN KEY (`sancion`) REFERENCES `sanciones` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcando datos para la tabla bd_sanciones_atc.alumsancionado: ~2 rows (aproximadamente)
DELETE FROM `alumsancionado`;
INSERT INTO `alumsancionado` (`id`, `sancion`, `alumno`, `profesor`) VALUES
	(1, 1, 1, 4),
	(2, 2, 1, 4),
	(3, 3, 1, 4);

-- Volcando estructura para tabla bd_sanciones_atc.amonestacion
DROP TABLE IF EXISTS `amonestacion`;
CREATE TABLE IF NOT EXISTS `amonestacion` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `causa` longtext DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcando datos para la tabla bd_sanciones_atc.amonestacion: ~2 rows (aproximadamente)
DELETE FROM `amonestacion`;
INSERT INTO `amonestacion` (`id`, `causa`) VALUES
	(1, 'Causa de amonestación 1'),
	(2, 'Causa de sanción directa 1'),
	(3, 'Causa de amonestación 1');

-- Volcando estructura para tabla bd_sanciones_atc.amonsancion
DROP TABLE IF EXISTS `amonsancion`;
CREATE TABLE IF NOT EXISTS `amonsancion` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `amonestacion` int(11) DEFAULT NULL,
  `sancion` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_amonsancion_amonestacion` (`amonestacion`),
  KEY `FK_amonsancion_sanciones` (`sancion`),
  CONSTRAINT `FK_amonsancion_amonestacion` FOREIGN KEY (`amonestacion`) REFERENCES `amonestacion` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_amonsancion_sanciones` FOREIGN KEY (`sancion`) REFERENCES `sanciones` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcando datos para la tabla bd_sanciones_atc.amonsancion: ~0 rows (aproximadamente)
DELETE FROM `amonsancion`;
INSERT INTO `amonsancion` (`id`, `amonestacion`, `sancion`) VALUES
	(1, 1, 1);

-- Volcando estructura para tabla bd_sanciones_atc.expclase
DROP TABLE IF EXISTS `expclase`;
CREATE TABLE IF NOT EXISTS `expclase` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `alumno` int(11) NOT NULL DEFAULT 0,
  `motivo` longtext NOT NULL,
  `asignatura` int(11) NOT NULL DEFAULT 0,
  `profesor` int(11) NOT NULL DEFAULT 0,
  `fecha` date NOT NULL,
  `firma` enum('S','N') DEFAULT 'N',
  `fechaFirma` date DEFAULT NULL,
  `sancionada` enum('S','N') DEFAULT 'N',
  PRIMARY KEY (`id`),
  KEY `FK_expclase_alumnos` (`alumno`),
  KEY `FK_expclase_materia` (`asignatura`),
  KEY `FK_expclase_profesor` (`profesor`),
  CONSTRAINT `FK_expclase_alumnos` FOREIGN KEY (`alumno`) REFERENCES `alumnos` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_expclase_materia` FOREIGN KEY (`asignatura`) REFERENCES `materia` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_expclase_profesor` FOREIGN KEY (`profesor`) REFERENCES `profesor` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcando datos para la tabla bd_sanciones_atc.expclase: ~1 rows (aproximadamente)
DELETE FROM `expclase`;
INSERT INTO `expclase` (`id`, `alumno`, `motivo`, `asignatura`, `profesor`, `fecha`, `firma`, `fechaFirma`, `sancionada`) VALUES
	(1, 1, 'Motivo de expulsión de clase 1', 1, 1, '2023-02-25', 'S', '2023-02-25', 'N');

-- Volcando estructura para tabla bd_sanciones_atc.expsancion
DROP TABLE IF EXISTS `expsancion`;
CREATE TABLE IF NOT EXISTS `expsancion` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `expulsion` int(11) DEFAULT NULL,
  `sancion` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_expsancion_expclase` (`expulsion`),
  KEY `FK_expsancion_sanciones` (`sancion`),
  CONSTRAINT `FK_expsancion_expclase` FOREIGN KEY (`expulsion`) REFERENCES `expclase` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_expsancion_sanciones` FOREIGN KEY (`sancion`) REFERENCES `sanciones` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcando datos para la tabla bd_sanciones_atc.expsancion: ~0 rows (aproximadamente)
DELETE FROM `expsancion`;

-- Volcando estructura para tabla bd_sanciones_atc.grupo
DROP TABLE IF EXISTS `grupo`;
CREATE TABLE IF NOT EXISTS `grupo` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `grupo` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcando datos para la tabla bd_sanciones_atc.grupo: ~4 rows (aproximadamente)
DELETE FROM `grupo`;
INSERT INTO `grupo` (`id`, `grupo`) VALUES
	(1, '1ºESO-A'),
	(2, '1ºESO-B'),
	(3, '1ºESO-C'),
	(4, '1ºESO-D');

-- Volcando estructura para tabla bd_sanciones_atc.grupoalumno
DROP TABLE IF EXISTS `grupoalumno`;
CREATE TABLE IF NOT EXISTS `grupoalumno` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `grupo` int(11) DEFAULT NULL,
  `alumno` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_grupoalumno_grupo` (`grupo`),
  KEY `FK_grupoalumno_alumnos` (`alumno`),
  CONSTRAINT `FK_grupoalumno_alumnos` FOREIGN KEY (`alumno`) REFERENCES `alumnos` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_grupoalumno_grupo` FOREIGN KEY (`grupo`) REFERENCES `grupo` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcando datos para la tabla bd_sanciones_atc.grupoalumno: ~19 rows (aproximadamente)
DELETE FROM `grupoalumno`;
INSERT INTO `grupoalumno` (`id`, `grupo`, `alumno`) VALUES
	(1, 1, 1),
	(2, 1, 2),
	(3, 1, 3),
	(4, 1, 4),
	(5, 1, 5),
	(6, 2, 6),
	(7, 2, 7),
	(8, 2, 8),
	(9, 2, 9),
	(10, 2, 10),
	(11, 3, 11),
	(12, 3, 12),
	(13, 3, 13),
	(14, 3, 14),
	(15, 3, 15),
	(16, 4, 16),
	(17, 4, 18),
	(18, 4, 19),
	(19, 4, 20);

-- Volcando estructura para tabla bd_sanciones_atc.materia
DROP TABLE IF EXISTS `materia`;
CREATE TABLE IF NOT EXISTS `materia` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) DEFAULT NULL,
  `abreviatura` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcando datos para la tabla bd_sanciones_atc.materia: ~5 rows (aproximadamente)
DELETE FROM `materia`;
INSERT INTO `materia` (`id`, `nombre`, `abreviatura`) VALUES
	(1, 'Lengua', 'len'),
	(2, 'Matemáticas', 'mat'),
	(3, 'Con. del medio', 'CMD'),
	(4, 'Biología', 'Bio'),
	(5, 'Física', 'Fis');

-- Volcando estructura para tabla bd_sanciones_atc.profesor
DROP TABLE IF EXISTS `profesor`;
CREATE TABLE IF NOT EXISTS `profesor` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) DEFAULT NULL,
  `usuario` varchar(50) DEFAULT NULL,
  `tipo` enum('Profesor','Jefatura') DEFAULT 'Profesor',
  `clave` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcando datos para la tabla bd_sanciones_atc.profesor: ~5 rows (aproximadamente)
DELETE FROM `profesor`;
INSERT INTO `profesor` (`id`, `nombre`, `usuario`, `tipo`, `clave`) VALUES
	(1, 'Noa Otero', 'noao', 'Profesor', 'algo'),
	(2, 'Jacinto de Cano', 'jaci', 'Profesor', 'algo'),
	(3, 'Natanael Diéguez Monreal', 'MaDiM', 'Profesor', 'algo'),
	(4, 'Julieta Rebollo', 'JuliRe', 'Jefatura', 'algo'),
	(5, 'Coral Gabriela Losa Rivas', 'CoraLosa', 'Jefatura', 'algo');

-- Volcando estructura para tabla bd_sanciones_atc.sanciones
DROP TABLE IF EXISTS `sanciones`;
CREATE TABLE IF NOT EXISTS `sanciones` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `directa` enum('S','N') DEFAULT 'N',
  `causa` longtext DEFAULT 'Acumulación de amonestaciones',
  `consecuencia` longtext DEFAULT NULL,
  `fechaSanc` date DEFAULT NULL,
  `fechaConsecuencia` date DEFAULT NULL,
  `fechaFinCastigo` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcando datos para la tabla bd_sanciones_atc.sanciones: ~2 rows (aproximadamente)
DELETE FROM `sanciones`;
INSERT INTO `sanciones` (`id`, `directa`, `causa`, `consecuencia`, `fechaSanc`, `fechaConsecuencia`, `fechaFinCastigo`) VALUES
	(1, 'N', 'Causa de amonestación 1', 'Consecuencia a una amonestación 1', '2023-02-25', '2023-02-26', '2023-02-28'),
	(2, 'S', 'Causa de sanción directa 1', 'Consecuencia a sanción directa 1', '2023-02-25', '2023-02-26', '2023-02-28'),
	(3, 'S', 'Causa de amonestación 1', 'Consecuencia a una amonestación 1', '2023-02-25', '2023-02-26', '2023-02-28');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
