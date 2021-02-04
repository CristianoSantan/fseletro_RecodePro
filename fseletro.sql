-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 04-Fev-2021 às 01:09
-- Versão do servidor: 10.4.11-MariaDB
-- versão do PHP: 7.4.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `fseletro`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `comentarios`
--

CREATE TABLE `comentarios` (
  `id` int(11) NOT NULL,
  `nome` varchar(100) DEFAULT NULL,
  `msg` varchar(300) DEFAULT NULL,
  `data` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `comentarios`
--

INSERT INTO `comentarios` (`id`, `nome`, `msg`, `data`) VALUES
(1, 'Cristiano', 'minha primeira msg.', '2020-10-25 22:06:39'),
(8, 'Joao', 'outra msgm aqui.', '2020-10-25 22:49:36'),
(112, 'Bia', 'Oiiiii', '2021-01-27 02:43:04'),
(113, 'Kevin', 'Olá Mundo!', '2021-01-30 00:37:27'),
(114, 'Beatriz', 'Oi quero café', '2021-01-30 01:13:04'),
(116, 'Bia', 'olá', '2021-01-30 21:09:37');

-- --------------------------------------------------------

--
-- Estrutura stand-in para vista `pedido`
-- (Veja abaixo para a view atual)
--
CREATE TABLE `pedido` (
`idpedidos` int(11)
,`nomeCliente` varchar(100)
,`descricao` varchar(500)
,`quantidade` decimal(8,0)
,`precofinal` decimal(8,2)
,`total` double
);

-- --------------------------------------------------------

--
-- Estrutura da tabela `pedidos`
--

CREATE TABLE `pedidos` (
  `idpedidos` int(11) NOT NULL,
  `nomeCliente` varchar(100) DEFAULT NULL,
  `endereco` varchar(100) DEFAULT NULL,
  `telefone` varchar(15) DEFAULT NULL,
  `Produto` varchar(100) DEFAULT NULL,
  `valorUnitario` float DEFAULT NULL,
  `quantidade` decimal(8,0) DEFAULT NULL,
  `idproduto` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `pedidos`
--

INSERT INTO `pedidos` (`idpedidos`, `nomeCliente`, `endereco`, `telefone`, `Produto`, `valorUnitario`, `quantidade`, `idproduto`) VALUES
(1, 'Jose', 'Rua A', '1111-2222', 'Geladeira', 1500, '2', 1),
(2, 'Joao', 'Rua B', '2222-3333', 'microondas', 500, '3', 4),
(3, 'Ana', 'Rua C', '3333-4444', 'lavadora', 2000, '5', 7),
(4, 'Amelia', 'Rua D', '4444-5555', 'batedeira', 1000, '4', 10);

-- --------------------------------------------------------

--
-- Estrutura da tabela `produtos`
--

CREATE TABLE `produtos` (
  `id` int(11) NOT NULL,
  `categoria` varchar(200) NOT NULL,
  `descricao` varchar(500) NOT NULL,
  `preco` decimal(8,2) DEFAULT NULL,
  `precofinal` decimal(8,2) DEFAULT NULL,
  `imagem` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `produtos`
--

INSERT INTO `produtos` (`id`, `categoria`, `descricao`, `preco`, `precofinal`, `imagem`) VALUES
(1, 'geladeira', 'Geladeira Frost free Brastemp side Inverse 540L', '6389.00', '5019.00', 'img/Geladeira Frost Free Brastemp Side Inverse 540 litros.png'),
(2, 'geladeira', 'Geladeira Frost Free Brastemp Branca 375 litros', '2068.00', '1910.90', 'img/Geladeira Frost Free Brastemp Branca 375 litros.png'),
(3, 'geladeira', 'Geladeira Frost Free Consul Prata 340 litros', '2199.00', '2069.00', 'img/Geladeira Frost Free Consul Prata 340 litros.png'),
(4, 'fogao', 'Fogão 4 Bocas Consul Inox com Mesa de Vidro', '1200.00', '1129.00', 'img/Fogão 4 Bocas Consul Inox com Mesa de Vidro.png'),
(5, 'fogao', 'Fogão 4 Bocas Atlas Monaco Automático', '600.00', '519.70', 'img/Fogão de Piso 4 Bocas Atlas Monaco com Acedimento Automático.png'),
(6, 'microondas', 'Micro-ondas Consul 32 Litros Inox 220v', '580.00', '409.88', 'img/Micro-ondas Consul 32 Litros Inox 220v.png'),
(7, 'microondas', 'Microondas 25L Espelhado Philco 220v', '508.70', '464.53', 'img/Microondas 25L Espelhado Philco 220v.png'),
(8, 'microondas', 'Forno de Microondas Eletrolux 20L Branco', '459.00', '436.05', 'img/Forno de Microondas Eletrolux 20L Branco.png'),
(9, 'lavaLoucas', 'Lava-Louças Electrolux Inox com e Painel Blue Touch', '3500.00', '2799.00', 'img/Lava-Louças Electrolux Inox com 10 Serviços, 06 Programas de Lavagem e Painel Blue Touch.png'),
(10, 'lavaLoucas', 'Lava Louça 8 Serviços Branca 127V Brastemp', '2070.50', '1730.61', 'img/Lava Louça Compacta 8 Serviços Branca 127V Brastemp.png'),
(11, 'lavadora', 'Lavadora de Roupas Brastemp 11 kg com Turbo', '1500.00', '1214.10', 'img/Lavadora de Roupas Brastemp 11 kg com Turbo Performance Branca.png'),
(12, 'lavadora', 'Lavadora de Roupas Philco Inverter 12KG', '2300.00', '2179.90', 'img/Lavadora de Roupas Philco Inverter 12KG.png');

-- --------------------------------------------------------

--
-- Estrutura stand-in para vista `teste`
-- (Veja abaixo para a view atual)
--
CREATE TABLE `teste` (
`idpedidos` int(11)
,`nomeCliente` varchar(100)
,`descricao` varchar(500)
,`quantidade` decimal(8,0)
,`precofinal` decimal(8,2)
,`total` decimal(16,2)
);

-- --------------------------------------------------------

--
-- Estrutura para vista `pedido`
--
DROP TABLE IF EXISTS `pedido`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `pedido`  AS  select `pedidos`.`idpedidos` AS `idpedidos`,`pedidos`.`nomeCliente` AS `nomeCliente`,`produtos`.`descricao` AS `descricao`,`pedidos`.`quantidade` AS `quantidade`,`produtos`.`precofinal` AS `precofinal`,`pedidos`.`valorUnitario` * `pedidos`.`quantidade` AS `total` from (`pedidos` join `produtos` on(`pedidos`.`idproduto` = `produtos`.`id`)) ;

-- --------------------------------------------------------

--
-- Estrutura para vista `teste`
--
DROP TABLE IF EXISTS `teste`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `teste`  AS  select `pedidos`.`idpedidos` AS `idpedidos`,`pedidos`.`nomeCliente` AS `nomeCliente`,`produtos`.`descricao` AS `descricao`,`pedidos`.`quantidade` AS `quantidade`,`produtos`.`precofinal` AS `precofinal`,`produtos`.`precofinal` * `pedidos`.`quantidade` AS `total` from (`pedidos` join `produtos` on(`pedidos`.`idproduto` = `produtos`.`id`)) ;

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `comentarios`
--
ALTER TABLE `comentarios`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `pedidos`
--
ALTER TABLE `pedidos`
  ADD PRIMARY KEY (`idpedidos`),
  ADD KEY `idproduto` (`idproduto`);

--
-- Índices para tabela `produtos`
--
ALTER TABLE `produtos`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `imagem` (`imagem`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `comentarios`
--
ALTER TABLE `comentarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=117;

--
-- AUTO_INCREMENT de tabela `pedidos`
--
ALTER TABLE `pedidos`
  MODIFY `idpedidos` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de tabela `produtos`
--
ALTER TABLE `produtos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `pedidos`
--
ALTER TABLE `pedidos`
  ADD CONSTRAINT `idproduto` FOREIGN KEY (`idproduto`) REFERENCES `produtos` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
