-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: automotive
-- ------------------------------------------------------
-- Server version	5.5.5-10.1.29-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `car_brands`
--

DROP TABLE IF EXISTS `car_brands`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `car_brands` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET latin1 DEFAULT NULL,
  `arName` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=42 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `car_brands`
--

LOCK TABLES `car_brands` WRITE;
/*!40000 ALTER TABLE `car_brands` DISABLE KEYS */;
INSERT INTO `car_brands` VALUES (1,'skoda','سكودا','2018-11-20 07:09:33','2018-11-20 07:09:33'),(2,'toyota','تويوتا','2018-11-20 07:09:33','2018-11-20 07:09:33'),(4,'BYD','BYD','2018-11-20 07:09:33','2018-11-20 07:09:33'),(5,'MG','أم جي','2018-11-20 07:09:33','2018-11-20 07:09:33'),(6,'Opel','أوبل','2018-11-20 07:09:33','2018-11-20 07:09:33'),(7,'Audi','أودى','2018-11-20 07:09:33','2018-11-20 07:09:33'),(8,'Alfa Romeo','الفا روميو','2018-11-20 07:09:33','2018-11-20 07:09:33'),(9,'proton','بروتون','2018-11-20 07:09:33','2018-11-20 07:09:33'),(10,'Brilliance','بريليانس','2018-11-20 07:09:33','2018-11-20 07:09:33'),(11,'Porsche','بورش','2018-11-20 07:09:33','2018-11-20 07:09:33'),(12,'BMW','بى ام دبليو','2018-11-20 07:09:33','2018-11-20 07:09:33'),(13,'Peugeot','بيجو','2018-11-20 07:09:33','2018-11-20 07:09:33'),(14,'Jaguar','جاجوار','2018-11-20 07:09:33','2018-11-20 07:09:33'),(15,'jelly','جيلي','2018-11-20 07:09:33','2018-11-20 07:09:33'),(16,'Range Rover','رانج روفر','2018-11-20 07:09:33','2018-11-20 07:09:33'),(17,'Renault','رينو','2018-11-20 07:09:33','2018-11-20 07:09:33'),(18,'Sanjung','سانج يونج','2018-11-20 07:09:33','2018-11-20 07:09:33'),(19,'Citroen','ستروين','2018-11-20 07:09:33','2018-11-20 07:09:33'),(20,'Subaru','سوبارو','2018-11-20 07:09:33','2018-11-20 07:09:33'),(21,'Suzuki','سوزوكي','2018-11-20 07:09:33','2018-11-20 07:09:33'),(22,'Seat','سيات','2018-11-20 07:09:33','2018-11-20 07:09:33'),(23,'Senova','سينوفا','2018-11-20 07:09:33','2018-11-20 07:09:33'),(24,'Shengan','شنجان','2018-11-20 07:09:33','2018-11-20 07:09:33'),(25,'Sherry','شيري','2018-11-20 07:09:33','2018-11-20 07:09:33'),(26,'Chevrolet','شيفروليه','2018-11-20 07:09:33','2018-11-20 07:09:33'),(27,'Ford','فورد','2018-11-20 07:09:33','2018-11-20 07:09:33'),(28,'Volvo','فولفو','2018-11-20 07:09:33','2018-11-20 07:09:33'),(29,'Volkswagen','فولكس فاجن','2018-11-20 07:09:33','2018-11-20 07:09:33'),(30,'Fiat','فيات','2018-11-20 07:09:33','2018-11-20 07:09:33'),(31,'Chrysler','كرايسلر','2018-11-20 07:09:33','2018-11-20 07:09:33'),(32,'Kia','كيا','2018-11-20 07:09:33','2018-11-20 07:09:33'),(33,'Lada','لادا','2018-11-20 07:09:33','2018-11-20 07:09:33'),(34,'Lexus','لكزس','2018-11-20 07:09:33','2018-11-20 07:09:33'),(35,'Mazda','مازدا','2018-11-20 07:09:33','2018-11-20 07:09:33'),(36,'Mitsubishi','متسوبيشى','2018-11-20 07:09:33','2018-11-20 07:09:33'),(37,'Mercedes','مرسيدس','2018-11-20 07:09:33','2018-11-20 07:09:33'),(38,'Mini','ميني','2018-11-20 07:09:33','2018-11-20 07:09:33'),(39,'Honda','هوندا','2018-11-20 07:09:33','2018-11-20 07:09:33'),(40,'Hyundai','هيونداى','2018-11-20 07:09:33','2018-11-20 07:09:33'),(41,'Jeep','جيب','2018-11-20 07:09:33','2018-11-20 07:09:33');
/*!40000 ALTER TABLE `car_brands` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-12-07 13:53:50
