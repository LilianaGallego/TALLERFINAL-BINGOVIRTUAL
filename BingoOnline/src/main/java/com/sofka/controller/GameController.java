package com.sofka.controller;

import com.sofka.domain.UserDomain;
import com.sofka.domain.BingoDomain;
import com.sofka.domain.BoardDomain;
import com.sofka.service.GameService;
import com.sofka.utility.Response;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.data.domain.Sort;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.sql.SQLException;

/**
 * Controlador para el directorio del juego
 *
 * @version 1.0.0 2022-07-21
 * @author Martha Liliana Gallego<lilianagallegom@gmail.com>
 * @since 1.0.0
 */
@Slf4j
@RestController
@CrossOrigin(origins = "http://localhost:8080/")
public class GameController {

	@Autowired
	private GameService gameService;
	private Response response = new Response();
	private HttpStatus httpStatus = HttpStatus.OK;

	/**
	 * Atención a la dirección raíz del sistema, este redirige a /api/v1/index
	 *
	 * @param httpResponse Objeto HttpServletResponse usado para redireccionar el controlador
	 * @return Objeto Response en formato JSON
	 *
	 * @author Martha Liliana Gallego<lilianagallegom@gmail.com>
	 * @since 1.0.0
	 */
	@GetMapping(path = "/")
	public ResponseEntity<Response> homeIndex1(HttpServletResponse httpResponse) {
		return getResponseHome(httpResponse);
	}

	/**
	 * Atención a la dirección raíz, API del sistema, este redirige a /api/v1/index
	 *
	 * @param httpResponse Objeto HttpServletResponse usado para redireccionar el controlador
	 * @return Objeto Response en formato JSON
	 *
	 * @author Martha Liliana Gallego<lilianagallegom@gmail.com>
	 * @since 1.0.0
	 */
	@GetMapping(path = "/api/")
	public ResponseEntity<Response> homeIndex2(HttpServletResponse httpResponse) {
		return getResponseHome(httpResponse);
	}

	/**
	 * Atención a la dirección raíz, API del sistema y versión, este redirige a /api/v1/index
	 *
	 * @param httpResponse Objeto HttpServletResponse usado para redireccionar el controlador
	 * @return Objeto Response en formato JSON
	 *
	 * @author Martha Liliana Gallego<lilianagallegom@gmail.com>
	 * @since 1.0.0
	 */
	@GetMapping(path = "/api/v1/")
	public ResponseEntity<Response> homeIndex3(HttpServletResponse httpResponse) {
		return getResponseHome(httpResponse);
	}

	/**
	 * Index del sistema, responde con el listado de usuarios y sus tableros
	 *
	 * @return Objeto Response en formato JSON
	 *
	 * @author Martha Liliana Gallego<lilianagallegom@gmail.com>
	 * @since 1.0.0
	 */
	@GetMapping(path = "/api/v1/index")
	public ResponseEntity<Response> index() {
		response.restart();
		try {
			response.data = gameService.getList();
			httpStatus = HttpStatus.OK;
		} catch (Exception exception) {
			getErrorMessageInternal(exception);
		}
		return new ResponseEntity(response, httpStatus);
	}

	/**
	 * Devuelve todos los usuarios con su tablero
	 *
	 * @return Objeto lista de usuarios Response en formato JSON
	 *
	 * @author Martha Liliana Gallego<lilianagallegom@gmail.com>
	 * @since 1.0.0
	 */
	@CrossOrigin(origins = "http://localhost:8080/")
	@GetMapping(path="/api/v1/users")
	public ResponseEntity<Response> getListUsers(){
		response.restart();
		try {
			response.data = gameService.getList();
			httpStatus = HttpStatus.OK;
		} catch (Exception exception) {
			getErrorMessageInternal(exception);
		}
		return new ResponseEntity(response, httpStatus);
	}

	/**
	 * Devuelve todos los numeros del bingo
	 *
	 * @return Objeto lista de bingo Response en formato JSON
	 *
	 * @author Martha Liliana Gallego<lilianagallegom@gmail.com>
	 * @since 1.0.0
	 */
	@CrossOrigin(origins = "http://localhost:8080/")
	@GetMapping(path="/api/v1/listBingo")
	public ResponseEntity<Response> getListBingo(){
		response.restart();
		try {
			response.data = gameService.getListBingo();
			httpStatus = HttpStatus.OK;
		} catch (Exception exception) {
			getErrorMessageInternal(exception);
		}
		return new ResponseEntity(response, httpStatus);
	}

	/**
	 * Devuelve todos los usuarios ordenados por su id  de forma ascendente o descendente
	 *
	 * @param orderBy id del campo con el que se desea ordenar la información
	 * @param order Tipo de orden que debe tener la información ASC o DESC
	 * @return Objeto Response en formato JSON
	 *
	 * @author Martha Liliana Gallego<lilianagallegom@gmail.com>
	 * @since 1.0.0
	 */
	@CrossOrigin(origins = "http://localhost:8080")
	@GetMapping(path = "/api/v1/index/orderby/{orderBy}/{order}")
	public ResponseEntity<Response> indexOrderBy(
			@PathVariable(value="orderBy") String orderBy,
			@PathVariable(value="order") Sort.Direction order
	) {
		response.restart();
		try {
			response.data = gameService.getList(orderBy, order);
			httpStatus = HttpStatus.OK;
		} catch (Exception exception) {
			getErrorMessageInternal(exception);
		}
		return new ResponseEntity(response, httpStatus);
	}

