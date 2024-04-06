package com.valora.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;


@Entity
@Table(name = "administrador")
public class Administrador extends Usuario{

	public Administrador() {
		
	}
}
