package com.Test.web.repository;

import com.Test.web.UserEntityRepository;
import com.Test.web.domain.Cargo;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data  repository for the Cargo entity.
 */
@SuppressWarnings("unused")
@Repository
public interface CargoRepository
    extends
        //JpaRepository<Cargo, Long> ,
        UserEntityRepository<Cargo, Long> {}
