import React, { useEffect, useState } from 'react';

import {Picker} from '@react-native-picker/picker';
import { View } from 'react-native';
import { useTheme } from '@react-navigation/native';

export const func=(event: any)=>{}


/* eslint no-console: off */
 const InputList = (props: 
                {   id?: any;  
                    data: {};
                    val:any;
                    parent:string;
                    savedData: {}; 
                    name?: string;
                    placeholder?: string;
                    getEntitiesParent?: any; 
                    lookupList?: any; 
                    loading?: any; 
                    onChange: () => void; 
                    validate:boolean;
                }) => {
  
                  
  useEffect(() => {
    props.id!==undefined? props.getEntitiesParent(props.id):[];
  
  }, []);

  

  const theme=useTheme();

  console.log("props.match.params.data",
                        props.data,
                        props.parent, 
                        Object.keys(props.data), 
                        props.data[props.parent]);

  const [parentData, setParentData] = useState([]); 
  


  return (
    <View  style={[{width:"100%"},props.validate?{borderColor:theme.colors.border,borderWidth:1,borderRadius: 3}
    :{borderColor:'red',borderWidth: 1, borderRadius: 8}] } >

    <Picker   style={[{width:"100%" ,color:theme.colors.text}] }
    selectedValue={props.val}
    onValueChange={(itemValue, itemIndex) =>{
     // setSelectedLanguage(itemValue)
     props.onChange
     ?props.onChange:null;
     props.savedData[props.name]=itemValue;
     console.log(props.savedData,itemValue, itemIndex);
    
    }

    }
     
              
              
      >
 
    
  {props.data[props.parent]? 
            props.data[props.parent]
            .filter(entity=> entity!=undefined )
            .map((otherEntity: 
                                    { value: string ; 
                                        name: string; },i :number) => 
                        (
                        <Picker.Item key={i}  color={theme.colors.text}
                        value={otherEntity.value} 
                        label= {otherEntity.name}
                        />
                        )
                    ):null}
                    

  </Picker> 
  
   </View>
  )

};      
              
                    
                



export default InputList;
