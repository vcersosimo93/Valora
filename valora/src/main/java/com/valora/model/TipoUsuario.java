package com.valora.model;

public enum TipoUsuario {

	SECRETARIA("Secretaria"),
    ADMINISTRADOR("Administrador"),
    TASADOR("Tasadores"),
	GERENCIA("Gerencia");
	
    private final String tipo;

    TipoUsuario(String tipo) {
        this.tipo = tipo;
    }

    public String getTipoUsuario() {
        return tipo;
    }

    public static TipoUsuario fromString(String tipo) {
        for (TipoUsuario tu : TipoUsuario.values()) {
            if (tu.tipo.equalsIgnoreCase(tipo)) {
                return tu;
            }
        }
        throw new IllegalArgumentException("Tipo de usuario no válido: " + tipo);
    }
    
}
