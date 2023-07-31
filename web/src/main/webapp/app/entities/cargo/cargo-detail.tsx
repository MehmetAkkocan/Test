import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, ICrudGetAction, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './cargo.reducer';
import { ICargo } from 'app/shared/model/cargo.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface ICargoDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const CargoDetail = (props: ICargoDetailProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.id);
  }, []);

  const { cargoEntity } = props;
  return (
    <Row>
      <Col md="8">
        <h2>
          <Translate contentKey="TestApp.cargo.detail.title">Cargo</Translate> [<b>{cargoEntity.id}</b>]
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="uid">
              <Translate contentKey="TestApp.cargo.uid">Uid</Translate>
            </span>
          </dt>
          <dd>{cargoEntity.uid}</dd>
          <dt>
            <span id="user">
              <Translate contentKey="TestApp.cargo.user">User</Translate>
            </span>
          </dt>
          <dd>{cargoEntity.user}</dd>
          <dt>
            <span id="sourceaddress">
              <Translate contentKey="TestApp.cargo.sourceaddress">Sourceaddress</Translate>
            </span>
          </dt>
          <dd>{cargoEntity.sourceaddress}</dd>
          <dt>
            <span id="cargodescription">
              <Translate contentKey="TestApp.cargo.cargodescription">Cargodescription</Translate>
            </span>
          </dt>
          <dd>{cargoEntity.cargodescription}</dd>
          <dt>
            <span id="destinationaddress">
              <Translate contentKey="TestApp.cargo.destinationaddress">Destinationaddress</Translate>
            </span>
          </dt>
          <dd>{cargoEntity.destinationaddress}</dd>
          <dt>
            <span id="updateDate">
              <Translate contentKey="TestApp.cargo.updateDate">Update Date</Translate>
            </span>
          </dt>
          <dd>{cargoEntity.updateDate ? <TextFormat value={cargoEntity.updateDate} type="date" format={APP_DATE_FORMAT} /> : null}</dd>
          <dt>
            <span id="createDate">
              <Translate contentKey="TestApp.cargo.createDate">Create Date</Translate>
            </span>
          </dt>
          <dd>{cargoEntity.createDate ? <TextFormat value={cargoEntity.createDate} type="date" format={APP_DATE_FORMAT} /> : null}</dd>
          <dt>
            <Translate contentKey="TestApp.cargo.sourcecity">Sourcecity</Translate>
          </dt>
          <dd>{cargoEntity.sourcecity ? cargoEntity.sourcecity.name : ''}</dd>
          <dt>
            <Translate contentKey="TestApp.cargo.sourcedistinct">Sourcedistinct</Translate>
          </dt>
          <dd>{cargoEntity.sourcedistinct ? cargoEntity.sourcedistinct.name : ''}</dd>
          <dt>
            <Translate contentKey="TestApp.cargo.vehicletype">Vehicletype</Translate>
          </dt>
          <dd>{cargoEntity.vehicletype ? cargoEntity.vehicletype.name : ''}</dd>
          <dt>
            <Translate contentKey="TestApp.cargo.vehiclecasetype">Vehiclecasetype</Translate>
          </dt>
          <dd>{cargoEntity.vehiclecasetype ? cargoEntity.vehiclecasetype.name : ''}</dd>
          <dt>
            <Translate contentKey="TestApp.cargo.cargotype">Cargotype</Translate>
          </dt>
          <dd>{cargoEntity.cargotype ? cargoEntity.cargotype.name : ''}</dd>
          <dt>
            <Translate contentKey="TestApp.cargo.destinationcity">Destinationcity</Translate>
          </dt>
          <dd>{cargoEntity.destinationcity ? cargoEntity.destinationcity.name : ''}</dd>
          <dt>
            <Translate contentKey="TestApp.cargo.destinationdistinct">Destinationdistinct</Translate>
          </dt>
          <dd>{cargoEntity.destinationdistinct ? cargoEntity.destinationdistinct.name : ''}</dd>
        </dl>
        <Button tag={Link} to="/cargo" replace color="info">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/cargo/${cargoEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

const mapStateToProps = ({ cargo }: IRootState) => ({
  cargoEntity: cargo.entity,
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(CargoDetail);
