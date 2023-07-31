import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, ICrudGetAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './lookup.reducer';
import { ILookup } from 'app/shared/model/lookup.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface ILookupDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const LookupDetail = (props: ILookupDetailProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.id);
  }, []);

  const { lookupEntity } = props;
  return (
    <Row>
      <Col md="8">
        <h2>
          <Translate contentKey="TestApp.lookup.detail.title">Lookup</Translate> [<b>{lookupEntity.id}</b>]
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="name">
              <Translate contentKey="TestApp.lookup.name">Name</Translate>
            </span>
          </dt>
          <dd>{lookupEntity.name}</dd>
          <dt>
            <span id="lang">
              <Translate contentKey="TestApp.lookup.lang">Lang</Translate>
            </span>
          </dt>
          <dd>{lookupEntity.lang}</dd>
          <dt>
            <span id="uid">
              <Translate contentKey="TestApp.lookup.uid">Uid</Translate>
            </span>
          </dt>
          <dd>{lookupEntity.uid}</dd>
          <dt>
            <span id="value">
              <Translate contentKey="TestApp.lookup.value">Value</Translate>
            </span>
          </dt>
          <dd>{lookupEntity.value}</dd>
          <dt>
            <span id="description">
              <Translate contentKey="TestApp.lookup.description">Description</Translate>
            </span>
          </dt>
          <dd>{lookupEntity.description}</dd>
          <dt>
            <Translate contentKey="TestApp.lookup.parent">Parent</Translate>
          </dt>
          <dd>{lookupEntity.parent ? lookupEntity.parent.uid : ''}</dd>
        </dl>
        <Button tag={Link} to="/lookup" replace color="info">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/lookup/${lookupEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

const mapStateToProps = ({ lookup }: IRootState) => ({
  lookupEntity: lookup.entity,
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(LookupDetail);
