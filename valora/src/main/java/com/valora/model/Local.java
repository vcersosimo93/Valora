package com.valora.model;

import jakarta.persistence.*;

@Entity
@Table(name = "local")
public class Local {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @ManyToOne
    @JoinColumn(name = "inspeccion_id")
    private Inspeccion inspeccion;

    private boolean estructuraHarmado;

    private boolean estructuraMuroPort;

    private boolean estructuraMixta;

    private boolean estructuraMetalicos;

    private boolean estructuraOtros;

    private int estructuraAno;

    private boolean cubiertaHarmado;

    private boolean cubiertaLiviana;

    private boolean cubiertaCcielorraso;

    private boolean cubiertaBovedilla;

    private boolean cubiertaTejas;

    private boolean cubiertaPorteria;

    private boolean cubiertaIsopanel;

    private boolean murosCeramicos;

    private boolean murosBloques;

    private boolean murosMadera;

    private boolean murosPiedra;

    private boolean murosChapa;

    private boolean murosYeso;

    private boolean murosIsopanel;

    private boolean pisosParquet;

    private boolean pisosTabla;

    private boolean pisosMonolÃ­tico;

    private boolean pisosCalcareas;

    private boolean pisosCeramico;

    private boolean pisosPortland;

    private boolean pisosMoquette;

    private boolean revestimientosAzulBcoB;

    private boolean revestimientosAzulBcoC;

    private boolean revestimientosAzulColorB;

    private boolean revestimientosAzulColorC;

    private boolean revestimientosCeramicaB;

    private boolean revestimientosCeramicaC;

    private boolean revestimientosPorcelanatoB;

    private boolean revestimientosPorcelanatoC;

    private boolean revestimientosEstucoB;

    private boolean revestimientosEstucoC;

    private boolean revestimientosOtrosB;

    private boolean revestimientosOtrosC;

    private boolean terminacionRevoque;

    private boolean terminacionEnduido;

    private boolean terminacionCal;

    private boolean terminacionPintAgua;

    private boolean terminacionPintAceite;

    private boolean terminacionEmpapelado;

    private boolean terminacionLambriz;


    public Local() {
    }


