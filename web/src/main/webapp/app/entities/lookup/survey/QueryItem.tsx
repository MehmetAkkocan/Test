import React, {useState,useEffect}  from 'react';
import {SelectFeautureItem} from "./SelectFeautureItem"
import { Translate, translate, } from 'react-jhipster';
import { QuestionButton } from './QuestionButton';
import { QuestionControl } from './QuestionControl';


  
    export   const QueryItem = (props) => {

        const [listAnswer, setListAnswer] = useState([]);




        const handleButton = (e) =>{
      
       console.warn(e.currentTarget);
       props.handleNext(e);
       
       
    }

    const handleButtonPrev = (e) =>{
      
        console.warn(e.currentTarget);
        props.handlePrev(e);
        
        
     }

        return (
           
               
            <div 
            style={{ 
                        overflowX:"hidden", 
                        overflowY:"auto"
                    }} >
                    <div className="query-head">
                        <Translate contentKey={"TestApp.lookup.wizard."+props.question.name}>{props.question.name}</Translate>
                    </div>

                    <QuestionControl 
                                buttons={props.question.controls} 
                                handleClick={handleButton}
                                handleData={props.handleData}
                                handleDataGet={props.handleDataGet}
                                savedData={props.savedData}     
                                />
                <div style={{height:"10px", marginTop:"1px"}}>
                    </div>

                    <QuestionButton 
                                buttons={props.question.buttons} 
                                handleClickNext={handleButton}
                                handleClickPrev={handleButtonPrev}
                                handleData={props.handleData}
                                />

            </div>
  
                    
            // <Button {...this.props}   />
        );
    
}