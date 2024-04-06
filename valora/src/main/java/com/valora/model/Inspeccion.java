package com.valora.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.time.LocalDate;
import java.util.ArrayList;

@Entity
@Table(name = "inspeccion")
public class Inspeccion {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private LocalDate fechaCreacion;

    @ManyToOne
    @JoinColumn(name = "tasador_id")
    @JsonIgnore
    private Tasador tasador;

    @OneToOne(mappedBy = "inspeccion", cascade = CascadeType.ALL)
    private Orden orden;

    @ManyToOne
    @JoinColumn(name = "banco_id")
    @JsonIgnore
    private Banco banco;

    private String solicitante;

    @ManyToOne
    @JoinColumn(name = "inspeccion_id")
    @JsonIgnore
    private Departamento departamento;

    private String calle;

    private String entreCalles;

    private String localidad;

    private int nroPuerta;

    private int unidad;

    private int seccionalJudicial;

    private int piso;

    private String esquina;

    private int padron;

    private boolean garage;

    private String clasificacion;

    private boolean caractResidencial;

    private boolean caractComercial;

    private boolean caractIndustrial;

    private boolean caractOtros;

    private String edificacion;

    private String densidad;

    private String pavimento;

    private boolean ose;

    private boolean pozo;

    private boolean colector;

    private boolean ute;

    private boolean antel;

    private boolean carpinteriaComun;

    private boolean carpinteriaAluminio;

    private boolean carpinteriapvc;

    private boolean carpinteriaMadera;

    private boolean carpinteriaOtros;

    private boolean cerramientosCortinas;

    private boolean cerramientosPostigos;

    private boolean cerramientosCelosias;

    private boolean cerramientosRejas;

    private boolean cerramientosOtros;

    private boolean instalacionesAguaBanoCaliente;

    private boolean instalacionesAguaBanoFria;

    private boolean instalacionesAguaCocinaFria;

    private boolean instalacionesAguaCocinaCaliente;

    private boolean instalacionesElectricidadEmbutida;

    private boolean instalacionesElectricidadExterior;

    private boolean instalacionesElectricidadMixta;

    private boolean instalacionesElectricidadInstGas;

    private boolean instalacionesSanitariaColector;

    private boolean instalacionesSanitariaCamSeptica;

    private boolean instalacionesSanitariaPozoNegro;

    private boolean instalacionesTermicasLosaRad;

    private boolean instalacionesTermicasRadiadores;

    private boolean instalacionesTermicasPanelElect;

    private boolean instalacionesTermicasAireAcond;

    private boolean instalacionesTermicasOtros;

    private boolean categoriaModesta;

    private boolean categoriaEconomica;

    private boolean categoriaBuena;

    private boolean categoriaConfortable;

    private boolean categoriaMuyConfortable;

    private boolean conservacionMalo;

    private boolean conservacionRegular;

    private boolean conservacionBueno;

    private boolean conservacionMuyBueno;

    private boolean conservacionNuevo;

    private String ocupacionActual;

    private int ocupacionEdad;

    private String tipo;

    private int edificioCantidadPisos;

    private int edificioAptoPisos;

    private boolean edificioAscensores;

    private boolean edificioPorteroElectrico;

    private double propiedadComunM2;

    private double superficieCubierta;

    private double superficieSemiCubierta;

    private double propiedadHorizontalM2;

    private double bienesPropios;

    private double bienesComunes;

    private String observaciones;


    @OneToMany(mappedBy = "inspeccion", cascade = CascadeType.ALL, orphanRemoval = true)
    private ArrayList<Local> locales;


    public Inspeccion() {
    }

