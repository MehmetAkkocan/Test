import Wizard from "app/components/wizard/wizard";
import NavigationService from "app/navigation/NavigationService";
import React, { useEffect } from "react";
import { KeyboardAvoidingView, Platform, ScrollView, View } from "react-native";
import { Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { LoginState } from "../Login/loginx";
import { query1 } from "./resources/query1";
import { useTranslation } from 'react-i18next';
import ThemeText from "app/components/theme-text";
import { defaultValue, ICargo } from "app/models/models/cargo.model";
import * as apiAction from 'app/store/actions/apiAction';
import { styles } from "app/utils/color";


export function CreateScreen(props: any) {

  const dispatch = useDispatch();
  const oncreateCargo = (data:any) => dispatch(apiAction.createCargo(data,successHandler, errorHandler));


  const { t, i18n } = useTranslation();

  useEffect(() => {
    // tarayıcının başlık bölümünü değiştirmemizi sağlar
    console.log(props);
    //getCargos(id_token,successHandler,errorHandler)
  }, []);


  const onTab = () => NavigationService.navigate('TabScreen');

  const id_token = useSelector(
    (state: LoginState) => state.loginReducer.id_token,
  );

  const successHandler = (d: any) => {
    console.log(d);


    console.log("****************************", props.navigation);
    //props.setBadge(ldata.length);

  }
  const errorHandler = (e: any) => {
    console.log(e);
  }

  const finish = (val:any)=> {

   
      
    let model={
        sourceaddress: val['Controller_adres'] ,
        cargodescription: val['Controller_yuk iceriği'] ,
        destinationaddress: val['Controller_adres'] ,
        sourcecity: {id:val['Controller_il'] },
        sourcedistinct: {id:val['Controller_ilce'] },
        vehicletype: {id:val['Controller_arac tipi'] },
        vehiclecasetype: {id:val['Controller_kasa tipi'] },
        cargotype: {id:val['Controller_yuk tipi'] },
        destinationcity: {id:val['Controller_indirme il'] },
        destinationdistinct: {id:val['Controller_indirme ilce'] }, 
       };
    
       console.log(model);
       

    oncreateCargo(model);
  }


  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : ''} style={styles.container}>
      <ScrollView>
      <Wizard questions={query1} t={t}  finish ={finish} />
      {/* <ThemeText>CreateScreen!</ThemeText> */}
      </ScrollView>
    </KeyboardAvoidingView>
  );
}