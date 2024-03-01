package com.valora.model;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "tb_secretaria")
public class Secretaria extends Usuario{

	@OneToMany(mappedBy = "secretaria", cascade = CascadeType.ALL)
	private List<Orden> ordenes = new ArrayList<>();

	public Secretaria() {
	}
	
	public Secretaria(List<Orden> ordenes) {
		super();
		this.ordenes = ordenes;
	}

	public List<Orden> getOrdenes() {
		return ordenes;
	}

	public void setOrdenes(List<Orden> ordenes) {
		this.ordenes = ordenes;
	}
	

	
}
