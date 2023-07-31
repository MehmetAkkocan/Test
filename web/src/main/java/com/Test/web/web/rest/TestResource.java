package com.Test.web.web.rest;

import com.Test.web.domain.Cargo;
import com.Test.web.repository.CargoRepository;
import com.Test.web.service.CargoService;
import com.Test.web.service.dto.CargoDTO;
import com.Test.web.web.rest.errors.BadRequestAlertException;
import com.Test.web.web.websocket.ActivityService;
import com.Test.web.web.websocket.dto.ActivityDTO;
import io.github.jhipster.web.util.HeaderUtil;
import io.github.jhipster.web.util.ResponseUtil;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Optional;
import javax.validation.Valid;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.context.request.RequestContextHolder;

/**
 * REST controller for managing {@link com.productreactor.talentassessment.domain.Question}.
 */
@RestController
@RequestMapping("/api/Test")
@Transactional
public class TestResource extends BaseUserController<CargoService, CargoDTO, Cargo, CargoRepository, Long> {
    private final Logger log = LoggerFactory.getLogger(TestResource.class);

    private static final String ENTITY_NAME = "question";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    @Autowired
    private ActivityService activityService;

    @GetMapping("/list")
    public String getAllQuestionCorrectAnwswers() {
        log.debug("REST request to get all QuestionCorrectAnwswers");
        ActivityDTO activityDTO = new ActivityDTO();
        activityDTO.setSessionId(RequestContextHolder.currentRequestAttributes().getSessionId());
        activityDTO.setUserLogin(user.getLogin());
        activityDTO.setPage("deneme");

        //        activityDTO.setIpAddress(RequestContextHolder.currentRequestAttributes().a);

        // activityService.sendMessage(activityDTO);
        return "questionCorrectAnwswerRepository.findAll()";
    }
}
