package com.sofka.service.interfaces;

import com.sofka.domain.BingoDomain;
import com.sofka.domain.BoardDomain;
import com.sofka.domain.UserDomain;
import org.springframework.data.domain.Sort;
import java.util.List;

/**
 * Interfaz para el servicio del juego del bingo
 *
 * @version 1.0.0 2022-07-21
 * @author Martha Liliana Gallego<lilianagallegom@gmail.com>
 * @since 1.0.0
 */
public interface IGameService {

	/**
	 * Devuelve una lista de Usuarios con todos los usuarios que estan jugando
	 *
	 * @return
	 *
	 * @author Martha Liliana Gallego<lilianagallegom@gmail.com>
	 * @since 1.0.0
	 */
	public List<UserDomain> getList();

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
	public List<UserDomain> getList(String field, Sort.Direction order);

	/**
	 * Crea un usuario en el sistema
	 *
	 * @param user Objeto del usuario a crear
	 * @return Objeto del usuario creado
	 *
	 * @author Martha Liliana Gallego<lilianagallegom@gmail.com>
	 * @since 1.0.0
	 */
	public UserDomain createUser(UserDomain user);

	/**
	 * Crea un tablero en el sistema
	 *
	 * @param board Objeto del tablero a crear
	 * @return Objeto del tablero creado
	 *
	 * @author Martha Liliana Gallego<lilianagallegom@gmail.com>
	 * @since 1.0.0
	 */
	public BoardDomain createBoard(BoardDomain board);

	/**
	 * Crea un bingo en el sistema
	 *
	 * @param bingo Objeto del bingo a crear
	 * @return Objeto del bingo creado
	 *
	 * @author Martha Liliana Gallego<lilianagallegom@gmail.com>
	 * @since 1.0.0
	 */
	public BingoDomain createBingo(BingoDomain bingo);

	/**
	 * Borra un usuario del sistema basado en su identificador
	 *
	 * @param id identificador del usuario a borrar
	 * @return Objeto del usuario creado
	 *
	 * @author Martha Liliana Gallego<lilianagallegom@gmail.com>
	 * @since 1.0.0
	 */
	public UserDomain deleteUser(Integer id);

	/**
	 * Borra un tablero del sistema basado en su identificador
	 *
	 * @param id identificador del tablero a borrar
	 * @return Objeto del tablero creado
	 *
	 * @author Martha Liliana Gallego<lilianagallegom@gmail.com>
	 * @since 1.0.0
	 */
	BoardDomain deleteBoard(Integer id);

	/**
	 * Borra un contacto del sistema basado en su identificador
	 *
	 * @param id identificador del bingo a borrar
	 * @return Objeto del bingo creado
	 *
	 * @author Martha Liliana Gallego<lilianagallegom@gmail.com>
	 * @since 1.0.0
	 */
	BingoDomain deleteBingo(Integer id);
}
