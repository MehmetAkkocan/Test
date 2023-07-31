import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvFeedback, AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
import { Translate, translate, ICrudGetAction, ICrudGetAllAction, ICrudPutAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { getEntities as getLookups } from 'app/entities/lookup/lookup.reducer';
import { getEntity, updateEntity, createEntity, reset } from './lookup.reducer';
import { ILookup } from 'app/shared/model/lookup.model';
import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface ILookupUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const LookupUpdate = (props: ILookupUpdateProps) => {
  const [parentId, setParentId] = useState('0');
  const [isNew, setIsNew] = useState(!props.match.params || !props.match.params.id);

  const { lookupEntity, lookups, loading, updating } = props;

  const handleClose = () => {
    props.history.push('/lookup');
  };

  useEffect(() => {
    if (isNew) {
      props.reset();
    } else {
      props.getEntity(props.match.params.id);
    }

    props.getLookups();
  }, []);

  useEffect(() => {
    if (props.updateSuccess) {
      handleClose();
    }
  }, [props.updateSuccess]);

  const saveEntity = (event, errors, values) => {
    if (errors.length === 0) {
      const entity = {
        ...lookupEntity,
        ...values,
      };

      if (isNew) {
        props.createEntity(entity);
      } else {
        props.updateEntity(entity);
      }
    }
  };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="TestApp.lookup.home.createOrEditLabel">
            <Translate contentKey="TestApp.lookup.home.createOrEditLabel">Create or edit a Lookup</Translate>
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <AvForm model={isNew ? {} : lookupEntity} onSubmit={saveEntity}>
              {!isNew ? (
                <AvGroup>
                  <Label for="lookup-id">
                    <Translate contentKey="global.field.id">ID</Translate>
                  </Label>
                  <AvInput id="lookup-id" type="text" className="form-control" name="id" required readOnly />
                </AvGroup>
              ) : null}
              <AvGroup>
                <Label id="nameLabel" for="lookup-name">
                  <Translate contentKey="TestApp.lookup.name">Name</Translate>
                </Label>
                <AvField
                  id="lookup-name"
                  type="text"
                  name="name"
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="langLabel" for="lookup-lang">
                  <Translate contentKey="TestApp.lookup.lang">Lang</Translate>
                </Label>
                <AvField
                  id="lookup-lang"
                  type="text"
                  name="lang"
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="uidLabel" for="lookup-uid">
                  <Translate contentKey="TestApp.lookup.uid">Uid</Translate>
                </Label>
                <AvField
                  id="lookup-uid"
                  type="text"
                  name="uid"
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="valueLabel" for="lookup-value">
                  <Translate contentKey="TestApp.lookup.value">Value</Translate>
                </Label>
                <AvField
                  id="lookup-value"
                  type="text"
                  name="value"
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="descriptionLabel" for="lookup-description">
                  <Translate contentKey="TestApp.lookup.description">Description</Translate>
                </Label>
                <AvField id="lookup-description" type="text" name="description" />
              </AvGroup>
              <AvGroup>
                <Label for="lookup-parent">
                  <Translate contentKey="TestApp.lookup.parent">Parent</Translate>
                </Label>
                <AvInput id="lookup-parent" type="select" className="form-control" name="parent.id">
                  <option value="" key="0" />
                  {lookups
                    ? lookups.map(otherEntity => (
                        <option value={otherEntity.id} key={otherEntity.id}>
                          {otherEntity.uid}
                        </option>
                      ))
                    : null}
                </AvInput>
              </AvGroup>
              <Button tag={Link} id="cancel-save" to="/lookup" replace color="info">
                <FontAwesomeIcon icon="arrow-left" />
                &nbsp;
                <span className="d-none d-md-inline">
                  <Translate contentKey="entity.action.back">Back</Translate>
                </span>
              </Button>
              &nbsp;
              <Button color="primary" id="save-entity" type="submit" disabled={updating}>
                <FontAwesomeIcon icon="save" />
                &nbsp;
                <Translate contentKey="entity.action.save">Save</Translate>
              </Button>
            </AvForm>
          )}
        </Col>
      </Row>
    </div>
  );
};

const mapStateToProps = (storeState: IRootState) => ({
  lookups: storeState.lookup.entities,
  lookupEntity: storeState.lookup.entity,
  loading: storeState.lookup.loading,
  updating: storeState.lookup.updating,
  updateSuccess: storeState.lookup.updateSuccess,
});

const mapDispatchToProps = {
  getLookups,
  getEntity,
  updateEntity,
  createEntity,
  reset,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(LookupUpdate);
