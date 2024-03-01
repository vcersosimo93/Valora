package com.valora.services;

import java.util.List;
import java.util.Optional;

import com.valora.model.Secretaria;

public interface ISecretariaService {
	
    List<Secretaria> findAll();
    Optional<Secretaria> findById(Long id);
    Secretaria save(Secretaria secretaria);
    void deleteById(Long id);

}
