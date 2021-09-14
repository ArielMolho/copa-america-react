CREATE TABLE IF NOT EXISTS `grupos` (
    `id` int(6) NOT NULL AUTO_INCREMENT,
    `name` varchar(10) NOT NULL,
    PRIMARY KEY (`id`)
) DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS `paises` (
    `id` int(6) NOT NULL AUTO_INCREMENT,
    `name` varchar(25) NOT NULL,
    `grupoId` int(6) NOT NULL,
    `escudo` varchar(300) NOT NULL,
    PRIMARY KEY (`id`)
) DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS `partidos` (
    `id` int(6) NOT NULL AUTO_INCREMENT,
    `jornada` int(6) NOT NULL,
    `fecha` DATE NOT NULL,
    `rival` varchar(25) NOT NULL,
    `horario` varchar(10) NOT NULL,
    `paisId` int(6) NOT NULL,
    PRIMARY KEY (`id`)
) DEFAULT CHARSET=utf8;

INSERT INTO `grupos` (`name`) VALUES
    ('Grupo A'),
    ('Grupo B');

INSERT INTO `paises` (`name`, `grupoId`, `escudo`) VALUES
    ('Argentina', 1, "https://i0.wp.com/copaamericacom.wpcomstaging.com/wp-content/uploads/argentina-299819657-1624717101520.png?fit=1140%2C924&ssl=1"),
    ('Bolivia', 1, "https://i2.wp.com/copaamericacom.wpcomstaging.com/wp-content/uploads/bolivia-3170732090-1624717108788.png?fit=1140%2C924&ssl=1"),
    ('Chile', 1, "https://i2.wp.com/copaamericacom.wpcomstaging.com/wp-content/uploads/chile-1437885631-1624717139463.png?fit=1140%2C924&ssl=1"),
    ('Paraguay', 1, "https://i2.wp.com/copaamericacom.wpcomstaging.com/wp-content/uploads/paraguai-3125288324-1624717251240.png?fit=1140%2C924&ssl=1"),
    ('Uruguay', 1, "https://i2.wp.com/copaamericacom.wpcomstaging.com/wp-content/uploads/uruguai-3903260060-1624717276742.png?fit=1140%2C924&ssl=1"),
    ('Brasil', 2, "https://i2.wp.com/copaamericacom.wpcomstaging.com/wp-content/uploads/brasil-3.png?fit=1140%2C924&ssl=1"),
    ('Colombia', 2, "https://i1.wp.com/copaamericacom.wpcomstaging.com/wp-content/uploads/colombia-779737648-1624717152545.png?fit=1140%2C924&ssl=1"),
    ('Ecuador', 2, "https://i1.wp.com/copaamericacom.wpcomstaging.com/wp-content/uploads/equador-1-3297358347-1624717801871-2399757099-1624717899786.png?fit=600%2C600&ssl=1"),
    ('Perú', 2, "https://i2.wp.com/copaamericacom.wpcomstaging.com/wp-content/uploads/peru-2-2428738972-1624717624927-3339440296-1624717682864.png?fit=1140%2C924&ssl=1"),
    ('Venezuela', 2, "https://i2.wp.com/copaamericacom.wpcomstaging.com/wp-content/uploads/venezuela-745110801-1624717282601.png?fit=1140%2C924&ssl=1");

INSERT INTO `partidos` (`jornada`, `fecha`, `rival`, `horario`, `paisId`) VALUES
    (1, '2021-06-14', 'Chile', '18.00 hs', 1),
    (2, '2021-06-18', 'Uruguay', '21.00 hs', 1),
    (3, '2021-06-21', 'Paraguay', '21.00 hs', 1),
    (5, '2021-06-28', 'Bolivia', '21.00 hs', 1),
    (1, '2021-06-14', 'Paraguay', '21.00 hs', 2),
    (2, '2021-06-18', 'Chile', '18.00 hs', 2),
    (4, '2021-06-21', 'Uruguay', '21.00 hs', 2),
    (5, '2021-06-28', 'Argentina', '21.00 hs', 2),
    (1, '2021-06-14', 'Argentina', '18.00 hs', 3),
    (2, '2021-06-18', 'Bolivia', '18.00 hs', 3),
    (3, '2021-06-21', 'Uruguay', '21.00 hs', 3),
    (4, '2021-06-24', 'Paraguay', '21.00 hs', 3),
    (1, '2021-06-14', 'Bolivia', '21.00 hs', 4),
    (3, '2021-06-21', 'Argentina', '21.00 hs', 4),
    (4, '2021-06-24', 'Chile', '21.00 hs', 4),
    (5, '2021-06-28', 'Uruguay', '21.00 hs', 4),
    (2, '2021-06-18', 'Argentina', '21.00 hs', 5),
    (3, '2021-06-21', 'Chile', '18.00 hs', 5),
    (4, '2021-06-24', 'Bolivia', '18.00 hs', 5),
    (5, '2021-06-28', 'Paraguay', '21.00 hs', 5),
    (1, '2021-06-13', 'Venezuela', '18.00 hs', 6),
    (2, '2021-06-17', 'Perú', '21.00 hs', 6),
    (4, '2021-06-23', 'Colombia', '21.00 hs', 6),
    (5, '2021-06-27', 'Ecuador', '18.00 hs', 6),
    (1, '2021-06-13', 'Ecuador', '21.00 hs', 7),
    (2, '2021-06-17', 'Venezuela', '18.00 hs', 7),
    (3, '2021-06-20', 'Perú', '21.00 hs', 7),
    (4, '2021-06-23', 'Brasil', '21.00 hs', 7),
    (1, '2021-06-13', 'Colombia', '21.00 hs', 8),
    (3, '2021-06-20', 'Venezuela', '18.00 hs', 8),
    (4, '2021-06-23', 'Perú', '18.00 hs', 8),
    (5, '2021-06-27', 'Brasil', '18.00 hs', 8),
    (2, '2021-06-17', 'Brasil', '21.00 hs', 9),
    (3, '2021-06-20', 'Colombia', '21.00 hs', 9),
    (4, '2021-06-23', 'Ecuador', '18.00 hs', 9),
    (5, '2021-06-27', 'Venezuela', '18.00 hs', 9),
    (1, '2021-06-13', 'Brasil', '18.00 hs', 10),
    (2, '2021-06-17', 'Colombia', '18.00 hs', 10),
    (3, '2021-06-20', 'Ecuador', '18.00 hs', 10),
    (5, '2021-06-27', 'Perú', '18.00 hs', 10);