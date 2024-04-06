package com.valora;

import com.valora.model.*;
import com.valora.services.*;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;


@SpringBootApplication
//@ComponentScan(basePackages = "com.valora")
public class ValoraApplication implements CommandLineRunner{
	
	@Autowired
    private ISecretariaService isecretariaService;

	@Autowired
	private IInspeccionService iinspeccionService;

	@Autowired
	private ILocalService ilocalService;
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
	@Transactional
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
		LocalDate fechaDate;
		LocalTime horaDate;
		LocalDateTime fechaDateTime;

		fechaDate = LocalDate.now();
		horaDate = LocalTime.now();
		fechaDateTime = LocalDateTime.of(2021, 10, 10, 10, 10, 10);
		Orden orden = new Orden();

		orden.setSecretaria(secretaria);
		orden.setTasadorInspeccion(tasador);
		orden.setTasadorAntecedenteId(tasador.getId());
		orden.setBanco(banco);
		orden.setDepartamento(departamento);
		orden.setFechaCreacion(fechaDate);
		orden.setFechaInspeccion(fechaDate);
		orden.setHoraInspeccion(horaDate);
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
		orden.setFechaAntecedente(fechaDate);
		orden.setOficialBanco("Oficial Banco Falso");
		orden.setSucursal("Sucursal Falsa");
		orden.setObservacion("Observaciones Falsas");
		iOrdenService.save(orden);


		List<Orden> listaOrdenes = new ArrayList<>();
		listaOrdenes.add(orden);
		banco.setOrdenes(listaOrdenes);
		secretaria.setOrdenes(listaOrdenes);
		tasador.setOrdenesInspeccion(listaOrdenes);



		//Local
		Inspeccion inspeccion = new Inspeccion(); // Debes crear una instancia de Inspeccion para asignarla al Local


		inspeccion.setFechaCreacion(fechaDate);
		inspeccion.setTasador(tasador);
		inspeccion.setOrden(orden);
		inspeccion.setBanco(banco);
		inspeccion.setSolicitante("Juan Perez");
		inspeccion.setDepartamento(departamento);
		inspeccion.setCalle("Calle Principal");
		inspeccion.setEntreCalles("Calle Secundaria");
		inspeccion.setLocalidad("Ciudad Capital");
		inspeccion.setNroPuerta(123);
		inspeccion.setUnidad(1);
		inspeccion.setSeccionalJudicial(2);
		inspeccion.setPiso(2);
		inspeccion.setEsquina("Esquina Sur");
		inspeccion.setPadron(456);
		inspeccion.setGarage(true);
		inspeccion.setClasificacion("Residencial");
		inspeccion.setCaractResidencial(true);
		inspeccion.setCaractComercial(false);
		inspeccion.setCaractIndustrial(false);
		inspeccion.setCaractOtros(false);
		inspeccion.setEdificacion("Edificio");
		inspeccion.setDensidad("Alta");
		inspeccion.setPavimento("Asfalto");
		inspeccion.setOse(true);
		inspeccion.setPozo(false);
		inspeccion.setColector(true);
		inspeccion.setUte(true);
		inspeccion.setAntel(true);
		inspeccion.setCarpinteriaComun(true);
		inspeccion.setCarpinteriaAluminio(false);
		inspeccion.setCarpinteriapvc(false);
		inspeccion.setCarpinteriaMadera(false);
		inspeccion.setCarpinteriaOtros(false);
		inspeccion.setCerramientosCortinas(true);
		inspeccion.setCerramientosPostigos(false);
		inspeccion.setCerramientosCelosias(false);
		inspeccion.setCerramientosRejas(false);
		inspeccion.setCerramientosOtros(false);
		inspeccion.setInstalacionesAguaBanoCaliente(true);
		inspeccion.setInstalacionesAguaBanoFria(false);
		inspeccion.setInstalacionesAguaCocinaFria(false);
		inspeccion.setInstalacionesAguaCocinaCaliente(true);
		inspeccion.setInstalacionesElectricidadEmbutida(true);
		inspeccion.setInstalacionesElectricidadExterior(false);
		inspeccion.setInstalacionesElectricidadMixta(false);
		inspeccion.setInstalacionesElectricidadInstGas(false);
		inspeccion.setInstalacionesSanitariaColector(true);
		inspeccion.setInstalacionesSanitariaCamSeptica(false);
		inspeccion.setInstalacionesSanitariaPozoNegro(false);
		inspeccion.setInstalacionesTermicasLosaRad(true);
		inspeccion.setInstalacionesTermicasRadiadores(false);
		inspeccion.setInstalacionesTermicasPanelElect(false);
		inspeccion.setInstalacionesTermicasAireAcond(true);
		inspeccion.setInstalacionesTermicasOtros(false);
		inspeccion.setCategoriaModesta(true);
		inspeccion.setCategoriaEconomica(false);
		inspeccion.setCategoriaBuena(false);
		inspeccion.setCategoriaConfortable(true);
		inspeccion.setCategoriaMuyConfortable(false);
		inspeccion.setConservacionMalo(false);
		inspeccion.setConservacionRegular(false);
		inspeccion.setConservacionBueno(true);
		inspeccion.setConservacionMuyBueno(false);
		inspeccion.setConservacionNuevo(true);
		inspeccion.setOcupacionActual("Residencial");
		inspeccion.setOcupacionEdad(5);
		inspeccion.setTipo("Departamento");
		inspeccion.setEdificioCantidadPisos(5);
		inspeccion.setEdificioAptoPisos(10);
		inspeccion.setEdificioAscensores(true);
		inspeccion.setEdificioPorteroElectrico(true);
		inspeccion.setPropiedadComunM2(200.5);
		inspeccion.setSuperficieCubierta(150.8);
		inspeccion.setSuperficieSemiCubierta(50.7);
		inspeccion.setPropiedadHorizontalM2(100.3);
		inspeccion.setBienesPropios(50.2);
		inspeccion.setBienesComunes(150.3);
		inspeccion.setObservaciones("Sin observaciones");

