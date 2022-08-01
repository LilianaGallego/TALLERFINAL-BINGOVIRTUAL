package com.sofka.domain;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.Data;

import javax.persistence.*;

/**
 * Entidad del NumeroB
 *
 * @version 1.0.0 2022-07-08
 * @author Martha Liliana Gallego<lilianagallegom@gmail.com>
 * @since 1.0.0
 */
@Data
@Entity
@Table(name = "numberb")
public class NumberBDomain {
	private static final long serialVersionUID = 1L;

	/**
	 * Identificador de la tupla
	 */
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "numb_id", nullable = false)
	private Integer id;

	/**
	 * Punto de enlace con la entidad Tablero (un tablero puede tener muchos numeros )
	 */
	@ManyToOne(fetch = FetchType.LAZY, targetEntity = BoardDomain.class, optional = false)
	@JoinColumn(name = "numb_board_id", nullable = false)
	@JsonBackReference
	private BoardDomain board;

	/**
	 * Número de la letra b
	 */
	@Column(name = "numb_number", nullable = false)
	private Integer number;
}
