/* Redux saga class
 * logins the user into the app
 * requires username and password.
 * un - username
 * pwd - password
 */
import { call, put } from 'redux-saga/effects';
// import { delay } from 'redux-saga';

import { Alert } from 'react-native';
 import loginUser from 'app/services/loginUser';
import * as loginActions from 'app/store/actions/loginActions';

// Our worker Saga that logins the user
export default function* loginAsync(action: { username: string; password: string; }) {
  console.log("loginAsync",action);
  
  yield put(loginActions.enableLoader());

  //yield put(loginActions.requestLogin(action.username,action.password))
  //how to call api
  const response = yield call(loginUser, action.username, action.password);

  console.log("response",response.status);
  
  //mock response
  //const response = { success: true, data: { id: 1 }, message: 'Success' };

  if (response.status==200) {
    yield put(loginActions.onLoginResponse(response.data));
    yield put(loginActions.disableLoader());

    // no need to call navigate as this is handled by redux store with SwitchNavigator
    //yield call(navigationActions.navigateToHome);
  } else {
    yield put(loginActions.loginFailed());
    yield put(loginActions.disableLoader());
    setTimeout(() => {
      Alert.alert('', "Giriş Yapılamadı");
    }, 200);
  }
}
