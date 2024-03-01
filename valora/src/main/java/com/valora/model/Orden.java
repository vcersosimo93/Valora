package com.valora.model;

import java.time.LocalDateTime;

import org.hibernate.annotations.CreationTimestamp;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;

@Entity
@Table(name = "tb_orden")
public class Orden {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

    @ManyToOne
    @JoinColumn(name = "secretaria_id") 
	private Secretaria creadorSecretaria;

    @CreationTimestamp
    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "fechaHoraInspeccion", nullable = true)
	private LocalDateTime fechaHoraInspeccion;
	
    @ManyToOne
    @JoinColumn(name = "tasador_id") 
	private Tasador tasador;
    
    @CreationTimestamp
    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "fechaCreacion", nullable = true)
	private LocalDateTime fechaCreacion;

    @ManyToOne
    @JoinColumn(name = "banco_id") 
	private Banco banco;
	
    @Column(name = "titular", nullable = true)
	private String titular;
	
    @Column(name = "nombreSolicitante", nullable = true)
	private String nombreSolicitante;

    @Column(name = "telefonoSolicitante", nullable = true)
	private String telefonoSolicitante;
	
    @Column(name = "nombreContacto", nullable = true)
	private String nombreContacto;

    @Column(name = "telefonoContacto", nullable = true)
	private String telefonoContacto;

    @Column(name = "calle", nullable = true)
	private String calle;

    @Column(name = "nroPuerta", nullable = true)
	private int nroPuerta;

    @Column(name = "unidad", nullable = true)
	private int unidad;
	
    @Column(name = "esquina", nullable = true)
	private String esquina;

    @Column(name = "localidad", nullable = true)
	private String localidad;

    @ManyToOne
    @JoinColumn(name = "departamento_id") 
	private Departamento departamento;

    @Column(name = "padron", nullable = true)
	private long padron;
	
	//TasaciÃ³n o RetasaciÃ³n
    @Column(name = "tipoDeTrabajo", nullable = true)
	private String tipoDeTrabajo;
	
	//En InspecciÃ³n o en Estudio
    @Column(name = "recaudos", nullable = true)
	private String recaudos;

    @CreationTimestamp
    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "fechaAntecedente", nullable = true)
	private LocalDateTime fechaAntecedente;

    @ManyToOne
    @JoinColumn(name = "tasador_antecedente_id") 
	private Usuario tasadorAntecedente;
	
    @Column(name = "oficialBanco", nullable = true)
	private String oficialBanco;
	
	// TODO Consultar sobre si puede ser un numero o es un string
    @Column(name = "sucursal", nullable = true)
	private String sucursal;
	
    @Column(name = "observacion", nullable = true)
	private String observacion;

