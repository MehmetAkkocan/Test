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
import  SurveyWizard from "./survey/projectwizard"

export interface ILookupDetailProps extends StateProps, DispatchProps, RouteComponentProps<{  }> {}

export const WizardView = (props: ILookupDetailProps) => {
  useEffect(() => {
    // props.getEntity(props.match.params.id);
  }, []);

  const { lookupEntity } = props;
  return (
    <SurveyWizard finishEvent={props.getEntity}/>
  );
};

const mapStateToProps = ({ lookup }: IRootState) => ({
  lookupEntity: lookup.entity,
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(WizardView);
