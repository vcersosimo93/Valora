package com.valora.model;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Inheritance;
import jakarta.persistence.InheritanceType;
import jakarta.persistence.TableGenerator;

@Entity
@Inheritance(strategy = InheritanceType.JOINED)
@TableGenerator(name = "usuario_gen", table = "ID_GEN", pkColumnName = "GEN_NAME", valueColumnName = "GEN_VAL", allocationSize = 1)
public abstract class Usuario implements Serializable {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "nombre", nullable = true)
    private String nombre;

    @Column(name = "username", nullable = true)
    private String username;
    
    @Column(name = "password", nullable = true)
    private String password;
    
    @Enumerated(EnumType.STRING)
    @Column(name = "tipo_usuario", nullable = true)
    private TipoUsuario tipoUsuario;


	public Usuario() {
		// Constructor predeterminado
	}


	public Usuario(Long id, String nombre, String username, String password, TipoUsuario tipoUsuario) {
		super();
		this.id = id;
		this.nombre = nombre;
		this.username = username;
		this.password = password;
		this.tipoUsuario = tipoUsuario;
	}


//	@JsonCreator
//	public Usuario(@JsonProperty("nombre") String nombre, @JsonProperty("username") String username,
//				   @JsonProperty("password") String password) {
//		this.nombre = nombre;
//		this.username = username;
//		this.password = password;
//	}

	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}


	public String getNombre() {
		return nombre;
	}


	public void setNombre(String nombre) {
		this.nombre = nombre;
	}


	public String getUsername() {
		return username;
	}


	public void setUsername(String username) {
		this.username = username;
	}


	public String getPassword() {
		return password;
	}


	public void setPassword(String password) {
		this.password = password;
	}


	public TipoUsuario getTipoUsuario() {
		return tipoUsuario;
	}


	public void setTipoUsuario(TipoUsuario tipoUsuario) {
		this.tipoUsuario = tipoUsuario;
	}

	
	
	


	


}
