-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 27-02-2023 a las 12:04:35
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `bd_sanciones_atc`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `alumamonestado`
--

CREATE TABLE `alumamonestado` (
  `id` int(11) NOT NULL,
  `amonestacion` int(11) DEFAULT NULL,
  `alumno` int(11) DEFAULT NULL,
  `profesor` int(11) DEFAULT NULL,
  `fecha` date DEFAULT NULL,
  `firma` enum('S','N') DEFAULT 'N',
  `fechaFirma` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci ROW_FORMAT=DYNAMIC;

--
-- Volcado de datos para la tabla `alumamonestado`
--

INSERT INTO `alumamonestado` (`id`, `amonestacion`, `alumno`, `profesor`, `fecha`, `firma`, `fechaFirma`) VALUES
(1, 1, 1, 1, '2023-02-25', 'N', NULL),
(2, 1, 2, 2, '2023-02-25', 'N', NULL),
(3, 2, 1, 4, '2023-02-25', 'N', NULL),
(4, 3, 1, 4, '2023-02-25', 'N', NULL),
(5, 1, 1, 3, '2023-02-26', 'N', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `alumnogrupomateria`
--

CREATE TABLE `alumnogrupomateria` (
  `id` int(11) NOT NULL,
  `alumno` int(11) DEFAULT NULL,
  `materia` int(11) DEFAULT NULL,
  `grupo` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `alumnomateria`
--

CREATE TABLE `alumnomateria` (
  `id` int(11) NOT NULL,
  `alumno` int(11) DEFAULT NULL,
  `materia` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `alumnomateria`
--

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

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `alumnos`
--

CREATE TABLE `alumnos` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL DEFAULT '0',
  `fechaNac` date DEFAULT NULL,
  `correoMen` varchar(50) DEFAULT 'tobarra1992@hotmail.com',
  `correoAd` varchar(50) DEFAULT 'lordtheiron@outlook.com'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `alumnos`
--

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

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `alumsancionado`
--

CREATE TABLE `alumsancionado` (
  `id` int(11) NOT NULL,
  `sancion` int(11) DEFAULT NULL,
  `alumno` int(11) DEFAULT NULL,
  `profesor` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `alumsancionado`
--

INSERT INTO `alumsancionado` (`id`, `sancion`, `alumno`, `profesor`) VALUES
(1, 1, 1, 4),
(2, 2, 1, 4),
(3, 3, 1, 4);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `amonestacion`
--

CREATE TABLE `amonestacion` (
  `id` int(11) NOT NULL,
  `causa` longtext DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `amonestacion`
--

INSERT INTO `amonestacion` (`id`, `causa`) VALUES
(1, 'Causa de amonestación 1'),
(2, 'Causa de sanción directa 1'),
(3, 'Causa de amonestación 1');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `amonsancion`
--

CREATE TABLE `amonsancion` (
  `id` int(11) NOT NULL,
  `amonestacion` int(11) DEFAULT NULL,
  `sancion` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `amonsancion`
--

INSERT INTO `amonsancion` (`id`, `amonestacion`, `sancion`) VALUES
(1, 1, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `expclase`
--

CREATE TABLE `expclase` (
  `id` int(11) NOT NULL,
  `alumno` int(11) NOT NULL DEFAULT 0,
  `motivo` longtext NOT NULL,
  `asignatura` int(11) NOT NULL DEFAULT 0,
  `profesor` int(11) NOT NULL DEFAULT 0,
  `fecha` date NOT NULL,
  `firma` enum('S','N') DEFAULT 'N',
  `fechaFirma` date DEFAULT NULL,
  `sancionada` enum('S','N') DEFAULT 'N'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `expclase`
--

INSERT INTO `expclase` (`id`, `alumno`, `motivo`, `asignatura`, `profesor`, `fecha`, `firma`, `fechaFirma`, `sancionada`) VALUES
(1, 1, 'Motivo de expulsión de clase 1', 1, 1, '2023-02-25', 'S', '2023-02-25', 'N');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `expsancion`
--

CREATE TABLE `expsancion` (
  `id` int(11) NOT NULL,
  `expulsion` int(11) DEFAULT NULL,
  `sancion` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `grupo`
--

CREATE TABLE `grupo` (
  `id` int(11) NOT NULL,
  `grupo` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `grupo`
--

INSERT INTO `grupo` (`id`, `grupo`) VALUES
(1, '1ºESO-A'),
(2, '1ºESO-B'),
(3, '1ºESO-C'),
(4, '1ºESO-D');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `grupoalumno`
--

CREATE TABLE `grupoalumno` (
  `id` int(11) NOT NULL,
  `grupo` int(11) DEFAULT NULL,
  `alumno` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `grupoalumno`
--

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

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `materia`
--

CREATE TABLE `materia` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) DEFAULT NULL,
  `abreviatura` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `materia`
--

INSERT INTO `materia` (`id`, `nombre`, `abreviatura`) VALUES
(1, 'Lengua', 'len'),
(2, 'Matemáticas', 'mat'),
(3, 'Con. del medio', 'CMD'),
(4, 'Biología', 'Bio'),
(5, 'Física', 'Fis');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `profesor`
--

CREATE TABLE `profesor` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) DEFAULT NULL,
  `usuario` varchar(50) DEFAULT NULL,
  `tipo` enum('Profesor','Jefatura') DEFAULT 'Profesor',
  `clave` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `profesor`
--

INSERT INTO `profesor` (`id`, `nombre`, `usuario`, `tipo`, `clave`) VALUES
(1, 'Noa Otero', 'noao', 'Profesor', 'algo'),
(2, 'Jacinto de Cano', 'jaci', 'Profesor', 'algo'),
(3, 'Natanael Diéguez Monreal', 'MaDiM', 'Profesor', 'algo'),
(4, 'Julieta Rebollo', 'JuliRe', 'Jefatura', 'algo'),
(5, 'Coral Gabriela Losa Rivas', 'CoraLosa', 'Jefatura', 'algo');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sanciones`
--

CREATE TABLE `sanciones` (
  `id` int(11) NOT NULL,
  `directa` enum('S','N') DEFAULT 'N',
  `causa` longtext DEFAULT 'Acumulación de amonestaciones',
  `consecuencia` longtext DEFAULT NULL,
  `fechaSanc` date DEFAULT NULL,
  `fechaConsecuencia` date DEFAULT NULL,
  `fechaFinCastigo` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `sanciones`
--

INSERT INTO `sanciones` (`id`, `directa`, `causa`, `consecuencia`, `fechaSanc`, `fechaConsecuencia`, `fechaFinCastigo`) VALUES
(1, 'N', 'Causa de amonestación 1', 'Consecuencia a una amonestación 1', '2023-02-25', '2023-02-26', '2023-02-28'),
(2, 'S', 'Causa de sanción directa 1', 'Consecuencia a sanción directa 1', '2023-02-25', '2023-02-26', '2023-02-28'),
(3, 'S', 'Causa de amonestación 1', 'Consecuencia a una amonestación 1', '2023-02-25', '2023-02-26', '2023-02-28');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `alumamonestado`
--
ALTER TABLE `alumamonestado`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_alumamonestado_amonestacion` (`amonestacion`),
  ADD KEY `FK_alumamonestado_alumnos` (`alumno`),
  ADD KEY `FK_alumamonestado_profesor` (`profesor`);

--
-- Indices de la tabla `alumnogrupomateria`
--
ALTER TABLE `alumnogrupomateria`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_alumnogrupomateria_alumnos` (`alumno`),
  ADD KEY `FK_alumnogrupomateria_materia` (`materia`),
  ADD KEY `FK_alumnogrupomateria_grupo` (`grupo`);

--
-- Indices de la tabla `alumnomateria`
--
ALTER TABLE `alumnomateria`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_alumnomateria_alumnos` (`alumno`),
  ADD KEY `FK_alumnomateria_materia` (`materia`);

--
-- Indices de la tabla `alumnos`
--
ALTER TABLE `alumnos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `alumsancionado`
--
ALTER TABLE `alumsancionado`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_alumsancionado_sanciones` (`sancion`),
  ADD KEY `FK_alumsancionado_alumnos` (`alumno`),
  ADD KEY `FK_alumsancionado_profesor` (`profesor`);

--
-- Indices de la tabla `amonestacion`
--
ALTER TABLE `amonestacion`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `amonsancion`
--
ALTER TABLE `amonsancion`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_amonsancion_amonestacion` (`amonestacion`),
  ADD KEY `FK_amonsancion_sanciones` (`sancion`);

--
-- Indices de la tabla `expclase`
--
ALTER TABLE `expclase`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_expclase_alumnos` (`alumno`),
  ADD KEY `FK_expclase_materia` (`asignatura`),
  ADD KEY `FK_expclase_profesor` (`profesor`);

--
-- Indices de la tabla `expsancion`
--
ALTER TABLE `expsancion`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_expsancion_expclase` (`expulsion`),
  ADD KEY `FK_expsancion_sanciones` (`sancion`);

--
-- Indices de la tabla `grupo`
--
ALTER TABLE `grupo`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `grupoalumno`
--
ALTER TABLE `grupoalumno`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_grupoalumno_grupo` (`grupo`),
  ADD KEY `FK_grupoalumno_alumnos` (`alumno`);

--
-- Indices de la tabla `materia`
--
ALTER TABLE `materia`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `profesor`
--
ALTER TABLE `profesor`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `sanciones`
--
ALTER TABLE `sanciones`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `alumamonestado`
--
ALTER TABLE `alumamonestado`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `alumnogrupomateria`
--
ALTER TABLE `alumnogrupomateria`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `alumnomateria`
--
ALTER TABLE `alumnomateria`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=82;

--
-- AUTO_INCREMENT de la tabla `alumnos`
--
ALTER TABLE `alumnos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT de la tabla `alumsancionado`
--
ALTER TABLE `alumsancionado`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `amonestacion`
--
ALTER TABLE `amonestacion`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `amonsancion`
--
ALTER TABLE `amonsancion`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `expclase`
--
ALTER TABLE `expclase`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `expsancion`
--
ALTER TABLE `expsancion`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `grupo`
--
ALTER TABLE `grupo`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `grupoalumno`
--
ALTER TABLE `grupoalumno`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT de la tabla `materia`
--
ALTER TABLE `materia`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `profesor`
--
ALTER TABLE `profesor`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `sanciones`
--
ALTER TABLE `sanciones`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `alumamonestado`
--
ALTER TABLE `alumamonestado`
  ADD CONSTRAINT `FK_alumamonestado_alumnos` FOREIGN KEY (`alumno`) REFERENCES `alumnos` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_alumamonestado_amonestacion` FOREIGN KEY (`amonestacion`) REFERENCES `amonestacion` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_alumamonestado_profesor` FOREIGN KEY (`profesor`) REFERENCES `profesor` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `alumnogrupomateria`
--
ALTER TABLE `alumnogrupomateria`
  ADD CONSTRAINT `FK_alumnogrupomateria_alumnos` FOREIGN KEY (`alumno`) REFERENCES `alumnos` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_alumnogrupomateria_grupo` FOREIGN KEY (`grupo`) REFERENCES `grupo` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_alumnogrupomateria_materia` FOREIGN KEY (`materia`) REFERENCES `materia` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `alumnomateria`
--
ALTER TABLE `alumnomateria`
  ADD CONSTRAINT `FK_alumnomateria_alumnos` FOREIGN KEY (`alumno`) REFERENCES `alumnos` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_alumnomateria_materia` FOREIGN KEY (`materia`) REFERENCES `materia` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `alumsancionado`
--
ALTER TABLE `alumsancionado`
  ADD CONSTRAINT `FK_alumsancionado_alumnos` FOREIGN KEY (`alumno`) REFERENCES `alumnos` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_alumsancionado_profesor` FOREIGN KEY (`profesor`) REFERENCES `profesor` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_alumsancionado_sanciones` FOREIGN KEY (`sancion`) REFERENCES `sanciones` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `amonsancion`
--
ALTER TABLE `amonsancion`
  ADD CONSTRAINT `FK_amonsancion_amonestacion` FOREIGN KEY (`amonestacion`) REFERENCES `amonestacion` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_amonsancion_sanciones` FOREIGN KEY (`sancion`) REFERENCES `sanciones` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `expclase`
--
ALTER TABLE `expclase`
  ADD CONSTRAINT `FK_expclase_alumnos` FOREIGN KEY (`alumno`) REFERENCES `alumnos` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_expclase_materia` FOREIGN KEY (`asignatura`) REFERENCES `materia` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_expclase_profesor` FOREIGN KEY (`profesor`) REFERENCES `profesor` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `expsancion`
--
ALTER TABLE `expsancion`
  ADD CONSTRAINT `FK_expsancion_expclase` FOREIGN KEY (`expulsion`) REFERENCES `expclase` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_expsancion_sanciones` FOREIGN KEY (`sancion`) REFERENCES `sanciones` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `grupoalumno`
--
ALTER TABLE `grupoalumno`
  ADD CONSTRAINT `FK_grupoalumno_alumnos` FOREIGN KEY (`alumno`) REFERENCES `alumnos` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_grupoalumno_grupo` FOREIGN KEY (`grupo`) REFERENCES `grupo` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
