import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvFeedback, AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
import { Translate, translate, ICrudGetAction, ICrudGetAllAction, ICrudPutAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { ILookup } from 'app/shared/model/lookup.model';
import { getEntities as getLookups } from 'app/entities/lookup/lookup.reducer';
import { getEntity, updateEntity, createEntity, reset } from './cargo.reducer';
import { ICargo } from 'app/shared/model/cargo.model';
import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface ICargoUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const CargoUpdate = (props: ICargoUpdateProps) => {
  const [sourcecityId, setSourcecityId] = useState(-1);
  const [sourcedistinctId, setSourcedistinctId] = useState('0');
  const [vehicletypeId, setVehicletypeId] = useState('0');
  const [vehiclecasetypeId, setVehiclecasetypeId] = useState('0');
  const [cargotypeId, setCargotypeId] = useState('0');
  const [destinationcityId, setDestinationcityId] = useState(-1);
  const [destinationdistinctId, setDestinationdistinctId] = useState('0');
  const [isNew, setIsNew] = useState(!props.match.params || !props.match.params.id);

  const { cargoEntity, lookups, loading, updating } = props;

  const handleClose = () => {
    props.history.push('/cargo');
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
    values.updateDate = convertDateTimeToServer(values.updateDate);
    values.createDate = convertDateTimeToServer(values.createDate);

    if (errors.length === 0) {
      const entity = {
        ...cargoEntity,
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
          <h2 id="TestApp.cargo.home.createOrEditLabel">
            <Translate contentKey="TestApp.cargo.home.createOrEditLabel">Create or edit a Cargo</Translate>
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <AvForm model={isNew ? {} : cargoEntity} onSubmit={saveEntity}>
              {!isNew ? (
                <AvGroup  >
                  <Label for="cargo-id">
                    <Translate contentKey="global.field.id">ID</Translate>
                  </Label>
                  <AvInput id="cargo-id" type="text" className="form-control" name="id" required readOnly />
                </AvGroup>
              ) : null}
              
              <Row className="justify-content-center">
        <Col md="6">

              <AvGroup>
                <Label for="cargo-sourcecity">
                  <Translate contentKey="TestApp.cargo.sourcecity">Sourcecity</Translate>
                </Label>
                <AvInput 
                      id="cargo-sourcecity" 
                      type="select" 
                      className="form-control" 
                      name="sourcecity.id"
                      onChange=
                      {(e)=>{setSourcecityId(Number(e.currentTarget.value));console.warn(e.currentTarget.value);
                       }}
                       validate={{
                        required: { value: true, errorMessage: translate('entity.validation.required') },
                      }}
                      >
                  <option value="" key="0" />
                  {lookups
                    ? lookups
                    .filter(entity=> (entity.parent?entity.parent.id:1) ===14)
                    .map(otherEntity => (
                        <option value={otherEntity.id} key={otherEntity.id}>
                          {otherEntity.name}
                        </option>
                      ))
                    : null}
                </AvInput>
              </AvGroup>
              </Col>
              <Col md="6">
              <AvGroup>
                <Label for="cargo-sourcedistinct">
                  <Translate contentKey="TestApp.cargo.sourcedistinct">Sourcedistinct</Translate>
                </Label>
                <AvInput id="cargo-sourcedistinct" type="select" className="form-control" name="sourcedistinct.id">
                  <option value="" key="0" />
                  {lookups
                    ? lookups
                    .filter(entity=> 
                      (entity.parent?entity.parent.id:1)===sourcecityId)

                    .map(otherEntity => (
                        <option value={otherEntity.id} key={otherEntity.id}>
                          {otherEntity.name}
                        </option>
                      ))
                    : null}
                </AvInput>
              </AvGroup>
              </Col>
              </Row>

              <AvGroup>
                <Label id="sourceaddressLabel" for="cargo-sourceaddress">
                  <Translate contentKey="TestApp.cargo.sourceaddress">Sourceaddress</Translate>
                </Label>
                <AvField
                  id="cargo-sourceaddress"
                  type="textarea"
                  name="sourceaddress"
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                  }}
                />
              </AvGroup>
              <Row className="justify-content-center">
             <Col md="4">

              <AvGroup>
                <Label for="cargo-vehicletype">
                  <Translate contentKey="TestApp.cargo.vehicletype">Vehicletype</Translate>
                </Label>
                <AvInput id="cargo-vehicletype" type="select" className="form-control" name="vehicletype.id">
                  <option value="" key="0" />
                  {lookups
                    ? lookups
                    .filter(entity=> (entity.parent?entity.parent.id:1) ===4)

                    .map(otherEntity => (
                        <option value={otherEntity.id} key={otherEntity.id}>
                          {otherEntity.name}
                        </option>
                      ))
                    : null}
                </AvInput>
              </AvGroup>
              </Col>
              <Col md="4">        
              <AvGroup>
                <Label for="cargo-vehiclecasetype">
                  <Translate contentKey="TestApp.cargo.vehiclecasetype">Vehiclecasetype</Translate>
                </Label>
                <AvInput id="cargo-vehiclecasetype" type="select" className="form-control" name="vehiclecasetype.id">
                  <option value="" key="0" />
                  {lookups
                    ? lookups
                    .filter(entity=> (entity.parent?entity.parent.id:1) ===100009)

                    .map(otherEntity => (
                        <option value={otherEntity.id} key={otherEntity.id}>
                          {otherEntity.name}
                        </option>
                      ))
                    : null}
                </AvInput>
              </AvGroup>

              </Col>
              <Col md="4">

              <AvGroup>
                <Label for="cargo-cargotype">
                  <Translate contentKey="TestApp.cargo.cargotype">Cargotype</Translate>
                </Label>
                <AvInput id="cargo-cargotype" type="select" className="form-control" name="cargotype.id">
                  <option value="" key="0" />
                  {lookups
                    ? lookups
                    .filter(entity=> (entity.parent?entity.parent.id:1) ===9)

                    .map(otherEntity => (
                        <option value={otherEntity.id} key={otherEntity.id}>
                          {otherEntity.name}
                        </option>
                      ))
                    : null}
                </AvInput>
              </AvGroup>
             
              </Col>
              </Row>


              <AvGroup>
                <Label id="cargodescriptionLabel" for="cargo-cargodescription">
                  <Translate contentKey="TestApp.cargo.cargodescription">Cargodescription</Translate>
                </Label>
                <AvField
                  id="cargo-cargodescription"
                  type="textarea"
                  className="form-control"
                  name="cargodescription"
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                  }}
                />
              </AvGroup>

              <Row className="justify-content-center">
             <Col md="6">

              <AvGroup>
                <Label for="cargo-destinationcity">
                  <Translate contentKey="TestApp.cargo.destinationcity">Destinationcity</Translate>
                </Label>
                <AvInput 
                      id="cargo-destinationcity" 
                      type="select" 
                      className="form-control" 
                      name="destinationcity.id"
                      onChange=
                      {(e)=>{setDestinationcityId(Number(e.currentTarget.value));console.warn(e.currentTarget.value);
                       }}

                      >
                  <option value="" key="0" />
                  {lookups
                    ? lookups
                    .filter(entity=> (entity.parent?entity.parent.id:1) ===14)
                    .map(otherEntity => (
                        <option value={otherEntity.id} key={otherEntity.id}>
                          {otherEntity.name}
                        </option>
                      ))
                    : null}
                </AvInput>
              </AvGroup>
              </Col>
              <Col md="6">
              <AvGroup>
                <Label for="cargo-destinationdistinct">
                  <Translate contentKey="TestApp.cargo.destinationdistinct">Destinationdistinct</Translate>
                </Label>
                <AvInput id="cargo-destinationdistinct" type="select" className="form-control" name="destinationdistinct.id">
                  <option value="" key="0" />
                  {lookups
                    ? lookups
                    .filter(entity=> 
                      (entity.parent?entity.parent.id:1)===destinationcityId)

                    .map(otherEntity => (
                        <option value={otherEntity.id} key={otherEntity.id}>
                          {otherEntity.name}
                        </option>
                      ))
                    : null}
                </AvInput>
              </AvGroup>

            </Col>
            </Row>

              <AvGroup>
                <Label id="destinationaddressLabel" for="cargo-destinationaddress">
                  <Translate contentKey="TestApp.cargo.destinationaddress">Destinationaddress</Translate>
                </Label>
                <AvField
                  id="cargo-destinationaddress"
                  type="textarea"
                  name="destinationaddress"
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                  }}
                />
              </AvGroup>
             
              {/* <AvGroup>
                 <Label id="updateDateLabel" for="cargo-updateDate">
                   <Translate contentKey="TestApp.cargo.updateDate">Update Date</Translate>
                 </Label>
                 <AvInput
                   id="cargo-updateDate"
                   type="datetime-local"
                   className="form-control"
                   name="updateDate"
                   placeholder={'YYYY-MM-DD HH:mm'}
                   value={isNew ? displayDefaultDateTime() : convertDateTimeFromServer(props.cargoEntity.updateDate)}
                   validate={{
                     required: { value: true, errorMessage: translate('entity.validation.required') },
                   }}
                 />
               </AvGroup>
               <AvGroup>
                 <Label id="createDateLabel" for="cargo-createDate">
                   <Translate contentKey="TestApp.cargo.createDate">Create Date</Translate>
                 </Label>
                 <AvInput
                   id="cargo-createDate"
                   type="datetime-local"
                   className="form-control"
                   name="createDate"
                   placeholder={'YYYY-MM-DD HH:mm'}
                   value={isNew ? displayDefaultDateTime() : convertDateTimeFromServer(props.cargoEntity.createDate)}
                   validate={{
                     required: { value: true, errorMessage: translate('entity.validation.required') },
                   }}
                 />
               </AvGroup> */}
           
            
              <Button tag={Link} id="cancel-save" to="/cargo" replace color="info">
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
  cargoEntity: storeState.cargo.entity,
  loading: storeState.cargo.loading,
  updating: storeState.cargo.updating,
  updateSuccess: storeState.cargo.updateSuccess,
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

export default connect(mapStateToProps, mapDispatchToProps)(CargoUpdate);
