package com.valora.services;

import com.valora.model.Banco;
import com.valora.model.Departamento;

import java.util.List;
import java.util.Optional;

public interface IDepartamentoService {

    List<Departamento> findAll();
    Optional<Departamento> findById(Long id);
    Departamento save(Departamento departamento);
    void deleteById(Long id);
}
