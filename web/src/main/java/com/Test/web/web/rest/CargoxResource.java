package com.Test.web.web.rest;

import com.Test.web.UserEntityRepository;
import com.Test.web.UserEntityRepository;
import com.Test.web.domain.Cargo;
import com.Test.web.domain.User;
import com.Test.web.repository.CargoRepository;
import com.Test.web.service.CargoService;
import com.Test.web.service.dto.CargoDTO;
import com.Test.web.web.rest.errors.BadRequestAlertException;
import io.github.jhipster.web.util.HeaderUtil;
import io.github.jhipster.web.util.ResponseUtil;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Optional;
import javax.validation.Valid;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

/**
 * REST controller for managing {@link com.Test.web.domain.Cargo}.
 */
@RestController
@RequestMapping("/api/cargox")
@Transactional
public class CargoxResource extends BaseUserController<CargoService, CargoDTO, Cargo, CargoRepository, Long> {
    //private final Logger log = LoggerFactory.getLogger(CargoResource.class);

    //    private static final String ENTITY_NAME = "cargo";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;
}
