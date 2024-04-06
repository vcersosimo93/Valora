package com.valora.services;

import com.valora.model.Inspeccion;
import com.valora.model.Orden;

import java.util.List;
import java.util.Optional;

public interface IInspeccionService {

    List<Inspeccion> findAll();
    Optional<Inspeccion> findById(Long id);
    Inspeccion save(Inspeccion inspeccion);
    void deleteById(Long id);
}
