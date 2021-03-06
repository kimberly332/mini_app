-- phpMyAdmin SQL Dump
-- version 4.9.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Dec 02, 2020 at 10:47 PM
-- Server version: 5.7.26
-- PHP Version: 7.4.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_mini_cooper`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_mini_cooper`
--

CREATE TABLE `tbl_mini_cooper` (
  `id` int(11) NOT NULL,
  `model` varchar(30) NOT NULL,
  `price` varchar(10) NOT NULL,
  `detail` text NOT NULL,
  `image` varchar(40) NOT NULL,
  `image_og` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_mini_cooper`
--

INSERT INTO `tbl_mini_cooper` (`id`, `model`, `price`, `detail`, `image`, `image_og`) VALUES
(1, '2021 MINI COOPER 3 DOOR', '$23,490', 'It’s the original icon, reborn and reimagined for modern motoring. The MINI 3 door builds on 60+ years of timeless MINI design, but comes equipped with a whole host of 21st century tech features and practical touches to cater to your every need. Distinct by design and urban by nature, it’s made to stand out as you explore new corners of your city. And with its ultra-nimble go-kart feel, you’re sure to find something exciting around every turn.', 'mini_3_door.jpg', 'mini_3_door_showcase.png'),
(2, '2021 MINI COOPER 5 DOOR', '$27,756', 'It’s the iconic MINI hatch, with two extra doors and a bit more room for passengers and cargo. Featuring our hallmark wheels-pushed stance and a low centre of gravity, the MINI 5 door is designed to deliver the same level of corner-carving agility as its 3-door brother. But thanks to a surprisingly spacious interior equipped with added legroom and up to 941 Litres of cargo space, it’s as functional to own as it is fun to drive.', 'mini_5_door.jpg', 'mini_5_door_showcase.png'),
(3, '2021 MINI COOPER CLUBMAN ALL4', '$32,956', 'Allow us to introduce you to the most sophisticated MINI ever made. Superbly crafted with sleek exterior contours, refined cockpit accents, and quality materials throughout, the MINI Clubman is designed to make an impression everywhere it goes. And with a generously sized interior plus ALL4 All-Wheel Drive as standard, it boasts as much practicality as it does personality. Get in, get comfortable, and let the MINI Clubman open more doors to new experiences', 'mini_clubman_all.jpg', 'mini_all4_showcase.png');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_mini_cooper`
--
ALTER TABLE `tbl_mini_cooper`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_mini_cooper`
--
ALTER TABLE `tbl_mini_cooper`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
