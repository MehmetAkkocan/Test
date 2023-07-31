package com.Test.web.service.dto;

import com.Test.web.domain.Lookup;
import javax.validation.constraints.*;

public class CargoDTO extends BaseDTO {
    @NotNull
    private String user;

    @NotNull
    private String sourceaddress;

    @NotNull
    private String cargodescription;

    @NotNull
    private String destinationaddress;

    @NotNull
    private Lookup sourcecity;

    @NotNull
    private Lookup sourcedistinct;

    @NotNull
    private Lookup vehicletype;

    @NotNull
    private Lookup vehiclecasetype;

    @NotNull
    private Lookup cargotype;

    @NotNull
    private Lookup destinationcity;

    @NotNull
    private Lookup destinationdistinct;

    // jhipster-needle-entity-add-field - JHipster will add fields here

    public String getUser() {
        return user;
    }

    public CargoDTO user(String user) {
        this.user = user;
        return this;
    }

    public void setUser(String user) {
        this.user = user;
    }

    public String getSourceaddress() {
        return sourceaddress;
    }

    public CargoDTO sourceaddress(String sourceaddress) {
        this.sourceaddress = sourceaddress;
        return this;
    }

    public void setSourceaddress(String sourceaddress) {
        this.sourceaddress = sourceaddress;
    }

    public String getCargodescription() {
        return cargodescription;
    }

    public CargoDTO cargodescription(String cargodescription) {
        this.cargodescription = cargodescription;
        return this;
    }

    public void setCargodescription(String cargodescription) {
        this.cargodescription = cargodescription;
    }

    public String getDestinationaddress() {
        return destinationaddress;
    }

    public CargoDTO destinationaddress(String destinationaddress) {
        this.destinationaddress = destinationaddress;
        return this;
    }

    public void setDestinationaddress(String destinationaddress) {
        this.destinationaddress = destinationaddress;
    }

    public Lookup getSourcecity() {
        return sourcecity;
    }

    public CargoDTO sourcecity(Lookup lookup) {
        this.sourcecity = lookup;
        return this;
    }

    public void setSourcecity(Lookup lookup) {
        this.sourcecity = lookup;
    }

    public Lookup getSourcedistinct() {
        return sourcedistinct;
    }

    public CargoDTO sourcedistinct(Lookup lookup) {
        this.sourcedistinct = lookup;
        return this;
    }

    public void setSourcedistinct(Lookup lookup) {
        this.sourcedistinct = lookup;
    }

    public Lookup getVehicletype() {
        return vehicletype;
    }

    public CargoDTO vehicletype(Lookup lookup) {
        this.vehicletype = lookup;
        return this;
    }

    public void setVehicletype(Lookup lookup) {
        this.vehicletype = lookup;
    }

    public Lookup getVehiclecasetype() {
        return vehiclecasetype;
    }

    public CargoDTO vehiclecasetype(Lookup lookup) {
        this.vehiclecasetype = lookup;
        return this;
    }

    public void setVehiclecasetype(Lookup lookup) {
        this.vehiclecasetype = lookup;
    }

    public Lookup getCargotype() {
        return cargotype;
    }

    public CargoDTO cargotype(Lookup lookup) {
        this.cargotype = lookup;
        return this;
    }

    public void setCargotype(Lookup lookup) {
        this.cargotype = lookup;
    }

    public Lookup getDestinationcity() {
        return destinationcity;
    }

    public CargoDTO destinationcity(Lookup lookup) {
        this.destinationcity = lookup;
        return this;
    }

    public void setDestinationcity(Lookup lookup) {
        this.destinationcity = lookup;
    }

    public Lookup getDestinationdistinct() {
        return destinationdistinct;
    }

    public CargoDTO destinationdistinct(Lookup lookup) {
        this.destinationdistinct = lookup;
        return this;
    }

    public void setDestinationdistinct(Lookup lookup) {
        this.destinationdistinct = lookup;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

}
