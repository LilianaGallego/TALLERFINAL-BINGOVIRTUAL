CREATE SCHEMA IF NOT EXISTS bingovirtual DEFAULT CHARACTER SET utf8 ;
USE bingovirtual;

-- -----------------------------------------------------
-- Tabla Usuario
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS user(
  use_id INTEGER UNSIGNED AUTO_INCREMENT PRIMARY KEY NOT NULL,
  use_id_login VARCHAR(50) NOT NULL 

) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Tabla tablero
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS board(
  boa_id INTEGER UNSIGNED AUTO_INCREMENT PRIMARY KEY NOT NULL,
  use_id INTEGER UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE UNIQUE INDEX board_boa_use_id_boa_board_Idx ON board (use_id,boa_id) USING BTREE;

-- -----------------------------------------------------
-- Tabla numero b
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS numberb(
  numb_id INTEGER UNSIGNED AUTO_INCREMENT PRIMARY KEY NOT NULL,
  numb_board_id INTEGER UNSIGNED NOT NULL,
  numb_number INTEGER UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE UNIQUE INDEX numberb_numb_board_id_numb_numberb_Idx ON numberb (numb_board_id,numb_number) USING BTREE;
CREATE INDEX  numberb_numb_number_Idx ON numberb (numb_number) USING BTREE;
CREATE INDEX  numberb_numb_board_id_Idx ON numberb (numb_board_id) USING BTREE;

-- -----------------------------------------------------
-- Tabla bingo
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS bingo(
  bin_id INTEGER UNSIGNED AUTO_INCREMENT PRIMARY KEY NOT NULL,
  bin_listb INTEGER UNSIGNED NOT NULL,
  bin_listi INTEGER UNSIGNED NOT NULL,
  bin_listn INTEGER UNSIGNED NOT NULL,
  bin_listg INTEGER UNSIGNED NOT NULL,
  bin_listo INTEGER UNSIGNED NOT NULL

) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE INDEX bingo_bin_listb_Idx ON bingo(bin_listb) USING BTREE;
CREATE INDEX bingo_bin_listi_Idx ON bingo(bin_listi) USING BTREE;
CREATE INDEX bingo_bin_listn_Idx ON bingo(bin_listn) USING BTREE;
CREATE INDEX bingo_bin_listg_Idx ON bingo(bin_listg) USING BTREE;
CREATE INDEX bingo_bin_listo_Idx ON bingo(bin_listo) USING BTREE;

-- -----------------------------------------------------
-- Insercion de información Tabla bingo
-- -----------------------------------------------------
INSERT INTO bingo (bin_listb, bin_listi, bin_listn,  bin_listg, bin_listo)
VALUES
 (1, 16, 31, 46, 61),
 (2, 17, 32, 47, 62),
 (3, 18, 33, 48, 63),
 (4, 19, 34, 49, 64),
 (5, 20, 35, 50, 65),
 (6, 21, 36, 51, 66),
 (7, 22, 37, 52, 67),
 (8, 23, 38, 53, 68),
 (9, 24, 39, 54, 69),
 (10, 25, 40, 55, 70),
 (11, 26, 41, 56, 71),
 (12, 27, 42, 57, 72),
 (13, 28, 43, 58, 73),
 (14, 29, 44, 59, 74),
 (15, 30, 45, 60, 75);

