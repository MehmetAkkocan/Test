import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, match, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, ICrudGetAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntitiesParent } from '../lookup.reducer';
import { ILookup } from 'app/shared/model/lookup.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { AvFeedback, AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';

export const func=(event)=>{}
export interface LocalType<
    Params extends { [K in keyof Params]?: string } = {},
    
> {
    match: match<Params>;
}

export interface ILookupDetailProps 
                extends 
                    StateProps, 
                    DispatchProps, 
                    LocalType<{  id: string ,onChange?:any ,name?: string,data?: string,placeholder?: string } > {}

/* eslint no-console: off */
export const InputList = (props: ILookupDetailProps) => {
  useEffect(() => {
    props.match.params.id!==undefined? props.getEntitiesParent(props.match.params.id):[];
  }, []);

  const { lookupList,  loading } = props;
  console.log("props.match.params.data",props.match.params.data);
   

  return (
    <AvInput  id={props.match.params.name} 
              type="select" 
              className="form-control" 
              name={props.match.params.name}   
              onChange={props.match.params.onChange
                    ?props.match.params.onChange
                    :()=>{}}>
                  <option value="0" key="0" >
                  {props.match.params.placeholder}
                  </option>
                  
                    {lookupList
                    ? lookupList.map(otherEntity => (
                        <option value={otherEntity.id} 
                        key={otherEntity.id}
                       {... otherEntity.id.toString()===props.match.params.data?"selected":""}
                        >
                          {otherEntity.name}
                        </option>
                      ))
                    : null}  
                </AvInput>
  );
};

const mapStateToProps = ({ lookup }: IRootState) => ({
  lookupList: lookup.entities,
  loading: lookup.loading,
});


const mapDispatchToProps = { getEntitiesParent };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(InputList);
