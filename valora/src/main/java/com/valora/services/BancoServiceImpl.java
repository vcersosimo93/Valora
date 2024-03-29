package com.valora.services;

import com.valora.model.Banco;
import com.valora.repository.BancoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BancoServiceImpl implements IBancoService{

    private final BancoRepository bancoRepository;

    @Autowired
    public BancoServiceImpl(BancoRepository bancoRepository) {
        this.bancoRepository = bancoRepository;
    }


    @Override
    public List<Banco> findAll() {
        return bancoRepository.findAll();
    }

    @Override
    public Optional<Banco> findById(Long id) {
        return bancoRepository.findById(id);
    }

    @Override
    public Banco save(Banco banco) {
        return bancoRepository.save(banco);
    }

    @Override
    public void deleteById(Long id) {
        bancoRepository.deleteById(id);
    }
}
