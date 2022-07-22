CREATE SCHEMA IF NOT EXISTS bingovirtual DEFAULT CHARACTER SET utf8 ;
USE bingovirtual;

-- -----------------------------------------------------
-- Tabla Usuario
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS user(
  use_id INT UNSIGNED NOT NULL AUTO_INCREMENT  PRIMARY KEY

) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Tabla tablero
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS board(
  boa_id INTEGER UNSIGNED AUTO_INCREMENT PRIMARY KEY NOT NULL,
  boa_user_id INT UNSIGNED NOT NULL,
  boa_number INTEGER UNSIGNED NOT NULL,
  boa_listb INTEGER UNSIGNED NOT NULL,
  boa_listi INTEGER UNSIGNED NOT NULL,
  boa_listn INTEGER UNSIGNED NOT NULL,
  boa_listg INTEGER UNSIGNED NOT NULL,
  boa_listo INTEGER UNSIGNED NOT NULL

) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE INDEX board_boa_number_Idx ON board(boa_number) USING BTREE;
CREATE INDEX board_boa_listb_Idx ON board(boa_listb) USING BTREE;
CREATE INDEX board_boa_listi_Idx ON board(boa_listi) USING BTREE;
CREATE INDEX board_boa_listn_Idx ON board(boa_listn) USING BTREE;
CREATE INDEX board_boa_listg_Idx ON board(boa_listg) USING BTREE;
CREATE INDEX board_boa_listo_Idx ON board(boa_listo) USING BTREE;
CREATE UNIQUE INDEX board_boa_user_id_boa_boa_Idx ON board (boa_user_id, boa_number) USING BTREE;

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