    public Local(int id, Inspeccion inspeccion, boolean estructuraHarmado, boolean estructuraMuroPort,
                 boolean estructuraMixta, boolean estructuraMetalicos, boolean estructuraOtros, int estructuraAno,
                 boolean cubiertaHarmado, boolean cubiertaLiviana, boolean cubiertaCcielorraso, boolean cubiertaBovedilla,
                 boolean cubiertaTejas, boolean cubiertaPorteria, boolean cubiertaIsopanel, boolean murosCeramicos,
                 boolean murosBloques, boolean murosMadera, boolean murosPiedra, boolean murosChapa, boolean murosYeso,
                 boolean murosIsopanel, boolean pisosParquet, boolean pisosTabla, boolean pisosMonolÃ­tico, boolean pisosCalcareas,
                 boolean pisosCeramico, boolean pisosPortland, boolean pisosMoquette, boolean revestimientosAzulBcoB,
                 boolean revestimientosAzulBcoC, boolean revestimientosAzulColorB, boolean revestimientosAzulColorC, boolean revestimientosCeramicaB,
                 boolean revestimientosCeramicaC, boolean revestimientosPorcelanatoB, boolean revestimientosPorcelanatoC,
                 boolean revestimientosEstucoB, boolean revestimientosEstucoC, boolean revestimientosOtrosB, boolean revestimientosOtrosC,
                 boolean terminacionRevoque, boolean terminacionEnduido, boolean terminacionCal, boolean terminacionPintAgua,
                 boolean terminacionPintAceite, boolean terminacionEmpapelado, boolean terminacionLambriz) {
        this.id = id;
        this.inspeccion = inspeccion;
        this.estructuraHarmado = estructuraHarmado;
        this.estructuraMuroPort = estructuraMuroPort;
        this.estructuraMixta = estructuraMixta;
        this.estructuraMetalicos = estructuraMetalicos;
        this.estructuraOtros = estructuraOtros;
        this.estructuraAno = estructuraAno;
        this.cubiertaHarmado = cubiertaHarmado;
        this.cubiertaLiviana = cubiertaLiviana;
        this.cubiertaCcielorraso = cubiertaCcielorraso;
        this.cubiertaBovedilla = cubiertaBovedilla;
        this.cubiertaTejas = cubiertaTejas;
        this.cubiertaPorteria = cubiertaPorteria;
        this.cubiertaIsopanel = cubiertaIsopanel;
        this.murosCeramicos = murosCeramicos;
        this.murosBloques = murosBloques;
        this.murosMadera = murosMadera;
        this.murosPiedra = murosPiedra;
        this.murosChapa = murosChapa;
        this.murosYeso = murosYeso;
        this.murosIsopanel = murosIsopanel;
        this.pisosParquet = pisosParquet;
        this.pisosTabla = pisosTabla;
        this.pisosMonolÃ­tico = pisosMonolÃ­tico;
        this.pisosCalcareas = pisosCalcareas;
        this.pisosCeramico = pisosCeramico;
        this.pisosPortland = pisosPortland;
        this.pisosMoquette = pisosMoquette;
        this.revestimientosAzulBcoB = revestimientosAzulBcoB;
        this.revestimientosAzulBcoC = revestimientosAzulBcoC;
        this.revestimientosAzulColorB = revestimientosAzulColorB;
        this.revestimientosAzulColorC = revestimientosAzulColorC;
        this.revestimientosCeramicaB = revestimientosCeramicaB;
        this.revestimientosCeramicaC = revestimientosCeramicaC;
        this.revestimientosPorcelanatoB = revestimientosPorcelanatoB;
        this.revestimientosPorcelanatoC = revestimientosPorcelanatoC;
        this.revestimientosEstucoB = revestimientosEstucoB;
        this.revestimientosEstucoC = revestimientosEstucoC;
        this.revestimientosOtrosB = revestimientosOtrosB;
        this.revestimientosOtrosC = revestimientosOtrosC;
        this.terminacionRevoque = terminacionRevoque;
        this.terminacionEnduido = terminacionEnduido;
        this.terminacionCal = terminacionCal;
        this.terminacionPintAgua = terminacionPintAgua;
        this.terminacionPintAceite = terminacionPintAceite;
        this.terminacionEmpapelado = terminacionEmpapelado;
        this.terminacionLambriz = terminacionLambriz;
    }


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Inspeccion getInspeccion() {
        return inspeccion;
    }

    public void setInspeccion(Inspeccion inspeccion) {
        this.inspeccion = inspeccion;
    }

    public boolean isEstructuraHarmado() {
        return estructuraHarmado;
    }

    public void setEstructuraHarmado(boolean estructuraHarmado) {
        this.estructuraHarmado = estructuraHarmado;
    }

    public boolean isEstructuraMuroPort() {
        return estructuraMuroPort;
    }

    public void setEstructuraMuroPort(boolean estructuraMuroPort) {
        this.estructuraMuroPort = estructuraMuroPort;
    }

    public boolean isEstructuraMixta() {
        return estructuraMixta;
    }

    public void setEstructuraMixta(boolean estructuraMixta) {
        this.estructuraMixta = estructuraMixta;
    }

    public boolean isEstructuraMetalicos() {
        return estructuraMetalicos;
    }

    public void setEstructuraMetalicos(boolean estructuraMetalicos) {
        this.estructuraMetalicos = estructuraMetalicos;
    }

    public boolean isEstructuraOtros() {
        return estructuraOtros;
    }

    public void setEstructuraOtros(boolean estructuraOtros) {
        this.estructuraOtros = estructuraOtros;
    }

    public int getEstructuraAno() {
        return estructuraAno;
    }

    public void setEstructuraAno(int estructuraAno) {
        this.estructuraAno = estructuraAno;
    }

    public boolean isCubiertaHarmado() {
        return cubiertaHarmado;
    }

    public void setCubiertaHarmado(boolean cubiertaHarmado) {
        this.cubiertaHarmado = cubiertaHarmado;
    }

    public boolean isCubiertaLiviana() {
        return cubiertaLiviana;
    }

    public void setCubiertaLiviana(boolean cubiertaLiviana) {
        this.cubiertaLiviana = cubiertaLiviana;
    }

    public boolean isCubiertaCcielorraso() {
        return cubiertaCcielorraso;
    }

