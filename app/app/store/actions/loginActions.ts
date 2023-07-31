/*
 * Reducer actions related with login
 */
import * as types from './types';
import { ILoginResponse } from 'app/models/api/login';

export function requestLogin(username: string, password: string) {
  return {
    type: types.LOGIN_REQUEST,
    username,
    password,
  };
}

export function loginFailed() {
  console.log("********************   loginFailed ");

  return {
    type: types.LOGIN_FAILED,
  };
}

export function onLoginResponse(response: ILoginResponse) {
  console.log("********************",response);
  
  return {
    type: types.LOGIN_RESPONSE,
    response,
  };
}

export function enableLoader() {
  console.log("********************   enableLoader ");

  return {
    type: types.LOGIN_ENABLE_LOADER,
  };
}

export function disableLoader() {
  console.log("********************   disableLoader ");

  return {
    type: types.LOGIN_DISABLE_LOADER,
  };
}

export function logOut() {
  return {
    type: types.LOG_OUT,
  };
}
