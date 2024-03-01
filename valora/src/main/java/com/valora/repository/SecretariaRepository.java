package com.valora.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.valora.model.Secretaria;

@Repository
public interface SecretariaRepository extends JpaRepository<Secretaria, Long>{

}
