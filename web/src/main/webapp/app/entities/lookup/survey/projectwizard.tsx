import React, {Component} from 'react';

import './App.css';
import {QuestionButton} from "./QuestionButton";
import { Row, Col ,Badge} from 'reactstrap';
import {query1} from './resources/query1';
import Finish from "./Finish";
import { translate, } from 'react-jhipster';
import SurveyBase from './survey-base';





     const SurveyWizard = (props) => {

     



    console.warn(props.setAvailable);
        return (
           
            <SurveyBase questions={query1}  />
               
        );
    
}

export default SurveyWizard;