import NavigationService from "app/navigation/NavigationService";
import React, { useEffect } from "react";
import { View } from "react-native";
import { Text } from "react-native";
import { useSelector } from "react-redux";
import { LoginState } from "../Login/loginx";
import { useTheme } from '@react-navigation/native';
import ThemeText from "app/components/theme-text";
import { styles } from 'app/utils/color';
import Wizard from "app/components/wizard/wizard";
import { searchResource } from "./resources/search";
import { useTranslation } from 'react-i18next';

export function CargoListSearchScreen(props:any) {

    const { t, i18n } = useTranslation();
    useEffect(() => {
        // tarayıcının başlık bölümünü değiştirmemizi sağlar
        console.log(props);
        //getCargos(id_token,successHandler,errorHandler)
      },[]);
    
    
      const theme=useTheme();
  

    
    return (
        <View >
              <Wizard 
                    questions={searchResource} 
                    t={t}  
                    finish ={props.finish} />
      </View>
    );
  }