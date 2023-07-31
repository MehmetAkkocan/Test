package com.Test.web.repository;

import com.Test.web.domain.Lookup;
import java.util.List;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;
import org.springframework.data.repository.query.Param;



/**
 * Spring Data  repository for the Lookup entity.
 */
@SuppressWarnings("unused")
@Repository
public interface LookupRepository extends JpaRepository<Lookup, Long> {


    @Query(value = "select l.* from Lookup l where l.parent_id = :parentid",nativeQuery = true) 
   List< Lookup> findAllByParentId(@Param("parentid")Long parent );

}
