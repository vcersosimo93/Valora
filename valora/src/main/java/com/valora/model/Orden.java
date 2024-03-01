package com.valora.model;

import java.time.LocalDateTime;

import jakarta.persistence.*;

@Entity
@Table(name = "tb_orden")
public class Orden {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id_orden")
	private int id;

	@ManyToOne
	@JoinColumn(name = "secretaria_id")
	private Secretaria secretaria;

	@ManyToOne
	@JoinColumn(name = "tasador_inspeccion_id")
	private Tasador tasadorInspeccion;

	@ManyToOne
	@JoinColumn(name = "tasador_antecedente_id")
	private Tasador tasadorAntecedente;

//	@Column(name = "banco")
	@ManyToOne
	private Banco banco;

	//	@Column(name = "departamento")
	@ManyToOne
	private Departamento departamento;

	@Column(name = "fecha_creacion")
	private LocalDateTime fechaCreacion;

	@Column(name = "fecha_hora_inspeccion")
	private LocalDateTime fechaHoraInspeccion;

	@Column(name = "fecha_solicitud")
	private LocalDateTime fechaSolicitud;

	@Column(name = "nombre_solicitante")
	private String nombreSolicitante;

	@Column(name = "telefono_solicitante")
	private long telefonoSolicitante;

	@Column(name = "nombre_contacto")
	private String nombreContacto;

	@Column(name = "telefono_contacto")
	private long telefonoContacto;

	@Column(name = "calle")
	private String calle;

	@Column(name = "nro_puerta")
	private int nroPuerta;

	@Column(name = "unidad")
	private int unidad;

	@Column(name = "esquina")
	private String esquina;

	@Column(name = "localidad")
	private String localidad;

	@Column(name = "padron")
	private long padron;

	@Column(name = "tasacion")
	private boolean tasacion;

	@Column(name = "retasacion")
	private boolean retasacion;

	@Column(name = "en_inspeccion")
	private boolean enInspeccion;

	@Column(name = "en_estudio")
	private boolean enEstudio;

	@Column(name = "fecha_antecedente")
	private LocalDateTime fechaAntecedente;

	@Column(name = "oficial_banco")
	private String oficialBanco;

	@Column(name = "sucursal")
	private String sucursal;

	@Column(name = "observacion")
	private String observacion;

	public Orden() {

	}

	public Orden(int id, Secretaria creador, Tasador tasadorInspeccion, Tasador tasadorAntecedente, Banco banco, Departamento departamento,
			LocalDateTime fechaCreacion, LocalDateTime fechaHoraInspeccion, LocalDateTime fechaSolicitud,
			String nombreSolicitante, long telefonoSolicitante, String nombreContacto, long telefonoContacto, String calle,
			int nroPuerta, int unidad, String esquina, String localidad, long padron, boolean tasacion,
			boolean retasacion, boolean enInspeccion, boolean enEstudio, LocalDateTime fechaAntecedente,
			String oficialBanco, String sucursal, String observacion) {
		super();
		this.id = id;
		this.secretaria = creador;
		this.tasadorInspeccion = tasadorInspeccion;
		this.tasadorAntecedente = tasadorAntecedente;
		this.banco = banco;
		this.departamento = departamento;
		this.fechaCreacion = fechaCreacion;
		this.fechaHoraInspeccion = fechaHoraInspeccion;
		this.fechaSolicitud = fechaSolicitud;
		this.nombreSolicitante = nombreSolicitante;
		this.telefonoSolicitante = telefonoSolicitante;
		this.nombreContacto = nombreContacto;
		this.telefonoContacto = telefonoContacto;
		this.calle = calle;
		this.nroPuerta = nroPuerta;
		this.unidad = unidad;
		this.esquina = esquina;
		this.localidad = localidad;
		this.padron = padron;
		this.tasacion = tasacion;
		this.retasacion = retasacion;
		this.enInspeccion = enInspeccion;
		this.enEstudio = enEstudio;
		this.fechaAntecedente = fechaAntecedente;
		this.oficialBanco = oficialBanco;
		this.sucursal = sucursal;
		this.observacion = observacion;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Secretaria getSecretaria() {
		return secretaria;
	}

	public void setSecretaria(Secretaria secretaria) {
		this.secretaria = secretaria;
	}

	public Tasador getTasadorInspeccion() {
		return tasadorInspeccion;
	}

	public void setTasadorInspeccion(Tasador tasadorInspeccion) {
		this.tasadorInspeccion = tasadorInspeccion;
	}

	public Tasador getTasadorAntecedente() {
		return tasadorAntecedente;
	}

	public void setTasadorAntecedente(Tasador tasadorAntecedente) {
		this.tasadorAntecedente = tasadorAntecedente;
	}

	public Banco getBanco() {
		return banco;
	}

	public void setBanco(Banco banco) {
		this.banco = banco;
	}

	public Departamento getDepartamento() {
		return departamento;
	}

	public void setDepartamento(Departamento departamento) {
		this.departamento = departamento;
	}

	public LocalDateTime getFechaCreacion() {
		return fechaCreacion;
	}

	public void setFechaCreacion(LocalDateTime fechaCreacion) {
		this.fechaCreacion = fechaCreacion;
	}

	public LocalDateTime getFechaHoraInspeccion() {
		return fechaHoraInspeccion;
	}

	public void setFechaHoraInspeccion(LocalDateTime fechaHoraInspeccion) {
		this.fechaHoraInspeccion = fechaHoraInspeccion;
	}

	public LocalDateTime getFechaSolicitud() {
		return fechaSolicitud;
	}

	public void setFechaSolicitud(LocalDateTime fechaSolicitud) {
		this.fechaSolicitud = fechaSolicitud;
	}

	public String getNombreSolicitante() {
		return nombreSolicitante;
	}

	public void setNombreSolicitante(String nombreSolicitante) {
		this.nombreSolicitante = nombreSolicitante;
	}

	public long getTelefonoSolicitante() {
		return telefonoSolicitante;
	}

	public void setTelefonoSolicitante(long telefonoSolicitante) {
		this.telefonoSolicitante = telefonoSolicitante;
	}

	public String getNombreContacto() {
		return nombreContacto;
	}

	public void setNombreContacto(String nombreContacto) {
		this.nombreContacto = nombreContacto;
	}

	public long getTelefonoContacto() {
		return telefonoContacto;
	}

	public void setTelefonoContacto(long telefonoContacto) {
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

	public long getPadron() {
		return padron;
	}

	public void setPadron(long padron) {
		this.padron = padron;
	}

	public boolean isTasacion() {
		return tasacion;
	}

	public void setTasacion(boolean tasacion) {
		this.tasacion = tasacion;
	}

	public boolean isRetasacion() {
		return retasacion;
	}

	public void setRetasacion(boolean retasacion) {
		this.retasacion = retasacion;
	}

	public boolean isEnInspeccion() {
		return enInspeccion;
	}

	public void setEnInspeccion(boolean enInspeccion) {
		this.enInspeccion = enInspeccion;
	}

	public boolean isEnEstudio() {
		return enEstudio;
	}

	public void setEnEstudio(boolean enEstudio) {
		this.enEstudio = enEstudio;
	}

	public LocalDateTime getFechaAntecedente() {
		return fechaAntecedente;
	}

	public void setFechaAntecedente(LocalDateTime fechaAntecedente) {
		this.fechaAntecedente = fechaAntecedente;
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

}
