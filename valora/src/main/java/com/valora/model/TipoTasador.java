package com.valora.model;

public enum TipoTasador {

    TASADOR("Tasador"),
    RELEVADOR("Relevador");
	
    private final String tipo;

    TipoTasador(String tipo) {
        this.tipo = tipo;
    }

    public String getTipoTasador() {
        return tipo;
    }

    
}