//    
//    @OneToOne(mappedBy = "orden") // Nombre del atributo en Inspeccion que representa la relaciÃ³n inversa
//    private Inspeccion inspeccion;
//
//    @OneToOne(mappedBy = "informe") // Nombre del atributo en Inspeccion que representa la relaciÃ³n inversa
//    private Informe informe;

	
	public Orden() {
	}
	
	public Orden(int id, Secretaria creadorSecretaria, LocalDateTime fechaHoraInspeccion, Tasador tasador,
			LocalDateTime fechaCreacion, Banco banco, String titular, String nombreSolicitante,
			String telefonoSolicitante, String nombreContacto, String telefonoContacto, String calle, int nroPuerta,
			int unidad, String esquina, String localidad, Departamento departamento, long padron, String tipoDeTrabajo,
			String recaudos, LocalDateTime fechaAntecedente, Usuario tasadorAntecedente, String oficialBanco,
			String sucursal, String observacion, Informe informe) {
		super();
		this.id = id;
		this.creadorSecretaria = creadorSecretaria;
		this.fechaHoraInspeccion = fechaHoraInspeccion;
		this.tasador = tasador;
		this.fechaCreacion = fechaCreacion;
		this.banco = banco;
		this.titular = titular;
		this.nombreSolicitante = nombreSolicitante;
		this.telefonoSolicitante = telefonoSolicitante;
		this.nombreContacto = nombreContacto;
		this.telefonoContacto = telefonoContacto;
		this.calle = calle;
		this.nroPuerta = nroPuerta;
		this.unidad = unidad;
		this.esquina = esquina;
		this.localidad = localidad;
		this.departamento = departamento;
		this.padron = padron;
		this.tipoDeTrabajo = tipoDeTrabajo;
		this.recaudos = recaudos;
		this.fechaAntecedente = fechaAntecedente;
		this.tasadorAntecedente = tasadorAntecedente;
		this.oficialBanco = oficialBanco;
		this.sucursal = sucursal;
		this.observacion = observacion;
//		this.inspeccion = inspeccion;
//		this.informe = informe;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Secretaria getCreadorSecretaria() {
		return creadorSecretaria;
	}

	public void setCreadorSecretaria(Secretaria creadorSecretaria) {
		this.creadorSecretaria = creadorSecretaria;
	}

	public LocalDateTime getFechaHoraInspeccion() {
		return fechaHoraInspeccion;
	}

	public void setFechaHoraInspeccion(LocalDateTime fechaHoraInspeccion) {
		this.fechaHoraInspeccion = fechaHoraInspeccion;
	}

	public Tasador getTasador() {
		return tasador;
	}

	public void setTasador(Tasador tasador) {
		this.tasador = tasador;
	}

	public LocalDateTime getFechaCreacion() {
		return fechaCreacion;
	}

	public void setFechaCreacion(LocalDateTime fechaCreacion) {
		this.fechaCreacion = fechaCreacion;
	}

	public Banco getBanco() {
		return banco;
	}

	public void setBanco(Banco banco) {
		this.banco = banco;
	}

	public String getTitular() {
		return titular;
	}

	public void setTitular(String titular) {
		this.titular = titular;
	}

	public String getNombreSolicitante() {
		return nombreSolicitante;
	}

	public void setNombreSolicitante(String nombreSolicitante) {
		this.nombreSolicitante = nombreSolicitante;
	}

	public String getTelefonoSolicitante() {
		return telefonoSolicitante;
	}

	public void setTelefonoSolicitante(String telefonoSolicitante) {
		this.telefonoSolicitante = telefonoSolicitante;
	}

	public String getNombreContacto() {
		return nombreContacto;
	}

	public void setNombreContacto(String nombreContacto) {
		this.nombreContacto = nombreContacto;
	}

	public String getTelefonoContacto() {
		return telefonoContacto;
	}

	public void setTelefonoContacto(String telefonoContacto) {
		this.telefonoContacto = telefonoContacto;
	}

	public String getCalle() {
		return calle;
	}

	public void setCalle(String calle) {
		this.calle = calle;
	}

	public int getNroPuerta() {
		return nroPuerta;
	}

	public void setNroPuerta(int nroPuerta) {
		this.nroPuerta = nroPuerta;
	}

	public int getUnidad() {
		return unidad;
	}

	public void setUnidad(int unidad) {
		this.unidad = unidad;
	}

	public String getEsquina() {
		return esquina;
	}

	public void setEsquina(String esquina) {
		this.esquina = esquina;
	}

	public String getLocalidad() {
		return localidad;
	}

	public void setLocalidad(String localidad) {
		this.localidad = localidad;
	}

	public Departamento getDepartamento() {
		return departamento;
	}

	public void setDepartamento(Departamento departamento) {
		this.departamento = departamento;
	}

	public long getPadron() {
		return padron;
	}

	public void setPadron(long padron) {
		this.padron = padron;
	}

	public String getTipoDeTrabajo() {
		return tipoDeTrabajo;
	}

	public void setTipoDeTrabajo(String tipoDeTrabajo) {
		this.tipoDeTrabajo = tipoDeTrabajo;
	}

	public String getRecaudos() {
		return recaudos;
	}

	public void setRecaudos(String recaudos) {
		this.recaudos = recaudos;
	}

	public LocalDateTime getFechaAntecedente() {
		return fechaAntecedente;
	}

	public void setFechaAntecedente(LocalDateTime fechaAntecedente) {
		this.fechaAntecedente = fechaAntecedente;
	}

	public Usuario getTasadorAntecedente() {
		return tasadorAntecedente;
	}

	public void setTasadorAntecedente(Usuario tasadorAntecedente) {
		this.tasadorAntecedente = tasadorAntecedente;
	}

	public String getOficialBanco() {
		return oficialBanco;
	}

	public void setOficialBanco(String oficialBanco) {
		this.oficialBanco = oficialBanco;
	}

	public String getSucursal() {
		return sucursal;
	}

	public void setSucursal(String sucursal) {
		this.sucursal = sucursal;
	}

	public String getObservacion() {
		return observacion;
	}

	public void setObservacion(String observacion) {
		this.observacion = observacion;
	}

//	public Inspeccion getInspeccion() {
//		return inspeccion;
//	}
//
//	public void setInspeccion(Inspeccion inspeccion) {
//		this.inspeccion = inspeccion;
//	}

//	public Informe getInforme() {
//		return informe;
//	}
//
//	public void setInforme(Informe informe) {
//		this.informe = informe;
//	}
    

}
