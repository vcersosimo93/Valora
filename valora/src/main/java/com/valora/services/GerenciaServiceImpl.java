package com.valora.services;

import java.util.List;
import java.util.Optional;

import com.valora.model.TipoUsuario;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.valora.model.Gerencia;
import com.valora.repository.GerenciaRepository;

@Service
public class GerenciaServiceImpl implements IGerenciaService{

	private final GerenciaRepository gerenciaRepository;

    @Autowired
    public GerenciaServiceImpl(GerenciaRepository gerenciaRepository) {
        this.gerenciaRepository = gerenciaRepository;
    }

    public List<Gerencia> getAllGerencia() {
        return gerenciaRepository.findAll();
    }

    public Optional<Gerencia> getGerenciaById(Long id) {
        return gerenciaRepository.findById(id);
    }

    public Gerencia saveGerencia(Gerencia gerencia) {
        return gerenciaRepository.save(gerencia);
    }

    public void deleteGerencia(Long id) {
    	gerenciaRepository.deleteById(id);
    }

	@Override
	public List<Gerencia> findAll() {
		return gerenciaRepository.findAll();
	}

	@Override
	public Optional<Gerencia> findById(Long id) {
		return gerenciaRepository.findById(id);
	}

	@Override
	public Gerencia save(Gerencia gerencia) {
		gerencia.setTipoUsuario(TipoUsuario.GERENCIA);
		return gerenciaRepository.save(gerencia);
	}

	@Override
	public void deleteById(Long id) {
		gerenciaRepository.deleteById(id);
	}
}
