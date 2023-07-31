import React, {Component} from 'react';
import { Row, Col ,Button} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ButonDisabled } from './ButonDisabled';
import { translate, } from 'react-jhipster';

    export   const Finish = (props) => {
        console.warn(Object.keys( props.selectedFeature));

        const  handleClickBack =(e) => {
            props.handleClickBack();
        }

        
        const selectedColor='primary';
        return (
            <div>


<ButonDisabled 
                    css= {selectedColor} 
                    disableCss="selectButton selectButtonDisable"  
                    onClick={props.finishEvent} 
                    disabled={false} 
                >
                <i className="fas fa-backward"></i> 
                {translate("entity.action.ok")}
            </ButonDisabled>
            
            <ButonDisabled 
                    css= {selectedColor} 
                    disableCss="selectButton selectButtonDisable"  
                    onClick={handleClickBack} 
                    disabled={false} 
                >
                <i className="fas fa-backward"></i> 
                {translate("entity.action.back")}
            </ButonDisabled>

{Object
        .keys(props.selectedFeature)
        .map(element=>
            props.selectedFeature[element].price>0?
            <Row key={element}  
            className={ props.selectedFeature[element].price===props.allFeature[props.selectedFeature[element].currentid].selectPositivePrice? "textButtonAccept" :'textButtonDegree'}
            
            >
            
            <Col md="3" >{props.selectedFeature[element].price}</Col>

            <Col md="6" style={{textAlign : "left"}} >
            {translate("TestApp.lookup.wizard."+props.allFeature[
                props.selectedFeature[element].currentid].datalang)}</Col>
            


            <Col md="7" >{props.selectedFeature[element].feature===undefined
            ?null
            :'['+props.selectedFeature[element].feature.map(feature=>feature.element).join(",")+']'}</Col>

            </Row>
                :null           
                )}


                
            </div>
        );

}

export default Finish;