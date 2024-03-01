package com.valora.services;

import java.util.List;
import java.util.Optional;

import com.valora.model.TipoUsuario;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.valora.model.Tasador;
import com.valora.repository.TasadorRepository;

@Service
public class TasadorServiceImpl implements ITasadorService{

	private final TasadorRepository tasadorRepository;

    @Autowired
    public TasadorServiceImpl(TasadorRepository tasadorRepository) {
        this.tasadorRepository = tasadorRepository;
    }

    public List<Tasador> getAllTasadores() {
        return tasadorRepository.findAll();
    }

    public Optional<Tasador> getTasadorById(Long id) {
        return tasadorRepository.findById(id);
    }

    public Tasador saveTasador(Tasador tasador) {
        return tasadorRepository.save(tasador);
    }

    public void deleteTasador(Long id) {
    	tasadorRepository.deleteById(id);
    }

	@Override
	public List<Tasador> findAll() {
		return tasadorRepository.findAll();
	}

	@Override
	public Optional<Tasador> findById(Long id) {
		return tasadorRepository.findById(id);
	}

	@Override
	public Tasador save(Tasador tasador) {
		tasador.setTipoUsuario(TipoUsuario.TASADOR);
		return tasadorRepository.save(tasador);
	}

	@Override
	public void deleteById(Long id) {
		tasadorRepository.deleteById(id);
	}
}
