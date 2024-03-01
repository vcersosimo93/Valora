package com.valora.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.valora.model.Administrador;

@Repository
public interface AdministradorRepository extends JpaRepository<Administrador, Long>{

}
