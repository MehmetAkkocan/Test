import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
import { Translate, ICrudGetAllAction, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './cargo.reducer';
import { ICargo } from 'app/shared/model/cargo.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface ICargoProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export const Cargo = (props: ICargoProps) => {
  useEffect(() => {
    props.getEntities();
  }, []);

  const { cargoList, match, loading } = props;
  return (
    <div>
      <h2 id="cargo-heading">
        <Translate contentKey="TestApp.cargo.home.title">Cargos</Translate>
        <Link to={`${match.url}/new`} className="btn btn-primary float-right jh-create-entity" id="jh-create-entity">
          <FontAwesomeIcon icon="plus" />
          &nbsp;
          <Translate contentKey="TestApp.cargo.home.createLabel">Create new Cargo</Translate>
        </Link>
      </h2>
      <div className="table-responsive">
        {cargoList && cargoList.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th>
                  <Translate contentKey="global.field.id">ID</Translate>
                </th>
                <th>
                  <Translate contentKey="TestApp.cargo.uid">Uid</Translate>
                </th>
                <th>
                  <Translate contentKey="TestApp.cargo.user">User</Translate>
                </th>
                <th>
                  <Translate contentKey="TestApp.cargo.sourceaddress">Sourceaddress</Translate>
                </th>
                <th>
                  <Translate contentKey="TestApp.cargo.cargodescription">Cargodescription</Translate>
                </th>
                <th>
                  <Translate contentKey="TestApp.cargo.destinationaddress">Destinationaddress</Translate>
                </th>
                <th>
                  <Translate contentKey="TestApp.cargo.updateDate">Update Date</Translate>
                </th>
                <th>
                  <Translate contentKey="TestApp.cargo.createDate">Create Date</Translate>
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
            <tbody>
              {cargoList.map((cargo, i) => (
                <tr key={`entity-${i}`}>
                  <td>
                    <Button tag={Link} to={`${match.url}/${cargo.id}`} color="link" size="sm">
                      {cargo.id}
                    </Button>
                  </td>
                  <td>{cargo.uid}</td>
                  <td>{cargo.user}</td>
                  <td>{cargo.sourceaddress}</td>
                  <td>{cargo.cargodescription}</td>
                  <td>{cargo.destinationaddress}</td>
                  <td>{cargo.updateDate ? <TextFormat type="date" value={cargo.updateDate} format={APP_DATE_FORMAT} /> : null}</td>
                  <td>{cargo.createDate ? <TextFormat type="date" value={cargo.createDate} format={APP_DATE_FORMAT} /> : null}</td>
                  <td>{cargo.sourcecity ? <Link to={`lookup/${cargo.sourcecity.id}`}>{cargo.sourcecity.name}</Link> : ''}</td>
                  <td>{cargo.sourcedistinct ? <Link to={`lookup/${cargo.sourcedistinct.id}`}>{cargo.sourcedistinct.name}</Link> : ''}</td>
                  <td>{cargo.vehicletype ? <Link to={`lookup/${cargo.vehicletype.id}`}>{cargo.vehicletype.name}</Link> : ''}</td>
                  <td>
                    {cargo.vehiclecasetype ? <Link to={`lookup/${cargo.vehiclecasetype.id}`}>{cargo.vehiclecasetype.name}</Link> : ''}
                  </td>
                  <td>{cargo.cargotype ? <Link to={`lookup/${cargo.cargotype.id}`}>{cargo.cargotype.name}</Link> : ''}</td>
                  <td>
                    {cargo.destinationcity ? <Link to={`lookup/${cargo.destinationcity.id}`}>{cargo.destinationcity.name}</Link> : ''}
                  </td>
                  <td>
                    {cargo.destinationdistinct ? (
                      <Link to={`lookup/${cargo.destinationdistinct.id}`}>{cargo.destinationdistinct.name}</Link>
                    ) : (
                      ''
                    )}
                  </td>
                  <td className="text-right">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`${match.url}/${cargo.id}`} color="info" size="sm">
                        <FontAwesomeIcon icon="eye" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.view">View</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${cargo.id}/edit`} color="primary" size="sm">
                        <FontAwesomeIcon icon="pencil-alt" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.edit">Edit</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${cargo.id}/delete`} color="danger" size="sm">
                        <FontAwesomeIcon icon="trash" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.delete">Delete</Translate>
                        </span>
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          !loading && (
            <div className="alert alert-warning">
              <Translate contentKey="TestApp.cargo.home.notFound">No Cargos found</Translate>
            </div>
          )
        )}
      </div>
    </div>
  );
};

const mapStateToProps = ({ cargo }: IRootState) => ({
  cargoList: cargo.entities,
  loading: cargo.loading,
});

const mapDispatchToProps = {
  getEntities,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(Cargo);
