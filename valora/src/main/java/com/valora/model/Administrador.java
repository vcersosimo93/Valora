package com.valora.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;


@Entity
@Table(name = "tb_administrador")
public class Administrador extends Usuario{

	public Administrador() {
		
	}
}
