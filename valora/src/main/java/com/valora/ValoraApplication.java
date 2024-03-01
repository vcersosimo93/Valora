package com.valora;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

import com.valora.model.Administrador;
import com.valora.model.Gerencia;
import com.valora.model.Secretaria;
import com.valora.model.Tasador;
import com.valora.model.TipoTasador;
import com.valora.model.TipoUsuario;
import com.valora.services.IAdministradorService;
import com.valora.services.IGerenciaService;
import com.valora.services.ISecretariaService;
import com.valora.services.ITasadorService;


@SpringBootApplication
@ComponentScan(basePackages = "com.valora")
public class ValoraApplication implements CommandLineRunner{
	
	@Autowired
    private ISecretariaService isecretariaService;
	@Autowired
    private ITasadorService itasadorService;
	@Autowired
    private IAdministradorService iadministradorService;
	@Autowired
    private IGerenciaService igerenciaService;
	
	public static void main(String[] args) {
		SpringApplication.run(ValoraApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {



	}

}
