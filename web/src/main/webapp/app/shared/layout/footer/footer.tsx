import './footer.scss';

import React from 'react';
import { Translate } from 'react-jhipster';
import { Col, Row } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = props => (
  <div className="footer page-content">
    <Row>
      <Col md="4" className="text-center">
        <p className="h3 mb-4">
          <Translate contentKey="footer.adress">Adres</Translate>
        </p>
        <p>
          Muallimköy Mah., Deniz Cd. No:143-5, <br /> 41400 Gebze/Kocaeli
        </p>
        <p className="h3">
          <Translate contentKey="footer.phone">Telefon</Translate>
        </p>
        <p>
          +90 505 500 55 00
        </p>
        <p className="h3">
          <Translate contentKey="footer.mail">E-mail</Translate>
        </p>
        <a href="mailto:info@Test.net">info@Test.net</a>
      </Col>
      <Col md="4" className="text-center">
        <p className="h3 mb-4">
          <Translate contentKey="footer.social">Sosyal Medya</Translate>
        </p>
        <a href="facebook.com" className="mx-3"><FontAwesomeIcon icon={faFacebook} size="4x"/></a>
        <a href="instagram.com" className="mx-3"><FontAwesomeIcon icon={faInstagram} size="4x" /></a>
        <a href="twitter.com" className="mx-3"><FontAwesomeIcon icon={faTwitter} size="4x" /></a>
      </Col>
      <Col md="4" className="text-center">
        <p className="h3 mb-4">
          <Translate contentKey="footer.others">Diğer Linkler</Translate>
        </p>
        <p>
          <a href="#"> <Translate contentKey="aboutUs">S.S.S</Translate></a>
        </p>
        <p>
          <a href="#"> <Translate contentKey="contact">İletişim</Translate></a>
        </p>
        <p>
          <a href="/account/register"> <Translate contentKey="signUp">Kayıt Ol</Translate></a>
        </p>



      </Col>
    </Row>
  </div>
);

export default Footer;
