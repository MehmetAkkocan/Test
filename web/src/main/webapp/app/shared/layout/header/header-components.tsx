import React from 'react';
import { Translate } from 'react-jhipster';

import { NavItem, NavLink, NavbarBrand } from 'reactstrap';
import { NavLink as Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import appConfig from 'app/config/constants';

export const BrandIcon = props => (
  <div {...props} className="brand-icon">
    <img src="content/images/logo-Test.png" alt="Logo" />
  </div>
);

export const Brand = props => (
  <NavbarBrand tag={Link} to="/" className="brand-logo">
    <BrandIcon />
    {/* <span className="brand-title">
      <Translate contentKey="global.title">Test</Translate>
    </span> */}
    <span className="navbar-version">{appConfig.VERSION}</span>
  </NavbarBrand>
);

export const Home = props => (
  <NavItem>
    <NavLink tag={Link} to="/" className="d-flex align-items-center">
      <FontAwesomeIcon icon="home" />
      <span>
        <Translate contentKey="global.menu.home">Home</Translate>
      </span>
    </NavLink>
  </NavItem>
);

export const CargoAdd = props => (
  <NavItem>
    <NavLink tag={Link} to="/cargo/new" className="d-flex align-items-center">
      <FontAwesomeIcon icon="plus" />
      <span>
      <Translate contentKey="TestApp.cargo.home.createLabel">Create new Cargo</Translate>
      </span>
    </NavLink>
  </NavItem>
);

export const CargoSearch = props => (
  <NavItem>
    <NavLink tag={Link} to="/lookup/wizard" className="d-flex align-items-center">
      <FontAwesomeIcon icon="search" />
      <span>
      <Translate contentKey="TestApp.lookup.home.createLabel">Create new Lookup</Translate>
      </span>
    </NavLink>
  </NavItem>
);
