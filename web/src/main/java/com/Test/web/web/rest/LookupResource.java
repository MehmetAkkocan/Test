package com.Test.web.web.rest;

import com.Test.web.domain.Lookup;
import com.Test.web.repository.LookupRepository;
import com.Test.web.web.rest.errors.BadRequestAlertException;
import io.github.jhipster.web.util.HeaderUtil;
import io.github.jhipster.web.util.ResponseUtil;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import javax.validation.Valid;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

/**
 * REST controller for managing {@link com.Test.web.domain.Lookup}.
 */
@RestController
@RequestMapping("/api")
@Transactional
public class LookupResource {
    private final Logger log = LoggerFactory.getLogger(LookupResource.class);

    private static final String ENTITY_NAME = "lookup";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final LookupRepository lookupRepository;

    public LookupResource(LookupRepository lookupRepository) {
        this.lookupRepository = lookupRepository;
    }

    /**
     * {@code POST  /lookups} : Create a new lookup.
     *
     * @param lookup the lookup to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new lookup, or with status {@code 400 (Bad Request)} if the lookup has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/lookups")
    public ResponseEntity<Lookup> createLookup(@Valid @RequestBody Lookup lookup) throws URISyntaxException {
        log.debug("REST request to save Lookup : {}", lookup);
        if (lookup.getId() != null) {
            throw new BadRequestAlertException("A new lookup cannot already have an ID", ENTITY_NAME, "idexists");
        }
        Lookup result = lookupRepository.save(lookup);
        return ResponseEntity
            .created(new URI("/api/lookups/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * {@code POST  /lookups} : Create a new lookup.
     *
     * @param lookup the lookup to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new lookup, or with status {@code 400 (Bad Request)} if the lookup has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/lookups/create")
    public ResponseEntity<Lookup> createLookupData(@RequestBody Map<String, Object> lookup) throws URISyntaxException {
        log.debug("REST request to save Lookup : {}", lookup);
        for (Map.Entry<String, Object> entry : lookup.entrySet()) {
            log.debug(entry.getKey() + ":" + entry.getValue());
        }

        Lookup result = new Lookup();
        return ResponseEntity
            .created(new URI("/api/lookups/"))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, "0"))
            .body(result);
    }

    /**
     * {@code PUT  /lookups} : Updates an existing lookup.
     *
     * @param lookup the lookup to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated lookup,
     * or with status {@code 400 (Bad Request)} if the lookup is not valid,
     * or with status {@code 500 (Internal Server Error)} if the lookup couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/lookups")
    public ResponseEntity<Lookup> updateLookup(@Valid @RequestBody Lookup lookup) throws URISyntaxException {
        log.debug("REST request to update Lookup : {}", lookup);
        if (lookup.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        Lookup result = lookupRepository.save(lookup);
        return ResponseEntity
            .ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, lookup.getId().toString()))
            .body(result);
    }

    /**
     * {@code GET  /lookups} : get all the lookups.
     *
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of lookups in body.
     */
    @GetMapping("/lookups")
    public List<Lookup> getAllLookups() {
        log.debug("REST request to get all Lookups");
        return lookupRepository.findAll();
    }

    @GetMapping("/lookups/parent/{id}")
    public List<Lookup> getAllLookupsByParent(@PathVariable Long id) {
        log.debug("REST request to get all Lookups");
        return lookupRepository.findAllByParentId(id);
    }

    /**
     * {@code GET  /lookups/:id} : get the "id" lookup.
     *
     * @param id the id of the lookup to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the lookup, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/lookups/{id}")
    public ResponseEntity<Lookup> getLookup(@PathVariable Long id) {
        log.debug("REST request to get Lookup : {}", id);
        Optional<Lookup> lookup = lookupRepository.findById(id);
        return ResponseUtil.wrapOrNotFound(lookup);
    }

    /**
     * {@code DELETE  /lookups/:id} : delete the "id" lookup.
     *
     * @param id the id of the lookup to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/lookups/{id}")
    public ResponseEntity<Void> deleteLookup(@PathVariable Long id) {
        log.debug("REST request to delete Lookup : {}", id);
        lookupRepository.deleteById(id);
        return ResponseEntity
            .noContent()
            .headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, id.toString()))
            .build();
    }
}
