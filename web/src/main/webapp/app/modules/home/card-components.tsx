import './home.scss';

import React from 'react';
import { Translate } from 'react-jhipster';
import { Card, CardTitle, CardBody, CardText } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const CardAdd = props =>(
<Card className="rounded-2x bg-dark text-white text-center col-3">
              <CardBody>
                <FontAwesomeIcon icon={props.icon} size="3x"></FontAwesomeIcon>
                <CardTitle className="fa-2x mt-3">
                 <Translate contentKey={props.titleContentKey}></Translate>
                    </CardTitle>
                <CardText className="fa-lg mt-3">
                  {props.cardText}
                </CardText>
              </CardBody>
            </Card>
);
