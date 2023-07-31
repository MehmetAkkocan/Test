package com.Test.web.domain;

import javax.persistence.*;
import javax.persistence.MappedSuperclass;
import javax.validation.constraints.*;

@MappedSuperclass
public class BaseEntityLongUser extends BaseEntityGeneric<Long> {
    // @NotNull
    // @Column(name = "jhi_user", nullable = false)
    // protected String user;

    // public void setUser(String user) {
    //     this.user = user;
    // }

    // public String getUser() {
    //     return user;
    // }

}
