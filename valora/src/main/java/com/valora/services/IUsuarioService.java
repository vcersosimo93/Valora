package com.valora.services;

import java.util.List;
import java.util.Optional;

import com.valora.model.Usuario;

public interface IUsuarioService {

    List<Usuario> findAll();
    Optional<Usuario> findById(Long id);
    Usuario save(Usuario usuario);
    void deleteById(Long id);
    
}