	/**
	 * Crea un nuevo usuario en el sistema
	 *
	 * @param user Objeto usuario a crear
	 * @return Objeto Response en formato JSON
	 *
	 * @author Martha Liliana Gallego<lilianagallegom@gmail.com>
	 * @since 1.0.0
	 */
	@CrossOrigin(origins = "http://localhost:8080/")
	@PostMapping(path = "/api/v1/user")
	public ResponseEntity<Response> createUser(@RequestBody UserDomain user) {
		response.restart();
		try {
			log.info("Usuario a crear: {}", user);
			response.data = gameService.createUser(user);
			httpStatus = HttpStatus.CREATED;
		} catch (DataAccessException exception) {
			getErrorMessageForResponse(exception);
		} catch (Exception exception) {
			getErrorMessageInternal(exception);
		}
		return new ResponseEntity(response, httpStatus);
	}

	/**
	 * Crea un nuevo tablero en el sistema
	 *
	 * @param board Objeto Tablero a crear
	 * @return Objeto Response en formato JSON
	 *
	 * @author Martha Liliana Gallego<lilianagallegom@gmail.com>
	 * @since 1.0.0
	 */
	@CrossOrigin(origins = "http://localhost:8080/")
	@PostMapping(path = "/api/v1/board")
	public ResponseEntity<Response> createBoard(@RequestBody BoardDomain board) {
		response.restart();
		try {
			log.info("tablero a crear: {}", board);
			response.data = gameService.createBoard(board);
			httpStatus = HttpStatus.CREATED;
		} catch (DataAccessException exception) {
			getErrorMessageForResponse(exception);
		} catch (Exception exception) {
			getErrorMessageInternal(exception);
		}
		return new ResponseEntity(response, httpStatus);
	}

	/**
	 * Crea un nuevo Bingo en el sistema
	 *
	 * @param bingo Objeto Bingo a crear
	 * @return Objeto Response en formato JSON
	 *
	 * @author Martha Liliana Gallego<lilianagallegom@gmail.com>
	 * @since 1.0.0
	 */
	@CrossOrigin(origins = "http://localhost:8080/")
	@PostMapping(path = "/api/v1/bingo")
	public ResponseEntity<Response> createBingo(@RequestBody BingoDomain bingo) {
		response.restart();
		try {
			log.info("Bingo a crear: {}", bingo);
			response.data = gameService.createBingo(bingo);
			httpStatus = HttpStatus.CREATED;
		} catch (DataAccessException exception) {
			getErrorMessageForResponse(exception);
		} catch (Exception exception) {
			getErrorMessageInternal(exception);
		}
		return new ResponseEntity(response, httpStatus);
	}

	/**
	 * Administrador para redireccionar al controllador /api/v1/index
	 *
	 * @param httpResponse Objeto HttpServletResponse para el manejo de la redirección
	 * @return Objeto Response en formato JSON
	 *
	 * @author Martha Liliana Gallego<lilianagallegom@gmail.com>
	 * @since 1.0.0
	 */
	private ResponseEntity<Response> getResponseHome(HttpServletResponse httpResponse) {
		response.restart();
		try {
			httpResponse.sendRedirect("/api/v1/index");
		} catch (IOException exception) {
			response.error = true;
			response.data = exception.getCause();
			response.message = exception.getMessage();
			httpStatus = HttpStatus.INTERNAL_SERVER_ERROR;
		}
		return new ResponseEntity(response, httpStatus);
	}

	/**
	 * Administrador para las excepciones del sistema
	 *
	 * @param exception Objeto Exception
	 *
	 * @author Martha Liliana Gallego<lilianagallegom@gmail.com>
	 * @since 1.0.0
	 */
	private void getErrorMessageInternal(Exception exception) {
		response.error = true;
		response.message = exception.getMessage();
		response.data = exception.getCause();
		httpStatus = HttpStatus.INTERNAL_SERVER_ERROR;
	}

	/**
	 * Administrador para las excepciones a nivel de SQL con respecto al manejo del acceso a los datos
	 *
	 * @param exception Objeto DataAccessException
	 *
	 * @author Martha Liliana Gallego<lilianagallegom@gmail.com>
	 * @since 1.0.0
	 */
	private void getErrorMessageForResponse(DataAccessException exception) {
		response.error = true;
		if(exception.getRootCause() instanceof SQLException) {
			SQLException sqlEx = (SQLException) exception.getRootCause();
			var sqlErrorCode = sqlEx.getErrorCode();
			if (sqlErrorCode == 1062) {
				response.message = "El dato ya está registrado";
			} else if (sqlErrorCode == 1452) {
				response.message = "El usuario indicado no existe";
			} else {
				response.message = exception.getMessage();
				response.data = exception.getCause();
			}
			httpStatus = HttpStatus.BAD_REQUEST;
		} else {
			response.message = exception.getMessage();
			response.data = exception.getCause();
			httpStatus = HttpStatus.INTERNAL_SERVER_ERROR;
		}
	}


}
