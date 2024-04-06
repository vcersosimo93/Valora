package com.valora.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;


@Entity
@Table(name = "gerencia")
public class Gerencia extends Usuario{

	public Gerencia() {
		
	}
}
