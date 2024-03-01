package com.valora.controller;

import com.valora.model.Departamento;
import com.valora.services.IDepartamentoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
public class DepartamentoController {

    @Autowired
    private IDepartamentoService departamentoService;

    @GetMapping("/departamento")
    public List<Departamento> getAllDepartamento() {
        return departamentoService.findAll();
    }

    @GetMapping("/departamento/{id}")
    public Optional<Departamento> getDepartamentoById(@PathVariable Long id) {
        return departamentoService.findById(id);
    }

    @PostMapping("/create-departamento")
    public Departamento createDepartamento(@RequestBody Departamento departamento) {
        return departamentoService.save(departamento);
    }

    @DeleteMapping("/departamento/{id}")
    public void deleteDepartamento(@PathVariable Long id) {
        departamentoService.deleteById(id);
    }
    
}
