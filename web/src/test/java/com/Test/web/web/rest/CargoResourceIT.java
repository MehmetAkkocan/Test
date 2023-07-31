package com.Test.web.web.rest;

import static com.Test.web.web.rest.TestUtil.sameInstant;
import static org.assertj.core.api.Assertions.assertThat;
import static org.hamcrest.Matchers.hasItem;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

import com.Test.web.RedisTestContainerExtension;
import com.Test.web.TestApp;
import com.Test.web.domain.Cargo;
import com.Test.web.repository.CargoRepository;
import com.Test.web.web.rest.CargoResource;

import java.time.Instant;
import java.time.Instant;
import java.time.ZoneId;
import java.time.ZoneOffset;
import java.time.ZonedDateTime;
import java.util.List;
import javax.persistence.EntityManager;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.transaction.annotation.Transactional;

/**
 * Integration tests for the {@link CargoResource} REST controller.
 */
@SpringBootTest(classes = TestApp.class)
@ExtendWith({ RedisTestContainerExtension.class, MockitoExtension.class })
@AutoConfigureMockMvc
@WithMockUser
public class CargoResourceIT {
    private static final String DEFAULT_UID = "AAAAAAAAAA";
    private static final String UPDATED_UID = "BBBBBBBBBB";

    private static final String DEFAULT_USER = "AAAAAAAAAA";
    private static final String UPDATED_USER = "BBBBBBBBBB";

    private static final String DEFAULT_SOURCEADDRESS = "AAAAAAAAAA";
    private static final String UPDATED_SOURCEADDRESS = "BBBBBBBBBB";

    private static final String DEFAULT_CARGODESCRIPTION = "1";
    private static final String UPDATED_CARGODESCRIPTION = "2";

    private static final String DEFAULT_DESTINATIONADDRESS = "AAAAAAAAAA";
    private static final String UPDATED_DESTINATIONADDRESS = "BBBBBBBBBB";

    private static final Instant DEFAULT_UPDATE_DATE = Instant.now();
    private static final Instant UPDATED_UPDATE_DATE = Instant.now();

    private static final Instant DEFAULT_CREATE_DATE = Instant.ofEpochMilli(0L);
    private static final Instant UPDATED_CREATE_DATE = Instant.ofEpochMilli(0L);

    // private static final ZonedDateTime DEFAULT_UPDATE_DATE = ZonedDateTime.ofInstant(Instant.ofEpochMilli(0L), ZoneOffset.UTC);
    // private static final ZonedDateTime UPDATED_UPDATE_DATE = ZonedDateTime.now(ZoneId.systemDefault()).withNano(0);

    // private static final ZonedDateTime DEFAULT_CREATE_DATE = ZonedDateTime.ofInstant(Instant.ofEpochMilli(0L), ZoneOffset.UTC);
    // private static final ZonedDateTime UPDATED_CREATE_DATE = ZonedDateTime.now(ZoneId.systemDefault()).withNano(0);

    @Autowired
    private CargoRepository cargoRepository;

    @Autowired
    private EntityManager em;

    @Autowired
    private MockMvc restCargoMockMvc;

    private Cargo cargo;

