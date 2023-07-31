package com.Test.web.web.rest;

import com.Test.web.UserEntityRepository;
import com.Test.web.domain.BaseEntityGeneric;
import com.Test.web.domain.User;
import com.Test.web.service.BaseService;
import com.Test.web.service.UserService;
import com.Test.web.service.dto.BaseDTO;
import com.Test.web.web.rest.errors.BadRequestAlertException;
import io.github.jhipster.web.util.HeaderUtil;
import io.github.jhipster.web.util.ResponseUtil;
import java.io.Serializable;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Optional;
import javax.validation.Valid;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.RestController;

//@RestController
public abstract class BaseUserController<S extends BaseService<R, E, DTO, ID>, DTO extends BaseDTO, E extends BaseEntityGeneric, R extends UserEntityRepository<E, ID>, ID extends Serializable>
    extends BaseController<S, DTO, E, R, ID> {
    protected final Logger log = LoggerFactory.getLogger(BaseUserController.class);

    private static final String ENTITY_NAME = "questionAnswer";

    @Value("${jhipster.clientApp.name}")
    protected String applicationName;

    protected User user;

    @Autowired
    protected S service;

    @Autowired
    protected R repository;

    @Autowired
    private UserService userService;

    public void userGet() {
        if (
            SecurityContextHolder.getContext().getAuthentication() != null &&
            SecurityContextHolder.getContext().getAuthentication().isAuthenticated()
        ) {
            Optional<User> userLocal = userService.getUserWithAuthoritiesByLogin(
                SecurityContextHolder.getContext().getAuthentication().getName()
            );
            user = userLocal.orElse(new User());
            log.debug("***************** :" + user.getEmail());
        }
    }

    @GetMapping("/me")
    public List<E> getAllCargosByCreateBy() {
        log.debug("REST request to get all Cargos" + user.getEmail());
        return repository.findAllByCreateBy(user.getLogin());
    }
}
