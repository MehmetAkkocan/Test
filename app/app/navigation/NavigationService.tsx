import * as React from 'react';
import { NavigationContainerRef } from '@react-navigation/native';

// NavigationContainer is referred here - Check NavigationStack
export const navigationRef = React.createRef<NavigationContainerRef>();

function navigate(name: string, params?: any) {
  navigationRef.current?.navigate(name, {"t":"deneme",...params});
}

function goBack() {
  navigationRef.current?.goBack();
}

function printProps() {
  console.log(navigationRef); 
  
}

function signUp() {
  console.log("completed"); 
  
}
function send() {
  console.log("mail sended"); 
  
}
export default {
  navigate,
  goBack,
  printProps,
  signUp,
  send
};
