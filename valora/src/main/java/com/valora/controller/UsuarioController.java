package com.valora.controller;

import com.valora.model.Tasador;
import com.valora.model.Usuario;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.valora.services.IUsuarioService;

@RestController
@RequestMapping("/api")
public class UsuarioController {

	@Autowired
	private IUsuarioService usuarioService;

	@GetMapping("/usuario")
	public List<Usuario> getAllusuario() {
		return usuarioService.findAll();
	}

	@GetMapping("/usuario/{id}")
	public Usuario getUsuarioById(@PathVariable Long id) {
		return usuarioService.findById(id).orElse(null);
	}

	@PostMapping("/create-usuario")
	public Usuario createUsuario(@RequestBody Usuario usuario) {
		return usuarioService.save(usuario);
	}

	@DeleteMapping("/usuario/{id}")
	public void deleteUsuario(@PathVariable Long id) {
		usuarioService.deleteById(id);
	}
}
