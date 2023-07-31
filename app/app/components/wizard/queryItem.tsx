
import { styles } from 'app/utils/color';
import React, { useState } from 'react';
import { KeyboardAvoidingView, ScrollView, Text, View } from 'react-native';
import { ErrorMessage } from './error-message';
import { QuestionButton } from './questionbutton';
import { QuestionControl } from './questioncontrol';



export const QueryItem = (props:
   {
      handleNext: (arg0: any) => void;
      handlePrev: (arg0: any) => void;
      getLookupHandler: (arg0: any, succes: any, error: any) => void;
      question: {
         name: React.ReactNode;
         controls: any[];
         buttons: any;
      };
      blank: {
         text: React.ReactNode;

         validate: boolean;
      }[];
      handleData: any;
      handleDataGet: any;
      savedData: any;
      t: (arg0: string) => any;
      finish:boolean;
   }) => {

   const [listAnswer, setListAnswer] = useState([]);




   const handleButton = (e: any) => {

      // console.warn("QueryItem" ,e.currentTarget);
      props.handleNext(e);


   }

   const handleButtonPrev = (e: any) => {

      // console.warn("QueryItem",e.currentTarget);
      props.handlePrev(e);


   }

   return (
      <View>
            <Text style={styles.item} > {props.t(props.question.name)}  </Text>
               <QuestionControl
                  t={props.t}
                  blank={props.blank}
                  buttons={props.question.controls}
                  handleClick={handleButton}
                  handleData={props.handleData}
                  handleDataGet={props.handleDataGet}
                  savedData={props.savedData}
                  getLookupHandler={props.getLookupHandler}
               />
         <ErrorMessage fields={props.blank} />            
         <QuestionButton
            t={props.t}
            buttons={props.question.buttons}
            handleClickNext={handleButton}
            handleClickPrev={handleButtonPrev}
            handleData={props.handleData}
            finish={props.finish}
         />
      </View>

      // <Button {...this.props}   />
   );

}




// const styles = StyleSheet.create({
//    Blue: {

//       // Define your HEX color code here.
//       //   backgroundColor: '#ff214f',
//       //   color:'white',
//       textAlign: 'center',
//       fontWeight: 'bold'

//    },

//    None: {

//       fontWeight: 'normal'

//    },

//    ScrollStyle: {

//       height: config.deviceHeight * 0.5,

//    },

// });
