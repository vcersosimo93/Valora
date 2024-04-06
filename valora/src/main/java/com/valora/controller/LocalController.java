package com.valora.controller;

import com.valora.model.Inspeccion;
import com.valora.model.Local;
import com.valora.services.IInspeccionService;
import com.valora.services.ILocalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
public class LocalController {

    @Autowired
    private ILocalService localService;

    public LocalController(ILocalService localService) {
        this.localService = localService;
    }

    @GetMapping("/local")
    public List<Local> getAllLocal() {
        return localService.findAll();
    }

    @GetMapping("/local/{id}")
    public Optional<Local> getLocalById(@PathVariable Long id) {
        return localService.findById(id);
    }

    @PostMapping("/create-local")
    public Local createLocal(@RequestBody Local local) {

        return localService.save(local);
    }

    @DeleteMapping("/local/{id}")
    public void deleteLocal(@PathVariable Long id) {
        localService.deleteById(id);
    }


}
