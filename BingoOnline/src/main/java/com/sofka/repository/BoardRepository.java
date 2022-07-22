package com.sofka.repository;

import com.sofka.domain.BoardDomain;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Repositorio para la entidad Tablero
 *
 * @version 1.0.0 2022-07-21
 * @author Martha Liliana Gallego<lilianagallegom@gmail.com>
 * @since 1.0.0
 */
public interface BoardRepository extends JpaRepository<BoardDomain, Integer> {
}