    public void setCubiertaCcielorraso(boolean cubiertaCcielorraso) {
        this.cubiertaCcielorraso = cubiertaCcielorraso;
    }

    public boolean isCubiertaBovedilla() {
        return cubiertaBovedilla;
    }

    public void setCubiertaBovedilla(boolean cubiertaBovedilla) {
        this.cubiertaBovedilla = cubiertaBovedilla;
    }

    public boolean isCubiertaTejas() {
        return cubiertaTejas;
    }

    public void setCubiertaTejas(boolean cubiertaTejas) {
        this.cubiertaTejas = cubiertaTejas;
    }

    public boolean isCubiertaPorteria() {
        return cubiertaPorteria;
    }

    public void setCubiertaPorteria(boolean cubiertaPorteria) {
        this.cubiertaPorteria = cubiertaPorteria;
    }

    public boolean isCubiertaIsopanel() {
        return cubiertaIsopanel;
    }

    public void setCubiertaIsopanel(boolean cubiertaIsopanel) {
        this.cubiertaIsopanel = cubiertaIsopanel;
    }

    public boolean isMurosCeramicos() {
        return murosCeramicos;
    }

    public void setMurosCeramicos(boolean murosCeramicos) {
        this.murosCeramicos = murosCeramicos;
    }

    public boolean isMurosBloques() {
        return murosBloques;
    }

    public void setMurosBloques(boolean murosBloques) {
        this.murosBloques = murosBloques;
    }

    public boolean isMurosMadera() {
        return murosMadera;
    }

    public void setMurosMadera(boolean murosMadera) {
        this.murosMadera = murosMadera;
    }

    public boolean isMurosPiedra() {
        return murosPiedra;
    }

    public void setMurosPiedra(boolean murosPiedra) {
        this.murosPiedra = murosPiedra;
    }

    public boolean isMurosChapa() {
        return murosChapa;
    }

    public void setMurosChapa(boolean murosChapa) {
        this.murosChapa = murosChapa;
    }

    public boolean isMurosYeso() {
        return murosYeso;
    }

    public void setMurosYeso(boolean murosYeso) {
        this.murosYeso = murosYeso;
    }

    public boolean isMurosIsopanel() {
        return murosIsopanel;
    }

    public void setMurosIsopanel(boolean murosIsopanel) {
        this.murosIsopanel = murosIsopanel;
    }

    public boolean isPisosParquet() {
        return pisosParquet;
    }

    public void setPisosParquet(boolean pisosParquet) {
        this.pisosParquet = pisosParquet;
    }

    public boolean isPisosTabla() {
        return pisosTabla;
    }

    public void setPisosTabla(boolean pisosTabla) {
        this.pisosTabla = pisosTabla;
    }

    public boolean isPisosMonolÃ­tico() {
        return pisosMonolÃ­tico;
    }

    public void setPisosMonolÃ­tico(boolean pisosMonolÃ­tico) {
        this.pisosMonolÃ­tico = pisosMonolÃ­tico;
    }

    public boolean isPisosCalcareas() {
        return pisosCalcareas;
    }

    public void setPisosCalcareas(boolean pisosCalcareas) {
        this.pisosCalcareas = pisosCalcareas;
    }

    public boolean isPisosCeramico() {
        return pisosCeramico;
    }

    public void setPisosCeramico(boolean pisosCeramico) {
        this.pisosCeramico = pisosCeramico;
    }

    public boolean isPisosPortland() {
        return pisosPortland;
    }

    public void setPisosPortland(boolean pisosPortland) {
        this.pisosPortland = pisosPortland;
    }

    public boolean isPisosMoquette() {
        return pisosMoquette;
    }

    public void setPisosMoquette(boolean pisosMoquette) {
        this.pisosMoquette = pisosMoquette;
    }

    public boolean isRevestimientosAzulBcoB() {
        return revestimientosAzulBcoB;
    }

    public void setRevestimientosAzulBcoB(boolean revestimientosAzulBcoB) {
        this.revestimientosAzulBcoB = revestimientosAzulBcoB;
    }

    public boolean isRevestimientosAzulBcoC() {
        return revestimientosAzulBcoC;
    }

    public void setRevestimientosAzulBcoC(boolean revestimientosAzulBcoC) {
        this.revestimientosAzulBcoC = revestimientosAzulBcoC;
    }

