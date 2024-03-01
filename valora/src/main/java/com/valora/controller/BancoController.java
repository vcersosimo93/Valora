package com.valora.controller;


import com.valora.model.Banco;
import com.valora.services.IBancoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping("/api")
public class BancoController {

    @Autowired
    private IBancoService bancoService;

    @GetMapping("/banco")
    public List<Banco> getAllBanco() {
        return bancoService.findAll();
    }

    @GetMapping("/banco/{id}")
    public Optional<Banco> getBancoById(@PathVariable Long id) {
        return bancoService.findById(id);
    }

    @PostMapping("/create-banco")
    public Banco createBanco(@RequestBody Banco banco) {
        return bancoService.save(banco);
    }

    @DeleteMapping("/banco/{id}")
    public void deleteBanco(@PathVariable Long id) {
        bancoService.deleteById(id);
    }

}
