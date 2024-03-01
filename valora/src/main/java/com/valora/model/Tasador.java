package com.valora.model;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "tb_tasador")
public class Tasador extends Usuario{

    @Enumerated(EnumType.STRING)
    @Column(name = "tipo_tasador", nullable = true)
    private TipoTasador tipoTasador;

	@OneToMany(mappedBy = "tasadorInspeccion", cascade = CascadeType.ALL, orphanRemoval = true)
	private List<Orden> ordenesInspeccion = new ArrayList<>();

	@OneToMany(mappedBy = "tasadorAntecedente", cascade = CascadeType.ALL, orphanRemoval = true)
	private List<Orden> ordenesAntecedentes = new ArrayList<>();

	
	public Tasador() {
	}

	public Tasador(TipoTasador tipoTasador, List<Orden> ordenesInspeccion, List<Orden> ordenesAntecedentes) {
		this.tipoTasador = tipoTasador;
		this.ordenesInspeccion = ordenesInspeccion;
		this.ordenesAntecedentes = ordenesAntecedentes;
	}

	public Tasador(Long id, String nombre, String username, String password, TipoUsuario tipoUsuario, TipoTasador tipoTasador, List<Orden> ordenesInspeccion, List<Orden> ordenesAntecedentes) {
		super(id, nombre, username, password, tipoUsuario);
		this.tipoTasador = tipoTasador;
		this.ordenesInspeccion = ordenesInspeccion;
		this.ordenesAntecedentes = ordenesAntecedentes;
	}

	public TipoTasador getTipoTasador() {
		return tipoTasador;
	}

	public void setTipoTasador(TipoTasador tipoTasador) {
		this.tipoTasador = tipoTasador;
	}

	public List<Orden> getOrdenesInspeccion() {
		return ordenesInspeccion;
	}

	public void setOrdenesInspeccion(List<Orden> ordenesInspeccion) {
		this.ordenesInspeccion = ordenesInspeccion;
	}

	public List<Orden> getOrdenesAntecedentes() {
		return ordenesAntecedentes;
	}

	public void setOrdenesAntecedentes(List<Orden> ordenesAntecedentes) {
		this.ordenesAntecedentes = ordenesAntecedentes;
	}

}