    public boolean isRevestimientosAzulColorB() {
        return revestimientosAzulColorB;
    }

    public void setRevestimientosAzulColorB(boolean revestimientosAzulColorB) {
        this.revestimientosAzulColorB = revestimientosAzulColorB;
    }

    public boolean isRevestimientosAzulColorC() {
        return revestimientosAzulColorC;
    }

    public void setRevestimientosAzulColorC(boolean revestimientosAzulColorC) {
        this.revestimientosAzulColorC = revestimientosAzulColorC;
    }

    public boolean isRevestimientosCeramicaB() {
        return revestimientosCeramicaB;
    }

    public void setRevestimientosCeramicaB(boolean revestimientosCeramicaB) {
        this.revestimientosCeramicaB = revestimientosCeramicaB;
    }

    public boolean isRevestimientosCeramicaC() {
        return revestimientosCeramicaC;
    }

    public void setRevestimientosCeramicaC(boolean revestimientosCeramicaC) {
        this.revestimientosCeramicaC = revestimientosCeramicaC;
    }

    public boolean isRevestimientosPorcelanatoB() {
        return revestimientosPorcelanatoB;
    }

    public void setRevestimientosPorcelanatoB(boolean revestimientosPorcelanatoB) {
        this.revestimientosPorcelanatoB = revestimientosPorcelanatoB;
    }

    public boolean isRevestimientosPorcelanatoC() {
        return revestimientosPorcelanatoC;
    }

    public void setRevestimientosPorcelanatoC(boolean revestimientosPorcelanatoC) {
        this.revestimientosPorcelanatoC = revestimientosPorcelanatoC;
    }

    public boolean isRevestimientosEstucoB() {
        return revestimientosEstucoB;
    }

    public void setRevestimientosEstucoB(boolean revestimientosEstucoB) {
        this.revestimientosEstucoB = revestimientosEstucoB;
    }

    public boolean isRevestimientosEstucoC() {
        return revestimientosEstucoC;
    }

    public void setRevestimientosEstucoC(boolean revestimientosEstucoC) {
        this.revestimientosEstucoC = revestimientosEstucoC;
    }

    public boolean isRevestimientosOtrosB() {
        return revestimientosOtrosB;
    }

    public void setRevestimientosOtrosB(boolean revestimientosOtrosB) {
        this.revestimientosOtrosB = revestimientosOtrosB;
    }

    public boolean isRevestimientosOtrosC() {
        return revestimientosOtrosC;
    }

    public void setRevestimientosOtrosC(boolean revestimientosOtrosC) {
        this.revestimientosOtrosC = revestimientosOtrosC;
    }

    public boolean isTerminacionRevoque() {
        return terminacionRevoque;
    }

    public void setTerminacionRevoque(boolean terminacionRevoque) {
        this.terminacionRevoque = terminacionRevoque;
    }

    public boolean isTerminacionEnduido() {
        return terminacionEnduido;
    }

    public void setTerminacionEnduido(boolean terminacionEnduido) {
        this.terminacionEnduido = terminacionEnduido;
    }

    public boolean isTerminacionCal() {
        return terminacionCal;
    }

    public void setTerminacionCal(boolean terminacionCal) {
        this.terminacionCal = terminacionCal;
    }

    public boolean isTerminacionPintAgua() {
        return terminacionPintAgua;
    }

    public void setTerminacionPintAgua(boolean terminacionPintAgua) {
        this.terminacionPintAgua = terminacionPintAgua;
    }

    public boolean isTerminacionPintAceite() {
        return terminacionPintAceite;
    }

    public void setTerminacionPintAceite(boolean terminacionPintAceite) {
        this.terminacionPintAceite = terminacionPintAceite;
    }

    public boolean isTerminacionEmpapelado() {
        return terminacionEmpapelado;
    }

    public void setTerminacionEmpapelado(boolean terminacionEmpapelado) {
        this.terminacionEmpapelado = terminacionEmpapelado;
    }

    public boolean isTerminacionLambriz() {
        return terminacionLambriz;
    }

    public void setTerminacionLambriz(boolean terminacionLambriz) {
        this.terminacionLambriz = terminacionLambriz;
    }


}
