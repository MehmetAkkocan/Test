import { View } from 'native-base';
import React, {Component} from 'react';
import {Button} from "react-native";
import { TouchableOpacity,Text } from 'react-native'
    export   const ButonDisabled = (props:any) => {


    const handleClick = (e:any) =>{
        props.handleClick()
    }



        return (
           
               
            <TouchableOpacity activeOpacity={0.5}
             style={ !props.disabled 
                ? props.css 
                : props.disableCss}
                
                onPress={()=>props.onClick({"target":{"value":props.value}})} 
            disabled={props.disabled} 
            key={props.value}
             
            >
                <View>
{props.children} 
</View>
            </TouchableOpacity>
                    
            // <Button {...this.props}   />
        );
    
}