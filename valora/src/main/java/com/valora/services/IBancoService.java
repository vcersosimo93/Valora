package com.valora.services;

import com.valora.model.Banco;
import java.util.List;
import java.util.Optional;

public interface IBancoService {

    List<Banco> findAll();
    Optional<Banco> findById(Long id);
    Banco save(Banco banco);
    void deleteById(Long id);
}
