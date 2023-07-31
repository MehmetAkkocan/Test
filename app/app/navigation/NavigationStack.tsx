import * as React from 'react';
import { NavigationContainer, Theme } from '@react-navigation/native';
import { createStackNavigator, Header, StackHeaderProps } from '@react-navigation/stack';
import { useSelector } from 'react-redux';

import { navigationRef } from './NavigationService';

import Login from 'app/screens/Login';
import Home from 'app/screens/Home';
import ForgotPassword from 'app/screens/ForgotPassword';
import SignUp from 'app/screens/SignUp';

import ThemeController from '../components/ThemeController';



import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeTab from 'app/screens/HomeTab';
import {CustomDrawerContent} from './CustomDrawerContent';

import { useDispatch } from "react-redux";
import { ILoginState } from 'app/models/reducers/login';
import * as loginActions from 'app/store/actions/loginActions';
import { Platform, Text, View } from 'react-native';

import { useTranslation } from 'react-i18next';

const Stack = createStackNavigator();
const AuthStack = createStackNavigator();
const LoggedInStack = createStackNavigator();



const Drawer = createDrawerNavigator();

const homeOptions = {
  title: 'Homex',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
  headerRight: () => <ThemeController />,
};

const tabOptions = {
  
  headerTitleStyle: {
    fontWeight: 'bold',
  },
  headerRight: () => <ThemeController />,
};

interface IState {
  loginReducer: ILoginState;
}

interface IProps {
  logout:any;
  theme: Theme;
}





const AuthNavigator = () => {
  
  const { t, i18n } = useTranslation();
  const isLoggedIn = useSelector(
    (state: IState) => state.loginReducer.isLoggedIn,
  );
  return (
    <AuthStack.Navigator >
      <Stack.Screen
        name={t("Login")}
        component={Login}
        options={{
          // When logging out, a pop animation feels intuitive
          // You can remove this if you want the default 'push' animation
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerRight: () => <ThemeController />,
          headerTitleAlign:'center'
        }}
      />
      <Stack.Screen
        name={("ForgotPassword")} // {t("ForgotPassword")} navigateaction hatası!
        component={ForgotPassword}
        options={{ 
          // When logging out, a pop animation feels intuitive
          // You can remove this if you want the default 'push' animation
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerRight: () => <ThemeController />,          
          headerTitleAlign:'center'
        }}
      />
      <Stack.Screen
        name={("SignUp")} 
        component={SignUp}
        options={{ 
          // When logging out, a pop animation feels intuitive
          // You can remove this if you want the default 'push' animation
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
          headerRight: () => <ThemeController />,          
          headerTitleAlign:'center'
        }}
      />



    </AuthStack.Navigator>
  );
};

const LoggedInNavigator = () => (
  <LoggedInStack.Navigator  initialRouteName={"TabScreen"}>
    
    <Stack.Screen name="Home" component={Home} options={{...homeOptions}} />
 
    <Stack.Screen
        name="TabScreen"
        component={HomeTab}
        
   
        options={{
          title:'deneme',
          header: (props:any) => <CustomHeader {...props} />,
          // When logging out, a pop animation feels intuitive
          // You can remove this if you want the default 'push' animation
          animationTypeForReplace: true ? 'push' : 'pop',
          headerRight: () => <ThemeController />,
        }}
      />

  </LoggedInStack.Navigator>
);


const CustomHeader = (props: any) => {
  return (
    <View
      style={{
        height: 56,
        marginTop: Platform.OS == "ios" ? 20 : 0
      }}
    >
     <Text >dfsdfsdfsdf </Text>
        <Header {...props} />
    </View>
  );
};



const App: React.FC<IProps> = (props: IProps) => {
  const { theme } = props;
  const isLoggedIn = useSelector(
    (state: IState) => state.loginReducer.isLoggedIn,
  );

  const dispatch = useDispatch();
  const onLogout = () => dispatch(loginActions.logOut());


  return (
    <NavigationContainer 
            ref={navigationRef} 
            theme={theme}
            documentTitle={{enabled:true }}

            onLogout={onLogout}
            >
      {/* <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'} /> */}
      <Drawer.Navigator  
        initialRouteName="Login"

        drawerContent={(props) => CustomDrawerContent({onLogout:onLogout, ...props}) }
        >

      {/* <Stack.Navigator> */}
        {isLoggedIn ? (
          <>
          
          <Drawer.Screen
             
             name="HomeTab"
             children={HomeTab}
             options={tabOptions}
             />

          <Drawer.Screen
           
            name="Home"
            component={LoggedInNavigator}
            options={tabOptions}
             />


              </>

          ) : (
          <Drawer.Screen
            name="Login" 
            
            component={AuthNavigator}
            options={{
              // When logging out, a pop animation feels intuitive
              // You can remove this if you want the default 'push' animation
              animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
              headerRight: () => <ThemeController />,
            }}
          />
        )}
      {/* </Stack.Navigator> */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
