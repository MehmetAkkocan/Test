import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
import { Translate, ICrudGetAllAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './lookup.reducer';
import { ILookup } from 'app/shared/model/lookup.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface ILookupProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export const Lookup = (props: ILookupProps) => {
  useEffect(() => {
    props.getEntities();
  }, []);

  const { lookupList, match, loading } = props;
  return (
    <div>
      <h2 id="lookup-heading">
        <Translate contentKey="TestApp.lookup.home.title">Lookups</Translate>
        <Link to={`${match.url}/new`} className="btn btn-primary float-right jh-create-entity" id="jh-create-entity">
          <FontAwesomeIcon icon="plus" />
          &nbsp;
          <Translate contentKey="TestApp.lookup.home.createLabel">Create new Lookup</Translate>
        </Link>
      </h2>
      <div className="table-responsive">
        {lookupList && lookupList.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th>
                  <Translate contentKey="global.field.id">ID</Translate>
                </th>
                <th>
                  <Translate contentKey="TestApp.lookup.name">Name</Translate>
                </th>
                <th>
                  <Translate contentKey="TestApp.lookup.lang">Lang</Translate>
                </th>
                <th>
                  <Translate contentKey="TestApp.lookup.uid">Uid</Translate>
                </th>
                <th>
                  <Translate contentKey="TestApp.lookup.value">Value</Translate>
                </th>
                <th>
                  <Translate contentKey="TestApp.lookup.description">Description</Translate>
                </th>
                <th>
                  <Translate contentKey="TestApp.lookup.parent">Parent</Translate>
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {lookupList.map((lookup, i) => (
                <tr key={`entity-${i}`}>
                  <td>
                    <Button tag={Link} to={`${match.url}/${lookup.id}`} color="link" size="sm">
                      {lookup.id}
                    </Button>
                  </td>
                  <td>{lookup.name}</td>
                  <td>{lookup.lang}</td>
                  <td>{lookup.uid}</td>
                  <td>{lookup.value}</td>
                  <td>{lookup.description}</td>
                  <td>{lookup.parent ? <Link to={`lookup/${lookup.parent.id}`}>{lookup.parent.uid}</Link> : ''}</td>
                  <td className="text-right">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`${match.url}/${lookup.id}`} color="info" size="sm">
                        <FontAwesomeIcon icon="eye" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.view">View</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${lookup.id}/edit`} color="primary" size="sm">
                        <FontAwesomeIcon icon="pencil-alt" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.edit">Edit</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${lookup.id}/delete`} color="danger" size="sm">
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
              <Translate contentKey="TestApp.lookup.home.notFound">No Lookups found</Translate>
            </div>
          )
        )}
      </div>
    </div>
  );
};

const mapStateToProps = ({ lookup }: IRootState) => ({
  lookupList: lookup.entities,
  loading: lookup.loading,
});

const mapDispatchToProps = {
  getEntities,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(Lookup);
