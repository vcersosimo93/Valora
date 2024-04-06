package com.valora.services;

import com.valora.model.Inspeccion;
import com.valora.repository.InspeccionRepository;
import com.valora.repository.OrdenRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class InspeccionServiceImpl implements IInspeccionService{

    private final InspeccionRepository inspeccionRepository;

    @Autowired
    public InspeccionServiceImpl(InspeccionRepository inspeccionRepository) {

        this.inspeccionRepository = inspeccionRepository;
    }


    @Override
    public List<Inspeccion> findAll() {
        return inspeccionRepository.findAll();
    }

    @Override
    public Optional<Inspeccion> findById(Long id) {
        return inspeccionRepository.findById(id);
    }

    @Override
    public Inspeccion save(Inspeccion inspeccion) {
        return inspeccionRepository.save(inspeccion);
    }

    @Override
    public void deleteById(Long id) {
        inspeccionRepository.deleteById(id);
    }


}
