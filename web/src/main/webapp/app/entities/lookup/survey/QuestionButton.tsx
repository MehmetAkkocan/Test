import React, {useState}  from 'react';
import {Row, Col, Button, ButtonGroup } from 'reactstrap';

import Finish from "./Finish";
import {ButonDisabled} from "./ButonDisabled";
import { Translate, translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
/* eslint-disable no-console */

    export   const QuestionButton = (props) => {
        
        const selectedColor='primary';
        const [cssColor, setCssColor] = useState(selectedColor);

    
    const  handleClickNext =(e) => {
        console.log("Button value",e);
        if (e.target.value==="-1")
            props.handleClickPrev(e)
        if (e.target.value==="1")
            props.handleClickNext(e)
        setCssColor(selectedColor);
    }


    
    return (
            <div className="query-button-area">  
            <ButtonGroup className="query-button-group">
                {props.buttons.map(button=> 
                    
                    <ButonDisabled  key={button.text}
                    css= {cssColor}  
                    disableCss="selectButton selectButtonDisable"  
                    onClick={handleClickNext}
                    disabled={false}
                    value={button.val} 
                >
                   {button.icon?
                    <FontAwesomeIcon icon={button.icon}/>:null}
                    {button.text}
                
                </ButonDisabled>


                    )}

            </ButtonGroup>

        </div>

                    
    );
    
}

