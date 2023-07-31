import React, {useState,useEffect}  from 'react';



import { TextInput, View ,Text, StyleSheet} from 'react-native';
import Col from '../col';
import Row from '../row';
import InputList from './input-list';

import { useDispatch } from 'react-redux';

import * as apiAction from 'app/store/actions/apiAction';
import { ILookup } from 'app/models/models/lookup.model';
import InputText from './myInput';
import ThemeText from '../theme-text';
import { QuestionControlScreen } from './screen/questioncontrol_screen';
import { styles } from 'app/utils/color';


/* eslint-disable no-console */

/* eslint no-eval: 0 */

    export   const QuestionControl = (props: 
                    { handleData: (arg0: any) => void; 
                        handleClick:(arg0: any) => void; 
                        getLookupHandler: (arg0: any,succes:any,error:any) => void; 
                        savedData: {}; 
                        buttons: any[]; 
                        handleDataGet: (arg0: string) => any;
                        blank:{
                            text: React.ReactNode; 
                            
                            validate:boolean; 
                             }[];
                        t: (arg0: string) => any;
                    }) => {



        useEffect(() => {
           // setDataList({});
           console.log("props.buttons",props.buttons,props.savedData);
           
            props.buttons.map((control: {parent:string; placeholder:string; parentvalue:string } )=>{
                console.log("contol",control);
                setDataList(
                     Object.assign( 
                        {},       
                        dataList, 
                                { [control.parent] : [{value:0,name:props.t(control.placeholder)}] },
                                )
                            );
               
               console.log("props.savedData",props.savedData,control);
               
               const lParent=String(control.parent).startsWith("value:")
                ? props.savedData[control.parentvalue]
                : control.parent; 
                console.log("lParent",lParent);
                lParent
                ?ongetParentData(lParent):()=>{};

            } );
            
            console.log("dataList",dataList);
            }, 
            [props.buttons]);                        
        
        const selectedColor='primary';
        const [cssColor, setCssColor] = useState(selectedColor);
        const [inputValue, setInputValue] = useState({});
        const [inputValueList, setInputValueList] = useState(-1);
        const [dataList, setDataList] = useState(new Object());


        const dispatch = useDispatch();
        const ongetParentData = (parent:string) => 
                dispatch(apiAction.getLookupByParent(parent,successHandler,errorHandler ) );

      const successHandler=(data:ILookup[])=>{
        const parent=data.data[0].parent.id;
        
        let control=props
                    .buttons
                    .filter(element=> element.parent==parent|| element.parent=="value:")[0];
        console.log("control",control);
        setDataList( 
                
                Object.assign( 
                    {},       
                    dataList, 
                            { [parent] :[{value:0,name:props.t(control.placeholder)}].concat(
                            data
                                    .data
                                    .map(element=>  
                                           {return  {value:element.id ,name :element.name }}
                                            ))},
                            )
                        );

                
        

        // setDataList( [{"value":0,"name":control.placeholder}]
        // .concat(data.map(element=>  
        //             {value=element.id,name=element.description }
        //             )));
      }
        const errorHandler=(error:any)=>{ console.log(error);
        }
      
    
    // const  handleClick =(e) => {
    //     console.log("Button value",e);
    //     props.handleClick(e)
    //     setCssColor(selectedColor);
    // }

    const  handleChange=(event: any)=> {  
        props.handleData(event);

        // inputValue[  event.target.id] = event.target.value;
        // console.warn(inputValue);
        
    
    }

    const  handleChangemaster=(event: { target: { value: any; }; })=> {  
        
 //console.warn(event.target.value);
 props.handleData(event);
        // inputValue[  event.target.id] = event.target.value;
        // console.warn(inputValue);
        
    
    }
    
    // console.log(getEntitiesParent(0).payload);
     
    return (
    
        <QuestionControlScreen 
handleData={props.handleData}
handleClick={props.handleClick}
handleChange={handleChange}
getLookupHandler={props.getLookupHandler}
savedData={props.savedData}
dataList={dataList}
buttons={props.buttons}
handleDataGet={props.handleDataGet}
blank={props.blank}
t={props.t}
       />
          

                    
    );
    
}


