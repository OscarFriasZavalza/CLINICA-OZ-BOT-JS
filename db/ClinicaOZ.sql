CREATE DATABASE  IF NOT EXISTS `clinicaoz` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `clinicaoz`;
-- MySQL dump 10.13  Distrib 8.0.31, for macos12 (x86_64)
--
-- Host: localhost    Database: clinicaoz
-- ------------------------------------------------------
-- Server version	8.0.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `admin`
--

DROP TABLE IF EXISTS `admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `admin` (
  `id` int NOT NULL,
  `AD_Correo` varchar(45) DEFAULT NULL,
  `AD_Pass` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin`
--

LOCK TABLES `admin` WRITE;
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
INSERT INTO `admin` VALUES (1,'eladmin@gmail.com','123456');
/*!40000 ALTER TABLE `admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `citas`
--

DROP TABLE IF EXISTS `citas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `citas` (
  `idCitas` int NOT NULL AUTO_INCREMENT,
  `nombrePaciente` varchar(45) DEFAULT NULL,
  `apellidoPaciente` varchar(45) DEFAULT NULL,
  `correoPaciente` varchar(45) DEFAULT NULL,
  `idServicio` varchar(45) DEFAULT NULL,
  `fecha` varchar(45) DEFAULT NULL,
  `asistio` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idCitas`),
  KEY `FK_Pacientes_idx` (`apellidoPaciente`),
  KEY `fk_cliente_cita_idx` (`correoPaciente`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `citas`
--

LOCK TABLES `citas` WRITE;
/*!40000 ALTER TABLE `citas` DISABLE KEYS */;
INSERT INTO `citas` VALUES (15,'Nora Maria','Frias Zavalza','nora@gmail.com','Resonancia','2022-11-20','SI'),(16,'german','diaz','hania@gmail.com','Resonancia','2022-11-21','NO'),(17,'Mariza','Briseño','mariza@gmail.com','RayosX','2022-11-23','NO'),(18,'Nora Maria','Ramirez','hania@gmail.com','Nutricion','Se le definira en 3 dias habiles ',NULL),(19,'Oscar Ernesto','Frias Zavalza','ernesto@gmail.com','Resonancia','Se le definira en 3 dias habiles ',NULL),(20,'Mariza','Frias Zavalza','ernesto@gmail.com','Densitometria','Se le definira en 3 dias habiles ',NULL),(22,'Mariza','Ramirez','ernesto@gmail.com','Mastografia','Se le definira en 3 dias habiles ',NULL),(24,'Nora','Frias Zavalza','ernesto@gmail.com','Papanicolau','Se le definira en 3 dias habiles ',NULL),(25,'Mariza','Frias Zavalza','juan@gmail.com','Papanicolau','Se le definira en 3 dias habiles ',NULL),(26,'Nora','Ramirez','juan@gmail.com','Tomografía','Se le definira en 3 dias habiles ',NULL),(27,'Alexis','Salas','alexsalaspor@gmail.com','Laboratorio','2022-11-28','NO'),(30,'Oscar Ernesto','Frias Zavalza','oserfriasza@ittepic.edu.mx','Laboratorio','2022-12-13','PENDIENTE');
/*!40000 ALTER TABLE `citas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cliente`
--

DROP TABLE IF EXISTS `cliente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cliente` (
  `idPacientes` int NOT NULL AUTO_INCREMENT,
  `CLI_Nombre` varchar(45) DEFAULT NULL,
  `CLI_ApPaterno` varchar(45) DEFAULT NULL,
  `CLI_ApMaterno` varchar(45) DEFAULT NULL,
  `CLI_Sexo` varchar(45) DEFAULT NULL,
  `CLI_FeNac` varchar(45) DEFAULT NULL,
  `CLI_Telefono` varchar(45) DEFAULT NULL,
  `CLI_Correo` varchar(45) NOT NULL,
  `CLI_Contra` varchar(45) DEFAULT NULL,
  `CLI_Colonia` varchar(45) DEFAULT NULL,
  `CLI_CP` varchar(45) DEFAULT NULL,
  `CLI_Direccion` varchar(45) DEFAULT NULL,
  `CLI_Estado` varchar(45) DEFAULT NULL,
  `CLI_Pais` varchar(45) DEFAULT NULL,
  `CLI_Municipio` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idPacientes`,`CLI_Correo`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cliente`
--

LOCK TABLES `cliente` WRITE;
/*!40000 ALTER TABLE `cliente` DISABLE KEYS */;
INSERT INTO `cliente` VALUES (8,'Juan','Carlos','Perez','Alvarez','2022-11-23','3111477764','juan@gmail.com','juan123','Lopez Mateos','63021','Lopez Mateos','Nayarit','México','Tepic'),(9,'Alexis','Salas','Portugal','Masculino','1998-11-19','311998834','alexsalaspor@gmail.com','123','Burocrata federal','63156','mexico','nayarit','Mexico','tepic'),(10,'Oscar Ernesto','Frias','Zavalza','Masculino','2022-12-09','3111477764','oserfriasza@ittepic.edu.mx','oscar123','Lopez Mateos','63021','Lopez Mateos','Nayarit','México','Tepic');
/*!40000 ALTER TABLE `cliente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `encargado`
--

DROP TABLE IF EXISTS `encargado`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `encargado` (
  `idMedico` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) DEFAULT NULL,
  `apellidoP` varchar(45) DEFAULT NULL,
  `apellidoM` varchar(45) DEFAULT NULL,
  `sexo` varchar(45) DEFAULT NULL,
  `fechaNacimiento` varchar(45) DEFAULT NULL,
  `telefono` varchar(45) DEFAULT NULL,
  `correo` varchar(45) DEFAULT NULL,
  `contra` varchar(45) DEFAULT NULL,
  `idServicio` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idMedico`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `encargado`
--

LOCK TABLES `encargado` WRITE;
/*!40000 ALTER TABLE `encargado` DISABLE KEYS */;
INSERT INTO `encargado` VALUES (7,'Alan','Ruiz','Ignacio','Masculino','2022-11-29','3111477764','alanruiz@gmail.com','alan123','Laboratorio');
/*!40000 ALTER TABLE `encargado` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-12-13 21:06:18
