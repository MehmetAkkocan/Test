package com.Test.web.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.io.Serializable;
import java.time.Instant;
import java.time.LocalDate;
import java.time.ZonedDateTime;
import javax.persistence.*;
import javax.validation.constraints.*;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

/**
 * A Cargo.
 */
@Entity
@Table(name = "cargo")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class Cargo extends BaseEntityLongUser {
    private static final long serialVersionUID = 1L;

    // @Id
    // @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    // @SequenceGenerator(name = "sequenceGenerator")
    // private Long id;

    // @NotNull
    // @Column(name = "uid", nullable = false)
    // private String uid;

    // @NotNull
    // @Column(name = "jhi_user", nullable = false)
    // private String user;

    @NotNull
    @Column(name = "sourceaddress", nullable = false)
    private String sourceaddress;

    @NotNull
    @Column(name = "cargodescription", nullable = false)
    private String cargodescription;

    @NotNull
    @Column(name = "destinationaddress", nullable = false)
    private String destinationaddress;

    // @NotNull
    // @Column(name = "update_date", nullable = false)
    // private ZonedDateTime updateDate;

    // @NotNull
    // @Column(name = "create_date", nullable = false)
    // private ZonedDateTime createDate;

    @ManyToOne
    @JsonIgnoreProperties(value = "cargos", allowSetters = true)
    private Lookup sourcecity;

    @ManyToOne
    @JsonIgnoreProperties(value = "cargos", allowSetters = true)
    private Lookup sourcedistinct;

    @ManyToOne
    @JsonIgnoreProperties(value = "cargos", allowSetters = true)
    private Lookup vehicletype;

    @ManyToOne
    @JsonIgnoreProperties(value = "cargos", allowSetters = true)
    private Lookup vehiclecasetype;

    @ManyToOne
    @JsonIgnoreProperties(value = "cargos", allowSetters = true)
    private Lookup cargotype;

    @ManyToOne
    @JsonIgnoreProperties(value = "cargos", allowSetters = true)
    private Lookup destinationcity;

    @ManyToOne
    @JsonIgnoreProperties(value = "cargos", allowSetters = true)
    private Lookup destinationdistinct;

    // jhipster-needle-entity-add-field - JHipster will add fields here
    // public Long getId() {
    //     return id;
    // }

    // public void setId(Long id) {
    //     this.id = id;
    // }

    public String getUid() {
        return super.uid;
    }

    public Cargo uid(String uid) {
        this.uid = uid;
        return this;
    }

    public void setUid(String uid) {
        super.uid = uid;
    }

    // public String getUser() {
    //     return user;
    // }

    // public Cargo user(String user) {
    //     super.user = user;
    //     return this;
    // }

    // public void setUser(String user) {
    //     this.user = user;
    // }

    public String getSourceaddress() {
        return sourceaddress;
    }

    public Cargo sourceaddress(String sourceaddress) {
        this.sourceaddress = sourceaddress;
        return this;
    }

    public void setSourceaddress(String sourceaddress) {
        this.sourceaddress = sourceaddress;
    }

    public String getCargodescription() {
        return cargodescription;
    }

    public Cargo cargodescription(String cargodescription) {
        this.cargodescription = cargodescription;
        return this;
    }

    public void setCargodescription(String cargodescription) {
        this.cargodescription = cargodescription;
    }

    public String getDestinationaddress() {
        return destinationaddress;
    }

    public Cargo destinationaddress(String destinationaddress) {
        this.destinationaddress = destinationaddress;
        return this;
    }

    public void setDestinationaddress(String destinationaddress) {
        this.destinationaddress = destinationaddress;
    }

    // public ZonedDateTime getUpdateDate() {
    //     return updateDate;
    // }

    public Cargo updateDate(Instant updateDate) {
        super.updateDate = updateDate;
        return this;
    }

    // public void setUpdateDate(ZonedDateTime updateDate) {
    //     this.updateDate = updateDate;
    // }

    // public ZonedDateTime getCreateDate() {
    //     return createDate;
    // }

    public Cargo createDate(Instant createDate) {
        super.createDate = createDate;
        return this;
    }

    // public void setCreateDate(ZonedDateTime createDate) {
    //     this.createDate = createDate;
    // }

    public Lookup getSourcecity() {
        return sourcecity;
    }

    public Cargo sourcecity(Lookup lookup) {
        this.sourcecity = lookup;
        return this;
    }

    public void setSourcecity(Lookup lookup) {
        this.sourcecity = lookup;
    }

    public Lookup getSourcedistinct() {
        return sourcedistinct;
    }

    public Cargo sourcedistinct(Lookup lookup) {
        this.sourcedistinct = lookup;
        return this;
    }

    public void setSourcedistinct(Lookup lookup) {
        this.sourcedistinct = lookup;
    }

    public Lookup getVehicletype() {
        return vehicletype;
    }

    public Cargo vehicletype(Lookup lookup) {
        this.vehicletype = lookup;
        return this;
    }

    public void setVehicletype(Lookup lookup) {
        this.vehicletype = lookup;
    }

    public Lookup getVehiclecasetype() {
        return vehiclecasetype;
    }

    public Cargo vehiclecasetype(Lookup lookup) {
        this.vehiclecasetype = lookup;
        return this;
    }

    public void setVehiclecasetype(Lookup lookup) {
        this.vehiclecasetype = lookup;
    }

    public Lookup getCargotype() {
        return cargotype;
    }

    public Cargo cargotype(Lookup lookup) {
        this.cargotype = lookup;
        return this;
    }

    public void setCargotype(Lookup lookup) {
        this.cargotype = lookup;
    }

    public Lookup getDestinationcity() {
        return destinationcity;
    }

    public Cargo destinationcity(Lookup lookup) {
        this.destinationcity = lookup;
        return this;
    }

    public void setDestinationcity(Lookup lookup) {
        this.destinationcity = lookup;
    }

    public Lookup getDestinationdistinct() {
        return destinationdistinct;
    }

    public Cargo destinationdistinct(Lookup lookup) {
        this.destinationdistinct = lookup;
        return this;
    }

    public void setDestinationdistinct(Lookup lookup) {
        this.destinationdistinct = lookup;
    }

    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Cargo)) {
            return false;
        }
        return id != null && id.equals(((Cargo) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "Cargo{" +
            "id=" + getId() +
            ", uid='" + getUid() + "'" +
            // ", user='" + getUser() + "'" +
            ", sourceaddress='" + getSourceaddress() + "'" +
            ", cargodescription=" + getCargodescription() +
            ", destinationaddress='" + getDestinationaddress() + "'" +
            ", updateDate='" + getUpdateDate() + "'" +
            ", createDate='" + getCreateDate() + "'" +
            "}";
    }
}
