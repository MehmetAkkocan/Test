import './home.scss';

import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import { Translate } from 'react-jhipster';
import { connect } from 'react-redux';
import { Row, Col, Alert, Button, NavLink, Table, Card, CardTitle, CardBody, CardText } from 'reactstrap';

import { IRootState } from 'app/shared/reducers';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CardAdd } from './card-components';

export type IHomeProp = StateProps;

export const Home = (props: IHomeProp) => {
  const { account } = props;

  return (
    <div>
      {/* <Col md="9">
        <h2>
          <Translate contentKey="home.title">Welcome, Java Hipster!</Translate>
        </h2>
        <p className="lead">
          <Translate contentKey="home.subtitle">This is your homepage</Translate>
        </p>
        {account && account.login ? (
          <div>
            <Alert color="success">
              <Translate contentKey="home.logged.message" interpolate={{ username: account.login }}>
                You are logged in as user {account.login}.
              </Translate>
            </Alert>
          </div>
        ) : (
          <div>
            <Alert color="warning">
              <Translate contentKey="global.messages.info.authenticated.prefix">If you want to </Translate>
              <Link to="/login" className="alert-link">
                <Translate contentKey="global.messages.info.authenticated.link"> sign in</Translate>
              </Link>
              <Translate contentKey="global.messages.info.authenticated.suffix">
                , you can try the default accounts:
                <br />- Administrator (login=&quot;admin&quot; and password=&quot;admin&quot;)
                <br />- User (login=&quot;user&quot; and password=&quot;user&quot;).
              </Translate>
            </Alert>

            <Alert color="warning">
              <Translate contentKey="global.messages.info.register.noaccount">You do not have an account yet?</Translate>&nbsp;
              <Link to="/account/register" className="alert-link">
                <Translate contentKey="global.messages.info.register.link">Register a new account</Translate>
              </Link>
            </Alert>
          </div>
        )}
        <p>
          <Translate contentKey="home.question">If you have any question on JHipster:</Translate>
        </p>

        <ul>
          <li>
            <a href="https://www.jhipster.tech/" target="_blank" rel="noopener noreferrer">
              <Translate contentKey="home.link.homepage">JHipster homepage</Translate>
            </a>
          </li>
          <li>
            <a href="http://stackoverflow.com/tags/jhipster/info" target="_blank" rel="noopener noreferrer">
              <Translate contentKey="home.link.stackoverflow">JHipster on Stack Overflow</Translate>
            </a>
          </li>
          <li>
            <a href="https://github.com/jhipster/generator-jhipster/issues?state=open" target="_blank" rel="noopener noreferrer">
              <Translate contentKey="home.link.bugtracker">JHipster bug tracker</Translate>
            </a>
          </li>
          <li>
            <a href="https://gitter.im/jhipster/generator-jhipster" target="_blank" rel="noopener noreferrer">
              <Translate contentKey="home.link.chat">JHipster public chat room</Translate>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/jhipster" target="_blank" rel="noopener noreferrer">
              <Translate contentKey="home.link.follow">follow @jhipster on Twitter</Translate>
            </a>
          </li>
        </ul>

        <p>
          <Translate contentKey="home.like">If you like JHipster, do not forget to give us a star on</Translate>{' '}
          <a href="https://github.com/jhipster/generator-jhipster" target="_blank" rel="noopener noreferrer">
            Github
          </a>
          !
        </p>
      </Col>
      <Col md="3" className="pad">
        <span className="hipster rounded" />
      </Col> */}
      <div className="d-flex justify-content-between">
        <Col md="6" style={{ backgroundColor: '#1f1d90' }}>
          <Row>
            <Col md="6">
            </Col>
            <Col md="6">
              <div className="bg-box">
                <h3 className="text-center text-primary"><Translate contentKey="home.ucarrier">Araç Sahibi Misiniz?</Translate></h3>
                <hr />
                <div className="text-center">
                  <p><b>Test </b>  - Yeni nesil yük bulma platformu</p>
                  <p>Her zaman yükünüzü buradan bulabilirsiniz</p>
                  <p></p>
                  <Button color="primary" type="submit">

                    <NavLink tag={Link} to="/lookup/wizard">
                      <Translate contentKey="home.loadsearch"></Translate>
                    </NavLink>
                  </Button>

                </div>
              </div>
            </Col>
          </Row>
        </Col>
        <Col md="6" style={{ backgroundColor: '#121d30' }}>
          <Row>
            <Col md="6">
              <div className="bg-box">
                <h3 className="text-center text-primary"><Translate contentKey="home.uowner">Araç Sahibi Misiniz?</Translate></h3>
                <hr />
                <div className="text-center">
                  <p><b>Test </b>  - Yeni nesil yük bulma platformu</p>
                  <p>Yükünüzü taşıyacak kişileri buradan bulabilirsiniz</p>
                  <p></p>
                  <Button color="primary" type="submit">

                    <NavLink tag={Link} to="/cargo/new">
                      <Translate contentKey="home.loadadd"></Translate>
                    </NavLink>
                  </Button>

                </div>
              </div>
            </Col>
            <Col md="6">
            </Col>
          </Row>
        </Col>
      </div>
      <Row>
        <Col>
          <h2 className="text-center text-primary p-5">En Yeni İlanlar</h2>
          {/* table */}
          <div className="table-responsive col-8 d-flex justify-center m-auto text-center">
          <Table responsive>
            <thead>
              <tr>                
                
                <th>
                  <Translate contentKey="TestApp.cargo.cargodescription">Cargodescription</Translate>
                </th>               
                <th>
                  <Translate contentKey="TestApp.cargo.updateDate">Update Date</Translate>
                </th>                
                <th>
                  <Translate contentKey="TestApp.cargo.sourcecity">Sourcecity</Translate>
                </th>
                <th>
                  <Translate contentKey="TestApp.cargo.sourcedistinct">Sourcedistinct</Translate>
                </th>
                <th>
                  <Translate contentKey="TestApp.cargo.vehicletype">Vehicletype</Translate>
                </th>
                <th>
                  <Translate contentKey="TestApp.cargo.vehiclecasetype">Vehiclecasetype</Translate>
                </th>
                <th>
                  <Translate contentKey="TestApp.cargo.cargotype">Cargotype</Translate>
                </th>
                <th>
                  <Translate contentKey="TestApp.cargo.destinationcity">Destinationcity</Translate>
                </th>
                <th>
                  <Translate contentKey="TestApp.cargo.destinationdistinct">Destinationdistinct</Translate>
                </th>
                <th />
              </tr>
            </thead>
          </Table>
</div>
        </Col>
      </Row>
      <Row>
        <div className="w-100 bg-box p-5">
          <h2 className="text-center text-primary mb-5">Mobil Uygulama</h2>
          <div className="d-flex justify-content-center">
            <Col md="3">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ullam odio incidunt autem inventore! Consectetur similique doloribus tempora earum id, amet quia, ducimus, quas nisi corrupti eum eius natus aliquid?</p>
              <div className="d-flex justify-content-between mt-5">
                <Button color="dark" type="submit" href="https://play.google.com" target="_blank">
                  {/* src ref */}
                  <img src="https://truckerpath.com/assets/svg/google-play-white.svg" />
                </Button>
                <Button color="dark" type="submit" href="https://apps.apple.com" target="_blank">
                  <img src="https://truckerpath.com/assets/svg/app-store-white.svg" />
                </Button>
              </div>
            </Col>
            <Col md="3">
              <img src="https://www.andropedi.com/wp-content/uploads/2019/04/google-play-hata-cozumu.jpg.webp" className="img-fluid rounded-lg" />
            </Col>
          </div>
        </div>
      </Row>
      <Row>
        <div className="w-100 p-5">
          <h2 className="text-center text-primary mb-5">İletişim</h2>
          <div className="d-flex justify-content-around">
            {/* <Card className="rounded-2x bg-dark text-white text-center col-3">
              <CardBody>
                <FontAwesomeIcon icon="map-marked-alt" size="5x"></FontAwesomeIcon>
                <CardTitle className="fa-2x mt-3">Adres</CardTitle>
                <CardText className="fa-lg mt-3">
                  Osman Gazi Mah. 8. Sokak NO: 14/5 <br /> Çankaya/ANKARA
                </CardText>
              </CardBody>
            </Card> */}
            <CardAdd
              icon="map-marked-alt"
              titleContentKey="home.adress"
              cardText="Osman Gazi Mah. 8. Sokak NO: 14/5 Çankaya/ANKARA">
            </CardAdd>
            {/* <Card className="rounded-2x bg-dark text-white text-center col-3">
              <CardBody>
                <FontAwesomeIcon icon="phone-alt" size="5x"></FontAwesomeIcon>
                <CardTitle className="fa-2x mt-3">Telefon</CardTitle>
                <CardText className="fa-lg mt-3">
                  +90 505 500 55 00
                </CardText>
              </CardBody>
            </Card> */}
            <CardAdd
              icon="phone-alt"
              titleContentKey="home.phone"
              cardText="+90 505 500 55 00">
            </CardAdd>
            {/* <Card className="rounded-2x bg-dark text-white text-center col-3">
              <CardBody>
                <FontAwesomeIcon icon="envelope" size="5x"></FontAwesomeIcon>
                <CardTitle className="fa-2x mt-3">E-Mail</CardTitle>
                <CardText className="fa-lg mt-3">
                  info@Test.net
                </CardText>
              </CardBody>
            </Card> */}
            <CardAdd
              icon="envelope"
              titleContentKey="home.email"
              cardText="info@Test.net">
            </CardAdd>
          </div>

        </div>
      </Row>
      <Row>
        <div className="w-100 p-5">
          <h2 className="text-center text-primary mb-5">Hakkımızda</h2>
          <Col md="6" className="m-auto">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere est quidem, fugiat laboriosam, suscipit nobis dolores, incidunt hic fugit assumenda at! Perspiciatis molestias veniam molestiae id, ab esse nesciunt maxime?
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere est quidem, fugiat laboriosam, suscipit nobis dolores, incidunt hic fugit assumenda at! Perspiciatis molestias veniam molestiae id, ab esse nesciunt maxime?
          </p>
          </Col>
        </div>
      </Row>
    </div>
  );
};

const mapStateToProps = storeState => ({
  account: storeState.authentication.account,
  isAuthenticated: storeState.authentication.isAuthenticated,
});

type StateProps = ReturnType<typeof mapStateToProps>;

export default connect(mapStateToProps)(Home);
