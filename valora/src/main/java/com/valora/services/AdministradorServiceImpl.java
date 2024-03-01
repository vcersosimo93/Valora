package com.valora.services;

import java.util.List;
import java.util.Optional;

import com.valora.model.TipoUsuario;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.valora.model.Administrador;
import com.valora.repository.AdministradorRepository;

@Service
public class AdministradorServiceImpl implements IAdministradorService{

	private final AdministradorRepository administradorRepository;

    @Autowired
    public AdministradorServiceImpl(AdministradorRepository administradorRepository) {
        this.administradorRepository = administradorRepository;
    }

    public List<Administrador> getAllAdministrador() {
        return administradorRepository.findAll();
    }

    public Optional<Administrador> getAdministradorById(Long id) {
        return administradorRepository.findById(id);
    }

    public Administrador saveAdministrador(Administrador administrador) {
		administrador.setTipoUsuario(TipoUsuario.ADMINISTRADOR);
        return administradorRepository.save(administrador);
    }

    public void deleteAdministrador(Long id) {
    	administradorRepository.deleteById(id);
    }

	@Override
	public List<Administrador> findAll() {
		return administradorRepository.findAll();
	}

	@Override
	public Optional<Administrador> findById(Long id) {
		return administradorRepository.findById(id);
	}

	@Override
	public Administrador save(Administrador administrador) {
		administrador.setTipoUsuario(TipoUsuario.ADMINISTRADOR);
		return administradorRepository.save(administrador);
	}

	@Override
	public void deleteById(Long id) {
		administradorRepository.deleteById(id);
	}
}
