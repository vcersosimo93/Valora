package com.valora.services;

import java.util.List;
import java.util.Optional;
import com.valora.model.Gerencia;

public interface IGerenciaService {
	
    List<Gerencia> findAll();
    Optional<Gerencia> findById(Long id);
    Gerencia save(Gerencia gerencia);
    void deleteById(Long id);

}
