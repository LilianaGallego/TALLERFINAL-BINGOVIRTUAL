package com.sofka.domain;

import lombok.Data;

import javax.persistence.Table;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.GenerationType;
import javax.persistence.GeneratedValue;
import javax.persistence.Column;

@Data
@Entity
@Table(name = "board")
public class BingoDomain {
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
