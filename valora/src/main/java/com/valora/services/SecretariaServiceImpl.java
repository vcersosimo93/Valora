package com.valora.services;

import java.util.List;
import java.util.Optional;

import com.valora.model.TipoUsuario;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.valora.model.Secretaria;
import com.valora.repository.SecretariaRepository;

@Service
public class SecretariaServiceImpl implements ISecretariaService{

	private final SecretariaRepository secretariaRepository;

    @Autowired
    public SecretariaServiceImpl(SecretariaRepository secretariaRepository) {
        this.secretariaRepository = secretariaRepository;
    }

    public List<Secretaria> getAllSecretarias() {
        return secretariaRepository.findAll();
    }

    public Optional<Secretaria> getSecretariaById(Long id) {
        return secretariaRepository.findById(id);
    }

    public Secretaria saveSecretaria(Secretaria secretaria) {
        return secretariaRepository.save(secretaria);
    }

    public void deleteSecretaria(Long id) {
        secretariaRepository.deleteById(id);
    }

	@Override
	public List<Secretaria> findAll() {
		return secretariaRepository.findAll();
	}

	@Override
	public Optional<Secretaria> findById(Long id) {
		return secretariaRepository.findById(id);
	}

	@Override
	public Secretaria save(Secretaria secretaria) {
		secretaria.setTipoUsuario(TipoUsuario.SECRETARIA);
		return secretariaRepository.save(secretaria);
	}

	@Override
	public void deleteById(Long id) {
		secretariaRepository.deleteById(id);
	}
}