    public Inspeccion(int id, LocalDate fechaCreacion, Tasador tasador, Orden orden, Banco banco, String solicitante, Departamento departamento, String calle,
                      String entreCalles, String localidad, int nroPuerta, int unidad, int seccionalJudicial, int piso,
                      String esquina, int padron, boolean garage, String clasificacion, boolean caractResidencial,
                      boolean caractComercial, boolean caractIndustrial, boolean caractOtros, String edificacion,
                      String densidad, String pavimento, boolean ose, boolean pozo, boolean colector, boolean ute,
                      boolean antel, boolean carpinteriaComun, boolean carpinteriaAluminio, boolean carpinteriapvc,
                      boolean carpinteriaMadera, boolean carpinteriaOtros, boolean cerramientosCortinas, boolean cerramientosPostigos,
                      boolean cerramientosCelosias, boolean cerramientosRejas, boolean cerramientosOtros, boolean instalacionesAguaBanoCaliente,
                      boolean instalacionesAguaBanoFria, boolean instalacionesAguaCocinaFria, boolean instalacionesAguaCocinaCaliente,
                      boolean instalacionesElectricidadEmbutida, boolean instalacionesElectricidadExterior, boolean instalacionesElectricidadMixta,
                      boolean instalacionesElectricidadInstGas, boolean instalacionesSanitariaColector, boolean instalacionesSanitariaCamSeptica,
                      boolean instalacionesSanitariaPozoNegro, boolean instalacionesTermicasLosaRad, boolean instalacionesTermicasRadiadores,
                      boolean instalacionesTermicasPanelElect, boolean instalacionesTermicasAireAcond, boolean instalacionesTermicasOtros,
                      boolean categoriaModesta, boolean categoriaEconomica, boolean categoriaBuena, boolean categoriaConfortable, boolean categoriaMuyConfortable,
                      boolean conservacionMalo, boolean conservacionRegular, boolean conservacionBueno, boolean conservacionMuyBueno, boolean conservacionNuevo,
                      String ocupacionActual, int ocupacionEdad, String tipo, int edificioCantidadPisos, int edificioAptoPisos, boolean edificioAscensores,
                      boolean edificioPorteroElectrico, double propiedadComunM2, double superficieCubierta, double superficieSemiCubierta, double propiedadHorizontalM2,
                      double bienesPropios, double bienesComunes, String observaciones, ArrayList<Local> locales) {
        this.id = id;
        this.fechaCreacion = fechaCreacion;
        this.tasador = tasador;
        this.orden = orden;
        this.banco = banco;
        this.solicitante = solicitante;
        this.departamento = departamento;
        this.calle = calle;
        this.entreCalles = entreCalles;
        this.localidad = localidad;
        this.nroPuerta = nroPuerta;
        this.unidad = unidad;
        this.seccionalJudicial = seccionalJudicial;
        this.piso = piso;
        this.esquina = esquina;
        this.padron = padron;
        this.garage = garage;
        this.clasificacion = clasificacion;
        this.caractResidencial = caractResidencial;
        this.caractComercial = caractComercial;
        this.caractIndustrial = caractIndustrial;
        this.caractOtros = caractOtros;
        this.edificacion = edificacion;
        this.densidad = densidad;
        this.pavimento = pavimento;
        this.ose = ose;
        this.pozo = pozo;
        this.colector = colector;
        this.ute = ute;
        this.antel = antel;
        this.carpinteriaComun = carpinteriaComun;
        this.carpinteriaAluminio = carpinteriaAluminio;
        this.carpinteriapvc = carpinteriapvc;
        this.carpinteriaMadera = carpinteriaMadera;
        this.carpinteriaOtros = carpinteriaOtros;
        this.cerramientosCortinas = cerramientosCortinas;
        this.cerramientosPostigos = cerramientosPostigos;
        this.cerramientosCelosias = cerramientosCelosias;
        this.cerramientosRejas = cerramientosRejas;
        this.cerramientosOtros = cerramientosOtros;
        this.instalacionesAguaBanoCaliente = instalacionesAguaBanoCaliente;
        this.instalacionesAguaBanoFria = instalacionesAguaBanoFria;
        this.instalacionesAguaCocinaFria = instalacionesAguaCocinaFria;
        this.instalacionesAguaCocinaCaliente = instalacionesAguaCocinaCaliente;
        this.instalacionesElectricidadEmbutida = instalacionesElectricidadEmbutida;
        this.instalacionesElectricidadExterior = instalacionesElectricidadExterior;
        this.instalacionesElectricidadMixta = instalacionesElectricidadMixta;
        this.instalacionesElectricidadInstGas = instalacionesElectricidadInstGas;
        this.instalacionesSanitariaColector = instalacionesSanitariaColector;
        this.instalacionesSanitariaCamSeptica = instalacionesSanitariaCamSeptica;
        this.instalacionesSanitariaPozoNegro = instalacionesSanitariaPozoNegro;
        this.instalacionesTermicasLosaRad = instalacionesTermicasLosaRad;
        this.instalacionesTermicasRadiadores = instalacionesTermicasRadiadores;
        this.instalacionesTermicasPanelElect = instalacionesTermicasPanelElect;
        this.instalacionesTermicasAireAcond = instalacionesTermicasAireAcond;
        this.instalacionesTermicasOtros = instalacionesTermicasOtros;
        this.categoriaModesta = categoriaModesta;
        this.categoriaEconomica = categoriaEconomica;
        this.categoriaBuena = categoriaBuena;
        this.categoriaConfortable = categoriaConfortable;
        this.categoriaMuyConfortable = categoriaMuyConfortable;
        this.conservacionMalo = conservacionMalo;
        this.conservacionRegular = conservacionRegular;
        this.conservacionBueno = conservacionBueno;
        this.conservacionMuyBueno = conservacionMuyBueno;
        this.conservacionNuevo = conservacionNuevo;
        this.ocupacionActual = ocupacionActual;
        this.ocupacionEdad = ocupacionEdad;
        this.tipo = tipo;
        this.edificioCantidadPisos = edificioCantidadPisos;
        this.edificioAptoPisos = edificioAptoPisos;
        this.edificioAscensores = edificioAscensores;
        this.edificioPorteroElectrico = edificioPorteroElectrico;
        this.propiedadComunM2 = propiedadComunM2;
        this.superficieCubierta = superficieCubierta;
        this.superficieSemiCubierta = superficieSemiCubierta;
        this.propiedadHorizontalM2 = propiedadHorizontalM2;
        this.bienesPropios = bienesPropios;
        this.bienesComunes = bienesComunes;
        this.observaciones = observaciones;
        this.locales = locales;
    }


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public LocalDate getFechaCreacion() {
        return fechaCreacion;
    }

