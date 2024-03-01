package com.valora.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.valora.model.Administrador;
import com.valora.services.IAdministradorService;
@RestController
@RequestMapping("/api")
public class AdministradorController {

	@Autowired
    private IAdministradorService administradorService;

    @GetMapping("/administrador")
    public List<Administrador> getAllAdministrador() {
        return administradorService.findAll();
    }

    @GetMapping("/administrador/{id}")
    public Administrador getAdministradorById(@PathVariable Long id) {
        return administradorService.findById(id).orElse(null);
    }

    @PostMapping("/create-administrador")
    public Administrador createAdministrador(@RequestBody Administrador administrador) {
        return administradorService.save(administrador);
    }

    @DeleteMapping("/administrador/{id}")
    public void deleteAdministrador(@PathVariable Long id) {
    	administradorService.deleteById(id);
    }
    
}
