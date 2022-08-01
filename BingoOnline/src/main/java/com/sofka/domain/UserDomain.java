package com.sofka.domain;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.Data;

import javax.persistence.*;


/**
 * Entidad del Usuario
 *
 * @version 1.0.0 2022-07-19
 * @author Martha Liliana Gallego<lilianagallegom@gmail.com>
 * @since 1.0.0
 */
@Data
@Entity
@Table(name = "user")
public class UserDomain{

	/**
	 * Variable usada para manejar el tema del identificador de la tupla (consecutivo)
	 */
	private static final long serialVersionUID = 1L;

	/**
	 * Identificador de la tupla
	 */
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "use_id", nullable = false)
	private Integer id;

	@OneToOne(mappedBy="user")
	private BoardDomain board;

	/**
	 * Número del tablero
	 */
	@Column(name = "use_id_login", nullable = false, length = 50)
	private String idLogin;

}
