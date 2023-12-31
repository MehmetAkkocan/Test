package com.Test.web.domain;

import com.fasterxml.jackson.annotation.JsonGetter;
import java.io.Serializable;
import java.time.Instant;
import java.time.LocalDate;
import java.time.ZonedDateTime;
import java.util.Date;
import javax.annotation.Nullable;
import javax.persistence.*;
import javax.persistence.Column;
import javax.persistence.EntityListeners;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;
import javax.persistence.PostLoad;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;
import javax.validation.constraints.NotNull;
//import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.Where;
import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedBy;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

// import lombok.Data;

//@Entity
//@Inheritance(strategy=InheritanceType.TABLE_PER_CLASS)
//@Where(clause="is_deleted=0")
//@Where(clause = "isdeleted=0")
// @Data
@MappedSuperclass
//@Entity
//@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@EntityListeners(AuditingEntityListener.class)
public abstract class BaseEntityGeneric<T extends Serializable> {
    // @Id
    // @GeneratedValue(strategy = GenerationType.IDENTITY)

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    @Column(name = "id", nullable = false, updatable = false)
    protected T id;

    public T getId() {
        return id;
    }

    @Column(name = "uid")
    protected String uid;

    //@NotNull
    @Column(name = "is_deleted", nullable = false)
    protected Boolean isdeleted = false;

    public Boolean isDeleted() {
        return isdeleted;
    }

    @CreatedBy
    //  @NotNull
    @Column(name = "create_by", nullable = false)
    protected String createBy;

    @LastModifiedBy
    @Column(name = "update_by")
    protected String updateBy;

    @LastModifiedDate
    @Column(name = "update_date")
    protected Instant updateDate;

    @CreatedDate
    @Column(name = "create_date", nullable = false)
    protected Instant createDate;

    public void setId(T id) {
        this.id = id;
    }

    @PrePersist
    protected void onCreate() {
        //	createdate = new Date();
        isdeleted = false;
    }

    /*@PreUpdate
	protected void onUpdate() {
		updatedate = new Date();
		
	}
	*/
    @PostLoad
    protected void onload() {
        if (isdeleted == null) {
            isdeleted = true;
        }
    }

    public String getUid() {
        return uid;
    }

    public BaseEntityGeneric uid(String uid) {
        this.uid = uid;
        return this;
    }

    public void setUid(String uid) {
        this.uid = uid;
    }

    public String getCreateBy() {
        return createBy;
    }

    public BaseEntityGeneric createBy(String createBy) {
        this.createBy = createBy;
        return this;
    }

    public void setCreateBy(String createBy) {
        this.createBy = createBy;
    }

    public String getUpdateBy() {
        return updateBy;
    }

    public BaseEntityGeneric updateBy(String updateBy) {
        this.updateBy = updateBy;
        return this;
    }

    public void setUpdateBy(String updateBy) {
        this.updateBy = updateBy;
    }

    public Instant getUpdateDate() {
        return updateDate;
    }

    public BaseEntityGeneric updateDate(Instant updateDate) {
        this.updateDate = updateDate;
        return this;
    }

    public void setUpdateDate(Instant updateDate) {
        this.updateDate = updateDate;
    }

    public Instant getCreateDate() {
        return createDate;
    }

    public BaseEntityGeneric createDate(Instant createDate) {
        this.createDate = createDate;
        return this;
    }

    public void setCreateDate(Instant createDate) {
        this.createDate = createDate;
    }
}