    public void setFechaCreacion(LocalDate fechaCreacion) {
        this.fechaCreacion = fechaCreacion;
    }

    public Tasador getTasador() {
        return tasador;
    }

    public void setTasador(Tasador tasador) {
        this.tasador = tasador;
    }

    public Orden getOrden() {
        return orden;
    }

    public void setOrden(Orden orden) {
        this.orden = orden;
    }

    public Banco getBanco() {
        return banco;
    }

    public void setBanco(Banco banco) {
        this.banco = banco;
    }

    public String getSolicitante() {
        return solicitante;
    }

    public void setSolicitante(String solicitante) {
        this.solicitante = solicitante;
    }

    public Departamento getDepartamento() {
        return departamento;
    }

    public void setDepartamento(Departamento departamento) {
        this.departamento = departamento;
    }

    public String getCalle() {
        return calle;
    }

    public void setCalle(String calle) {
        this.calle = calle;
    }

    public String getEntreCalles() {
        return entreCalles;
    }

    public void setEntreCalles(String entreCalles) {
        this.entreCalles = entreCalles;
    }

    public String getLocalidad() {
        return localidad;
    }

    public void setLocalidad(String localidad) {
        this.localidad = localidad;
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

    public int getSeccionalJudicial() {
        return seccionalJudicial;
    }

    public void setSeccionalJudicial(int seccionalJudicial) {
        this.seccionalJudicial = seccionalJudicial;
    }

    public int getPiso() {
        return piso;
    }

    public void setPiso(int piso) {
        this.piso = piso;
    }

    public String getEsquina() {
        return esquina;
    }

    public void setEsquina(String esquina) {
        this.esquina = esquina;
    }

    public int getPadron() {
        return padron;
    }

    public void setPadron(int padron) {
        this.padron = padron;
    }

    public boolean isGarage() {
        return garage;
    }

    public void setGarage(boolean garage) {
        this.garage = garage;
    }

    public String getClasificacion() {
        return clasificacion;
    }

    public void setClasificacion(String clasificacion) {
        this.clasificacion = clasificacion;
    }

    public boolean isCaractResidencial() {
        return caractResidencial;
    }

    public void setCaractResidencial(boolean caractResidencial) {
        this.caractResidencial = caractResidencial;
    }

    public boolean isCaractComercial() {
        return caractComercial;
    }

    public void setCaractComercial(boolean caractComercial) {
        this.caractComercial = caractComercial;
    }

    public boolean isCaractIndustrial() {
        return caractIndustrial;
    }

    public void setCaractIndustrial(boolean caractIndustrial) {
        this.caractIndustrial = caractIndustrial;
    }

    public boolean isCaractOtros() {
        return caractOtros;
    }

    public void setCaractOtros(boolean caractOtros) {
        this.caractOtros = caractOtros;
    }

    public String getEdificacion() {
        return edificacion;
    }

    public void setEdificacion(String edificacion) {
        this.edificacion = edificacion;
    }

    public String getDensidad() {
        return densidad;
    }

    public void setDensidad(String densidad) {
        this.densidad = densidad;
    }

    public String getPavimento() {
        return pavimento;
    }

    public void setPavimento(String pavimento) {
        this.pavimento = pavimento;
    }

    public boolean isOse() {
        return ose;
    }

    public void setOse(boolean ose) {
        this.ose = ose;
    }

    public boolean isPozo() {
        return pozo;
    }

    public void setPozo(boolean pozo) {
        this.pozo = pozo;
    }

    public boolean isColector() {
        return colector;
    }

    public void setColector(boolean colector) {
        this.colector = colector;
    }

    public boolean isUte() {
        return ute;
    }

    public void setUte(boolean ute) {
        this.ute = ute;
    }

    public boolean isAntel() {
        return antel;
    }

    public void setAntel(boolean antel) {
        this.antel = antel;
    }

    public boolean isCarpinteriaComun() {
        return carpinteriaComun;
    }

    public void setCarpinteriaComun(boolean carpinteriaComun) {
        this.carpinteriaComun = carpinteriaComun;
    }

    public boolean isCarpinteriaAluminio() {
        return carpinteriaAluminio;
    }

    public void setCarpinteriaAluminio(boolean carpinteriaAluminio) {
        this.carpinteriaAluminio = carpinteriaAluminio;
    }

    public boolean isCarpinteriapvc() {
        return carpinteriapvc;
    }

    public void setCarpinteriapvc(boolean carpinteriapvc) {
        this.carpinteriapvc = carpinteriapvc;
    }

    public boolean isCarpinteriaMadera() {
        return carpinteriaMadera;
    }

    public void setCarpinteriaMadera(boolean carpinteriaMadera) {
        this.carpinteriaMadera = carpinteriaMadera;
    }

    public boolean isCarpinteriaOtros() {
        return carpinteriaOtros;
    }

    public void setCarpinteriaOtros(boolean carpinteriaOtros) {
        this.carpinteriaOtros = carpinteriaOtros;
    }

    public boolean isCerramientosCortinas() {
        return cerramientosCortinas;
    }

    public void setCerramientosCortinas(boolean cerramientosCortinas) {
        this.cerramientosCortinas = cerramientosCortinas;
    }

    public boolean isCerramientosPostigos() {
        return cerramientosPostigos;
    }

    public void setCerramientosPostigos(boolean cerramientosPostigos) {
        this.cerramientosPostigos = cerramientosPostigos;
    }

    public boolean isCerramientosCelosias() {
        return cerramientosCelosias;
    }

    public void setCerramientosCelosias(boolean cerramientosCelosias) {
        this.cerramientosCelosias = cerramientosCelosias;
    }

    public boolean isCerramientosRejas() {
        return cerramientosRejas;
    }

    public void setCerramientosRejas(boolean cerramientosRejas) {
        this.cerramientosRejas = cerramientosRejas;
    }

    public boolean isCerramientosOtros() {
        return cerramientosOtros;
    }

    public void setCerramientosOtros(boolean cerramientosOtros) {
        this.cerramientosOtros = cerramientosOtros;
    }

    public boolean isInstalacionesAguaBanoCaliente() {
        return instalacionesAguaBanoCaliente;
    }

    public void setInstalacionesAguaBanoCaliente(boolean instalacionesAguaBanoCaliente) {
        this.instalacionesAguaBanoCaliente = instalacionesAguaBanoCaliente;
    }

    public boolean isInstalacionesAguaBanoFria() {
        return instalacionesAguaBanoFria;
    }

    public void setInstalacionesAguaBanoFria(boolean instalacionesAguaBanoFria) {
        this.instalacionesAguaBanoFria = instalacionesAguaBanoFria;
    }

    public boolean isInstalacionesAguaCocinaFria() {
        return instalacionesAguaCocinaFria;
    }

    public void setInstalacionesAguaCocinaFria(boolean instalacionesAguaCocinaFria) {
        this.instalacionesAguaCocinaFria = instalacionesAguaCocinaFria;
    }

    public boolean isInstalacionesAguaCocinaCaliente() {
        return instalacionesAguaCocinaCaliente;
    }

    public void setInstalacionesAguaCocinaCaliente(boolean instalacionesAguaCocinaCaliente) {
        this.instalacionesAguaCocinaCaliente = instalacionesAguaCocinaCaliente;
    }

    public boolean isInstalacionesElectricidadEmbutida() {
        return instalacionesElectricidadEmbutida;
    }

    public void setInstalacionesElectricidadEmbutida(boolean instalacionesElectricidadEmbutida) {
        this.instalacionesElectricidadEmbutida = instalacionesElectricidadEmbutida;
    }

    public boolean isInstalacionesElectricidadExterior() {
        return instalacionesElectricidadExterior;
    }

    public void setInstalacionesElectricidadExterior(boolean instalacionesElectricidadExterior) {
        this.instalacionesElectricidadExterior = instalacionesElectricidadExterior;
    }

    public boolean isInstalacionesElectricidadMixta() {
        return instalacionesElectricidadMixta;
    }

    public void setInstalacionesElectricidadMixta(boolean instalacionesElectricidadMixta) {
        this.instalacionesElectricidadMixta = instalacionesElectricidadMixta;
    }

    public boolean isInstalacionesElectricidadInstGas() {
        return instalacionesElectricidadInstGas;
    }

    public void setInstalacionesElectricidadInstGas(boolean instalacionesElectricidadInstGas) {
        this.instalacionesElectricidadInstGas = instalacionesElectricidadInstGas;
    }

    public boolean isInstalacionesSanitariaColector() {
        return instalacionesSanitariaColector;
    }

    public void setInstalacionesSanitariaColector(boolean instalacionesSanitariaColector) {
        this.instalacionesSanitariaColector = instalacionesSanitariaColector;
    }

    public boolean isInstalacionesSanitariaCamSeptica() {
        return instalacionesSanitariaCamSeptica;
    }

    public void setInstalacionesSanitariaCamSeptica(boolean instalacionesSanitariaCamSeptica) {
        this.instalacionesSanitariaCamSeptica = instalacionesSanitariaCamSeptica;
    }

    public boolean isInstalacionesSanitariaPozoNegro() {
        return instalacionesSanitariaPozoNegro;
    }

    public void setInstalacionesSanitariaPozoNegro(boolean instalacionesSanitariaPozoNegro) {
        this.instalacionesSanitariaPozoNegro = instalacionesSanitariaPozoNegro;
    }

    public boolean isInstalacionesTermicasLosaRad() {
        return instalacionesTermicasLosaRad;
    }

    public void setInstalacionesTermicasLosaRad(boolean instalacionesTermicasLosaRad) {
        this.instalacionesTermicasLosaRad = instalacionesTermicasLosaRad;
    }

    public boolean isInstalacionesTermicasRadiadores() {
        return instalacionesTermicasRadiadores;
    }

    public void setInstalacionesTermicasRadiadores(boolean instalacionesTermicasRadiadores) {
        this.instalacionesTermicasRadiadores = instalacionesTermicasRadiadores;
    }

    public boolean isInstalacionesTermicasPanelElect() {
        return instalacionesTermicasPanelElect;
    }

    public void setInstalacionesTermicasPanelElect(boolean instalacionesTermicasPanelElect) {
        this.instalacionesTermicasPanelElect = instalacionesTermicasPanelElect;
    }

    public boolean isInstalacionesTermicasAireAcond() {
        return instalacionesTermicasAireAcond;
    }

    public void setInstalacionesTermicasAireAcond(boolean instalacionesTermicasAireAcond) {
        this.instalacionesTermicasAireAcond = instalacionesTermicasAireAcond;
    }

    public boolean isInstalacionesTermicasOtros() {
        return instalacionesTermicasOtros;
    }

    public void setInstalacionesTermicasOtros(boolean instalacionesTermicasOtros) {
        this.instalacionesTermicasOtros = instalacionesTermicasOtros;
    }

    public boolean isCategoriaModesta() {
        return categoriaModesta;
    }

    public void setCategoriaModesta(boolean categoriaModesta) {
        this.categoriaModesta = categoriaModesta;
    }

    public boolean isCategoriaEconomica() {
        return categoriaEconomica;
    }

    public void setCategoriaEconomica(boolean categoriaEconomica) {
        this.categoriaEconomica = categoriaEconomica;
    }

    public boolean isCategoriaBuena() {
        return categoriaBuena;
    }

    public void setCategoriaBuena(boolean categoriaBuena) {
        this.categoriaBuena = categoriaBuena;
    }

    public boolean isCategoriaConfortable() {
        return categoriaConfortable;
    }

    public void setCategoriaConfortable(boolean categoriaConfortable) {
        this.categoriaConfortable = categoriaConfortable;
    }

    public boolean isCategoriaMuyConfortable() {
        return categoriaMuyConfortable;
    }

    public void setCategoriaMuyConfortable(boolean categoriaMuyConfortable) {
        this.categoriaMuyConfortable = categoriaMuyConfortable;
    }

    public boolean isConservacionMalo() {
        return conservacionMalo;
    }

    public void setConservacionMalo(boolean conservacionMalo) {
        this.conservacionMalo = conservacionMalo;
    }

    public boolean isConservacionRegular() {
        return conservacionRegular;
    }

    public void setConservacionRegular(boolean conservacionRegular) {
        this.conservacionRegular = conservacionRegular;
    }

    public boolean isConservacionBueno() {
        return conservacionBueno;
    }

    public void setConservacionBueno(boolean conservacionBueno) {
        this.conservacionBueno = conservacionBueno;
    }

    public boolean isConservacionMuyBueno() {
        return conservacionMuyBueno;
    }

    public void setConservacionMuyBueno(boolean conservacionMuyBueno) {
        this.conservacionMuyBueno = conservacionMuyBueno;
    }

    public boolean isConservacionNuevo() {
        return conservacionNuevo;
    }

    public void setConservacionNuevo(boolean conservacionNuevo) {
        this.conservacionNuevo = conservacionNuevo;
    }

    public String getOcupacionActual() {
        return ocupacionActual;
    }

    public void setOcupacionActual(String ocupacionActual) {
        this.ocupacionActual = ocupacionActual;
    }

    public int getOcupacionEdad() {
        return ocupacionEdad;
    }

    public void setOcupacionEdad(int ocupacionEdad) {
        this.ocupacionEdad = ocupacionEdad;
    }

    public String getTipo() {
        return tipo;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }

    public int getEdificioCantidadPisos() {
        return edificioCantidadPisos;
    }

    public void setEdificioCantidadPisos(int edificioCantidadPisos) {
        this.edificioCantidadPisos = edificioCantidadPisos;
    }

    public int getEdificioAptoPisos() {
        return edificioAptoPisos;
    }

    public void setEdificioAptoPisos(int edificioAptoPisos) {
        this.edificioAptoPisos = edificioAptoPisos;
    }

    public boolean isEdificioAscensores() {
        return edificioAscensores;
    }

    public void setEdificioAscensores(boolean edificioAscensores) {
        this.edificioAscensores = edificioAscensores;
    }

    public boolean isEdificioPorteroElectrico() {
        return edificioPorteroElectrico;
    }

    public void setEdificioPorteroElectrico(boolean edificioPorteroElectrico) {
        this.edificioPorteroElectrico = edificioPorteroElectrico;
    }

    public double getPropiedadComunM2() {
        return propiedadComunM2;
    }

    public void setPropiedadComunM2(double propiedadComunM2) {
        this.propiedadComunM2 = propiedadComunM2;
    }

    public double getSuperficieCubierta() {
        return superficieCubierta;
    }

    public void setSuperficieCubierta(double superficieCubierta) {
        this.superficieCubierta = superficieCubierta;
    }

    public double getSuperficieSemiCubierta() {
        return superficieSemiCubierta;
    }

    public void setSuperficieSemiCubierta(double superficieSemiCubierta) {
        this.superficieSemiCubierta = superficieSemiCubierta;
    }

    public double getPropiedadHorizontalM2() {
        return propiedadHorizontalM2;
    }

    public void setPropiedadHorizontalM2(double propiedadHorizontalM2) {
        this.propiedadHorizontalM2 = propiedadHorizontalM2;
    }

    public double getBienesPropios() {
        return bienesPropios;
    }

    public void setBienesPropios(double bienesPropios) {
        this.bienesPropios = bienesPropios;
    }

    public double getBienesComunes() {
        return bienesComunes;
    }

    public void setBienesComunes(double bienesComunes) {
        this.bienesComunes = bienesComunes;
    }

    public String getObservaciones() {
        return observaciones;
    }

    public void setObservaciones(String observaciones) {
        this.observaciones = observaciones;
    }

    public ArrayList<Local> getLocales() {
        return locales;
    }

    public void setLocales(ArrayList<Local> locales) {
        this.locales = locales;
    }

    public void addLocales(Local local){

        if(this.locales != null){
            this.locales.add(local);
        }

    }


}
