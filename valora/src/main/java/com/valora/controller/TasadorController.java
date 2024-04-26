package com.valora.controller;

import java.util.ArrayList;
import java.util.List;

import com.valora.model.Secretaria;
import com.valora.model.TipoTasador;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.valora.model.Tasador;
import com.valora.services.ITasadorService;
@RestController
@RequestMapping("/api")
public class TasadorController {

	@Autowired
    private ITasadorService tasadorService;

    @GetMapping("/tasadores")
    public List<Tasador> getAllTasador() {
        return tasadorService.findAll();
    }

    @GetMapping("/tasador/{id}")
    public Tasador getTasadorById(@PathVariable Long id) {
        return tasadorService.findById(id).orElse(null);
    }

    @PostMapping("/create-tasador")
    public Tasador createTasadorTasador(
            @RequestBody Tasador tasador) {
        tasador.setTipoTasador(TipoTasador.TASADOR);
        return tasadorService.save(tasador);
    }

    @PostMapping("/create-relevador")
    public Tasador createTasadorRelevador(
            @RequestBody Tasador tasador) {
        tasador.setTipoTasador(TipoTasador.RELEVADOR);
        return tasadorService.save(tasador);
    }

    @DeleteMapping("/tasador/{id}")
    public void deleteTasador(@PathVariable Long id) {
    	tasadorService.deleteById(id);
    }
    
}
