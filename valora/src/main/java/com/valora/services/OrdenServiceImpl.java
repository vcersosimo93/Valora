package com.valora.services;

import com.valora.model.Orden;
import com.valora.repository.OrdenRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class OrdenServiceImpl implements IOrdenService{

    private final OrdenRepository ordenRepository;

    @Autowired
    public OrdenServiceImpl(OrdenRepository ordenRepository) {

        this.ordenRepository = ordenRepository;
    }


    @Override
    public List<Orden> findAll() {

        return ordenRepository.findAll();
    }

    @Override
    public Optional<Orden> findById(Long id){

        return ordenRepository.findById(id);
    }

    @Override
    public Orden save(Orden orden) {

        return ordenRepository.save(orden);
    }

    @Override
    public void deleteById(Long id) {

        ordenRepository.deleteById(id);
    }

}
