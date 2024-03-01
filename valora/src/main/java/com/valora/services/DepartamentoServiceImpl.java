package com.valora.services;

import com.valora.model.Departamento;
import com.valora.repository.BancoRepository;
import com.valora.repository.DepartamentoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DepartamentoServiceImpl implements IDepartamentoService{

    private final DepartamentoRepository departamentoRepository;

    @Autowired
    public DepartamentoServiceImpl(DepartamentoRepository departamentoRepository) {
        this.departamentoRepository = departamentoRepository;
    }


    @Override
    public List<Departamento> findAll() {
        return departamentoRepository.findAll();
    }

    @Override
    public Optional<Departamento> findById(Long id) {
        return Optional.empty();
    }

    @Override
    public Departamento save(Departamento departamento) {
        return departamentoRepository.save(departamento);
    }

    @Override
    public void deleteById(Long id) {
        departamentoRepository.deleteById(id);
    }
}
