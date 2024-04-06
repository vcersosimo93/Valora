package com.valora.services;

import com.valora.model.Local;
import com.valora.repository.InspeccionRepository;
import com.valora.repository.LocalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class LocalServiceImpl implements ILocalService{

    private final LocalRepository localRepository;

    @Autowired
    public LocalServiceImpl(LocalRepository localRepository) {

        this.localRepository = localRepository;
    }


    @Override
    public List<Local> findAll() {
        return localRepository.findAll();
    }

    @Override
    public Optional<Local> findById(Long id) {
        return localRepository.findById(id);
    }

    @Override
    public Local save(Local local) {
        return localRepository.save(local);
    }

    @Override
    public void deleteById(Long id) {
        localRepository.deleteById(id);
    }


}
