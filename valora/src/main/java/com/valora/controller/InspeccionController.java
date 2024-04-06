package com.valora.controller;


import com.valora.model.Inspeccion;
import com.valora.model.Orden;
import com.valora.services.IInspeccionService;
import com.valora.services.IOrdenService;
import com.valora.services.InspeccionServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
public class InspeccionController {

    @Autowired
    private IInspeccionService inspeccionService;

    public InspeccionController(IInspeccionService inspeccionService) {
        this.inspeccionService = inspeccionService;
    }



    @GetMapping("/inspeccion")
    public List<Inspeccion> getAllInspeccion() {
        return inspeccionService.findAll();
    }

    @GetMapping("/inspeccion/{id}")
    public Optional<Inspeccion> getInspeccionById(@PathVariable Long id) {
        return inspeccionService.findById(id);
    }

    @PostMapping("/create-inspeccion")
    public Inspeccion createInspeccion(@RequestBody Inspeccion inspeccion) {

        return inspeccionService.save(inspeccion);
    }

    @DeleteMapping("/inspeccion/{id}")
    public void deleteInspeccion(@PathVariable Long id) {
        inspeccionService.deleteById(id);
    }



}
