package com.valora.model;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "banco")
public class Banco {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
    @Column(name = "nombre", nullable = true)
    private String nombre;
    
	@OneToMany(mappedBy = "banco"/*, cascade = CascadeType.ALL, orphanRemoval = true*/)
	private List<Orden> ordenes = new ArrayList<>();

	@OneToMany(mappedBy = "banco"/*, cascade = CascadeType.ALL, orphanRemoval = true*/)
	private List<Inspeccion> inspecciones = new ArrayList<>();

	public Banco() {
	}
	
	public Banco(int id, String nombre, List<Orden> ordenes, List<Inspeccion> inspecciones) {
		super();
		this.id = id;
		this.nombre = nombre;
		this.ordenes = ordenes;
		this.inspecciones = inspecciones;
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

	public List<Inspeccion> getInspecciones() {
		return inspecciones;
	}

	public void setInspecciones(List<Inspeccion> inspecciones) {
		this.inspecciones = inspecciones;
	}

	public void addInspeccion(Inspeccion inspeccion){
		if(this.inspecciones == null){
			this.inspecciones = new ArrayList<>();
		}
		this.inspecciones.add(inspeccion);
	}



}
