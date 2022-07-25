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

@Data
@Entity
@Table(name = "board")
public class BoardDomain {
    /**
     * Variable usada para manejar el tema del identificador de la tupla (consecutivo)
     */
    private static final long serialVersionUID = 1L;

    /**
     * Identificador de la tupla
     */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "boa_id", nullable = false)
    private Integer id;

    /**
     * Punto de enlace con la entidad usuario (un usuario puede tener solo  un tablero)
     */
    @OneToOne(fetch = FetchType.LAZY, targetEntity = UserDomain.class, optional = false)
    @JoinColumn(name = "boa_user_id", nullable = false)
    @JsonBackReference
    private UserDomain userDomain;

    /**
     * Número del tablero
     */
    @Column(name = "boa_number", nullable = false)
    private Integer number;

    /**
     * Número para la letra b
     */
    @Column(name = "boa_listb", nullable = false)
    private Integer listb;

    /**
     * Número para la letra i
     */
    @Column(name = "boa_listi", nullable = false)
    private Integer listi;

    /**
     * Número para la letra n
     */
    @Column(name = "boa_listn", nullable = false)
    private Integer listn;

    /**
     * Número para la letra g
     */
    @Column(name = "boa_listg", nullable = false)
    private Integer listg;

    /**
     * Número para la letra o
     */
    @Column(name = "boa_listo", nullable = false)
    private Integer listo;

}
