package com.valora.services;

import com.valora.model.Inspeccion;
import com.valora.model.Local;

import java.util.List;
import java.util.Optional;

public interface ILocalService {

    List<Local> findAll();
    Optional<Local> findById(Long id);
    Local save(Local local);
    void deleteById(Long id);

}
