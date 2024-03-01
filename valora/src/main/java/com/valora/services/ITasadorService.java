package com.valora.services;

import java.util.List;
import java.util.Optional;
import com.valora.model.Tasador;

public interface ITasadorService {
	
    List<Tasador> findAll();
    Optional<Tasador> findById(Long id);
    Tasador save(Tasador tasador);
    void deleteById(Long id);

}
