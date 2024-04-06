package com.valora.model;

import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "departamento")
public class Departamento {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
    @Column(name = "nombre", nullable = true)
    private String nombre;

	@OneToMany(mappedBy = "departamento", cascade = CascadeType.ALL, orphanRemoval = true)
	private List<Orden> ordenes = new ArrayList<>();

	@OneToMany(mappedBy = "departamento", cascade = CascadeType.ALL, orphanRemoval = true)
	private List<Inspeccion> inspecciones = new ArrayList<>();

	public Departamento() {
	}

	public Departamento(int id, String nombre, List<Orden> ordenes, List<Inspeccion> inspecciones) {
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

	public void addOrden(Orden orden){
		if(this.ordenes == null){
			this.ordenes = new ArrayList<>();
		}
		this.ordenes.add(orden);
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