		iinspeccionService.save(inspeccion);


		Local local = new Local();
		local.setInspeccion(inspeccion);
		local.setEstructuraHarmado(true);
		local.setEstructuraMuroPort(true);
		local.setEstructuraMixta(true);
		local.setEstructuraMetalicos(true);
		local.setEstructuraOtros(true);
		local.setEstructuraAno(2020);
		local.setCubiertaHarmado(true);
		local.setCubiertaLiviana(true);
		local.setCubiertaCcielorraso(true);
		local.setCubiertaBovedilla(true);
		local.setCubiertaTejas(true);
		local.setCubiertaPorteria(true);
		local.setCubiertaIsopanel(true);
		local.setMurosCeramicos(true);
		local.setMurosBloques(true);
		local.setMurosMadera(true);
		local.setMurosPiedra(true);
		local.setMurosChapa(true);
		local.setMurosYeso(true);
		local.setMurosIsopanel(true);
		local.setPisosParquet(true);
		local.setPisosTabla(true);
		local.setPisosMonolÃ­tico(true);
		local.setPisosCalcareas(true);
		local.setPisosCeramico(true);
		local.setPisosPortland(true);
		local.setPisosMoquette(true);
		local.setRevestimientosAzulBcoB(true);
		local.setRevestimientosAzulBcoC(true);
		local.setRevestimientosAzulColorB(true);
		local.setRevestimientosAzulColorC(true);
		local.setRevestimientosCeramicaB(true);
		local.setRevestimientosCeramicaC(true);
		local.setRevestimientosPorcelanatoB(true);
		local.setRevestimientosPorcelanatoC(true);
		local.setRevestimientosEstucoB(true);
		local.setRevestimientosEstucoC(true);
		local.setRevestimientosOtrosB(true);
		local.setRevestimientosOtrosC(true);
		local.setTerminacionRevoque(true);
		local.setTerminacionEnduido(true);
		local.setTerminacionCal(true);
		local.setTerminacionPintAgua(true);
		local.setTerminacionPintAceite(true);
		local.setTerminacionEmpapelado(true);
		local.setTerminacionLambriz(true);


		inspeccion.addLocales(local);

		ilocalService.save(local);




		tasador.addInspeccion(inspeccion);
		orden.setInspeccion(inspeccion);
		banco.addInspeccion(inspeccion);
		departamento.addInspeccion(inspeccion);



	}




}
