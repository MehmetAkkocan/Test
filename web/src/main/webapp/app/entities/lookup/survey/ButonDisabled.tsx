import React, {Component} from 'react';
import {Button} from "reactstrap";

    export   const ButonDisabled = (props) => {


    const handleClick = (e) =>{
        props.handleClick()
    }



        return (
           
               
            <Button 
            outline color={ !props.disabled 
                ? props.css 
                : props.disableCss}
            onClick={props.onClick} 
            disabled={props.disabled} 
            value={props.value}
             
            >

{props.children} 
            </Button>
                    
            // <Button {...this.props}   />
        );
    
}