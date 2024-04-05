package com.valora.model;

import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "tb_local")
public class Local {

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


}
