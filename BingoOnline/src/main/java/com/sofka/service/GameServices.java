package com.sofka.service;

import com.sofka.domain.BingoDomain;
import com.sofka.domain.BoardDomain;
import com.sofka.domain.UserDomain;
import com.sofka.repository.BingoRepository;
import com.sofka.repository.BoardRepository;
import com.sofka.repository.UserRepository;
import com.sofka.service.interfaces.IGameServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * Clase tipo Servicio para el manejo del juego del bingo
 *
 * @version 1.0.0 2022-07-21
 * @author Martha Liliana Gallego<lilianagallegom@gmail.com>
 * @since 1.0.0
 */
@Service
public class GameServices implements IGameServices {

	/**
	 * Repositorio del Usuario
	 */
	@Autowired
	private UserRepository userRepository;

	/**
	 * Repositorio del Tablero
	 */
	@Autowired
	private BoardRepository boardRepository;

	/**
	 * Repositorio del Bingo
	 */
	@Autowired
	private BingoRepository bingoRepository;

	/**
	 * Devuelve una lista de Usuarios con todos los usuarios que estan jugando
	 *
	 * @return
	 *
	 * @author Martha Liliana Gallego<lilianagallegom@gmail.com>
	 * @since 1.0.0
	 */
	@Override
	@Transactional(readOnly = true)
	public List<UserDomain> getList() {
		return null;
	}

	/**
	 * Devuelve una lista de usuarios con todos usuarios del sistema ordenados por el campo indicado
	 * (Id) ya sea ascendente o descendente
	 *
	 * @param field campo por el cual ordenar
	 * @param order método de ordenado ASC o DESC
	 * @return Lista de contactos
	 *
	 * @author Martha Liliana Gallego<lilianagallegom@gmail.com>
	 * @since 1.0.0
	 */
	@Override
	public List<UserDomain> getList(String field, Sort.Direction order) {
		return null;
	}

	/**
	 * Crea un usuario en el sistema
	 *
	 * @param user Objeto del usuario a crear
	 * @return Objeto del usuario creado
	 *
	 * @author Martha Liliana Gallego<lilianagallegom@gmail.com>
	 * @since 1.0.0
	 */
	@Override
	public UserDomain createUser(UserDomain user) {
		return null;
	}

	/**
	 * Crea un tablero en el sistema
	 *
	 * @param board Objeto del tablero a crear
	 * @return Objeto del tablero creado
	 *
	 * @author Martha Liliana Gallego<lilianagallegom@gmail.com>
	 * @since 1.0.0
	 */
	@Override
	public BoardDomain createBoard(BoardDomain board) {
		return null;
	}

	/**
	 * Crea un bingo en el sistema
	 *
	 * @param bingo Objeto del bingo a crear
	 * @return Objeto del bingo creado
	 *
	 * @author Martha Liliana Gallego<lilianagallegom@gmail.com>
	 * @since 1.0.0
	 */
	@Override
	public BingoDomain createBingo(BingoDomain bingo) {
		return null;
	}

	@Override
	public UserDomain deleteUser(Integer id) {
		return null;
	}

	@Override
	public BoardDomain deleteBoard(Integer id) {
		return null;
	}

	@Override
	public BingoDomain deleteBingo(Integer id) {
		return null;
	}
}
