-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 28-12-2022 a las 00:33:50
-- Versión del servidor: 10.4.25-MariaDB
-- Versión de PHP: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `blended_cafe`

CREATE DATABASE IF NOT EXISTS `blended_cafe` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `blended_cafe`;
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `grindings`
--

CREATE TABLE `grindings` (
  `id` int(3) NOT NULL,
  `grind` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `grindings`
--

INSERT INTO `grindings` (`id`, `grind`) VALUES
(1, 'Granos'),
(2, 'Prensa Francesa'),
(3, 'Filtrado Manual'),
(4, 'Maquina Espresso'),
(5, 'Aeropress');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `id` int(5) NOT NULL,
  `name` varchar(25) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `description` text NOT NULL,
  `price` smallint(5) UNSIGNED NOT NULL,
  `intensity` int(2) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `name`, `image`, `description`, `price`, `intensity`) VALUES
(1, 'Cafe Negro Colombiano', 'image1670974686538-.jpg', 'Cafe proveniente del valle de tunja en Colombia, se caracteriza por su color negro oscuro acompañado de un sabor intenso y seco', 650, 8),
(2, 'Cafe Frutal Brasilero', 'image1672183603176-.jpg', 'Cafe traido directo de la region de Barreiras en el interior de Brasil, un cafe aromatico con dejos frutales y un sabor suave', 800, 6),
(3, 'Cafe Seco Peruano', 'image1670974659453-.jpg', 'Cafe cultivado en las montañas de Quillabamba en Perú, conocido mundialmente por su sabor seco y color amarronado claro que se obtiene mediante un proceso especial de cultivo', 400, 5),
(5, 'Morro Aromatico', 'image1672183568641-.jpg', 'Proveniente de Brasil este grano se caracteriza por su robustes y aroma intenso', 400, 5),
(6, 'Manizales Frutal', 'image1672183603176-.jpg', 'Originario de Colombia y gracias a su clima tropical, esta region produce un grano suave con un sabor frutal', 350, 4),
(7, 'Coclé Amargo', 'image1672183647145-.jpg', 'Directo de Panama se cultiva este grano amargo el cual mantiene un sabor matizado entre\r\nfrutos secos y madera', 600, 9);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `shoppingcart`
--

CREATE TABLE `shoppingcart` (
  `id` int(20) NOT NULL,
  `id_user` int(3) DEFAULT NULL,
  `id_product` int(3) NOT NULL,
  `id_grindings` int(3) NOT NULL,
  `id_weights` int(3) NOT NULL,
  `quantity` int(3) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `shoppingcart`
--

INSERT INTO `shoppingcart` (`id`, `id_user`, `id_product`, `id_grindings`, `id_weights`, `quantity`) VALUES
(1, 0, 2, 2, 2, 1),
(2, 0, 1, 4, 3, 2),
(3, 0, 3, 2, 2, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(5) NOT NULL,
  `name` varchar(25) NOT NULL,
  `email` varchar(30) NOT NULL,
  `user_password` varchar(255) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `user_password`, `image`, `created_at`) VALUES
(1, 'Harriot Juszczyk', 'hjuszczyk0@msu.edu', 'HfTHfcaK4oK', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAALcSURBVDjLjZJpSNNxHMb/VhTUi3pjVFoyj+wyPDG1sDUTE7ES1zCPuXRbZjZrSk63qVPzKNuc+ncmHmPOeU3nkYkEmnjhlVdaBPoiddGbMDEoj6clZ', '0000-00-00 00:00:00'),
(2, 'Fernandina Gokes', 'fgokes1@tuttocitta.it', 'tELdbec', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAHbSURBVDjLdVK9qhpREJ7j7vrLGlhRiaCFFikkT2BxQZs8Q7pgJ9rcVuIj3MYHSJdXUAj+FDa2wSaIIihcJVUs1t91c75z7yyLd+8Hw5k5M9/MnDkjX', '0000-00-00 00:00:00'),
(3, 'Fleming Franck', 'ffranck2@yale.edu', 'kTJdn36i2N', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAL9SURBVDjLddN9MNNxHAfw31/Vf6LoLq4HRVdxpaurDnEdESepUxTCJVe5U52eyFNFp9iMeS5n19ZankZu2q3IUOZh2WweaiOnyeSI8tBF775bl0vmj', '0000-00-00 00:00:00'),
(4, 'Valentine Buckel', 'vbuckel3@usnews.com', 'teBzZclUJS', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAACxSURBVDjL7dItC8JQAIXh491HWbDvD1pEDIIKm1zDxqKi0WIULAZFYc1msF3ErEZlMC9Mhxx/gTAR28KpDxx4QRK/DCXwAbDg0oLMTShtQF0F5Alwv', '0000-00-00 00:00:00'),
(5, 'Cherilyn Muirhead', 'cmuirhead4@amazon.co.jp', 'wuzhP4Qpx', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAI9SURBVDjLjZM7aFNRGMdTA+Jg8UFx0qGDi4PgoERE6qCIUJxEwcFOdhPEdhB0FVQsmRRbaM1mhdIhtUVBwzU2mPf71bzfuTEUb9repiVNrr8rNsQaJ', '0000-00-00 00:00:00'),
(17, 'Lean', 'Lean@gmail.com', '$2a$10$Ux436yQ/MyQ6tJ9LPkRFXe2DXtGj49M8x7besEb0sqsSCcbo.ed9G', 'default-image.png', '2022-12-27 20:28:24'),
(18, 'Rocio', 'rocio@gmail.com', '$2a$10$FLOhB.Zrv58JHo6HKKS.OeS8QUuu7W0JZ62FICWPOoPCl6b.bPgO.', 'default-image.png', '2022-12-27 20:29:09'),
(19, 'Nico1', 'nico1@gmail.com', '$2a$10$fd5Np0AxRjuEwlWXmatK7OfVWbYPOvokGTWdNSvQcMlKUIIHTenui', 'default-image.png', '2022-12-27 20:29:21'),
(20, 'nico2', 'nico2@gmail.com', '$2a$10$GZVuJwouICS7odOxMjELhO1PuvWG8G/ErFCEEXkeexJUx54so7RaC', 'default-image.png', '2022-12-27 20:29:32');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `weights`
--

CREATE TABLE `weights` (
  `id` int(5) NOT NULL,
  `weight` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `weights`
--

INSERT INTO `weights` (`id`, `weight`) VALUES
(1, '250g'),
(2, '500g'),
(3, '1Kg');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `shoppingcart`
--
ALTER TABLE `shoppingcart`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `shoppingcart`
--
ALTER TABLE `shoppingcart`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
