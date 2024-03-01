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
    
	@OneToMany(mappedBy = "tasador", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Orden> ordenes = new ArrayList<>();

//	@OneToMany(mappedBy = "informe", cascade = CascadeType.ALL, orphanRemoval = true)
//  private List<Informe> informes = new ArrayList<>();

	
	public Tasador() {
	}
	
	public Tasador(TipoTasador tipoTasador, List<Orden> ordenes) {
		super();
		this.tipoTasador = tipoTasador;
		this.ordenes = ordenes;
	}

	public TipoTasador getTipoTasador() {
		return tipoTasador;
	}

	public void setTipoTasador(TipoTasador tipoTasador) {
		this.tipoTasador = tipoTasador;
	}

	public List<Orden> getOrdenes() {
		return ordenes;
	}

	public void setOrdenes(List<Orden> ordenes) {
		this.ordenes = ordenes;
	}
	

	

	
}
