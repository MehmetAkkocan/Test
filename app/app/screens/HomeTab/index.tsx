import React, { useEffect, useState } from 'react';
import NativeEventEmitter, { DeviceEventEmitter, NativeAppEventEmitter, NativeModules, Platform, StatusBar } from "react-native"
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { BottomNavigation, Button } from 'react-native-paper';

import { useDispatch, useSelector } from 'react-redux';
import * as loginActions from 'app/store/actions/loginActions';
import { styles } from 'app/utils/color';
import NavigationService from 'app/navigation/NavigationService';
import { ILoginState } from 'app/models/reducers/login';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { LoginState } from '../Login/loginx';
// import {getCargos} from 'app/services/getCargos';
import MyList from 'app/components/MyList';
import config from 'app/config/config';
import { NavigationContainer, Theme, useTheme } from '@react-navigation/native';
import { HomeScreen } from './HomeScreen';
import { CargoListScreen } from './CargoListScreen';
import { CreateScreen } from './CreateScreen';
import { useTranslation } from 'react-i18next';




const Tab = createBottomTabNavigator();



interface IProps {
  theme: Theme;
}





const HomeTab: React.FC<IProps> = (props: any) => {

  const { t, i18n } = useTranslation();
 
  console.log("t ...........................", t('Welcome to React'));


  const onTab = () => NavigationService.navigate('TabScreen', { headerStyle: { backgroundColor: 'papayawhip' } });

  const [badge, setBadge] = useState(5)

  const emitter = Platform.OS == 'ios' ? NativeAppEventEmitter : DeviceEventEmitter;

  const setCountBadge = (size: number) => {
    console.log("setCountBadge ...........................", size);

    setBadge(size)
  }


  
  emitter.removeAllListeners();

  //   emitter.removeListener("myProgressEvent", (e:number)=>{
  //     console.log("myProgressEvent " + JSON.stringify(e));

  //     setCountBadge(e);
  // })



  emitter.addListener("myProgressEvent", (e: number) => {
    console.log("myProgressEvent " + JSON.stringify(e));

    setCountBadge(e);
  });

  const theme = useTheme();

  return (
    <Tab.Navigator> 
      {/* <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'} /> */}

      <Tab.Screen name="Home" component={HomeScreen}

        options={{
          tabBarLabel: 'Home',
          title: "hom",
          tabBarVisible: true,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen name="CreateScreen" component={CreateScreen}

        options={{

          tabBarLabel: 'Create',
          title: "hom",
          tabBarVisible: true,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="plus-box" color={color} size={size} />
          ),
        }}
      />


      <Tab.Screen name="Settings"



        component={CargoListScreen}
        initialParams={{ headerStyle: { backgroundColor: 'papayawhip' } }}

        options={{
          tabBarLabel: 'Updates',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bell" color={color} size={size} />
          ),
          tabBarBadge: badge,
        }}
      />
    </Tab.Navigator>
  );




};



export default HomeTab;
