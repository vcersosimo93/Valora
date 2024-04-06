package com.valora.model;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "secretaria")
public class Secretaria extends Usuario {

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
