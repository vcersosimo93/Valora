package com.valora;

import com.valora.model.*;
import com.valora.services.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;


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

	@Autowired
	private IOrdenService iOrdenService;

	@Autowired
	private IBancoService iBancoService;

	@Autowired
	private IDepartamentoService iDepartamentoService;


	public static void main(String[] args) {
		SpringApplication.run(ValoraApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {

		//Banco
		Banco banco = new Banco();
		banco.setNombre("Itau");
	    iBancoService.save(banco);

		//Departamento
		Departamento departamento = new Departamento();
		departamento.setNombre("Montevideo");
		iDepartamentoService.save(departamento);


		// Secretaria
		Secretaria secretaria = new Secretaria();
		secretaria.setNombre("Gabriela");
		secretaria.setUsername("gabriela");
		secretaria.setPassword("gabriela");
		secretaria.setTipoUsuario(TipoUsuario.SECRETARIA);
		isecretariaService.save(secretaria);

		// Tasador
		Tasador tasador = new Tasador();
		tasador.setNombre("Juan");
		tasador.setUsername("juan");
		tasador.setPassword("juan");
		tasador.setTipoUsuario(TipoUsuario.TASADOR);
		tasador.setTipoTasador(TipoTasador.TASADOR);
		itasadorService.save(tasador);

		// Orden
		LocalDateTime fecha;
		LocalDateTime fecha2;

		fecha = LocalDateTime.now();
		fecha2 = LocalDateTime.of(2021, 10, 10, 10, 10, 10);
		Orden orden = new Orden();

		orden.setSecretaria(secretaria);
		orden.setTasadorInspeccion(tasador);
		orden.setTasadorAntecedente(tasador);
		orden.setBanco(banco);
		orden.setDepartamento(departamento);
		orden.setFechaCreacion(fecha);
		orden.setFechaHoraInspeccion(fecha);
		orden.setFechaSolicitud(fecha);
		orden.setNombreSolicitante("Itau");
		orden.setTelefonoSolicitante(123456789);
		orden.setNombreContacto("Juan");
		orden.setTelefonoContacto(123456789);
		orden.setCalle("Calle Falsa 123");
		orden.setNroPuerta(123);
		orden.setUnidad(1);
		orden.setEsquina("Esquina Falsa");
		orden.setLocalidad("Springfield");
		orden.setPadron(123456);
		orden.setTasacion(true);
		orden.setRetasacion(true);
		orden.setEnInspeccion(true);
		orden.setEnEstudio(true);
		orden.setFechaAntecedente(fecha2);
		orden.setOficialBanco("Oficial Banco Falso");
		orden.setSucursal("Sucursal Falsa");
		orden.setObservacion("Observaciones Falsas");
		iOrdenService.save(orden);


		List<Orden> listaOrdenes = new ArrayList<>();
		listaOrdenes.add(orden);
		banco.setOrdenes(listaOrdenes);

	}

}
