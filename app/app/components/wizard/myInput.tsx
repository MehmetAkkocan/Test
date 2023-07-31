


 import React, { useEffect, useState } from 'react';

import {Picker} from '@react-native-picker/picker';
import { TextInput } from 'react-native';
import { useTheme } from '@react-navigation/native';


export const func=(event: any)=>{}


/* eslint no-console: off */
 const InputText = (props: 
                {    placeholder:string; 
                text:string;
                value:string;
                validate:boolean;
                onChangeText: (arg0:any) => void; 
                }) => {
  
                  
  useEffect(() => {
  
  
  }, []);


  const theme=useTheme();
  const [textData, setTextData] = useState(props.value?props.value:""); 
  
  const setInputText=(e:any)=>{

    setTextData(e);
    props.onChangeText({target:{id:"Controller_"+props.text,value:e}});
  }

  return (
    <TextInput 
    style={[props.validate?{color:theme.colors.text,borderColor:theme.colors.border,borderWidth: 1,width:"100%",borderRadius: 3}
    :{color:theme.colors.text,borderColor:'red',borderWidth: 1, borderRadius: 8,width:"100%"}] }

    multiline={true}
    numberOfLines={4}  
    placeholder={props.placeholder} 
    onChangeText={setInputText}
    value={textData}
    />
   
    )

};      
              
                    
                



export default InputText;
