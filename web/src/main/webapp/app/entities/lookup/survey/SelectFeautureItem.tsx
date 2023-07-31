import React, {useState,useEffect} from 'react';
import {Row,Col} from "reactstrap";


    export   const SelectFeautureItem = (props) => {

        const [selected, setSelected] = useState(false);

        const handleSelectClick = (e) =>{
            props.onClick({price:props.data.price,element:props.element,selected:!selected})
            setSelected(!(selected))
    
        }

        
        useEffect(() => {
            // console.warn(props.setAvailable);
            // console.warn(Object
            //     .keys(props.setAvailable));
            
            if  ((props.setAvailable!==undefined && props.setAvailable[0]!==undefined && props.setAvailable[0]['feature']!==undefined ))
            {
            const val=props.setAvailable[0]['feature']
            .filter(element=> element.element===props.element).length>0
             setSelected(val);
             if (val)
                handleSelectClick(1);
            }
          }, []);



    console.warn(props.setAvailable);
        return (
           
              
               
           <Row style= {selected ?{ backgroundColor: '#59a3fb'}:{}}  
           onClick={handleSelectClick}  >
                <Col >
                  <Row>
                  <Col   > <img width="40"  src={props.data.image}  ></img> </Col> 
                <Col > {props.element}  </Col>
                 <Col> Price:{props.data.price} </Col>
            </Row>
            <Row>
                <Col style = {{textAlign: "left"}} > 
                {props.data.description}
                </Col>
                 
            </Row> 
            </Col>
            <Col md="1"  >  
                <input
                name="isGoing"            
                type="checkbox"
                checked={selected}
                onChange={handleSelectClick} /> 
            </Col>

           
            
              


            
       
                </Row>
                    
            // <Button {...this.props}   />
        );
    
}