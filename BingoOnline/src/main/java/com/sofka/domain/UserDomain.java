package com.sofka.domain;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.Data;

import javax.persistence.Table;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.GenerationType;
import javax.persistence.GeneratedValue;
import javax.persistence.Column;
import javax.persistence.OneToOne;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;



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

	/**
	 * Punto de enlace con la entidad tablero (un usuario puede tener solo  un tablero)
	 */
	@OneToOne(fetch = FetchType.LAZY, targetEntity = BoardDomain.class, optional = false)
	@JoinColumn(name = "boa_user_id", nullable = false)
	@JsonBackReference
	private BoardDomain boardDomain;
}