    /**
     * Create an entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static Cargo createEntity(EntityManager em) {
        Cargo cargo = new Cargo()
            .uid(DEFAULT_UID)
            //          .user(DEFAULT_USER)
            .sourceaddress(DEFAULT_SOURCEADDRESS)
            .cargodescription(DEFAULT_CARGODESCRIPTION)
            .destinationaddress(DEFAULT_DESTINATIONADDRESS)
            .updateDate(DEFAULT_UPDATE_DATE)
            .createDate(DEFAULT_CREATE_DATE);
        return cargo;
    }

    /**
     * Create an updated entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static Cargo createUpdatedEntity(EntityManager em) {
        Cargo cargo = new Cargo()
            .uid(UPDATED_UID)
            //       .user(UPDATED_USER)
            .sourceaddress(UPDATED_SOURCEADDRESS)
            .cargodescription(UPDATED_CARGODESCRIPTION)
            .destinationaddress(UPDATED_DESTINATIONADDRESS)
            .updateDate(UPDATED_UPDATE_DATE)
            .createDate(UPDATED_CREATE_DATE);
        return cargo;
    }

    @BeforeEach
    public void initTest() {
        cargo = createEntity(em);
    }

    @Test
    @Transactional
    public void createCargo() throws Exception {
        int databaseSizeBeforeCreate = cargoRepository.findAll().size();
        // Create the Cargo
        restCargoMockMvc
            .perform(post("/api/cargos").contentType(MediaType.APPLICATION_JSON).content(TestUtil.convertObjectToJsonBytes(cargo)))
            .andExpect(status().isCreated());

        // Validate the Cargo in the database
        List<Cargo> cargoList = cargoRepository.findAll();
        assertThat(cargoList).hasSize(databaseSizeBeforeCreate + 1);
        Cargo testCargo = cargoList.get(cargoList.size() - 1);
        assertThat(testCargo.getUid()).isEqualTo(DEFAULT_UID);
        //       assertThat(testCargo.getUser()).isEqualTo(DEFAULT_USER);
        assertThat(testCargo.getSourceaddress()).isEqualTo(DEFAULT_SOURCEADDRESS);
        assertThat(testCargo.getCargodescription()).isEqualTo(DEFAULT_CARGODESCRIPTION);
        assertThat(testCargo.getDestinationaddress()).isEqualTo(DEFAULT_DESTINATIONADDRESS);
        assertThat(testCargo.getUpdateDate()).isEqualTo(DEFAULT_UPDATE_DATE);
        assertThat(testCargo.getCreateDate()).isEqualTo(DEFAULT_CREATE_DATE);
    }

    @Test
    @Transactional
    public void createCargoWithExistingId() throws Exception {
        int databaseSizeBeforeCreate = cargoRepository.findAll().size();

        // Create the Cargo with an existing ID
        cargo.setId(1L);

        // An entity with an existing ID cannot be created, so this API call must fail
        restCargoMockMvc
            .perform(post("/api/cargos").contentType(MediaType.APPLICATION_JSON).content(TestUtil.convertObjectToJsonBytes(cargo)))
            .andExpect(status().isBadRequest());

        // Validate the Cargo in the database
        List<Cargo> cargoList = cargoRepository.findAll();
        assertThat(cargoList).hasSize(databaseSizeBeforeCreate);
    }

    @Test
    @Transactional
    public void checkUidIsRequired() throws Exception {
        int databaseSizeBeforeTest = cargoRepository.findAll().size();
        // set the field null
        cargo.setUid(null);

        // Create the Cargo, which fails.

        restCargoMockMvc
            .perform(post("/api/cargos").contentType(MediaType.APPLICATION_JSON).content(TestUtil.convertObjectToJsonBytes(cargo)))
            .andExpect(status().isBadRequest());

        List<Cargo> cargoList = cargoRepository.findAll();
        assertThat(cargoList).hasSize(databaseSizeBeforeTest);
    }

    // @Test
    // @Transactional
    // public void checkUserIsRequired() throws Exception {
    //     int databaseSizeBeforeTest = cargoRepository.findAll().size();
    //     // set the field null
    // //    cargo.setUser(null);

    //     // Create the Cargo, which fails.

    //     restCargoMockMvc.perform(post("/api/cargos")
    //         .contentType(MediaType.APPLICATION_JSON)
    //         .content(TestUtil.convertObjectToJsonBytes(cargo)))
    //         .andExpect(status().isBadRequest());

    //     List<Cargo> cargoList = cargoRepository.findAll();
    //     assertThat(cargoList).hasSize(databaseSizeBeforeTest);
    // }

    @Test
    @Transactional
    public void checkSourceaddressIsRequired() throws Exception {
        int databaseSizeBeforeTest = cargoRepository.findAll().size();
        // set the field null
        cargo.setSourceaddress(null);

        // Create the Cargo, which fails.

        restCargoMockMvc
            .perform(post("/api/cargos").contentType(MediaType.APPLICATION_JSON).content(TestUtil.convertObjectToJsonBytes(cargo)))
            .andExpect(status().isBadRequest());

        List<Cargo> cargoList = cargoRepository.findAll();
        assertThat(cargoList).hasSize(databaseSizeBeforeTest);
    }

    @Test
    @Transactional
    public void checkCargodescriptionIsRequired() throws Exception {
        int databaseSizeBeforeTest = cargoRepository.findAll().size();
        // set the field null
        cargo.setCargodescription(null);

        // Create the Cargo, which fails.

        restCargoMockMvc
            .perform(post("/api/cargos").contentType(MediaType.APPLICATION_JSON).content(TestUtil.convertObjectToJsonBytes(cargo)))
            .andExpect(status().isBadRequest());

        List<Cargo> cargoList = cargoRepository.findAll();
        assertThat(cargoList).hasSize(databaseSizeBeforeTest);
    }

    @Test
    @Transactional
    public void checkDestinationaddressIsRequired() throws Exception {
        int databaseSizeBeforeTest = cargoRepository.findAll().size();
        // set the field null
        cargo.setDestinationaddress(null);

        // Create the Cargo, which fails.

        restCargoMockMvc
            .perform(post("/api/cargos").contentType(MediaType.APPLICATION_JSON).content(TestUtil.convertObjectToJsonBytes(cargo)))
            .andExpect(status().isBadRequest());

        List<Cargo> cargoList = cargoRepository.findAll();
        assertThat(cargoList).hasSize(databaseSizeBeforeTest);
    }

    @Test
    @Transactional
    public void checkUpdateDateIsRequired() throws Exception {
        int databaseSizeBeforeTest = cargoRepository.findAll().size();
        // set the field null
        cargo.setUpdateDate(null);

        // Create the Cargo, which fails.

        restCargoMockMvc
            .perform(post("/api/cargos").contentType(MediaType.APPLICATION_JSON).content(TestUtil.convertObjectToJsonBytes(cargo)))
            .andExpect(status().isBadRequest());

        List<Cargo> cargoList = cargoRepository.findAll();
        assertThat(cargoList).hasSize(databaseSizeBeforeTest);
    }

    @Test
    @Transactional
    public void checkCreateDateIsRequired() throws Exception {
        int databaseSizeBeforeTest = cargoRepository.findAll().size();
        // set the field null
        cargo.setCreateDate(null);

        // Create the Cargo, which fails.

        restCargoMockMvc
            .perform(post("/api/cargos").contentType(MediaType.APPLICATION_JSON).content(TestUtil.convertObjectToJsonBytes(cargo)))
            .andExpect(status().isBadRequest());

        List<Cargo> cargoList = cargoRepository.findAll();
        assertThat(cargoList).hasSize(databaseSizeBeforeTest);
    }

    @Test
    @Transactional
    public void getAllCargos() throws Exception {
        // Initialize the database
        cargoRepository.saveAndFlush(cargo);

        // Get all the cargoList
        restCargoMockMvc
            .perform(get("/api/cargos?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(cargo.getId().intValue())))
            .andExpect(jsonPath("$.[*].uid").value(hasItem(DEFAULT_UID)))
            //    .andExpect(jsonPath("$.[*].user").value(hasItem(DEFAULT_USER)))
            .andExpect(jsonPath("$.[*].sourceaddress").value(hasItem(DEFAULT_SOURCEADDRESS)))
            .andExpect(jsonPath("$.[*].cargodescription").value(hasItem(DEFAULT_CARGODESCRIPTION)))
            .andExpect(jsonPath("$.[*].destinationaddress").value(hasItem(DEFAULT_DESTINATIONADDRESS)));
        // .andExpect(jsonPath("$.[*].updateDate").value(hasItem(sameInstant(DEFAULT_UPDATE_DATE))))
        // .andExpect(jsonPath("$.[*].createDate").value(hasItem(sameInstant(DEFAULT_CREATE_DATE))));
    }

    @Test
    @Transactional
    public void getCargo() throws Exception {
        // Initialize the database
        cargoRepository.saveAndFlush(cargo);

        // Get the cargo
        restCargoMockMvc
            .perform(get("/api/cargos/{id}", cargo.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_VALUE))
            .andExpect(jsonPath("$.id").value(cargo.getId().intValue()))
            .andExpect(jsonPath("$.uid").value(DEFAULT_UID))
            //   .andExpect(jsonPath("$.user").value(DEFAULT_USER))
            .andExpect(jsonPath("$.sourceaddress").value(DEFAULT_SOURCEADDRESS))
            .andExpect(jsonPath("$.cargodescription").value(DEFAULT_CARGODESCRIPTION))
            .andExpect(jsonPath("$.destinationaddress").value(DEFAULT_DESTINATIONADDRESS));
        // .andExpect(jsonPath("$.updateDate").value(sameInstant(DEFAULT_UPDATE_DATE)))
        // .andExpect(jsonPath("$.createDate").value(sameInstant(DEFAULT_CREATE_DATE)));
    }

    @Test
    @Transactional
    public void getNonExistingCargo() throws Exception {
        // Get the cargo
        restCargoMockMvc.perform(get("/api/cargos/{id}", Long.MAX_VALUE)).andExpect(status().isNotFound());
    }

    @Test
    @Transactional
    public void updateCargo() throws Exception {
        // Initialize the database
        cargoRepository.saveAndFlush(cargo);

        int databaseSizeBeforeUpdate = cargoRepository.findAll().size();

        // Update the cargo
        Cargo updatedCargo = cargoRepository.findById(cargo.getId()).get();
        // Disconnect from session so that the updates on updatedCargo are not directly saved in db
        em.detach(updatedCargo);
        updatedCargo
            .uid(UPDATED_UID)
            //   .user(UPDATED_USER)
            .sourceaddress(UPDATED_SOURCEADDRESS)
            .cargodescription(UPDATED_CARGODESCRIPTION)
            .destinationaddress(UPDATED_DESTINATIONADDRESS)
            .updateDate(UPDATED_UPDATE_DATE)
            .createDate(UPDATED_CREATE_DATE);

        restCargoMockMvc
            .perform(put("/api/cargos").contentType(MediaType.APPLICATION_JSON).content(TestUtil.convertObjectToJsonBytes(updatedCargo)))
            .andExpect(status().isOk());

        // Validate the Cargo in the database
        List<Cargo> cargoList = cargoRepository.findAll();
        assertThat(cargoList).hasSize(databaseSizeBeforeUpdate);
        Cargo testCargo = cargoList.get(cargoList.size() - 1);
        assertThat(testCargo.getUid()).isEqualTo(UPDATED_UID);
        //     assertThat(testCargo.getUser()).isEqualTo(UPDATED_USER);
        assertThat(testCargo.getSourceaddress()).isEqualTo(UPDATED_SOURCEADDRESS);
        assertThat(testCargo.getCargodescription()).isEqualTo(UPDATED_CARGODESCRIPTION);
        assertThat(testCargo.getDestinationaddress()).isEqualTo(UPDATED_DESTINATIONADDRESS);
        assertThat(testCargo.getUpdateDate()).isEqualTo(UPDATED_UPDATE_DATE);
        assertThat(testCargo.getCreateDate()).isEqualTo(UPDATED_CREATE_DATE);
    }

    @Test
    @Transactional
    public void updateNonExistingCargo() throws Exception {
        int databaseSizeBeforeUpdate = cargoRepository.findAll().size();

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        restCargoMockMvc
            .perform(put("/api/cargos").contentType(MediaType.APPLICATION_JSON).content(TestUtil.convertObjectToJsonBytes(cargo)))
            .andExpect(status().isBadRequest());

        // Validate the Cargo in the database
        List<Cargo> cargoList = cargoRepository.findAll();
        assertThat(cargoList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    public void deleteCargo() throws Exception {
        // Initialize the database
        cargoRepository.saveAndFlush(cargo);

        int databaseSizeBeforeDelete = cargoRepository.findAll().size();

        // Delete the cargo
        restCargoMockMvc
            .perform(delete("/api/cargos/{id}", cargo.getId()).accept(MediaType.APPLICATION_JSON))
            .andExpect(status().isNoContent());

        // Validate the database contains one less item
        List<Cargo> cargoList = cargoRepository.findAll();
        assertThat(cargoList).hasSize(databaseSizeBeforeDelete - 1);
    }
}
