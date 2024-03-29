package com.sofka.repository;

import com.sofka.domain.UserDomain;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Repositorio para la entidad Usuario
 *
 * @version 1.0.0 2022-07-21
 * @author Martha Liliana Gallego<lilianagallegom@gmail.com>
 * @since 1.0.0
 */
public interface UserRepository extends JpaRepository<UserDomain, Integer> {

}