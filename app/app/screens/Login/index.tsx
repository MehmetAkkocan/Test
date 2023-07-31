import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as loginActions from 'app/store/actions/loginActions';
import NavigationService from 'app/navigation/NavigationService';
import { LoginState } from './loginx';
import LoginScreen from './login_screen';
import {Keyboard} from "react-native";

const Login: React.FC = () => {

  const [data, setData] = React.useState({
    username: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
  });

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };
  const id = useSelector((state: LoginState) => state.loginReducer.id);
  const dispatch = useDispatch();
  const onLogin = () =>
    dispatch(loginActions.requestLogin(data.username, data.password));
  const onForgot = () => NavigationService.navigate('ForgotPassword');
  const signUp = () => NavigationService.navigate('SignUp');

  const textInputChange = (val: any) => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        username: val,
        check_textInputChange: true,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        username: val,
        check_textInputChange: false,
        isValidUser: false,
      });
    }
  };

  const handleValidUser = (val: any) => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        isValidUser: false,
      });
    }
  };

  const handlePasswordChange = (val: any) => {
    if (val.trim().length >= 8) {
      setData({
        ...data,
        password: val,
        isValidPassword: true,
      });
    } else {
      setData({
        ...data,
        password: val,
        isValidPassword: false,
      });
    }
  };

  return (
    <LoginScreen 
            data={data} 
            handlePasswordChange={handlePasswordChange}
            handleValidUser={handleValidUser}
            id={id}
            onForgot={onForgot}
            onLogin={onLogin}
            signUp={signUp}
             textInputChange={textInputChange}
             updateSecureTextEntry={updateSecureTextEntry}

            
            />    

  );
};

export default Login;

