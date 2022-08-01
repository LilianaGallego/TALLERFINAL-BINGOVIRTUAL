package com.sofka.service;

import com.sofka.domain.*;
import com.sofka.repository.*;
import com.sofka.service.interfaces.IGameService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * Clase tipo servicio para el manejo del juego del bingo
 *
 * @version 1.0.0 2022-07-21
 * @author Martha Liliana Gallego<lilianagallegom@gmail.com>
 * @since 1.0.0
 */
@Service
public class GameService implements IGameService {

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
	 * Repositorio del numero del tablero
	 */
	@Autowired
	private NumberBRepository numberBRepository;

	/**
	 * Devuelve una lista de Usuarios con todos los usuarios que estan jugando
	 *
	 * @return userRepository lista de usuarios
	 *
	 * @author Martha Liliana Gallego<lilianagallegom@gmail.com>
	 * @since 1.0.0
	 */
	@Override
	@Transactional(readOnly = true)
	public List<UserDomain> getList() {
		return userRepository.findAll();
	}

	/**
	 * Devuelve una lista de tableros con todos los tableros
	 *
	 * @return boardRepository lista de tableros
	 *
	 * @author Martha Liliana Gallego<lilianagallegom@gmail.com>
	 * @since 1.0.0
	 */
	@Override
	@Transactional(readOnly = true)
	public List<BoardDomain> listBoards() {
		return boardRepository.findAll();
	}

	/**
	 * Devuelve una lista de numeros
	 *
	 * @return numberBRepository lista de numeros
	 *
	 * @author Martha Liliana Gallego<lilianagallegom@gmail.com>
	 * @since 1.0.0
	 */
	@Override
	@Transactional(readOnly = true)
	public List<NumberBDomain> listNumbersB() {
		return numberBRepository.findAll();
	}

	/**
	 * Devuelve una lista de los numeros del bingo
	 *
	 * @return boardRepository numeros del tablero
	 *
	 * @author Martha Liliana Gallego<lilianagallegom@gmail.com>
	 * @since 1.0.0
	 */
	@Override
	@Transactional(readOnly = true)
	public List<BingoDomain> getListBingo() {
		return bingoRepository.findAll();
	}

	/**
	 * Devuelve una lista de usuarios con todos usuarios del sistema ordenados por el campo indicado
	 * (Id) ya sea ascendente o descendente
	 *
	 * @param field campo por el cual ordenar
	 * @param order método de ordenado ASC o DESC
	 * @return Lista de usuarios
	 *
	 * @author Martha Liliana Gallego<lilianagallegom@gmail.com>
	 * @since 1.0.0
	 */
	@Override
	public List<UserDomain> getList(String field, Sort.Direction order) {
		return userRepository.findAll(Sort.by(order, field));
	}

	/**
	 * Devuelve los numeros del bingo ordenados por el campo indicado
	 * ya sea ascendente o descendente
	 *
	 * @param field campo por el cual ordenar
	 * @param order método de ordenado ASC o DESC
	 * @return Lista de numeros del bingo
	 *
	 * @author Martha Liliana Gallego<lilianagallegom@gmail.com>
	 * @since 1.0.0
	 */
	@Override
	public List<BingoDomain> getListBingo(String field, Sort.Direction order) {
		return bingoRepository.findAll(Sort.by(order, field));
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
		return userRepository.save(user);
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
		return boardRepository.save(board);
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

		return bingoRepository.save(bingo);
	}

	/**
	 * Crea un numero de la letra b en el sistema
	 *
	 * @param numberB Objeto del numero de la letra b a crear
	 * @return Objeto del numero de la letra b creado
	 *
	 * @author Martha Liliana Gallego<lilianagallegom@gmail.com>
	 * @since 1.0.0
	 */
	@Override
	public NumberBDomain createNumberB(NumberBDomain numberB) {
		return numberBRepository.save(numberB);
	}

	/**
	 * Borra un usuario del sistema basado en su identificador
	 *
	 * @param id identificador del usuario a borrar
	 * @return Objeto del usuario creado
	 *
	 * @author Martha Liliana Gallego<lilianagallegom@gmail.com>
	 * @since 1.0.0
	 */
	@Override
	public UserDomain deleteUser(Integer id) {
		var user = userRepository.findById(id);
		if (user.isPresent()) {
			userRepository.delete(user.get());
			return user.get();
		} else {
			return null;
		}
	}

	/**
	 * Borra un tablero del sistema basado en su identificador
	 *
	 * @param id identificador del tablero a borrar
	 * @return Objeto del tablero creado
	 *
	 * @author Martha Liliana Gallego<lilianagallegom@gmail.com>
	 * @since 1.0.0
	 */
	@Override
	public BoardDomain deleteBoard(Integer id) {
		var board = boardRepository.findById(id);
		if (board.isPresent()) {
			boardRepository.delete(board.get());
			return board.get();
		} else {
			return null;
		}
	}

	/**
	 * Borra un contacto del sistema basado en su identificador
	 *
	 * @param id identificador del bingo a borrar
	 * @return Objeto del bingo creado
	 *
	 * @author Martha Liliana Gallego<lilianagallegom@gmail.com>
	 * @since 1.0.0
	 */
	@Override
	public BingoDomain deleteBingo(Integer id) {
		var bingo = bingoRepository.findById(id);
		if (bingo.isPresent()) {
			bingoRepository.delete(bingo.get());
			return bingo.get();
		} else {
			return null;
		}
	}
}
