package com.valora.repository;

import com.valora.model.Inspeccion;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface InspeccionRepository extends JpaRepository<Inspeccion, Long> {
}
