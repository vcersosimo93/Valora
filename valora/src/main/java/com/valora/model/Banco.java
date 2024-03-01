package com.valora.model;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "tb_banco")
public class Banco {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
    @Column(name = "nombre", nullable = true)
    private String nombre;
    
	@OneToMany(mappedBy = "banco", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Orden> ordenes = new ArrayList<>();

	public Banco() {
	}
	
	public Banco(int id, String nombre, List<Orden> ordenes) {
		super();
		this.id = id;
		this.nombre = nombre;
		this.ordenes = ordenes;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public List<Orden> getOrdenes() {
		return ordenes;
	}

	public void setOrdenes(List<Orden> ordenes) {
		this.ordenes = ordenes;
	}
	
	


}
