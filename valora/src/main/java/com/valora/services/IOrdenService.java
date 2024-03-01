package com.valora.services;

import com.valora.model.Orden;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


public interface IOrdenService {

    List<Orden> findAll();
    Optional<Orden> findById(Long id);
    Orden save(Orden orden);
    void deleteById(Long id);

}
