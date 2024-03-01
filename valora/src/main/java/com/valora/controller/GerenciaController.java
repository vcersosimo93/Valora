package com.valora.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.valora.model.Gerencia;
import com.valora.services.IGerenciaService;
@RestController
@RequestMapping("/api")
public class GerenciaController {

	@Autowired
    private IGerenciaService gerenciaService;

    @GetMapping("/gerencias")
    public List<Gerencia> getAllGerencia() {
        return gerenciaService.findAll();
    }

    @GetMapping("/gerencias/{id}")
    public Gerencia getGerenciaById(@PathVariable Long id) {
        return gerenciaService.findById(id).orElse(null);
    }

    @PostMapping("/create-gerencia")
    public Gerencia createGerencia(@RequestBody Gerencia gerencia) {
        return gerenciaService.save(gerencia);
    }

    @DeleteMapping("/gerencias/{id}")
    public void deleteGerencia(@PathVariable Long id) {
        gerenciaService.deleteById(id);
    }
    
}
