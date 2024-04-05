package com.valora.model;

import java.io.Serializable;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;

import com.fasterxml.jackson.annotation.*;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "tb_orden")
@Data
public class Orden {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id_orden")
	private int id;

	@ManyToOne
	@JoinColumn(name = "secretaria_id")
	@JsonIgnore
	private Secretaria secretaria;

	@ManyToOne
	@JoinColumn(name = "tasador_inspeccion_id")
	@JsonIgnore
	private Tasador tasadorInspeccion;


	@JoinColumn(name = "tasador_antecedente_id")
	private Long tasadorAntecedenteId;

	@ManyToOne
	@JoinColumn(name = "banco_id")
	@JsonIgnore
	private Banco banco;

	//	@Column(name = "departamento")
	@ManyToOne
	@JoinColumn(name = "departamento_id")
	@JsonIgnore
	private Departamento departamento;

	@Column(name = "fecha_creacion")
	private LocalDate fechaCreacion;

	@Column(name = "fecha_inspeccion")
	private LocalDate fechaInspeccion;

	@Column(name = "hora_inspeccion")
	private LocalTime horaInspeccion;

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
	private LocalDate fechaAntecedente;

	@Column(name = "oficial_banco")
	private String oficialBanco;

	@Column(name = "sucursal")
	private String sucursal;

	@Column(name = "observacion")
	private String observacion;

	@OneToOne
	@JoinColumn(name = "inspeccion_id")
	@JsonIgnore
	private Inspeccion inspeccion;

	public Orden() {

	}

	public Orden(int id, Secretaria creador, Tasador tasadorInspeccion, Long tasadorAntecedenteId, Banco banco, Departamento departamento,
			LocalDate fechaCreacion, LocalDate fechaInspeccion, LocalTime horaInspeccion,
			String nombreSolicitante, long telefonoSolicitante, String nombreContacto, long telefonoContacto, String calle,
			int nroPuerta, int unidad, String esquina, String localidad, long padron, boolean tasacion,
			boolean retasacion, boolean enInspeccion, boolean enEstudio, LocalDate fechaAntecedente,
			String oficialBanco, String sucursal, String observacion, Inspeccion inspeccion) {
		super();
		this.id = id;
		this.secretaria = creador;
		this.tasadorInspeccion = tasadorInspeccion;
		this.tasadorAntecedenteId = tasadorAntecedenteId;
		this.banco = banco;
		this.departamento = departamento;
		this.fechaCreacion = fechaCreacion;
		this.fechaInspeccion = fechaInspeccion;
		this.horaInspeccion = horaInspeccion;
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
		this.inspeccion = inspeccion;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	@JsonIgnore
	public Secretaria getSecretaria() {
		return secretaria;
	}
	@JsonProperty
	public void setSecretaria(Secretaria secretaria) {
		this.secretaria = secretaria;
	}

	@JsonIgnore
	public Tasador getTasadorInspeccion() {
		return tasadorInspeccion;
	}

	@JsonProperty
	public void setTasadorInspeccion(Tasador tasadorInspeccion) {
		this.tasadorInspeccion = tasadorInspeccion;
	}


	public Long getTasadorAntecedenteId() {
		return tasadorAntecedenteId;
	}

	public void setTasadorAntecedenteId(Long tasadorAntecedenteId) {
		this.tasadorAntecedenteId = tasadorAntecedenteId;
	}

	@JsonIgnore
	public Banco getBanco() {
		return banco;
	}

	@JsonProperty
	public void setBanco(Banco banco) {
		this.banco = banco;
	}

	@JsonIgnore
	public Departamento getDepartamento() {
		return departamento;
	}

	@JsonProperty
	public void setDepartamento(Departamento departamento) {
		this.departamento = departamento;
	}

	public LocalDate getFechaCreacion() {
		return fechaCreacion;
	}

	public void setFechaCreacion(LocalDate fechaCreacion) {
		this.fechaCreacion = fechaCreacion;
	}

	public LocalDate getFechaInspeccion() {
		return fechaInspeccion;
	}

	public void setFechaInspeccion(LocalDate fechaInspeccion) {
		this.fechaInspeccion = fechaInspeccion;
	}

	public LocalTime getHoraInspeccion() {
		return horaInspeccion;
	}

	public void setHoraInspeccion(LocalTime horaInspeccion) {
		this.horaInspeccion = horaInspeccion;
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

	public LocalDate getFechaAntecedente() {
		return fechaAntecedente;
	}

	public void setFechaAntecedente(LocalDate fechaAntecedente) {
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

	@JsonIgnore
	public Inspeccion getInspeccion() {
		return inspeccion;
	}
	@JsonProperty
	public void setInspeccion(Inspeccion inspeccion) {
		this.inspeccion = inspeccion;
	}


}
