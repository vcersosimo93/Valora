package com.valora.services;

import java.util.List;
import java.util.Optional;
import com.valora.model.Administrador;

public interface IAdministradorService {
	
    List<Administrador> findAll();
    Optional<Administrador> findById(Long id);
    Administrador save(Administrador administrador);
    void deleteById(Long id);

}
