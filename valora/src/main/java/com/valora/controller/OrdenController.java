package com.valora.controller;

import com.valora.model.Banco;
import com.valora.model.Orden;
import com.valora.services.IBancoService;
import com.valora.services.IOrdenService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
public class OrdenController {

    @Autowired
    private final IBancoService bancoService;
    @Autowired
    private IOrdenService ordenService;

    public OrdenController(/*ITasadorService tasadorService,*/ IBancoService bancoService, IOrdenService ordenService) {
        this.bancoService = bancoService;
//        this.tasadorService = tasadorService;
        this.ordenService = ordenService;
    }

    @GetMapping("/orden")
    public List<Orden> getAllOrden() {
        return ordenService.findAll();
    }

    @GetMapping("/orden/{id}")
    public Optional<Orden> getOrdenById(@PathVariable Long id) {
        return ordenService.findById(id);
    }

    @PostMapping("/create-orden")
    public Orden createOrden(@RequestBody Orden orden) {

        return ordenService.save(orden);
    }

    @DeleteMapping("/orden/{id}")
    public void deleteOrden(@PathVariable Long id) {
        ordenService.deleteById(id);
    }

}
