import React, { useState } from 'react';


import { ButonDisabled } from "./butondisabled";
import { View, Text, StyleSheet } from 'react-native';
import Col from '../col';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { color } from 'react-native-reanimated';
import { styles } from 'app/utils/color';
import { useTranslation } from 'react-i18next';

/* eslint-disable no-console */

export const WizardHeader = (props: {
    questions: any[];
    control: Number;
}) => {

    const { t, i18n } = useTranslation();


    return (
            <View> 
                <Col>
              { props.questions
                                // .map(element=>   (Number(this.state.currentid)===Number(element))?"X"+element:element )
               // TODO bu satır daha az gösterilecekse alt satır ektif hale getirilecek
               //     .slice(props.control-1,props.control+2)
                    .map((element)  => 

                    
                    <Text key={element.name} 
                    
                    
                    style={(element.name===props.questions[props.control].name)
                        ? [styles.Blue,styles.item]
                        :styles.None }>{t(element.name)}</Text>

                 
                    )}
                       </Col>
        </View>


    );

}


// const styles = StyleSheet.create({
//     Blue: {

//         // Define your HEX color code here.
//         // color:'white',

//         fontWeight: 'bold',        
//         padding:5,
//         margin:3,
//         borderColor:'black',
//         borderWidth:1,
//         borderStyle:'solid',
//         borderRadius:5,
   
//     },

//     None: {
//         margin:3,
//         padding:5,
//         fontWeight: 'normal',
//         borderColor:'black',
//         color:'black',
//         borderWidth:1,
//         borderStyle:'solid',
//         borderRadius:5,
//         backgroundColor:'#ececec'
//     },

// });