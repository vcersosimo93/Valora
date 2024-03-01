package com.valora.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.valora.model.Tasador;

@Repository
public interface TasadorRepository extends JpaRepository<Tasador, Long>{

}
