package com.valora.controller;

import java.util.List;
import java.util.Optional;

import com.valora.model.Administrador;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.valora.model.Secretaria;
import com.valora.services.ISecretariaService;

@RestController
@RequestMapping("/api")
public class SecretariaController {

	@Autowired
    private ISecretariaService secretariaService;

    @GetMapping("/secretaria")
    public List<Secretaria> getAllSecretaria() {
        return secretariaService.findAll();
    }

    @GetMapping("/secretaria/{id}")
    public Secretaria getSecretariaById(@PathVariable Long id) {
        return secretariaService.findById(id).orElse(null);
    }

    @PostMapping("/create-secretaria")
    public Secretaria createSecretaria(@RequestBody Secretaria secretaria) {
        return secretariaService.save(secretaria);
    }

    @DeleteMapping("/secretaria/{id}")
    public void deleteSecretaria(@PathVariable Long id) {
        secretariaService.deleteById(id);
    }
    
}
