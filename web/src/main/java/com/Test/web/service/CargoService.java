package com.Test.web.service;

import com.Test.web.domain.Cargo;
import com.Test.web.repository.CargoRepository;
import com.Test.web.service.dto.CargoDTO;
import org.springframework.stereotype.Service;

@Service
public class CargoService extends BaseService<CargoRepository, Cargo, CargoDTO, Long> {}
