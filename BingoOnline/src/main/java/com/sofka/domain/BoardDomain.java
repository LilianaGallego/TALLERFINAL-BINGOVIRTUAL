package com.sofka.domain;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Data;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

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
    @JoinColumn(name = "use_id", nullable = false, unique = true)
    @JsonBackReference
    private UserDomain user;

    /**
     * Punto de enlace entre la entidad del tablero y  la entidad numero b
     * (un tablero puede tener muchos numeros de la letra b)
     */
    @OneToMany(
            fetch = FetchType.EAGER,
            targetEntity = NumberBDomain.class,
            cascade = CascadeType.REMOVE,
            mappedBy = "board"
    )
    @JsonManagedReference
    private List<NumberBDomain> numbersB = new ArrayList<>();

}
